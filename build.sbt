import ProjectInfo._

ThisBuild / organization := props.Org
ThisBuild / scalaVersion := props.ProjectScalaVersion
ThisBuild / developers := List(
  Developer(
    props.GitHubUsername,
    "Kevin Lee",
    "kevin.code@kevinlee.io",
    url(s"https://github.com/${props.GitHubUsername}"),
  )
)

ThisBuild / homepage := url(s"https://github.com/${props.GitHubUsername}/${props.ProjectName}").some
ThisBuild / scmInfo := ScmInfo(
  url(s"https://github.com/${props.GitHubUsername}/${props.ProjectName}"),
  s"git@github.com:${props.GitHubUsername}/${props.ProjectName}.git",
).some

ThisBuild / startYear := 2020.some

Global / sbtVersion := props.GlobalSbtVersion

lazy val root = (project in file("."))
  .enablePlugins(SbtPlugin, DevOopsGitHubReleasePlugin, DocusaurPlugin)
  .settings(
    name := props.ProjectName,
    description := "sbt plugin to publish GitHub Pages",
    crossSbtVersions := props.CrossSbtVersions,
    pluginCrossBuild / sbtVersion := props.GlobalSbtVersion,
    libraryDependencies ++= libs.all,
    testFrameworks ~= (fws => (TestFramework("hedgehog.sbt.Framework") +: fws).distinct),
    addSbtPlugin("io.kevinlee" % "sbt-github-pages" % props.SbtGitHubPagesVersion),
    Compile / console / scalacOptions := scalacOptions.value diff List("-Ywarn-unused-import", "-Xfatal-warnings"),
    Compile / compile / wartremoverErrors ++= commonWarts,
    Test / compile / wartremoverErrors ++= commonWarts,

    /* GitHub Release { */
    devOopsPackagedArtifacts := List.empty[String],
    /* } GitHub Release */

    /* Publish { */
    publishMavenStyle := true,
    licenses := List("MIT" -> url("http://opensource.org/licenses/MIT")),
    /* } Publish */

    /* Docs { */
    docusaurDir := (ThisBuild / baseDirectory).value / "website",
    docusaurBuildDir := docusaurDir.value / "build",
    /* } Docs */

  )

lazy val props =
  new {

    final val Org = "io.kevinlee"

    private val gitHubRepo = findRepoOrgAndName

    final val GitHubUsername = gitHubRepo.fold("kevin-lee")(_.orgToString)
    final val ProjectName    = gitHubRepo.fold("sbt-docusaur")(_.nameToString)

    final val ProjectScalaVersion = "2.12.18"

    val CrossScalaVersions: Seq[String] = Seq(ProjectScalaVersion)

    final val GlobalSbtVersion = "1.11.2"

    val CrossSbtVersions: Seq[String] = Seq(GlobalSbtVersion)

    val SbtGitHubPagesVersion = "0.18.1"

    final val CatsVersion       = "2.13.0"
    final val CatsEffectVersion = "3.6.3"

    final val Http4sVersion            = "0.23.32"
    final val Http4sBlazeClientVersion = "0.23.17"

    final val Github4sVersion = "0.33.3"

    val EffectieVersion = "2.3.0"
    val LoggerFVersion  = "2.8.1"

    val LogbackVersion = "1.5.19"

    final val JustSysprocessVersion = "1.0.0"

    val ExtrasVersion = "0.50.1"

    final val HedgehogVersion = "0.13.0"

    val CirceVersion = "0.14.15"
  }

lazy val libs =
  new {

    lazy val cats: ModuleID       = "org.typelevel" %% "cats-core"   % props.CatsVersion
    lazy val catsEffect: ModuleID = "org.typelevel" %% "cats-effect" % props.CatsEffectVersion
    lazy val github4s: ModuleID   = "com.47deg"     %% "github4s"    % props.Github4sVersion

    lazy val http4sDsl: ModuleID = "org.http4s" %% "http4s-dsl"          % props.Http4sVersion
    lazy val http4sClient        = "org.http4s" %% "http4s-blaze-client" % props.Http4sBlazeClientVersion

    lazy val effectie: ModuleID          = "io.kevinlee" %% "effectie-cats-effect3" % props.EffectieVersion
    lazy val loggerFCatsEffect: ModuleID = "io.kevinlee" %% "logger-f-cats"         % props.LoggerFVersion
    lazy val loggerFSbtLogging: ModuleID = "io.kevinlee" %% "logger-f-sbt-logging"  % props.LoggerFVersion

    lazy val justSysProcess: ModuleID = "io.kevinlee" %% "just-sysprocess" % props.JustSysprocessVersion

    lazy val extrasCats    = "io.kevinlee" %% "extras-cats"     % props.ExtrasVersion
    lazy val extrasScalaIo = "io.kevinlee" %% "extras-scala-io" % props.ExtrasVersion

    lazy val tests = new {

      lazy val hedgehogLibs: Seq[ModuleID] = Seq(
        "qa.hedgehog" %% "hedgehog-core"   % props.HedgehogVersion % Test,
        "qa.hedgehog" %% "hedgehog-runner" % props.HedgehogVersion % Test,
        "qa.hedgehog" %% "hedgehog-sbt"    % props.HedgehogVersion % Test,
      )

      lazy val logbackClassic = "ch.qos.logback" % "logback-classic" % props.LogbackVersion % Test

      lazy val loggerFSlf4j: ModuleID = "io.kevinlee" %% "logger-f-slf4j" % props.LoggerFVersion % Test

      lazy val extrasHedgehogCe3 = "io.kevinlee" %% "extras-hedgehog-ce3" % props.ExtrasVersion % Test

      lazy val circe =
        List(
          "io.circe" %% "circe-core"    % props.CirceVersion % Test,
          "io.circe" %% "circe-generic" % props.CirceVersion % Test,
          "io.circe" %% "circe-parser"  % props.CirceVersion % Test,
          "io.circe" %% "circe-literal" % props.CirceVersion % Test,
        )
    }

    lazy val all: Seq[ModuleID] =
      List(
        cats,
        catsEffect,
        github4s,
        http4sDsl,
        http4sClient,
        effectie,
        loggerFCatsEffect,
        loggerFSbtLogging,
        justSysProcess,
        extrasCats,
        extrasScalaIo,
        tests.logbackClassic,
        tests.extrasHedgehogCe3,
        tests.loggerFSlf4j,
      ) ++ tests.hedgehogLibs ++ tests.circe
  }
