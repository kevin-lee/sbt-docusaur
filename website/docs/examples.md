---
id: examples
title: Examples
---
## Publish Website to GitHub Pages
To publish your website to GitHub Actions, first, make sure you have `gh-pages` branch.
If you don't already have it, create it first.

```shell
# Move to some temporary location.
# Clone your project. This one will be removed once the `gh-pages` creation is done.
$ git clone git@github.com:USERNAME/YOUR_PROJECT.git

$ cd YOUR_PROJECT

$ git checkout --orphan gh-pages

# Make sure you're in the project directory.
$ git rm -rf .

$ git commit --allow-empty -m "Add gh-pages branch"

$ git push origin gh-pages

# Now you can remove this project in the temporary location.
```

## Use Docusaurus 2 + mdoc + GitHub Actions

### Docusaurus 2
Create a Docusarus site directory using its template. You need node for using Docusaurus.

e.g.)
```shell
npx @docusaurus/init@next init website classic 
``` 
It creates the Docusarus folder at `PROJECT_HOME/website/`.

Check out the [Docusuarus docs](https://v2.docusaurus.io/docs/) and finish configuration.

### Mdoc + Docusaurus 2
Add `sbt-mdoc` plugin and `sbt-docusaur` to `project/plugins.sbt`. 

```scala title="project/plugins.sbt"
addSbtPlugin("org.scalameta" % "sbt-mdoc" % "2.2.20" )

addSbtPlugin("io.kevinlee" % "sbt-docusaur" % "0.6.0")
```

In your `build.sbt`, add a sub-project for the doc site with `sbt-mdoc` and `sbt-docusaur`, and set up the Docusarus.

e.g.)
```scala title="build.sbt"
lazy val noPublish = Seq(
  publish := {},
  publishLocal := {},
  publishArtifact := false,
  skip in publish := true,
)

lazy val docs = (project in file("generated-docs"))
  .enablePlugins(MdocPlugin, DocusaurPlugin)
  .settings(
    name := "docs",

    docusaurDir := (ThisBuild / baseDirectory).value / "website",
    docusaurBuildDir := docusaurDir.value / "build",
  )
  .settings(noPublish) // This is optional to exclude this sub-project
                       // when sbt publish to upload the artifacts.

```

In your `website/docusaurus.config.js`, make sure that Docusaurus knows where your generated Makrdown files are.
So make sure your Docusaurus config has
```javascript
docs: {
  path: '../generated-docs/target/mdoc/'
}
```

So it may look like,

e.g.)
```javascript title="website/docusaurus.config.js"
module.exports = {
  // ...

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../generated-docs/target/mdoc/',
          homePageId: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
    ]
  ]

  // ...
};
```

### GitHub Actions
Just place the following yaml file in `YOUR_PROJECT/.github/workflows/`

Whenever push happens on the `main` branch, it publishes the website. <br />
It uses Mdoc to generate the Markdown files with the Scala code compiled and run.<br />
After that it builds Docusarus website then publish to `gh-pages`.

e.g.)

```yaml title=".github/workflows/publish-github-pages.yml"
name: "Publish GitHub Pages"

on:
  push:
    branches:
      - main

jobs:
  build_and_publish_doc_site:
    if: github.ref != 'refs/heads/gh-pages' && github.ref != 'gh-pages'

    runs-on: ubuntu-latest

    strategy:
      matrix:
        scala:
          - { binary-version: "2.12", java-version: "adopt@1.8" }

    steps:
      - uses: actions/checkout@v2.3.4
      - uses: olafurpg/setup-scala@v10
        with:
          java-version: ${{ matrix.scala.java-version }}
      - uses: actions/setup-node@v2.1.5
        with:
          node-version: '14.4.0'
          registry-url: 'https://registry.npmjs.org'

      - name: Cache SBT
        uses: actions/cache@v2
        with:
          path: |
            ~/.ivy2/cache
            ~/.cache/coursier
            ~/.sbt
          key: ${{ runner.os }}-sbt-${{ matrix.scala.binary-version }}-${{ hashFiles('**/*.sbt') }}
          restore-keys: |
            ${{ runner.os }}-sbt-${{ matrix.scala.binary-version }}-

      - name: Cache npm
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: Build and publish website
        env:
          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}
          ALGOLIA_INDEX_NAME: ${{ secrets.ALGOLIA_INDEX_NAME }}
          GA_TRACKING_ID: ${{ secrets.GA_TRACKING_ID }}
          GA_ANONYMIZE_IP: ${{ secrets.GA_ANONYMIZE_IP }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          sbt clean \
            docs/mdoc \
            docs/docusaurGenerateAlgoliaConfigFile \
            docs/docusaurGenerateGoogleAnalyticsConfigFile \
            docs/docusaurInstall \
            docs/docusaurCleanBuild \
            docs/docusaurBuild \
            docs/publishToGitHubPages
```
