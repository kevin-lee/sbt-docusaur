package docusaur

import cats.*
import cats.data.EitherT
import cats.syntax.all.*
import docusaur.npm.Npm.NpmPath
import docusaur.npm.{Npm, NpmCmd, NpmError}
import effectie.core.Fx
import effectie.syntax.all.*
import extras.cats.syntax.either.*
import filef.{FileError2, FileF2}
import loggerf.core.Log as LogF
import loggerf.core.syntax.all.*
import sbt.IO as SbtIo

import java.io.File
import java.nio.charset.Charset

/** @author Kevin Lee
  * @since 2020-06-27
  */
object Docusaur {

  def deleteFilesIn[F[_]: Fx: Monad](
    what: String,
    file: File
  ): F[Either[FileError2, List[String]]] =
    FileF2.deleteAllIn[F](file)

  def install[F[_]: Fx: LogF: Monad](
    npmPath: Option[NpmPath],
    docusaurusDir: File
  ): F[Either[NpmError, Unit]] =
    runAndLogNpm("Docusaurus install", npmPath, docusaurusDir, NpmCmd.install)

  def runBuild[F[_]: Fx: LogF: Monad](
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

  def runAndLogNpm[F[_]: Fx: LogF: Monad](
    what: String,
    npmPath: Option[NpmPath],
    path: File,
    npmCmd: NpmCmd
  ): F[Either[NpmError, Unit]] = (for {
    result <- EitherT(
                Npm.run[F](npmPath, path.some, npmCmd)
              )
    _      <-
      s"""Successfully run npm for $what
                   |  - command: npm run ${NpmCmd.values(npmCmd).mkString(" ")}
                   |${result.mkString("  ", "\n  ", "\n")}
                   |"""
        .stripMargin
        .logS_(info)
        .rightT[NpmError]
  } yield ()).value

  @SuppressWarnings(Array("org.wartremover.warts.ImplicitParameter"))
  def logAndWriteFile[F[_]: Fx: LogF: Monad](
    theFile: File,
    content: String
  )(
    logMessage: String
  ): F[Unit] =
    logS_(logMessage)(info) *>
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
    algoliaAppId: Option[String],
    algoliaApiKey: Option[String],
    algoliaIndexName: Option[String]
  ): F[Unit] =
    (algoliaAppId, algoliaApiKey, algoliaIndexName) match {
      case (Some(appId), Some(apiKey), Some(indexName)) =>
        val emptyFields =
          appId.isEmpty.guard[Option].as("'docusaurAlgoliaAppId' for 'appId'").toList ++
            apiKey.isEmpty.guard[Option].as("'docusaurAlgoliaApiKey' for 'apiKey'").toList ++
            indexName.isEmpty.guard[Option].as("'docusaurAlgoliaIndexName' for 'indexName'").toList

        if (emptyFields.isEmpty) {
          logAndWriteFile(
            algoliaConfigPath,
            s"""{
               |  "appId": "$appId",
               |  "apiKey": "$apiKey",
               |  "indexName": "$indexName"
               |}
               |""".stripMargin
          )(
            s"""The algoliaConfig info is found so the algoliaConfig file will be generated at $algoliaConfigPath
               |""".stripMargin
          )

        } else {
          val singular = emptyFields.length === 1
          logAndWriteFile(algoliaConfigPath, "{}")(
            s"""The algoliaConfig info is found in environment variables but ${emptyFields.length} of them ${if (singular) "is" else "are"} empty.
               |So It will create the algoliaConfig file with an empty algoliaConfig at $algoliaConfigPath
               |If you want to set up algolia, make sure the following sbt-docusaur config properties have values (Check out the description of each).
               |${emptyFields.mkString("  - ", "\n  - ", "")}
               |""".stripMargin
          )
        }

      case (_, _, _) =>
        val missingEnvVars =
          algoliaAppId.isEmpty.guard[Option].as("ALGOLIA_APP_ID").toList ++
            algoliaApiKey.isEmpty.guard[Option].as("ALGOLIA_API_KEY").toList ++
            algoliaIndexName.isEmpty.guard[Option].as("ALGOLIA_INDEX_NAME").toList

        val singular = missingEnvVars.length === 1
        logAndWriteFile(algoliaConfigPath, "{}")(
          s"""There ${if (singular) "is a missing environment variable" else "are missing environment variables"} for algolia.
             |So It will create the algoliaConfig file with an empty algoliaConfig at $algoliaConfigPath
             |If you want to set up algolia, set the following env var.
             |${missingEnvVars.mkString("  - ", "\n  - ", "")}
             |""".stripMargin
        )
    }

