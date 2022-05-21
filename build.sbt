import ProjectInfo._

ThisBuild / organization := props.Org
ThisBuild / scalaVersion := props.ProjectScalaVersion
ThisBuild / developers   := List(
  Developer(
    props.GitHubUsername,
    "Kevin Lee",
    "kevin.code@kevinlee.io",
    url(s"https://github.com/${props.GitHubUsername}"),
  )
)

ThisBuild / homepage     := url(s"https://github.com/${props.GitHubUsername}/${props.ProjectName}").some
ThisBuild / scmInfo      := ScmInfo(
  url(s"https://github.com/${props.GitHubUsername}/${props.ProjectName}"),
  s"git@github.com:${props.GitHubUsername}/${props.ProjectName}.git",
).some

ThisBuild / startYear    := 2020.some

Global / sbtVersion := props.GlobalSbtVersion

ThisBuild / resolvers += "sonatype-snapshots" at s"https://${props.SonatypeCredentialHost}/content/repositories/snapshots"

lazy val root = (project in file("."))
  .enablePlugins(SbtPlugin, DevOopsGitHubReleasePlugin, DocusaurPlugin)
  .settings(
    name                              := props.ProjectName,
    description                       := "sbt plugin to publish GitHub Pages",
    crossSbtVersions                  := props.CrossSbtVersions,
    pluginCrossBuild / sbtVersion     := "1.2.8",
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
    licenses          := List("MIT" -> url("http://opensource.org/licenses/MIT")),
    /* } Publish */

    /* Docs { */
    docusaurDir      := (ThisBuild / baseDirectory).value / "website",
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

    final val ProjectScalaVersion = "2.12.12"

    val CrossScalaVersions: Seq[String] = Seq(ProjectScalaVersion)

    final val GlobalSbtVersion = "1.2.8"

    val CrossSbtVersions: Seq[String] = Seq(GlobalSbtVersion)

    final val SbtGitHubPagesVersion = "0.10.0"

    final val catsVersion       = "2.7.0"
    final val catsEffectVersion = "3.3.12"
    final val http4sVersion     = "0.23.11"
    final val github4sVersion   = "0.31.0"

    final val effectieVersion       = "2.0.0-beta1"
    final val loggerFVersion        = "2.0.0-beta1"
    final val justSysprocessVersion = "1.0.0"

    final val ExtrasVersion = "0.14.0"

    final val hedgehogVersion = "0.9.0"
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

    lazy val effectie: ModuleID          = "io.kevinlee" %% "effectie-cats-effect3" % props.effectieVersion
    lazy val loggerFCatsEffect: ModuleID = "io.kevinlee" %% "logger-f-cats"         % props.loggerFVersion
    lazy val loggerFSbtLogging: ModuleID = "io.kevinlee" %% "logger-f-sbt-logging"  % props.loggerFVersion

    lazy val justSysProcess: ModuleID = "io.kevinlee" %% "just-sysprocess" % props.justSysprocessVersion

    lazy val extrasCats = "io.kevinlee" %% "extras-cats" % props.ExtrasVersion

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
      ) ++ hedgehogLibs
  }

lazy val mavenCentralPublishSettings: SettingsDefinition = List(
  /* Publish to Maven Central { */
  sonatypeCredentialHost := props.SonatypeCredentialHost,
  sonatypeRepository     := props.SonatypeRepository,
  /* } Publish to Maven Central */
)
