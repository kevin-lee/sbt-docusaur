package docusaur.npm

import hedgehog.*
import hedgehog.runner.*

/** @author Kevin Lee
  * @since 2026-07-11
  */
object NpmErrorSpec extends Properties {

  override def tests: List[Test] = List(
    property("NpmError.render for NpmCmdError contains the commands, error code and errors", testRenderNpmCmdError),
    property("NpmError.render for NpmCmdNonFatal contains the commands and the stack trace", testRenderNpmCmdNonFatal),
  )

  def testRenderNpmCmdError: Property =
    for {
      commands  <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).list(Range.linear(1, 5)).log("commands")
      errorCode <- Gen.int(Range.linear(1, 100)).log("errorCode")
      errors    <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).list(Range.linear(1, 5)).log("errors")
    } yield {
      val rendered = NpmError.render(NpmError.npmCmdError(commands, NpmError.ErrorCode(errorCode), errors))
      Result.all(
        List(
          Result
            .assert(rendered.contains(commands.mkString(" ")))
            .log(s"The rendered error has no commands. rendered=$rendered"),
          Result
            .assert(rendered.contains(errorCode.toString))
            .log(s"The rendered error has no error code. rendered=$rendered"),
        ) ++ errors.map(error =>
          Result
            .assert(rendered.contains(error))
            .log(s"The rendered error is missing the error [$error]. rendered=$rendered")
        )
      )
    }

  def testRenderNpmCmdNonFatal: Property =
    for {
      commands <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).list(Range.linear(1, 5)).log("commands")
      message  <- Gen.string(Gen.alphaNum, Range.linear(1, 20)).log("message")
    } yield {
      val rendered = NpmError.render(NpmError.npmCmdNonFatal(commands, new RuntimeException(message)))
      Result.all(
        List(
          Result
            .assert(rendered.contains(commands.mkString(" ")))
            .log(s"The rendered error has no commands. rendered=$rendered"),
          Result
            .assert(rendered.contains("java.lang.RuntimeException"))
            .log(s"The rendered error has no class name. rendered=$rendered"),
          Result
            .assert(rendered.contains(message))
            .log(s"The rendered error has no message. rendered=$rendered"),
        )
      )
    }

}
