package filef

import hedgehog.*
import hedgehog.runner.*

import java.io.File

/** @author Kevin Lee
  * @since 2026-07-11
  */
object FileError2Spec extends Properties {

  override def tests: List[Test] = List(
    property("FileError2.inDeletion creates an InDeletion", testInDeletion),
    property("FileError2.render for InDeletion contains the rendered stack trace", testRenderInDeletion),
  )

  def testInDeletion: Property =
    for {
      filename <- Gen.string(Gen.alphaNum, Range.linear(1, 20)).log("filename")
      message  <- Gen.string(Gen.alphaNum, Range.linear(1, 20)).log("message")
    } yield {
      val file      = new File(filename)
      val throwable = new RuntimeException(message)
      FileError2.inDeletion(file, throwable) ==== FileError2.InDeletion(file, throwable)
    }

  def testRenderInDeletion: Property =
    for {
      filename <- Gen.string(Gen.alphaNum, Range.linear(1, 20)).log("filename")
      message  <- Gen.string(Gen.alphaNum, Range.linear(1, 20)).log("message")
    } yield {
      val rendered = FileError2.render(FileError2.inDeletion(new File(filename), new RuntimeException(message)))
      Result
        .assert(rendered.contains("java.lang.RuntimeException"))
        .log(s"The rendered error has no class name. rendered=$rendered")
        .and(
          Result
            .assert(rendered.contains(message))
            .log(s"The rendered error has no message. rendered=$rendered")
        )
    }

}
