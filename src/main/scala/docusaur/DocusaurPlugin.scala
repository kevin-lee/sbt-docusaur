package docusaur

import cats.effect.*
import cats.effect.unsafe.implicits.global
import docusaur.npm.{Npm, NpmCmd, NpmError}
import effectie.instances.ce3.fx.ioFx
import extras.cats.syntax.either.*
import filef.FileError2
import githubpages.GitHubPagesPlugin
import githubpages.GitHubPagesPlugin.autoImport as ghpg
import loggerf.instances.cats.logF
import loggerf.logger.*
import sbt.Keys.streams
import sbt.util.Logger
import sbt.{IO as _, *}

import java.util.concurrent.{ConcurrentHashMap, ConcurrentMap}

/** @author Kevin Lee
  * @since 2020-06-17
  */
object DocusaurPlugin extends AutoPlugin {

  override def requires: Plugins      = GitHubPagesPlugin
  override def trigger: PluginTrigger = noTrigger

  object autoImport extends DocusaurKeys
  import autoImport.*

  private val internalLogger: ConcurrentMap[String, CanLog] =
    new ConcurrentHashMap(1)

  def loggerFLogger(logger: Logger): CanLog =
    Option(internalLogger.get("Logger")) match {
      case Some(canLog) =>
        canLog
      case None =>
        val canLog = SbtLogger.sbtLoggerCanLog(logger)
        Option(internalLogger.putIfAbsent("Logger", canLog)).fold(canLog)(identity)
    }

  def toFileRemovalMessage(file: File, files: List[String]): String =
    s"""The following files are removed from ${file.getCanonicalPath}
       |${files.mkString("    ", "\n    ", "\n")}
       |""".stripMargin

  @SuppressWarnings(Array("org.wartremover.warts.Throw"))
  def returnOrThrowMessageOnlyException[A, B](
    aOrB: Either[A, B]
  )(
    aToString: A => String
  ): B =
    aOrB.fold(a => throw new MessageOnlyException(aToString(a)), identity)

