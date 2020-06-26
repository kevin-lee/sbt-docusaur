package just.sysprocess

import java.io.File

import cats.implicits._

import scala.collection.mutable.ListBuffer
import scala.sys.process.ProcessLogger

/**
 * Copied from sbt-devoops and modified.
 *
 * @author Kevin Lee
 * @since 2019-01-01
 */
sealed trait SysProcess

object SysProcess {

  final case class SingleSysProcess(baseDir: Option[File], commands: List[String]) extends SysProcess

  def singleSysProcess(baseDir: Option[File], commands: List[String]): SysProcess =
    SingleSysProcess(baseDir, commands)

  def run(sysProcess: SysProcess): ProcessResult = sysProcess match {
    case SingleSysProcess(baseDir, commands) =>
      val resultCollector = ResultCollector()
      val processBuilder = baseDir.fold(
          sys.process.Process(commands)
        )(
          dir => sys.process.Process(commands, cwd = dir)
        )
      val code = processBuilder ! resultCollector
      ProcessResult.processResult(code, resultCollector)
  }

}

final class ResultCollector private (
  private val outs: ListBuffer[String],
  private val errs: ListBuffer[String]
) extends ProcessLogger {

  def outputs: List[String] = outs.result
  def errors: List[String] = errs.result

  override def out(s: => String): Unit = {
    outs += s
    ()
  }

  override def err(s: => String): Unit = {
    errs += s
    ()
  }

  override def buffer[T](f: => T): T = f

  override def toString: String =
    s"${getClass.getSimpleName}(outputs=${outputs.mkString("[", ",", "]")}, errors=${errors.mkString("[", ",", "]")})"
}

object ResultCollector {
  @SuppressWarnings(Array("org.wartremover.warts.MutableDataStructures"))
  def apply(): ResultCollector = new ResultCollector(ListBuffer(), ListBuffer())

  def unapply(resultCollector: ResultCollector): Option[(List[String], List[String])] =
    (resultCollector.outputs, resultCollector.errors).some
}

sealed trait ProcessResult

object ProcessResult {

  final case class Success(outputs: List[String]) extends ProcessResult

  final case class Failure(code: Int, errors: List[String]) extends ProcessResult

  def success(outputs: List[String]): ProcessResult =
    Success(outputs)

  def failure(code: Int, errors: List[String]): ProcessResult =
    Failure(code, errors)

  def processResult(code: Int, resultCollector: ResultCollector): ProcessResult =
    if (code === 0) {
      /* Why concatenate outputs and errors in success?
       * Sometimes 'errors' has some part of success result. :(
       */
      success(resultCollector.outputs ++ resultCollector.errors )
    } else {
      failure(code, resultCollector.errors)
    }

  def toEither[A, B](
    processResult: ProcessResult
  )(
    resultToEither: PartialFunction[ProcessResult, Either[A, B]]
  ): Either[A, B] =
    resultToEither(processResult)
}
