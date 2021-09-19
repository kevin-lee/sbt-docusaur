package filef

import java.io.File
import cats._
import cats.data.EitherT
import cats.syntax.flatMap._
import cats.syntax.traverse._
import effectie.cats.Effectful._
import effectie.cats.Catching._
import effectie.cats.EitherTSupport._
import effectie.cats.{CanCatch, Fx}

import scala.annotation.tailrec

/** @author Kevin Lee
  * @since 2020-06-26
  */
object FileF2 {
  def deleteAllIn[F[_]: Fx: CanCatch: Monad](file: File): F[Either[FileError2, List[String]]] = {
    @tailrec
    def listAllIn(files: List[File], acc: List[File]): List[File] = files match {
      case Nil     =>
        acc
      case x :: xs =>
        if (x.isDirectory) {
          listAllIn(xs ++ x.listFiles().toList, x :: acc)
        } else {
          listAllIn(xs, x :: acc)
        }
    }

    type ET[A] = EitherT[F, FileError2, A]
    (for {
      list         <- effectOf(file.listFiles.toList).rightT
      allFiles     <- effectOf(listAllIn(list, Nil)).rightT
      filesDeleted <- allFiles.traverse[ET, String] { file =>
                        catchNonFatal[F](
                          effectOf(file.delete()) >> effectOf(file.getCanonicalPath)
                        )(throwable => FileError2.inDeletion(file, throwable)).eitherT
                      }

    } yield filesDeleted).value
  }
}
