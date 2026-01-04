---
id: examples
title: Examples
---

<details>
  <summary>Legacy: Manual <code>gh-pages</code> branch creation (not recommended)</summary>

## Publish Website to GitHub Pages

:::warning NOTE
It is no longer required as `gitHubPagesCreateGitHubPagesBranchIfNotExist` task will handle it automatically.
:::

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

</details>

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
addSbtPlugin("org.scalameta" % "sbt-mdoc" % "2.8.2" )

addSbtPlugin("io.kevinlee" % "sbt-docusaur" % "0.21.0")
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
  .settings(noPublish) // This is required to exclude this sub-project
                       // when sbt publish to upload the artifacts.

```

In your `website/docusaurus.config.ts`, make sure that Docusaurus knows where your generated Makrdown files are.
So make sure your Docusaurus config has
```typescript
docs: {
  path: '../generated-docs/target/mdoc/'
}
```

So it may look like,

e.g.)
```typescript title="website/docusaurus.config.ts"
const config: Config = {
  // ...

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../generated-docs/target/mdoc/',
          sidebarPath: require.resolve('./sidebars.ts'),
        }
      }
    ]
  ]

  // ...
};

export default config;
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
          - { java-version: "21", java-distribution: "temurin" }
        node:
          - { version: "22.19.0" }

    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-java@v5
        with:
          java-version: ${{ matrix.scala.java-version }}
          distribution: ${{ matrix.scala.java-distribution }}
          cache: 'sbt'
      - uses: sbt/setup-sbt@v1
      - uses: actions/setup-node@v6
        with:
          node-version: ${{ matrix.node.version }}
          registry-url: 'https://registry.npmjs.org'

      - name: Cache npm
        uses: actions/cache@v5
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ matrix.node.version }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-${{ matrix.node.version }}

      - name: Build and publish website
        env:
          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}
          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}
          ALGOLIA_INDEX_NAME: ${{ secrets.ALGOLIA_INDEX_NAME }}
          GA_TRACKING_ID: ${{ secrets.GA_TRACKING_ID }}
          GA_ANONYMIZE_IP: ${{ secrets.GA_ANONYMIZE_IP }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          sbt \
            docs/gitHubPagesCreateGitHubPagesBranchIfNotExist \
            docs/clean \
            docs/mdoc \
            docs/docusaurGenerateAlgoliaConfigFile \
            docs/docusaurGenerateGoogleAnalyticsConfigFile \
            docs/docusaurInstall \
            docs/docusaurCleanBuild \
            docs/docusaurBuild \
            docs/publishToGitHubPages
```
