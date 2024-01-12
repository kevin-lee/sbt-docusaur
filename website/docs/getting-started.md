---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: "/"
---
## sbt-docusaur

[![Build Status](https://github.com/Kevin-Lee/sbt-docusaur/workflows/Build%20All/badge.svg)](https://github.com/Kevin-Lee/sbt-docusaur/actions?workflow=Build+All)
[![Release Status](https://github.com/Kevin-Lee/sbt-docusaur/workflows/Release/badge.svg)](https://github.com/Kevin-Lee/sbt-docusaur/actions?workflow=Release)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/io.kevinlee/sbt-docusaur/badge.svg)](https://search.maven.org/artifact/io.kevinlee/sbt-docusaur)
[![Latest version](https://index.scala-lang.org/kevin-lee/sbt-docusaur/sbt-docusaur/latest.svg)](https://index.scala-lang.org/kevin-lee/sbt-docusaur/sbt-docusaur)

![sbt-docusaur logo](/img/sbt-docusaur-400x400.png)

sbt plugin for Docusaurus

## Get sbt-docusaur

In the `project/plugins.sbt`, add the following line,
```scala
addSbtPlugin("io.kevinlee" % "sbt-docusaur" % "0.15.0")
```

In your `build.sbt`,
```scala
lazy val root = (project in file("."))
  .enablePlugins(DocusaurPlugin)
  .settings(
    organization := "com.some.org",
    name         := "project-name",

    docusaurDir := (ThisBuild / baseDirectory).value / "website",
    docusaurBuildDir := docusaurDir.value / "build",

    // Optional. It's automatically done by sbt-github-pages
    // gitHubPagesOrgName := "github-username",
    
    // Optional. It's automatically done by sbt-github-pages
    // gitHubPagesRepoName := "project-name"
  )
```

To do , `npm install`, run `docusaurInstall` in sbt shell (or `sbt docusaurInstall` in bash or zsh)
```shell
sbt:project-name> docusaurInstall
[info] Successfully run npm for Docusaurus install
[info]   - command: npm run install
[info]
[info]   > fsevents@1.2.13 install /path/to/project-name/website/node_modules/watchpack-chokidar2/node_modules/fsevents
[info]   > node install.js
[info]
[info]     SOLINK_MODULE(target) Release/.node
[info]     CXX(target) Release/obj.target/fse/fsevents.o
[info]     SOLINK_MODULE(target) Release/fse.node
[info]
[info]   > fsevents@1.2.13 install /path/to/project-name/website/node_modules/webpack-dev-server/node_modules/fsevents
[info]   > node install.js
[info]
[info]     SOLINK_MODULE(target) Release/.node
[info]     CXX(target) Release/obj.target/fse/fsevents.o
[info]     SOLINK_MODULE(target) Release/fse.node
[info]
[info]   > core-js@2.6.11 postinstall /path/to/project-name/website/node_modules/core-js
[info]   > node -e "try{require('./postinstall')}catch(e){}"
[info]
[info]   Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!
[info]
[info]   The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
[info]   > https://opencollective.com/core-js
[info]   > https://www.patreon.com/zloirock
[info]
[info]   Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)
[info]
[info]
[info]   > ejs@2.7.4 postinstall /path/to/project-name/website/node_modules/ejs
[info]   > node ./postinstall.js
[info]
[info]   Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)
[info]
[info]   added 1603 packages from 672 contributors and audited 1604 packages in 30.257s
[info]
[info]   122 packages are looking for funding
[info]     run `npm fund` for details
[info]
[info]   found 0 vulnerabilities
[info]
[info]
[success] Total time: 32 s, completed 27 Jun. 2020, 5:52:58 pm

```

To do `npm run build`, run `docusaurBuild` in sbt shell or `sbt docusaurBuild` in your OS shell.
```shell
sbt:project-name> docusaurBuild
[info] Successfully run npm for Docusaurus build
[info]   - command: npm run run build
[info]
[info]   > website@0.0.0 build /path/to/project-name/website
[info]   > docusaurus build
[info]
[info]   Creating an optimized production build...
[info]   ℹ Compiling Client
[info]   ℹ Compiling Server
[info]   ✔ Client: Compiled successfully in 10.70s
[info]   ✔ Server: Compiled successfully in 12.74s
[info]
[info]   Success! Generated static files in build.
[info]
[info]
[success] Total time: 16 s, completed 27 Jun. 2020, 5:55:15 pm

```

To publish `gh-pages`, run the following task in sbt console
```shell
sbt:project-name> publishToGitHubPages
```
