package docusaur

import java.io.File

import sbt._

/**
 * @author Kevin Lee
 * @since 2020-06-17
 */
trait JustDocusaurusKeys {

  lazy val justDocusaurusNpmPath: SettingKey[Option[File]] =
    settingKey[Option[File]](
      "This is a setting key to specify the path to npm. By default, it uses npm found in the PATH env var (default: None)."
    )

  lazy val justDocusaurusDir: SettingKey[File] =
    settingKey[File]("""The path to the Docusaurus base directory. No default value. e.g.) justDocusaurusDir := (ThisBuild / baseDirectory).value / "website"""")

  lazy val justDocusaurusBuildDir: SettingKey[File] =
    settingKey[File](
      """The path to the Docusaurus build directory. If you use GitHub Pages, this is the directory to be sent to gh-pages. No default value.
        |  e.g.)
        |    justDocusaurusBuildDir := justDocusaurusDir.value / "build"
        |    or
        |    justDocusaurusBuildDir := justDocusaurusDir.value / "build" / "your-project"
        |""".stripMargin)

  lazy val justDocusaurusCleanNodeModules: TaskKey[Unit] =
    taskKey[Unit](
      """Remove all files in justDocusaurusDir.value / "node_modules""""
    )

  lazy val justDocusaurusInstall: TaskKey[Unit] =
    taskKey[Unit](
      "run npm install at justDocusaurusDir.value"
    )

  lazy val justDocusaurusCleanBuild: TaskKey[Unit] =
    taskKey[Unit](
      """Remove all files in justDocusaurusBuildDir.value"""
    )

  lazy val justDocusaurusBuild: TaskKey[Unit] =
    taskKey[Unit](
      "run npm run build at justDocusaurusDir.value"
    )

  lazy val justDocusaurusAlgoliaConfigFileName: SettingKey[String] =
    settingKey[String]("""The name of Algolia config file (default: sys.env.getOrElse("ALGOLIA_CONFIG_FILENAME", "algolia.config.json"))""")

  lazy val justDocusaurusAlgoliaApiKey: SettingKey[Option[String]] =
    settingKey[Option[String]]("""Algolia API Key. If missing, Algolia config with an empty object ({}) is created. (default: sys.env.get("ALGOLIA_API_KEY") )""")

  lazy val justDocusaurusAlgoliaIndexName: SettingKey[Option[String]] =
    settingKey[Option[String]]("""Algolia index name. If missing, Algolia config with an empty object ({}) is created. (default: sys.env.get("ALGOLIA_INDEX_NAME") )""")

  lazy val justDocusaurusGenerateAlgoliaConfigFile: TaskKey[Unit] =
    taskKey[Unit]("Generate the Algolia config file at justDocusaurusDir.value")
}
