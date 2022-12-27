package filef

import cats.*
import cats.data.EitherT
import cats.syntax.flatMap.*
import cats.syntax.traverse.*
import effectie.core.Fx
import effectie.syntax.all.*
import extras.cats.syntax.all.*

import java.io.File
import scala.annotation.tailrec

/** @author Kevin Lee
  * @since 2020-06-26
  */
object FileF2 {
  def deleteAllIn[F[_]: Fx: Monad](file: File): F[Either[FileError2, List[String]]] = {
    @tailrec
    def listAllIn(files: List[File], acc: List[File]): List[File] = files match {
      case Nil =>
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
                        (effectOf(file.delete()) >> effectOf(file.getCanonicalPath)).catchNonFatal {
                          case throwable => FileError2.inDeletion(file, throwable)
                        }.eitherT
                      }

    } yield filesDeleted).value
  }
}
