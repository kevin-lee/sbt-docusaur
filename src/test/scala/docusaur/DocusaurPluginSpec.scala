package docusaur

import hedgehog.*
import hedgehog.runner.*

import java.io.File
import scala.util.{Failure, Success, Try}

/** @author Kevin Lee
  * @since 2026-07-11
  */
object DocusaurPluginSpec extends Properties {

  override def tests: List[Test] = List(
    property("returnOrThrowMessageOnlyException returns the value of a Right", testReturnRight),
    property("returnOrThrowMessageOnlyException throws a MessageOnlyException for a Left", testThrowForLeft),
    property("toFileRemovalMessage contains the path and all the removed files", testToFileRemovalMessage),
  )

  def testReturnRight: Property =
    for {
      value <- Gen.string(Gen.alphaNum, Range.linear(1, 20)).log("value")
    } yield DocusaurPlugin.returnOrThrowMessageOnlyException(Right(value): Either[Int, String])(code => s"error: $code") ==== value

  def testThrowForLeft: Property =
    for {
      code <- Gen.int(Range.linear(1, 100)).log("code")
    } yield Try(
      DocusaurPlugin.returnOrThrowMessageOnlyException(Left(code): Either[Int, String])(c => s"error: $c")
    ) match {
      // `import hedgehog.*` brings `hedgehog.sbt` into scope, which shadows the root `sbt` package.
      case Failure(throwable: _root_.sbt.MessageOnlyException) =>
        throwable.getMessage ==== s"error: $code"

      case Failure(throwable) =>
        Result.failure.log(s"Expected a MessageOnlyException but got $throwable")

      case Success(value) =>
        Result.failure.log(s"Expected a MessageOnlyException but got the value $value")
    }

  def testToFileRemovalMessage: Property =
    for {
      dirname <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).log("dirname")
      files   <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).list(Range.linear(1, 5)).log("files")
    } yield {
      val dir     = new File(dirname)
      val message = DocusaurPlugin.toFileRemovalMessage(dir, files)
      Result.all(
        Result
          .assert(message.contains(dir.getCanonicalPath))
          .log(s"The message has no dir path. message=$message") ::
          files.map(file =>
            Result
              .assert(message.contains(s"    $file"))
              .log(s"The message is missing the file [$file]. message=$message")
          )
      )
    }

}
