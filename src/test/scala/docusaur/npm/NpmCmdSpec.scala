package docusaur.npm

import hedgehog.*
import hedgehog.runner.*

/** @author Kevin Lee
  * @since 2026-07-11
  */
object NpmCmdSpec extends Properties {

  override def tests: List[Test] = List(
    example("NpmCmd.values(Install) is List(install)", testValuesInstall),
    example("NpmCmd.values(Run(build)) is List(run, build)", testValuesRunBuild),
    example("NpmCmd.values(AuditFix) is List(audit, fix)", testValuesAuditFix),
    example("NpmCmd.Run.Param.values(Build) is List(build)", testRunParamValuesBuild),
  )

  def testValuesInstall: Result =
    NpmCmd.values(NpmCmd.install) ==== List("install")

  def testValuesRunBuild: Result =
    NpmCmd.values(NpmCmd.run(NpmCmd.Run.Param.build)) ==== List("run", "build")

  def testValuesAuditFix: Result =
    NpmCmd.values(NpmCmd.auditFix) ==== List("audit", "fix")

  def testRunParamValuesBuild: Result =
    NpmCmd.Run.Param.values(NpmCmd.Run.Param.build) ==== List("build")

}
