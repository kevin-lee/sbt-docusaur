package docusaur.npm

import cats.*
import cats.syntax.all.*
import effectie.core.Fx
import effectie.syntax.all.*
import extras.cats.syntax.either.*
import just.sysprocess.{ProcessError, ProcessResult, SysProcess}

import java.io.File

/** @author Kevin Lee
  * @since 2020-06-23
  */
object Npm {

  final case class NpmPath(npmPath: File) extends AnyVal

  def execute[F[_]: Fx: Monad, A](
    baseDir: Option[File],
    command: String,
    commands: String*
  )(
    resultHandler: List[String] => A
  ): F[Either[NpmError, A]] = (for {
    sysCommand <- pureOf(SysProcess.singleSysProcess(baseDir = baseDir, command, commands: _*))
                    .rightT[NpmError]
    result     <- effectOf(sysCommand.run())
                    .eitherT
                    .transform {
                      case Right(ProcessResult(outputs)) =>
                        resultHandler(outputs).asRight[NpmError]

                      case Left(ProcessError.Failure(code, errors)) =>
                        NpmError
                          .npmCmdError(
                            command :: commands.toList,
                            NpmError.ErrorCode(code),
                            errors,
                          )
                          .asLeft[A]

                      case Left(ProcessError.FailureWithNonFatal(nonFatalThrowable)) =>
                        NpmError
                          .npmCmdNonFatal(
                            command :: commands.toList,
                            nonFatalThrowable,
                          )
                          .asLeft[A]

                    }
  } yield result).value

  private def npm(npmPath: Option[NpmPath]): String =
    npmPath.fold("npm")(_.npmPath.getCanonicalPath)

  def version[F[_]: Fx: Monad](
    npmPath: Option[NpmPath]
  ): F[Either[NpmError, String]] =
    execute(none, npm(npmPath), "--version")(_.mkString)

  def run[F[_]: Fx: Monad](
    npmPath: Option[NpmPath],
    baseDir: Option[File],
    npmCmd: NpmCmd,
  ): F[Either[NpmError, List[String]]] =
    execute(
      baseDir,
      npm(npmPath),
      NpmCmd.values(npmCmd): _*
    )(identity)

}
