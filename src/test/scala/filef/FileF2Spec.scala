package filef

import cats.effect.IO
import effectie.instances.ce3.fx.ioFx
import effectie.syntax.all.*
import extras.hedgehog.ce3.syntax.runner.*
import extras.scala.io.file.TempFiles
import hedgehog.*
import hedgehog.runner.*

import java.io.File

/** @author Kevin Lee
  * @since 2026-07-11
  */
object FileF2Spec extends Properties {

  override def tests: List[Test] = List(
    property("FileF2.deleteAllIn deletes all nested files and dirs and returns the deleted paths", testDeleteAllIn),
    property("FileF2.deleteAllIn for an empty dir returns an empty list", testDeleteAllInEmptyDir),
  )

  def testDeleteAllIn: Property =
    for {
      filenames <- Gen
                     .string(Gen.alphaNum, Range.linear(1, 10))
                     .list(Range.linear(1, 5))
                     .map(_.zipWithIndex.map { case (name, index) => s"$name-$index.txt" })
                     .log("filenames")
    } yield runIO {
      TempFiles
        .runWithTempDir("sbt-docusaur-test") { tempDir =>
          for {
            subDir   <- effectOf {
                          val dir = new File(tempDir.value, "sub")
                          val _   = dir.mkdirs()
                          dir
                        }
            files    <- effectOf {
                          filenames.map { filename =>
                            val file = new File(subDir, filename)
                            val _    = file.createNewFile()
                            file
                          }
                        }
            expected <- effectOf((subDir :: files).map(_.getCanonicalPath).toSet)
            result   <- FileF2.deleteAllIn[IO](tempDir.value)
            remained <- effectOf(tempDir.value.listFiles.toList)
          } yield result match {
            case Right(deleted) =>
              Result.all(
                List(
                  deleted.toSet ==== expected,
                  remained ==== List.empty[File],
                )
              )
            case Left(error) =>
              Result.failure.log(s"Expected Right but got Left(${FileError2.render(error)})")
          }
        }
        .sequence
        .rethrow
    }

  def testDeleteAllInEmptyDir: Property =
    for {
      prefix <- Gen.string(Gen.alpha, Range.linear(1, 10)).log("prefix")
    } yield runIO {
      TempFiles
        .runWithTempDir(s"sbt-docusaur-test-$prefix") { tempDir =>
          for {
            /* `runWithTempDir` deletes the temp dir before the returned IO runs,
             * so the dir has to be recreated inside the effect.
             */
            _      <- effectOf {
                        val _ = tempDir.value.mkdirs()
                        ()
                      }
            result <- FileF2.deleteAllIn[IO](tempDir.value)
          } yield result ==== Right(List.empty[String])
        }
        .sequence
        .rethrow
    }

}
