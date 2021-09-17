package filef

import java.io.File

import cats._
import cats.data.EitherT
import cats.syntax.all._
import effectie.cats.Effectful._
import effectie.cats.Catching._
import effectie.cats.EitherTSupport._
import effectie.cats.{CanCatch, Fx}

import scala.annotation.tailrec

/**
 * @author Kevin Lee
 * @since 2020-06-26
 */
object FileF2 {
  def deleteAllIn[F[_]: Fx: CanCatch: Monad](file: File): F[Either[FileError2, List[String]]] = {
    @tailrec
    def listAllIn(files: List[File], acc: List[File]): List[File] =
      files match {
        case Nil =>
          acc
        case x :: xs =>
          if (x.isDirectory) {
            listAllIn(xs ++ x.listFiles().toList, x :: acc)
          } else {
            listAllIn(xs, x :: acc)
          }
      }
    (for {
      list <- eitherTRight(file.listFiles.toList)
      allFiles <- eitherTRight(listAllIn(list, Nil))
      filesDeleted <-
          allFiles.traverse(file =>
            EitherT(
              catchNonFatal[F](
                effectOf(file.delete()) *> effectOf(file.getCanonicalPath)
              )(
                throwable => FileError2.inDeletion(file, throwable)
              )
            )
          )
    } yield filesDeleted).value
  }
}
