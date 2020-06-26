package just.docusaurus.npm

/**
 * @author Kevin Lee
 * @since 2020-06-23
 */
sealed trait NpmError

object NpmError {
  final case class NpmCmdError(
    commands: List[String],
    errorCode: ErrorCode,
    errors: List[String]
  ) extends NpmError

  final case class ErrorCode(errorCode: Int) extends AnyVal

  def npmCmdError(
    commands: List[String],
    errorCode: ErrorCode,
    errors: List[String]
  ): NpmError =
    NpmCmdError(commands, errorCode, errors)


  def render(npmError: NpmError): String = npmError match {
    case NpmCmdError(commands, errorCode, errors) =>
      s"""Error when running the following command
         |  command: ${commands.mkString(" ")}
         |  Error Code: $errorCode
         |  Error: ${errors.mkString("\n  - ", "\n  - ", "\n")}
         |""".stripMargin
  }

}
