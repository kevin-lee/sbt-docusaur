package filef

import java.io.File

import errors.StackTraceToString

/**
 * @author Kevin Lee
 * @since 2020-06-06
 */
sealed trait FileError2

object FileError2 {

  final case class InDeletion(file: File, throwable: Throwable) extends FileError2

  def inDeletion(file: File, throwable: Throwable): FileError2 = InDeletion(file, throwable)

  def render(fileError: FileError2): String = fileError match {
    case InDeletion(file, throwable) =>
      s"${StackTraceToString.render(throwable)}"
  }

}
