package docusaur

import java.util.concurrent.{ConcurrentHashMap, ConcurrentMap}

import cats.effect._
import docusaur.npm.{Npm, NpmCmd}
import githubpages.GitHubPagesPlugin
import githubpages.GitHubPagesPlugin.{autoImport => ghpg}
import loggerf.sbt.SbtLogger2
import sbt.Keys.streams
import sbt._
import sbt.util.Logger

/**
 * @author Kevin Lee
 * @since 2020-06-17
 */
object DocusaurPlugin extends AutoPlugin {

  override def requires: Plugins = GitHubPagesPlugin
  override def trigger: PluginTrigger = noTrigger

  object autoImport extends DocusaurKeys
  import autoImport._

  private val internalLogger: ConcurrentMap[String, loggerf.Logger] =
    new ConcurrentHashMap(1)

  def loggerFLogger(logger: Logger): loggerf.Logger = {
    Option(internalLogger.get("Logger")) match {
      case Some(logF) =>
        logF
      case None =>
        val logF = SbtLogger2.sbtLogger(logger)
        Option(internalLogger.putIfAbsent("Logger", logF)).fold(logF)(identity)
    }
  }


  override lazy val projectSettings: Seq[Def.Setting[_]] = Seq(

    docusaurNpmPath := none[File],

    docusaurCleanNodeModules := Def.taskDyn {
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val logF = loggerFLogger(streams.value.log)
      val nodeModulesPath = docusaurDir.value / "node_modules"
        if (nodeModulesPath.exists()) {
          Def.task(
            Docusaur.deleteFilesIn[IO]("'clean node_modules'", nodeModulesPath)
              .unsafeRunSync()
          )
        } else {
          Def.task {
            logF.info(s"node_modules does not exist at ${nodeModulesPath.getCanonicalPath}")
            ()
          }
        }
    }.value,

    docusaurInstall := Def.taskDyn {
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val logF = loggerFLogger(streams.value.log)
      val docusaurusDir = docusaurDir.value
      val npmPath = docusaurNpmPath.value.map(Npm.NpmPath)
      Def.task(
        Docusaur.runNpm[IO]("Docusaurus install", npmPath, docusaurusDir, NpmCmd.install)
          .unsafeRunSync()
      )
    }.value,

    docusaurCleanBuild := Def.taskDyn {
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val logF = loggerFLogger(streams.value.log)
      val buildPath = docusaurBuildDir.value
      if (buildPath.exists()) {
        Def.task(
          Docusaur.deleteFilesIn[IO]("'clean the Docusaurus build dir'", buildPath)
            .unsafeRunSync()
        )
      } else {
        Def.task {
          logF.info(s"The Docusaurus build dir does not exist at ${buildPath.getCanonicalPath}")
          ()
        }
      }
    }.value,

    docusaurBuild := Def.taskDyn {
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val logF = loggerFLogger(streams.value.log)
      val docusaurusDir = docusaurDir.value
      val npmPath = docusaurNpmPath.value.map(Npm.NpmPath)
      Def.task(
        Docusaur.runNpm[IO](
          "Docusaurus build",
          npmPath,
          docusaurusDir,
          NpmCmd.run(NpmCmd.Run.Param.build)
        )
        .unsafeRunSync()
      )
    }.value,

    docusaurAlgoliaConfigFilename := sys.env.getOrElse("ALGOLIA_CONFIG_FILENAME", "algolia.config.json"),
    docusaurAlgoliaApiKey := sys.env.get("ALGOLIA_API_KEY"),
    docusaurAlgoliaIndexName := sys.env.get("ALGOLIA_INDEX_NAME"),

    docusaurGenerateAlgoliaConfigFile := Def.taskDyn {
      val algoliaConfigFilename = docusaurAlgoliaConfigFilename.value
      val algoliaConfigPath = docusaurDir.value / algoliaConfigFilename
      val algoliaApiKey = docusaurAlgoliaApiKey.value
      val algoliaIndexName = docusaurAlgoliaIndexName.value

      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val logF = loggerFLogger(streams.value.log)
      Def.task(
        Docusaur.createAlgoliaConfig[IO](
          algoliaConfigPath,
          algoliaApiKey,
          algoliaIndexName
        )
        .unsafeRunSync()
      )
    }.value,

    ghpg.gitHubPagesSiteDir := docusaurBuildDir.value,

  )

}
