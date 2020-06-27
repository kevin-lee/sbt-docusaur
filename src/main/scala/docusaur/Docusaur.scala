package docusaur

import java.io.File
import java.nio.charset.Charset

import cats._
import cats.implicits._
import docusaur.npm.Npm.NpmPath
import docusaur.npm.{Npm, NpmCmd, NpmError}
import effectie.Effectful._
import effectie.cats.{CanCatch, EffectConstructor}
import filef.{FileError2, FileF2}
import loggerf.cats.Log.LeveledMessage._
import loggerf.cats.Logful._
import loggerf.cats.{Log => LogF}
import sbt.{IO => SbtIo}

/**
 * @author Kevin Lee
 * @since 2020-06-27
 */
object Docusaur {

  def deleteFilesIn[F[_]: EffectConstructor: CanCatch: LogF: Monad](
    what: String,
    file: File
  ): F[Unit] =
    log(FileF2.deleteAllIn[F](file))(
      err => error(
        s"""Failed in deleting all files in ${file.getCanonicalPath} for $what
           |  Error: ${FileError2.render(err)}
           |""".stripMargin
      ),
      files => info(
        s"""The following files are removed from ${file.getCanonicalPath}
           |${files.mkString("    ", "\n    ", "\n")}
           |""".stripMargin
      )
    ) *> effectOfUnit

  def install[F[_]: EffectConstructor: CanCatch: LogF: Monad](
    what: String,
    npmPath: Option[NpmPath],
    docusaurusDir: File
  ): F[Unit] =
    runNpm("Docusaurus install", npmPath, docusaurusDir, NpmCmd.install)

  def runBuild[F[_]: EffectConstructor: CanCatch: LogF: Monad](
    what: String,
    npmPath: Option[NpmPath],
    docusaurusDir: File
  ): F[Unit] =
    runNpm(
      what,
      npmPath,
      docusaurusDir,
      NpmCmd.run(NpmCmd.Run.Param.build)
    )


  def runNpm[F[_]: EffectConstructor: CanCatch: LogF: Monad](
    what: String,
    npmPath: Option[NpmPath],
    path: File,
    npmCmd: NpmCmd
  ): F[Unit] =
    log(Npm.run[F](npmPath, path.some, npmCmd))(
      err => error(
        s"""Error when run npm for $what at ${path.getCanonicalPath}
           |${NpmError.render(err)}
           |""".stripMargin
      ),
      result =>
        info(
          s"""Successfully run npm for $what
             |  - command: npm run ${NpmCmd.values(npmCmd).mkString(" ")}
             |${result.mkString("  ", "\n  ", "\n")}
             |""".stripMargin
        )
    ) *> effectOfUnit


  @SuppressWarnings(Array("org.wartremover.warts.ImplicitParameter"))
  def logAndWriteFile[F[_]: EffectConstructor: LogF: Monad](
    algoliaConfigFile: File,
    content: String
  )(
    logMessage: String
  ): F[Unit] =
    log(effectOfPure(logMessage))(info) *>
      effectOf(
        SbtIo.write(
          algoliaConfigFile,
          content,
          Charset.forName("UTF-8"),
          append = false
        )
      )

  def createAlgoliaConfig[F[_]: EffectConstructor: LogF: Monad](
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
}
