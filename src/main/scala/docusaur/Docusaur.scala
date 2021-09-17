package docusaur

import java.io.File
import java.nio.charset.Charset

import cats._
import cats.data.EitherT
import cats.syntax.all._
import docusaur.npm.Npm.NpmPath
import docusaur.npm.{Npm, NpmCmd, NpmError}
import effectie.cats.Effectful._
import effectie.cats.EitherTSupport._
import effectie.cats.{CanCatch, Fx}
import filef.{FileError2, FileF2}
import loggerf.cats._
import loggerf.syntax._
import loggerf.cats.{Log => LogF}
import sbt.{IO => SbtIo}

/**
 * @author Kevin Lee
 * @since 2020-06-27
 */
object Docusaur {

  def deleteFilesIn[F[_]: Fx: CanCatch: Monad](
    what: String,
    file: File
  ): F[Either[FileError2, List[String]]] =
    FileF2.deleteAllIn[F](file)

  def install[F[_]: Fx: CanCatch: LogF: Monad](
    npmPath: Option[NpmPath],
    docusaurusDir: File
  ): F[Either[NpmError, Unit]] =
    runAndLogNpm("Docusaurus install", npmPath, docusaurusDir, NpmCmd.install)

  def runBuild[F[_]: Fx: CanCatch: LogF: Monad](
    what: String,
    npmPath: Option[NpmPath],
    docusaurusDir: File
  ): F[Either[NpmError, Unit]] =
    runAndLogNpm(
      what,
      npmPath,
      docusaurusDir,
      NpmCmd.run(NpmCmd.Run.Param.build)
    )


  def runAndLogNpm[F[_]: Fx: CanCatch: LogF: Monad](
    what: String,
    npmPath: Option[NpmPath],
    path: File,
    npmCmd: NpmCmd
  ): F[Either[NpmError, Unit]] = (for {
    result <-  EitherT(
        Npm.run[F](npmPath, path.some, npmCmd)
      )
    _ <- eitherTRightF[NpmError](
        log(pureOf(
          s"""Successfully run npm for $what
             |  - command: npm run ${NpmCmd.values(npmCmd).mkString(" ")}
             |${result.mkString("  ", "\n  ", "\n")}
             |""".stripMargin
        ))(info)
      )
  } yield ()).value

  @SuppressWarnings(Array("org.wartremover.warts.ImplicitParameter"))
  def logAndWriteFile[F[_]: Fx: LogF: Monad](
    theFile: File,
    content: String
  )(
    logMessage: String
  ): F[Unit] =
    log(pureOf(logMessage))(info) >>
      effectOf(
        SbtIo.write(
          theFile,
          content,
          Charset.forName("UTF-8"),
          append = false
        )
      )

  def createAlgoliaConfig[F[_]: Fx: LogF: Monad](
    algoliaConfigPath: File,
    algoliaApiKey: Option[String],
    algoliaIndexName: Option[String]
  ): F[Unit] =
    (algoliaApiKey, algoliaIndexName) match {
      case (Some(apiKey), Some(indexName)) =>
        // TODO: replace this logic with Validation
        if (apiKey.isEmpty && indexName.isEmpty)
          logAndWriteFile(algoliaConfigPath, "{}")(
            s"""The algoliaConfig info is found in environment variables but both values are empty.
               |So It will create the algoliaConfig file with an empty algoliaConfig at $algoliaConfigPath
               |""".stripMargin
          )
        else if (apiKey.isEmpty)
          logAndWriteFile(algoliaConfigPath, "{}")(
            s"""The algoliaConfig info is found in environment variables but apiKey value is empty.
               |So It will create the algoliaConfig file with an empty algoliaConfig at $algoliaConfigPath
               |""".stripMargin
          )
        else if (indexName.isEmpty)
          logAndWriteFile(algoliaConfigPath, "{}")(
            s"""The algoliaConfig info is found in environment variables but indexName value is empty.
               |So It will create the algoliaConfig file with an empty algoliaConfig at $algoliaConfigPath
               |""".stripMargin
          )
        else
          logAndWriteFile(
            algoliaConfigPath
            , s"""{
                 |  "apiKey": "$apiKey",
                 |  "indexName": "$indexName"
                 |}
                 |""".stripMargin)(
            s"""The algoliaConfig info is found so the algoliaConfig file will be generated at $algoliaConfigPath
               |""".stripMargin
          )
      case (Some(_), None) =>
        logAndWriteFile(algoliaConfigPath, "{}")(
          s"""The algolia apiKey is found but no indexName is in the environment variables.
             |So It will create the algoliaConfig file with an empty algoliaConfig at $algoliaConfigPath
             |If you want to set up algolia, set the following env var.
             |  - ALGOLIA_INDEX_NAME
             |""".stripMargin
        )

      case (None, Some(_)) =>
        logAndWriteFile(algoliaConfigPath, "{}")(
          s"""The algolia indexName is found but no apiKey is in the environment variables.
             |So It will create the algoliaConfig file with an empty algoliaConfig at $algoliaConfigPath
             |If you want to set up algolia, set the following env var.
             |  - ALGOLIA_API_KEY
             |""".stripMargin
        )

      case (None, None) =>
        logAndWriteFile(algoliaConfigPath, "{}")(
          s"""No algoliaConfig (Optional) info found in the environment variables.
             |So It will create the algoliaConfig file with an empty algoliaConfig at $algoliaConfigPath
             |If you want to set up algolia, set the following env vars.
             |  - ALGOLIA_API_KEY
             |  - ALGOLIA_INDEX_NAME
             |""".stripMargin
        )
    }

