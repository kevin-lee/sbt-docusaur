lazy val check = taskKey[Unit]("Check DocusaurPlugin's default settings under sbt 2")

def expect[A](name: String, actual: A, expected: A): Option[String] =
  if (actual == expected) None
  else Option(s"$name: expected [$expected] but got [$actual]")

lazy val root = (project in file("."))
  .enablePlugins(DocusaurPlugin)
  .settings(
    name             := "sbt-2-defaults",
    scalaVersion     := "3.8.4",
    docusaurDir      := baseDirectory.value / "website",
    docusaurBuildDir := docusaurDir.value / "build",
    /* sbt 2 caches every task by default; `check` only inspects settings so caching it is pointless. */
    check            := Def.uncached {
      val failures = List(
        expect("docusaurNpmPath", docusaurNpmPath.value, None),
        expect("docusaurAlgoliaConfigFilename", docusaurAlgoliaConfigFilename.value, "algolia.config.json"),
        expect("docusaurAlgoliaAppId", docusaurAlgoliaAppId.value, None),
        expect("docusaurAlgoliaApiKey", docusaurAlgoliaApiKey.value, None),
        expect("docusaurAlgoliaIndexName", docusaurAlgoliaIndexName.value, None),
        expect(
          "docusaurGoogleAnalyticsConfigFilename",
          docusaurGoogleAnalyticsConfigFilename.value,
          "google-analytics.config.json",
        ),
        expect("docusaurGoogleAnalyticsTrackingId", docusaurGoogleAnalyticsTrackingId.value, List.empty[String]),
        expect("docusaurGoogleAnalyticsAnonymizeIp", docusaurGoogleAnalyticsAnonymizeIp.value, None),
        expect("docusaurDir", docusaurDir.value, baseDirectory.value / "website"),
        expect("docusaurBuildDir", docusaurBuildDir.value, baseDirectory.value / "website" / "build"),
        /* DocusaurPlugin wires gitHubPagesSiteDir to docusaurBuildDir. */
        expect("gitHubPagesSiteDir", gitHubPagesSiteDir.value, docusaurBuildDir.value),
      ).flatten

      if (failures.nonEmpty) sys.error(failures.mkString("\n"))
    },
  )
