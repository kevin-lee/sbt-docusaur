import ProjectInfo._

lazy val root = (project in file("."))
  .enablePlugins(DevOopsGitHubReleasePlugin, DocusaurPlugin)
  .settings(
    organization := props.Org,
    name := props.ProjectName,
    scalaVersion := props.ProjectScalaVersion,
    version := ProjectVersion,
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
    sbtPlugin := true,
    sbtVersion in Global := props.GlobalSbtVersion,
    crossSbtVersions := props.CrossSbtVersions,
    pluginCrossBuild / sbtVersion := "1.2.8",
    addCompilerPlugin("org.typelevel" %% "kind-projector"     % "0.11.0" cross CrossVersion.full),
    addCompilerPlugin("com.olegpy"    %% "better-monadic-for" % "0.3.1"),
    libraryDependencies ++= libs.all,
    testFrameworks ~= (fws => (TestFramework("hedgehog.sbt.Framework") +: fws).distinct),
    addSbtPlugin("io.kevinlee"         % "sbt-github-pages"   % "0.4.0"),
    Compile / console / scalacOptions := scalacOptions.value diff List("-Ywarn-unused-import", "-Xfatal-warnings"),
    wartremoverErrors in (Compile, compile) ++= commonWarts,
    wartremoverErrors in (Test, compile) ++= commonWarts,
    /* GitHub Release { */
    devOopsPackagedArtifacts := List.empty[String],
    /* } GitHub Release */
    /* Publish { */
    publishMavenStyle := false,
    licenses += ("MIT", url("http://opensource.org/licenses/MIT")),
    /* } Publish */
    /* Bintray { */
    bintrayPackageLabels := Seq("sbt", "plugin"),
    bintrayVcsUrl := s"""https://github.com/${props.GitHubUsername}/${props.ProjectName}""".some,
    bintrayRepository := "sbt-plugins",
    /* } Bintray */

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

    val hedgehogVersion: String = "0.6.5"
    val http4sVersion: String   = "0.21.20"
  }

lazy val libs =
  new {
    lazy val hedgehogLibs: Seq[ModuleID] = Seq(
      "qa.hedgehog" %% "hedgehog-core"   % props.hedgehogVersion % Test,
      "qa.hedgehog" %% "hedgehog-runner" % props.hedgehogVersion % Test,
      "qa.hedgehog" %% "hedgehog-sbt"    % props.hedgehogVersion % Test,
    )

    lazy val cats: ModuleID       = "org.typelevel" %% "cats-core"   % "2.4.2"
    lazy val catsEffect: ModuleID = "org.typelevel" %% "cats-effect" % "2.3.3"
    lazy val github4s: ModuleID   = "com.47deg"     %% "github4s"    % "0.28.2"

    lazy val http4sDsl: ModuleID    = "org.http4s" %% "http4s-dsl"          % props.http4sVersion
    lazy val http4sClient: ModuleID = "org.http4s" %% "http4s-blaze-client" % props.http4sVersion

    lazy val effectie: ModuleID          = "io.kevinlee" %% "effectie-cats-effect" % "1.9.0"
    lazy val loggerFCatsEffect: ModuleID = "io.kevinlee" %% "logger-f-cats-effect" % "1.9.0"
    lazy val loggerFSbtLogging: ModuleID = "io.kevinlee" %% "logger-f-sbt-logging" % "1.9.0"

    lazy val justSysProcess: ModuleID = "io.kevinlee" %% "just-sysprocess" % "0.5.0"

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
