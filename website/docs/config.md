---
id: config
title: Config
---
## Essential settings

Add set `DocusaurPlugin` in the `build.sbt`.

e.g.)
```scala
lazy val root = (project in file("."))
  .enablePlugins(DocusaurPlugin)
```
and add the following setting keys to the project.

```scala
docusaurDir := file("path" / "to" / "docusaurus-website"),
docusaurBuildDir := docusaurDir.value / "build" / "path",
```

To publish the website to GitHub Page, add the following keys as well.

```scala
gitHubPagesOrgName := "USERNAME_OR_ORG",
gitHubPagesRepoName := "YOUR_PROJECT",
```
:::note
`sbt-docusaur` uses [sbt-github-pages](https://sbt-github-pages.kevinly.dev) to publish the website to GitHub Pages.
:::

e.g.)
```scala
lazy val root = (project in file("."))
  .enablePlugins(DocusaurPlugin)
  .settings(
    organization := "com.some.org",
    name         := "project-name",

    docusaurDir := (ThisBuild / baseDirectory).value / "website",
    docusaurBuildDir := docusaurDir.value / "build",

    gitHubPagesOrgName := "github-username",
    gitHubPagesRepoName := "project-name"
  )
```

### Docusaur Directory *

:::important
This key must be set by the user of this plugin.
:::

| Name          | Value Type | Default    |
| ------------- | ---------- | ---------- |
| `docusaurDir` | `File`     |            |

The path to the Docusaurus webiste.

e.g.) If the Docusaurus website is located at `project-root/website/`
```scala
docusaurDir := (ThisBuild / baseDirectory).value / "website"
```

### Docusaur Build Directory *

:::important
This key must be set by the user of this plugin.
:::

| Name               | Value Type | Default    |
| ------------------ | ---------- | ---------- |
| `docusaurBuildDir` | `File`     |            |

The path to the build path of Docusaurus webiste.

e.g.) If the Docusaurus website is located at `project-root/website/` and the build path is at `project-root/website/build`
```scala
docusaurBuildDir := docusaurDir.value / "build"
```

If the Docusaurus website is located at `project-root/website/` and the build path is at `project-root/website/build/some-project`
```scala
docusaurBuildDir := docusaurDir.value / "build" / "some-project"
```


### GitHub Org Name / Username

:::important
This key must be set by the user of this plugin to publish the website to GitHub Pages.

However, it is automatically done by `sbt-github-pages` so you don't need to set it up unless you want to set it otherwise.
:::

| Name                 | Value Type | Default                                  |
| -------------------- | ---------- | ---------------------------------------- |
| `gitHubPagesOrgName` | `String`   | Value obtained from calling `git remote` |

The GitHub organization name (or username) (i.e.`OrgName` from `https://github.com/OrgName/RepoName`)

e.g.) If the repo is https://github.com/Kevin-Lee/sbt-docusaur
```scala
gitHubPagesOrgName := "Kevin-Lee"
```

:::note
You don't need to set it up as `sbt-github-pages` does it automatically with the value from `git remote`.
:::


### GitHub Repo Name

:::important
This key must be set by the user of this plugin to publish the website to GitHub Pages.

However, it is automatically done by `sbt-github-pages` so you don't need to set it up unless you want to set it otherwise.
:::

| Name                  | Value Type | Default                                  |
| --------------------- | ---------- | ---------------------------------------- |
| `gitHubPagesRepoName` | `String`   | Value obtained from calling `git remote` |

The GitHub project repository name (i.e. `RepoName` from `https://github.com/OrgName/RepoName`)

e.g.) If the repo is https://github.com/Kevin-Lee/sbt-docusaur
```scala
gitHubPagesRepoName := "sbt-docusaur"
```

:::note
You don't need to set it up as `sbt-github-pages` does it automatically with the value from `git remote`.
:::


## More Settings

### `npm` Path

| Name              | Value Type     | Default |
| ----------------- | -------------- | ------- |
| `docusaurNpmPath` | `Option[File]` | `None`  |
This is a setting key to specify the path to `npm`. By default, it uses npm found in the `PATH` env var.
So you don't need to specify it unless you want to use `npm` from some other path.


### Algolia Config Filename (Optional) 
| Name                            | Value Type | Default                                                               |
| ------------------------------- | ---------- | --------------------------------------------------------------------- |
| `docusaurAlgoliaConfigFilename` | `String`   | `sys.env.getOrElse("ALGOLIA_CONFIG_FILENAME", "algolia.config.json")` |

The name of Algolia config file.


### Algolia ApiKey (Optional)
| Name                    | Value Type       | Default                          |
| ----------------------- | ---------------- | -------------------------------- |
| `docusaurAlgoliaApiKey` | `Option[String]` | `sys.env.get("ALGOLIA_API_KEY")` |

Algolia API Key. If missing, Algolia config with an empty object (`{}`) is created.


