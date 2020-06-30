---
id: run
title: Run to Build and Publish
---

## Docusaur Build

### Clean `node_modules`

```
docusaurCleanNodeModules
```

Remove all files in `docusaurDir.value / "node_modules"`


### Install

```
docusaurInstall
```

run `npm install` at `docusaurDir.value`


### Clean the Build directory

```
docusaurCleanBuild
```

Remove all files in `docusaurBuildDir.value`


### Build
```
docusaurBuild
```
run `npm run build` at `docusaurDir.value`


## Algolia (Optional)

### Generate Algolia Config File

```
docusaurGenerateAlgoliaConfigFile
```
Generate the Algolia config file at `docusaurDir.value`

## Publish

### Publish to GitHub Pages
`sbt-docusaur` uses <a href="https://sbt-github-pages.kevinly.dev" target="_blank"><code>sbt-github-pages</code></a> to publish the website to GitHub Pages.
```
publishToGitHubPages
```