  override lazy val projectSettings: Seq[Def.Setting[_]] = Seq(
    docusaurNpmPath                           := none[File],
    docusaurCleanNodeModules                  := Def.taskDyn {
      val log             = streams.value.log
      val nodeModulesPath = docusaurDir.value / "node_modules"
      if (nodeModulesPath.exists()) {
        Def.task(
          returnOrThrowMessageOnlyException(
            (for {
              files <- Docusaur.deleteFilesIn("'clean node_modules'", nodeModulesPath).eitherT
              _     <- log.info(toFileRemovalMessage(nodeModulesPath, files)).rightTF[IO, FileError2]
            } yield ())
              .value
              .unsafeRunSync()
          )(FileError2.render)
        )
      } else {
        Def.task {
          log.info(s"node_modules does not exist at ${nodeModulesPath.getCanonicalPath}")
          ()
        }
      }
    }.value,
    docusaurInstall                           := Def.taskDyn {
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val canLog: CanLog = loggerFLogger(streams.value.log)
      val docusaurusDir           = docusaurDir.value
      val npmPath                 = docusaurNpmPath.value.map(Npm.NpmPath)
      Def.task(
        returnOrThrowMessageOnlyException(
          Docusaur
            .install[IO](npmPath, docusaurusDir)
            .unsafeRunSync()
        )(NpmError.render)
      )
    }.value,
    docusaurCleanBuild                        := Def.taskDyn {
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val canLog: CanLog = loggerFLogger(streams.value.log)
      val buildPath               = docusaurBuildDir.value
      if (buildPath.exists()) {
        Def.task(
          returnOrThrowMessageOnlyException(
            (for {
              files <- Docusaur.deleteFilesIn[IO]("'clean the Docusaurus build dir'", buildPath).eitherT
              _     <- streams
                         .value
                         .log
                         .info(toFileRemovalMessage(buildPath, files))
                         .rightTF[IO, FileError2]
            } yield ())
              .value
              .unsafeRunSync()
          )(FileError2.render)
        )
      } else {
        Def.task {
          canLog.info(s"The Docusaurus build dir does not exist at ${buildPath.getCanonicalPath}")
          ()
        }
      }
    }.value,
    docusaurBuild                             := Def.taskDyn {
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val canLog: CanLog = loggerFLogger(streams.value.log)
      val docusaurusDir           = docusaurDir.value
      val npmPath                 = docusaurNpmPath.value.map(Npm.NpmPath)
      Def.task(
        returnOrThrowMessageOnlyException(
          Docusaur
            .runAndLogNpm[IO](
              "Docusaurus build",
              npmPath,
              docusaurusDir,
              NpmCmd.run(NpmCmd.Run.Param.build)
            )
            .unsafeRunSync()
        )(NpmError.render)
      )
    }.value,
    docusaurAuditFix                          := Def.taskDyn {
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val canLog: CanLog = loggerFLogger(streams.value.log)
      val docusaurusDir           = docusaurDir.value
      val npmPath                 = docusaurNpmPath.value.map(Npm.NpmPath)
      Def.task(
        returnOrThrowMessageOnlyException(
          Docusaur
            .runAndLogNpm[IO](
              "Docusaurus npm audit fix",
              npmPath,
              docusaurusDir,
              NpmCmd.auditFix
            )
            .unsafeRunSync()
        )(NpmError.render)
      )
    }.value,
    docusaurAlgoliaConfigFilename             := sys.env.getOrElse("ALGOLIA_CONFIG_FILENAME", "algolia.config.json"),
    docusaurAlgoliaAppId                      := sys.env.get("ALGOLIA_APP_ID"),
    docusaurAlgoliaApiKey                     := sys.env.get("ALGOLIA_API_KEY"),
    docusaurAlgoliaIndexName                  := sys.env.get("ALGOLIA_INDEX_NAME"),
    docusaurGenerateAlgoliaConfigFile         := Def.taskDyn {
      val algoliaConfigFilename = docusaurAlgoliaConfigFilename.value
      val algoliaConfigPath     = docusaurDir.value / algoliaConfigFilename
      val algoliaAppId          = docusaurAlgoliaAppId.value
      val algoliaApiKey         = docusaurAlgoliaApiKey.value
      val algoliaIndexName      = docusaurAlgoliaIndexName.value

      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val canLog: CanLog = loggerFLogger(streams.value.log)
      Def.task(
        Docusaur
          .createAlgoliaConfig[IO](
            algoliaConfigPath,
            algoliaAppId,
            algoliaApiKey,
            algoliaIndexName
          )
          .unsafeRunSync()
      )

    }.value,
    docusaurGoogleAnalyticsConfigFilename     :=
      sys.env.getOrElse("GA_CONFIG_FILENAME", "google-analytics.config.json"),
    docusaurGoogleAnalyticsTrackingId         := sys.env.get("GA_TRACKING_ID").map(_.trim).filter(_.nonEmpty),
    docusaurGoogleAnalyticsAnonymizeIp        := {
      returnOrThrowMessageOnlyException(
        IO(
          sys
            .env
            .get("GA_ANONYMIZE_IP")
            .map(_.trim)
            .filter(_.nonEmpty)
            .map(_.toBoolean)
        )
          .attempt
          .unsafeRunSync()
      )(err => s"""Invalid GA_ANONYMIZE_IP value. It must be either true or false.
                  |Error: $err
                  |""".stripMargin)
    },
    docusaurGenerateGoogleAnalyticsConfigFile := Def.taskDyn {
      val googleAnalyticsConfigFilename = docusaurGoogleAnalyticsConfigFilename.value
      val googleAnalyticsConfigPath     = docusaurDir.value / googleAnalyticsConfigFilename
      val googleAnalyticsTrackingId     = docusaurGoogleAnalyticsTrackingId.value
      val googleAnalyticsAnonymizeIp    = docusaurGoogleAnalyticsAnonymizeIp.value

      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val canLog: CanLog = loggerFLogger(streams.value.log)
      Def.task(
        Docusaur
          .createGoogleAnalyticsConfig[IO](
            googleAnalyticsConfigPath,
            googleAnalyticsTrackingId,
            googleAnalyticsAnonymizeIp
          )
          .unsafeRunSync()
      )
    }.value,
    ghpg.gitHubPagesSiteDir                   := docusaurBuildDir.value,
  )

}
