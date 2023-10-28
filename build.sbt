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

ThisBuild / resolvers += "sonatype-snapshots" at s"https://${props.SonatypeCredentialHost}/content/repositories/snapshots"

lazy val root = (project in file("."))
  .enablePlugins(SbtPlugin, DevOopsGitHubReleasePlugin, DocusaurPlugin)
  .settings(
    name := props.ProjectName,
    description := "sbt plugin to publish GitHub Pages",
    crossSbtVersions := props.CrossSbtVersions,
    pluginCrossBuild / sbtVersion := "1.2.8",
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
  .settings(mavenCentralPublishSettings)

lazy val props =
  new {

    val SonatypeCredentialHost = "s01.oss.sonatype.org"
    val SonatypeRepository     = s"https://$SonatypeCredentialHost/service/local"

    final val Org = "io.kevinlee"

    private val gitHubRepo = findRepoOrgAndName

    final val GitHubUsername = gitHubRepo.fold("Kevin-Lee")(_.orgToString)
    final val ProjectName    = gitHubRepo.fold("sbt-docusaur")(_.nameToString)

    final val ProjectScalaVersion = "2.12.17"

    val CrossScalaVersions: Seq[String] = Seq(ProjectScalaVersion)

    final val GlobalSbtVersion = "1.6.2"

    val CrossSbtVersions: Seq[String] = Seq(GlobalSbtVersion)

    final val SbtGitHubPagesVersion = "0.12.0"

    final val CatsVersion       = "2.9.0"
    final val CatsEffectVersion = "3.4.3"

    final val Http4sVersion            = "0.23.16"
    final val Http4sBlazeClientVersion = "0.23.13"

    final val Github4sVersion = "0.31.2"

    final val EffectieVersion = "2.0.0-beta4"
    final val LoggerFVersion  = "2.0.0-beta4"

    val LogbackVersion = "1.3.11"

    final val JustSysprocessVersion = "1.0.0"

    final val ExtrasVersion = "0.26.0"

    final val HedgehogVersion = "0.10.1"

    val CirceVersion = "0.14.1"
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

lazy val mavenCentralPublishSettings: SettingsDefinition = List(
  /* Publish to Maven Central { */
  sonatypeCredentialHost := props.SonatypeCredentialHost,
  sonatypeRepository := props.SonatypeRepository,
  /* } Publish to Maven Central */
)
