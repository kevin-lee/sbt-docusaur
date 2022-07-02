"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=s.createContext({}),l=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,h=d["".concat(u,".").concat(b)]||d[b]||p[b]||r;return n?s.createElement(h,o(o({ref:t},c),{},{components:n})):s.createElement(h,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(7462),a=(n(7294),n(3905));const r={id:"examples",title:"Examples"},o=void 0,i={unversionedId:"examples",id:"examples",title:"Examples",description:"Publish Website to GitHub Pages",source:"@site/docs/examples.md",sourceDirName:".",slug:"/examples",permalink:"/docs/examples",draft:!1,tags:[],version:"current",frontMatter:{id:"examples",title:"Examples"},sidebar:"someSidebar",previous:{title:"Run to Build and Publish",permalink:"/docs/run"}},u={},l=[{value:"Publish Website to GitHub Pages",id:"publish-website-to-github-pages",level:2},{value:"Use Docusaurus 2 + mdoc + GitHub Actions",id:"use-docusaurus-2--mdoc--github-actions",level:2},{value:"Docusaurus 2",id:"docusaurus-2",level:3},{value:"Mdoc + Docusaurus 2",id:"mdoc--docusaurus-2",level:3},{value:"GitHub Actions",id:"github-actions",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"publish-website-to-github-pages"},"Publish Website to GitHub Pages"),(0,a.kt)("p",null,"To publish your website to GitHub Actions, first, make sure you have ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch.\nIf you don't already have it, create it first."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Move to some temporary location.\n# Clone your project. This one will be removed once the `gh-pages` creation is done.\n$ git clone git@github.com:USERNAME/YOUR_PROJECT.git\n\n$ cd YOUR_PROJECT\n\n$ git checkout --orphan gh-pages\n\n# Make sure you\'re in the project directory.\n$ git rm -rf .\n\n$ git commit --allow-empty -m "Add gh-pages branch"\n\n$ git push origin gh-pages\n\n# Now you can remove this project in the temporary location.\n')),(0,a.kt)("h2",{id:"use-docusaurus-2--mdoc--github-actions"},"Use Docusaurus 2 + mdoc + GitHub Actions"),(0,a.kt)("h3",{id:"docusaurus-2"},"Docusaurus 2"),(0,a.kt)("p",null,"Create a Docusarus site directory using its template. You need node for using Docusaurus."),(0,a.kt)("p",null,"e.g.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@next init website classic \n")),(0,a.kt)("p",null,"It creates the Docusarus folder at ",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT_HOME/website/"),"."),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/"},"Docusuarus docs")," and finish configuration."),(0,a.kt)("h3",{id:"mdoc--docusaurus-2"},"Mdoc + Docusaurus 2"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt-mdoc")," plugin and ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt-docusaur")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:'title="project/plugins.sbt"',title:'"project/plugins.sbt"'},'addSbtPlugin("org.scalameta" % "sbt-mdoc" % "2.2.20" )\n\naddSbtPlugin("io.kevinlee" % "sbt-docusaur" % "0.9.0")\n')),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt"),", add a sub-project for the doc site with ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt-mdoc")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt-docusaur"),", and set up the Docusarus."),(0,a.kt)("p",null,"e.g.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:'title="build.sbt"',title:'"build.sbt"'},'lazy val noPublish = Seq(\n  publish := {},\n  publishLocal := {},\n  publishArtifact := false,\n  skip in publish := true,\n)\n\nlazy val docs = (project in file("generated-docs"))\n  .enablePlugins(MdocPlugin, DocusaurPlugin)\n  .settings(\n    name := "docs",\n\n    docusaurDir := (ThisBuild / baseDirectory).value / "website",\n    docusaurBuildDir := docusaurDir.value / "build",\n  )\n  .settings(noPublish) // This is required to exclude this sub-project\n                       // when sbt publish to upload the artifacts.\n\n')),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"website/docusaurus.config.js"),", make sure that Docusaurus knows where your generated Makrdown files are.\nSo make sure your Docusaurus config has"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"docs: {\n  path: '../generated-docs/target/mdoc/'\n}\n")),(0,a.kt)("p",null,"So it may look like,"),(0,a.kt)("p",null,"e.g.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="website/docusaurus.config.js"',title:'"website/docusaurus.config.js"'},"module.exports = {\n  // ...\n\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: '../generated-docs/target/mdoc/',\n          homePageId: 'docs',\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n    ]\n  ]\n\n  // ...\n};\n")),(0,a.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,a.kt)("p",null,"Just place the following yaml file in ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR_PROJECT/.github/workflows/")),(0,a.kt)("p",null,"Whenever push happens on the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch, it publishes the website. ",(0,a.kt)("br",null),"\nIt uses Mdoc to generate the Markdown files with the Scala code compiled and run.",(0,a.kt)("br",null),"\nAfter that it builds Docusarus website then publish to ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages"),"."),(0,a.kt)("p",null,"e.g.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/publish-github-pages.yml"',title:'".github/workflows/publish-github-pages.yml"'},"name: \"Publish GitHub Pages\"\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  build_and_publish_doc_site:\n    if: github.ref != 'refs/heads/gh-pages' && github.ref != 'gh-pages'\n\n    runs-on: ubuntu-latest\n\n    strategy:\n      matrix:\n        scala:\n          - { binary-version: \"2.12\", java-version: \"adopt@1.8\" }\n\n    steps:\n      - uses: actions/checkout@v2.3.4\n      - uses: olafurpg/setup-scala@v10\n        with:\n          java-version: ${{ matrix.scala.java-version }}\n      - uses: actions/setup-node@v2.1.5\n        with:\n          node-version: '14.16.0'\n          registry-url: 'https://registry.npmjs.org'\n\n      - name: Cache SBT\n        uses: actions/cache@v2\n        with:\n          path: |\n            ~/.ivy2/cache\n            ~/.cache/coursier\n            ~/.sbt\n          key: ${{ runner.os }}-sbt-${{ matrix.scala.binary-version }}-${{ hashFiles('**/*.sbt') }}\n          restore-keys: |\n            ${{ runner.os }}-sbt-${{ matrix.scala.binary-version }}-\n\n      - name: Cache npm\n        uses: actions/cache@v2\n        with:\n          path: ~/.npm\n          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n          restore-keys: |\n            ${{ runner.os }}-node-\n\n      - name: Build and publish website\n        env:\n          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}\n          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}\n          ALGOLIA_INDEX_NAME: ${{ secrets.ALGOLIA_INDEX_NAME }}\n          GA_TRACKING_ID: ${{ secrets.GA_TRACKING_ID }}\n          GA_ANONYMIZE_IP: ${{ secrets.GA_ANONYMIZE_IP }}\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n        run: |\n          sbt \\\n            docs/clean \\\n            docs/mdoc \\\n            docs/docusaurGenerateAlgoliaConfigFile \\\n            docs/docusaurGenerateGoogleAnalyticsConfigFile \\\n            docs/docusaurInstall \\\n            docs/docusaurCleanBuild \\\n            docs/docusaurBuild \\\n            docs/publishToGitHubPages\n")))}p.isMDXComponent=!0}}]);