  def createGoogleAnalyticsConfig[F[_]: Fx: LogF: Monad](
    googleAnalyticsConfigPath: File,
    googleAnalyticsTrackingId: List[String],
    googleAnalyticsAnonymizeIp: Option[Boolean]
  ): F[Unit] =
    (googleAnalyticsTrackingId, googleAnalyticsAnonymizeIp) match {
      case (Nil, Some(_)) =>
        logAndWriteFile(googleAnalyticsConfigPath, "{}")(
          s"""The Google Analytics is partially found in the environment variables.
             |It has anonymize IP option but no tracking ID.
             |So It will create the Google Analytics config file with an empty object at $googleAnalyticsConfigPath
             |If you want to set up Google Analytics, set the following env var.
             |  - GA_TRACKING_ID
             |""".stripMargin
        )

      case (Nil, None) =>
        logAndWriteFile(googleAnalyticsConfigPath, "{}")(
          s"""No Google Analytics (Optional) config info has been found in the environment variables.
             |So It will create the Google Analytics config file with an empty object at $googleAnalyticsConfigPath
             |If you want to set up Google Analytics, set the following env vars.
             |  - GA_TRACKING_ID
             |  - GA_ANONYMIZE_IP
             |""".stripMargin
        )

      case (trackingIds, Some(false)) =>
        val trackingIdsJson = toJsonStringOrJsonArrayOfString(trackingIds)
        if (trackingIdsJson.isEmpty)
          logAndWriteFile(googleAnalyticsConfigPath, "{}")(
            s"""The Google Analytics config info is found in environment variables but the tracking ID value is empty.
               |So It will create the Google Analytics config file with an empty object at $googleAnalyticsConfigPath
               |""".stripMargin
          )
        else
          logAndWriteFile(
            googleAnalyticsConfigPath,
            s"""{
               |  "trackingID": $trackingIdsJson,
               |  "anonymizeIP": false
               |}
               |""".stripMargin
          )(
            s"""The Google Analytics config info is found so the Google Analytics config file will be generated at $googleAnalyticsConfigPath
               |""".stripMargin
          )

      case (trackingIds, Some(true)) =>
        val trackingIdsJson = toJsonStringOrJsonArrayOfString(trackingIds)
        if (trackingIdsJson.isEmpty)
          logAndWriteFile(googleAnalyticsConfigPath, "{}")(
            s"""The Google Analytics config info is found in environment variables but the tracking ID value is empty.
               |So It will create the Google Analytics config file with an empty object at $googleAnalyticsConfigPath
               |""".stripMargin
          )
        else
          logAndWriteFile(
            googleAnalyticsConfigPath,
            s"""{
               |  "trackingID": $trackingIdsJson,
               |  "anonymizeIP": true
               |}
               |""".stripMargin
          )(
            s"""The Google Analytics config info is found so the Google Analytics config file will be generated at $googleAnalyticsConfigPath
               |""".stripMargin
          )

      case (trackingIds, None) =>
        val trackingIdsJson = toJsonStringOrJsonArrayOfString(trackingIds)
        if (trackingIdsJson.isEmpty)
          logAndWriteFile(googleAnalyticsConfigPath, "{}")(
            s"""The Google Analytics config info is found in environment variables but the tracking ID value is empty.
               |So It will create the Google Analytics config file with an empty object at $googleAnalyticsConfigPath
               |""".stripMargin
          )
        else
          logAndWriteFile(
            googleAnalyticsConfigPath,
            s"""{
             |  "trackingID": $trackingIdsJson
             |}
             |""".stripMargin
          )(
            s"""The Google Analytics tracking ID is found but no anonymizeIP config value is found in the environment variables.
             |So It will create the Google Analytics config file with 'trackingID' without 'anonymizeIP' at $googleAnalyticsConfigPath
             |If you want to set up anonymizeIP, set the following env var.
             |  - GA_ANONYMIZE_IP
             |""".stripMargin
          )

    }

  private def toJsonStringOrJsonArrayOfString(ss: List[String]): String =
    ss match {
      case Nil => ""
      case onlyValue :: Nil => s""""$onlyValue""""
      case _ :: _ =>
        ss.map(value => s""""$value"""").mkString("[", ",", "]")
    }

}
