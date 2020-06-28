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


### GitHub Org Name / Username *

:::important
This key must be set by the user of this plugin to publish the website to GitHub Pages.
:::

| Name                 | Value Type | Default    |
| -------------------- | ---------- | ---------- |
| `gitHubPagesOrgName` | `String`   |            |

The GitHub organization name (or username) (i.e.`OrgName` from `https://github.com/OrgName/RepoName`)

e.g.) If the repo is https://github.com/Kevin-Lee/sbt-docusaur
```scala
gitHubPagesOrgName := "Kevin-Lee"
```


### GitHub Repo Name *

:::important
This key must be set by the user of this plugin to publish the website to GitHub Pages.
:::

| Name                  | Value Type | Default    |
| --------------------- | ---------- | ---------- |
| `gitHubPagesRepoName` | `String`  |            |

The GitHub project repository name (i.e. `RepoName` from `https://github.com/OrgName/RepoName`)

e.g.) If the repo is https://github.com/Kevin-Lee/sbt-docusaur
```scala
gitHubPagesRepoName := "sbt-docusaur"
```

## More Settings

:::caution NOTE
To be added...
:::
