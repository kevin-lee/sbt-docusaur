package docusaur

import java.util.concurrent.{ConcurrentHashMap, ConcurrentMap}

import cats.data.EitherT
import cats.effect._
import docusaur.npm.{Npm, NpmCmd, NpmError}
import effectie.cats.EitherTSupport._
import filef.FileError2
import githubpages.GitHubPagesPlugin
import githubpages.GitHubPagesPlugin.{autoImport => ghpg}
import loggerf.logger._
import sbt.Keys.streams
import sbt.{IO => _, _}
import sbt.util.Logger

/** @author Kevin Lee
  * @since 2020-06-17
  */
object DocusaurPlugin extends AutoPlugin {

  override def requires: Plugins      = GitHubPagesPlugin
  override def trigger: PluginTrigger = noTrigger

  object autoImport extends DocusaurKeys
  import autoImport._

  private val internalLogger: ConcurrentMap[String, CanLog] =
    new ConcurrentHashMap(1)

  def loggerFLogger(logger: Logger): CanLog =
    Option(internalLogger.get("Logger")) match {
      case Some(logF) =>
        logF
      case None =>
        val logF = SbtLogger.sbtLoggerCanLog(logger)
        Option(internalLogger.putIfAbsent("Logger", logF)).fold(logF)(identity)
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
              files <- EitherT(Docusaur.deleteFilesIn[IO]("'clean node_modules'", nodeModulesPath))
              _     <- eitherTRight[FileError2][IO, Unit](log.info(toFileRemovalMessage(nodeModulesPath, files)))
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
      implicit val logF = loggerFLogger(streams.value.log)
      val docusaurusDir = docusaurDir.value
      val npmPath       = docusaurNpmPath.value.map(Npm.NpmPath)
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
      implicit val logF = loggerFLogger(streams.value.log)
      val buildPath     = docusaurBuildDir.value
      if (buildPath.exists()) {
        Def.task(
          returnOrThrowMessageOnlyException(
            (for {
              files <- EitherT(Docusaur.deleteFilesIn[IO]("'clean the Docusaurus build dir'", buildPath))
              _     <- eitherTRight[FileError2][IO, Unit](
                         streams.value.log.info(toFileRemovalMessage(buildPath, files))
                       )
            } yield ())
              .value
              .unsafeRunSync()
          )(FileError2.render)
        )
      } else {
        Def.task {
          logF.info(s"The Docusaurus build dir does not exist at ${buildPath.getCanonicalPath}")
          ()
        }
      }
    }.value,
    docusaurBuild                             := Def.taskDyn {
      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val logF = loggerFLogger(streams.value.log)
      val docusaurusDir = docusaurDir.value
      val npmPath       = docusaurNpmPath.value.map(Npm.NpmPath)
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
      implicit val logF = loggerFLogger(streams.value.log)
      val docusaurusDir = docusaurDir.value
      val npmPath       = docusaurNpmPath.value.map(Npm.NpmPath)
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
    docusaurAlgoliaApiKey                     := sys.env.get("ALGOLIA_API_KEY"),
    docusaurAlgoliaIndexName                  := sys.env.get("ALGOLIA_INDEX_NAME"),
    docusaurGenerateAlgoliaConfigFile         := Def.taskDyn {
      val algoliaConfigFilename = docusaurAlgoliaConfigFilename.value
      val algoliaConfigPath     = docusaurDir.value / algoliaConfigFilename
      val algoliaApiKey         = docusaurAlgoliaApiKey.value
      val algoliaIndexName      = docusaurAlgoliaIndexName.value

      @SuppressWarnings(Array("org.wartremover.warts.ExplicitImplicitTypes"))
      implicit val logF = loggerFLogger(streams.value.log)
      Def.task(
        Docusaur
          .createAlgoliaConfig[IO](
            algoliaConfigPath,
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
      implicit val logF = loggerFLogger(streams.value.log)
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
