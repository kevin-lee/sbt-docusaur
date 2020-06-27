package docusaur.npm

/**
 * @author Kevin Lee
 * @since 2020-06-18
 */
sealed trait NpmCmd

object NpmCmd {

  case object Install extends NpmCmd

  def install: NpmCmd = Install

  final case class Run(param: Run.Param) extends NpmCmd

  object Run {

    sealed trait Param

    object Param {

      case object Build extends Param

      def build: Param = Build

      def values(param: Param): List[String] = param match {
        case Build => List("build")
      }

    }

  }

  def run(param: Run.Param): NpmCmd = Run(param)

  def values(npmCmd: NpmCmd): List[String] = npmCmd match {
    case Install => List("install")
    case Run(param) => "run" :: Run.Param.values(param)
  }

  final case class Name(name: String) extends AnyVal

}
