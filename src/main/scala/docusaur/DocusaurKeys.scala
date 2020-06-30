package docusaur

import java.io.File

import sbt._

/**
 * @author Kevin Lee
 * @since 2020-06-17
 */
trait DocusaurKeys {

  lazy val docusaurNpmPath: SettingKey[Option[File]] =
    settingKey[Option[File]](
      "This is a setting key to specify the path to npm. By default, it uses npm found in the PATH env var (default: None)."
    )

  lazy val docusaurDir: SettingKey[File] =
    settingKey[File]("""The path to the Docusaurus base directory. No default value. e.g.) docusaurDir := (ThisBuild / baseDirectory).value / "website"""")

  lazy val docusaurBuildDir: SettingKey[File] =
    settingKey[File](
      """The path to the Docusaurus build directory. If you use GitHub Pages, this is the directory to be sent to gh-pages. No default value.
        |  e.g.)
        |    docusaurBuildDir := docusaurDir.value / "build"
        |    or
        |    docusaurBuildDir := docusaurDir.value / "build" / "your-project"
        |""".stripMargin)

  lazy val docusaurCleanNodeModules: TaskKey[Unit] =
    taskKey[Unit](
      """Remove all files in docusaurDir.value / "node_modules""""
    )

  lazy val docusaurInstall: TaskKey[Unit] =
    taskKey[Unit](
      "run npm install at docusaurDir.value"
    )

  lazy val docusaurCleanBuild: TaskKey[Unit] =
    taskKey[Unit](
      """Remove all files in docusaurBuildDir.value"""
    )

  lazy val docusaurBuild: TaskKey[Unit] =
    taskKey[Unit](
      "run npm run build at docusaurDir.value"
    )

  lazy val docusaurAlgoliaConfigFilename: SettingKey[String] =
    settingKey[String]("""The name of Algolia config file (default: sys.env.getOrElse("ALGOLIA_CONFIG_FILENAME", "algolia.config.json"))""")

  lazy val docusaurAlgoliaApiKey: SettingKey[Option[String]] =
    settingKey[Option[String]]("""Algolia API Key. If missing, Algolia config with an empty object ({}) is created. (default: sys.env.get("ALGOLIA_API_KEY") )""")

  lazy val docusaurAlgoliaIndexName: SettingKey[Option[String]] =
    settingKey[Option[String]]("""Algolia index name. If missing, Algolia config with an empty object ({}) is created. (default: sys.env.get("ALGOLIA_INDEX_NAME") )""")

  lazy val docusaurGenerateAlgoliaConfigFile: TaskKey[Unit] =
    taskKey[Unit]("Generate the Algolia config file at docusaurDir.value")
}