### Algolia Index Name (Optional)
| Name                       | Value Type       | Default                             |
| -------------------------- | ---------------- | ----------------------------------- |
| `docusaurAlgoliaIndexName` | `Option[String]` | `sys.env.get("ALGOLIA_INDEX_NAME")` |

Algolia index name. If missing, Algolia config with an empty object (`{}`) is created.


### Google Analytics Config File (Optional)
| Name                                    | Value Type | Default                                                                   |
| --------------------------------------- | ---------- | ------------------------------------------------------------------------- |
| `docusaurGoogleAnalyticsConfigFilename` | `String`   | `sys.env.getOrElse("GA_CONFIG_FILENAME", "google-analytics.config.json")` |

e.g.)

```shell
export GA_CONFIG_FILENAME=ga-conf.json
```
Or
```scala
docusaurGoogleAnalyticsConfigFilename := "ga-conf.json"
```


### Google Analytics Tracking ID (Optional)
| Name                                | Value Type       | Default                               |
| ----------------------------------- | ---------------- | ------------------------------------- |
| `docusaurGoogleAnalyticsTrackingId` | `Option[String]` | `sys.env.getOrElse("GA_TRACKING_ID")` |

Google Analytics Tracking ID. If missing, Google Analytics config with an empty object (`{}`) is created.

e.g.)

```shell
export GA_TRACKING_ID=UA-000000-1
```
Or
```scala
docusaurGoogleAnalyticsTrackingId := Some("UA-000000-1")
```


### Google Analytics Anonymize IP (Optional)
| Name                                 | Value Type        | Default                                |
| ------------------------------------ | ----------------- | -------------------------------------- |
| `docusaurGoogleAnalyticsAnonymizeIp` | `Option[Boolean]` | `sys.env.getOrElse("GA_ANONYMIZE_IP")` |

If missing, no `anonymizeIP` is written in the config file.

e.g.)

```shell
export GA_ANONYMIZE_IP=true
```
Or
```scala
docusaurGoogleAnalyticsAnonymizeIp := Some(true)
```


## Use GitHub Enterprise
`sbt-github-pages` support GitHub Enterprise

There are four properties can be used to use GitHub Enterprise. 
To set these up, get the right values from your company.
* `gitHubPagesGitHubBaseUrl`
* `gitHubPagesGitHubAuthorizeUrl`
* `gitHubPagesGitHubAccessTokenUrl`
* `gitHubPagesGitHubHeaders`

### GitHub Enterprise - Base URL
| Name                       | Value Type | Default                                                    |
| -------------------------- | ---------- | ---------------------------------------------------------- |
| `gitHubPagesGitHubBaseUrl` | `String`   | ENV VAR `GITHUB_ENT_BASE_URL` or `https://api.github.com/` |

NOTE: The trailing slash is significant. So `https://some.url.blah` does not work. It should be `https://some.url.blah/`.

e.g.)
```shell
export GITHUB_ENT_BASE_URL="https://github.my-company.internal/api/v3/"
```
Or
```scala
gitHubPagesGitHubBaseUrl := "https://github.my-company.internal/api/v3/"
```


### GitHub Enterprise - Authorize URL
| Name                            | Value Type | Default                                                                                                                         |
| ------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `gitHubPagesGitHubAuthorizeUrl` | `String`   | ENV VAR `GITHUB_ENT_AUTHORIZE_URL` or `https://github.com/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&state=%s` |

e.g.)
```shell
export GITHUB_ENT_AUTHORIZE_URL="https://github.my-company.internal/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&state=%s"
```
Or
```scala
gitHubPagesGitHubAuthorizeUrl :=
  "https://github.my-company.internal/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&state=%s"
```


### GitHub Enterprise - Access Token URL
| Name                              | Value Type | Default                                                                                |
| --------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| `gitHubPagesGitHubAccessTokenUrl` | `String`   | ENV VAR `GITHUB_ENT_ACCESS_TOKEN_URL` or `https://github.com/login/oauth/access_token` |

e.g.)
```shell
export GITHUB_ENT_ACCESS_TOKEN_URL="https://github.my-company.internal/login/oauth/access_token"
```
Or
```scala
gitHubPagesGitHubAccessTokenUrl :=
  "https://github.my-company.internal/login/oauth/access_token"
```


### GitHub Enterprise - Headers
| Name                       | Value Type            | Default                                                           |
| -------------------------- | --------------------- | ----------------------------------------------------------------- |
| `gitHubPagesGitHubHeaders` | `Map[String, String]` | ENV VAR `GITHUB_ENT_HEADERS` or `Map("User-Agent" -> "github4s")` |

e.g.)
When using the environment variable, the value should be JSON containing String key to String value pairs.
e.g.)
```shell
export GITHUB_ENT_HEADERS='{"User-Agent":"app-doc-publisher", "something-else":"blah"}'
```
Or
```scala
gitHubPagesGitHubHeaders := Map("User-Agent" -> "app-doc-publisher")
```
