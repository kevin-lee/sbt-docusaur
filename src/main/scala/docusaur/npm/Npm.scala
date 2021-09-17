package docusaur.npm

import java.io.File

import cats._
import cats.syntax.all._
import effectie.cats.Fx
import effectie.cats.EitherTSupport._
import just.sysprocess.{ProcessResult, SysProcess}

/**
 * @author Kevin Lee
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
  ): F[Either[NpmError, A]] =
    (for {
      sysCommand <- eitherTRight[NpmError](
        SysProcess.singleSysProcess(baseDir = baseDir, command, commands:_*)
      )
      processResult <- eitherTRight(SysProcess.run(sysCommand))
      result <- eitherTOfPure(
        ProcessResult.toEither(processResult) {
          case ProcessResult.Success(outputs) =>
            resultHandler(outputs).asRight[NpmError]

          case ProcessResult.Failure(code, errors) =>
            NpmError.npmCmdError(
              command :: commands.toList,
              NpmError.ErrorCode(code),
              errors
            ).asLeft[A]

          case ProcessResult.FailureWithNonFatal(nonFatalThrowable) =>
            NpmError.npmCmdNonFatal(
              command :: commands.toList,
              nonFatalThrowable
            ).asLeft[A]

        })
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
    npmCmd: NpmCmd
  ): F[Either[NpmError, List[String]]] =
    execute(
      baseDir,
      npm(npmPath),
      NpmCmd.values(npmCmd):_*
    )(identity)

}
