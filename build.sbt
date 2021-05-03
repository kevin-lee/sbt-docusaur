import ProjectInfo._

lazy val root = (project in file("."))
  .enablePlugins(SbtPlugin, DevOopsGitHubReleasePlugin, DocusaurPlugin)
  .settings(
    organization := props.Org,
    name := props.ProjectName,
    scalaVersion := props.ProjectScalaVersion,
    description := "sbt plugin to publish GitHub Pages",
    developers := List(
      Developer(
        props.GitHubUsername,
        "Kevin Lee",
        "kevin.code@kevinlee.io",
        url(s"https://github.com/${props.GitHubUsername}"),
      ),
    ),
    homepage := url(s"https://github.com/${props.GitHubUsername}/${props.ProjectName}").some,
    scmInfo :=
      ScmInfo(
        url(s"https://github.com/${props.GitHubUsername}/${props.ProjectName}"),
        s"git@github.com:${props.GitHubUsername}/${props.ProjectName}.git",
      ).some,
    startYear := 2020.some,
    Global / sbtVersion := props.GlobalSbtVersion,
    crossSbtVersions := props.CrossSbtVersions,
    pluginCrossBuild / sbtVersion := "1.2.8",
    libraryDependencies ++= libs.all,
    testFrameworks ~= (fws => (TestFramework("hedgehog.sbt.Framework") +: fws).distinct),
    addSbtPlugin("io.kevinlee"         % "sbt-github-pages"   % "0.5.0"),
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
    gitHubPagesOrgName := props.GitHubUsername,
    gitHubPagesRepoName := props.ProjectName,
    /* } Docs */

  )

lazy val props =
  new {
    val Org: String = "io.kevinlee"

    val GitHubUsername: String = "Kevin-Lee"
    val ProjectName: String    = "sbt-docusaur"

    val ProjectScalaVersion: String     = "2.12.12"
    val CrossScalaVersions: Seq[String] = Seq(ProjectScalaVersion)

    val GlobalSbtVersion: String = "1.2.8"

    val CrossSbtVersions: Seq[String] = Seq(GlobalSbtVersion)

    val hedgehogVersion: String = "0.6.7"

    val catsVersion = "2.6.0"
    val catsEffectVersion = "2.5.0"
    val http4sVersion   = "0.21.22"
    val github4sVersion = "0.28.4"

    val effectieVersion = "1.10.0"
    val loggerFVersion = "1.10.0"
    val justSysprocessVersion = "0.6.0"
  }

lazy val libs =
  new {
    lazy val hedgehogLibs: Seq[ModuleID] = Seq(
      "qa.hedgehog" %% "hedgehog-core"   % props.hedgehogVersion % Test,
      "qa.hedgehog" %% "hedgehog-runner" % props.hedgehogVersion % Test,
      "qa.hedgehog" %% "hedgehog-sbt"    % props.hedgehogVersion % Test,
    )

    lazy val cats: ModuleID       = "org.typelevel" %% "cats-core"   % props.catsVersion
    lazy val catsEffect: ModuleID = "org.typelevel" %% "cats-effect" % props.catsEffectVersion
    lazy val github4s: ModuleID   = "com.47deg"     %% "github4s"    % props.github4sVersion

    lazy val http4sDsl: ModuleID    = "org.http4s" %% "http4s-dsl"          % props.http4sVersion
    lazy val http4sClient: ModuleID = "org.http4s" %% "http4s-blaze-client" % props.http4sVersion

    lazy val effectie: ModuleID          = "io.kevinlee" %% "effectie-cats-effect" % props.effectieVersion
    lazy val loggerFCatsEffect: ModuleID = "io.kevinlee" %% "logger-f-cats-effect" % props.loggerFVersion
    lazy val loggerFSbtLogging: ModuleID = "io.kevinlee" %% "logger-f-sbt-logging" % props.loggerFVersion

    lazy val justSysProcess: ModuleID = "io.kevinlee" %% "just-sysprocess" % props.justSysprocessVersion

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
      ) ++ hedgehogLibs
  }
