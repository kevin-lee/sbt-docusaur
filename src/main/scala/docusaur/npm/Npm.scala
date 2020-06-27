package docusaur.npm

import java.io.File

import cats._
import cats.implicits._
import effectie.cats.EffectConstructor
import effectie.cats.EitherTSupport._
import just.sysprocess.{ProcessResult, SysProcess}

/**
 * @author Kevin Lee
 * @since 2020-06-23
 */
object Npm {

  final case class NpmPath(npmPath: File) extends AnyVal

  def execute[F[_]: EffectConstructor: Monad, A](
    baseDir: Option[File],
    commands: List[String]
  )(
    resultHandler: List[String] => A
  ): F[Either[NpmError, A]] =
    (for {
      sysCommand <- eitherTRight[F, NpmError](
        SysProcess.singleSysProcess(baseDir = baseDir, commands)
      )
      processResult <- eitherTRight(SysProcess.run(sysCommand))
      result <- eitherTOfPure(
        ProcessResult.toEither(processResult) {
          case ProcessResult.Success(outputs) =>
            resultHandler(outputs).asRight[NpmError]

          case ProcessResult.Failure(code, errors) =>
            NpmError.npmCmdError(
              commands, NpmError.ErrorCode(code), errors
            ).asLeft[A]
        })
    } yield result).value

  private def npm(npmPath: Option[NpmPath]): String =
    npmPath.fold("npm")(_.npmPath.getCanonicalPath)

  def version[F[_]: EffectConstructor: Monad](
    npmPath: Option[NpmPath]
  ): F[Either[NpmError, String]] =
    execute(none, npm(npmPath) :: "--version" :: Nil)(_.mkString)

  def run[F[_]: EffectConstructor: Monad](
    npmPath: Option[NpmPath],
    baseDir: Option[File],
    npmCmd: NpmCmd
  ): F[Either[NpmError, List[String]]] =
    execute(
      baseDir,
      npm(npmPath) :: NpmCmd.values(npmCmd)
    )(identity)

}