  def createGoogleAnalyticsConfig[F[_]: Fx: LogF: Monad](
    googleAnalyticsConfigPath: File,
    googleAnalyticsTrackingId: Option[String],
    googleAnalyticsAnonymizeIp: Option[Boolean]
  ): F[Unit] =
    (googleAnalyticsTrackingId, googleAnalyticsAnonymizeIp) match {
      case (Some(trackingId), Some(false)) =>
        if (trackingId.isEmpty)
          logAndWriteFile(googleAnalyticsConfigPath, "{}")(
            s"""The Google Analytics config info is found in environment variables but the tracking ID value is empty.
               |So It will create the Google Analytics config file with an empty object at $googleAnalyticsConfigPath
               |""".stripMargin
          )
        else
          logAndWriteFile(
            googleAnalyticsConfigPath
            , s"""{
                 |  "trackingID": "$trackingId",
                 |  "anonymizeIP": false
                 |}
                 |""".stripMargin)(
            s"""The Google Analytics config info is found so the Google Analytics config file will be generated at $googleAnalyticsConfigPath
               |""".stripMargin
          )

      case (Some(trackingId), Some(true)) =>
        if (trackingId.isEmpty)
          logAndWriteFile(googleAnalyticsConfigPath, "{}")(
            s"""The Google Analytics config info is found in environment variables but the tracking ID value is empty.
               |So It will create the Google Analytics config file with an empty object at $googleAnalyticsConfigPath
               |""".stripMargin
          )
        else
          logAndWriteFile(
            googleAnalyticsConfigPath
            , s"""{
                 |  "trackingID": "$trackingId",
                 |  "anonymizeIP": true
                 |}
                 |""".stripMargin)(
            s"""The Google Analytics config info is found so the Google Analytics config file will be generated at $googleAnalyticsConfigPath
               |""".stripMargin
          )

      case (Some(trackingId), None) =>
        logAndWriteFile(
          googleAnalyticsConfigPath
          , s"""{
               |  "trackingID": "$trackingId"
               |}
               |""".stripMargin)(
          s"""The Google Analytics tracking ID is found but no anonymizeIP config value is found in the environment variables.
             |So It will create the Google Analytics config file with 'trackingID' without 'anonymizeIP' at $googleAnalyticsConfigPath
             |If you want to set up anonymizeIP, set the following env var.
             |  - GA_ANONYMIZE_IP
             |""".stripMargin
        )

      case (None, Some(_)) =>
        logAndWriteFile(googleAnalyticsConfigPath, "{}")(
          s"""The Google Analytics is partially found in the environment variables.
             |It has anonymize IP option but no tracking ID.
             |So It will create the Google Analytics config file with an empty object at $googleAnalyticsConfigPath
             |If you want to set up Google Analytics, set the following env var.
             |  - GA_TRACKING_ID
             |""".stripMargin
        )

      case (None, None) =>
        logAndWriteFile(googleAnalyticsConfigPath, "{}")(
          s"""No Google Analytics (Optional) config info has been found in the environment variables.
             |So It will create the Google Analytics config file with an empty object at $googleAnalyticsConfigPath
             |If you want to set up Google Analytics, set the following env vars.
             |  - GA_TRACKING_ID
             |  - GA_ANONYMIZE_IP
             |""".stripMargin
        )
    }

}
