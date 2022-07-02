"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var A=o.createContext({}),l=function(e){var n=o.useContext(A),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(A.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,A=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,g=p["".concat(A,".").concat(d)]||p[d]||c[d]||i;return t?o.createElement(g,r(r({ref:n},u),{},{components:t})):o.createElement(g,r({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var A in n)hasOwnProperty.call(n,A)&&(s[A]=n[A]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},r=void 0,s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"sbt-docusaur",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},sidebar:"someSidebar",next:{title:"Config",permalink:"/docs/config"}},A={},l=[{value:" sbt-docusaur",id:"-sbt-docusaur",level:2},{value:"Get sbt-docusaur",id:"get-sbt-docusaur",level:2}],u={toc:l};function c(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-sbt-docusaur"},(0,a.kt)("img",{src:t(7570).Z,width:"64",height:"64"})," sbt-docusaur"),(0,a.kt)("p",null,"sbt plugin for Docusaurus"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kevin-Lee/sbt-docusaur/actions?workflow=Build+All"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/Kevin-Lee/sbt-docusaur/workflows/Build%20All/badge.svg",alt:"Build Status"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kevin-Lee/sbt-docusaur/actions?workflow=Release"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/Kevin-Lee/sbt-docusaur/workflows/Release/badge.svg",alt:"Release Status"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kevinlee/sbt-docusaur"},(0,a.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/io.kevinlee/sbt-docusaur/badge.svg",alt:"Maven Central"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://index.scala-lang.org/kevin-lee/sbt-docusaur/sbt-docusaur"},(0,a.kt)("img",{parentName:"a",src:"https://index.scala-lang.org/kevin-lee/sbt-docusaur/sbt-docusaur/latest.svg",alt:"Latest version"}))),(0,a.kt)("h2",{id:"get-sbt-docusaur"},"Get sbt-docusaur"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt"),", add the following line,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("io.kevinlee" % "sbt-docusaur" % "0.9.0")\n')),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt"),","),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'lazy val root = (project in file("."))\n  .enablePlugins(DocusaurPlugin)\n  .settings(\n    organization := "com.some.org",\n    name         := "project-name",\n\n    docusaurDir := (ThisBuild / baseDirectory).value / "website",\n    docusaurBuildDir := docusaurDir.value / "build",\n\n    // Optional. It\'s automatically done by sbt-github-pages\n    // gitHubPagesOrgName := "github-username",\n    \n    // Optional. It\'s automatically done by sbt-github-pages\n    // gitHubPagesRepoName := "project-name"\n  )\n')),(0,a.kt)("p",null,"To do , ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),", run ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurInstall")," in sbt shell (or ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt docusaurInstall")," in bash or zsh)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sbt:project-name> docusaurInstall\n[info] Successfully run npm for Docusaurus install\n[info]   - command: npm run install\n[info]\n[info]   > fsevents@1.2.13 install /path/to/project-name/website/node_modules/watchpack-chokidar2/node_modules/fsevents\n[info]   > node install.js\n[info]\n[info]     SOLINK_MODULE(target) Release/.node\n[info]     CXX(target) Release/obj.target/fse/fsevents.o\n[info]     SOLINK_MODULE(target) Release/fse.node\n[info]\n[info]   > fsevents@1.2.13 install /path/to/project-name/website/node_modules/webpack-dev-server/node_modules/fsevents\n[info]   > node install.js\n[info]\n[info]     SOLINK_MODULE(target) Release/.node\n[info]     CXX(target) Release/obj.target/fse/fsevents.o\n[info]     SOLINK_MODULE(target) Release/fse.node\n[info]\n[info]   > core-js@2.6.11 postinstall /path/to/project-name/website/node_modules/core-js\n[info]   > node -e \"try{require('./postinstall')}catch(e){}\"\n[info]\n[info]   Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!\n[info]\n[info]   The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:\n[info]   > https://opencollective.com/core-js\n[info]   > https://www.patreon.com/zloirock\n[info]\n[info]   Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)\n[info]\n[info]\n[info]   > ejs@2.7.4 postinstall /path/to/project-name/website/node_modules/ejs\n[info]   > node ./postinstall.js\n[info]\n[info]   Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)\n[info]\n[info]   added 1603 packages from 672 contributors and audited 1604 packages in 30.257s\n[info]\n[info]   122 packages are looking for funding\n[info]     run `npm fund` for details\n[info]\n[info]   found 0 vulnerabilities\n[info]\n[info]\n[success] Total time: 32 s, completed 27 Jun. 2020, 5:52:58 pm\n\n")),(0,a.kt)("p",null,"To do ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build"),", run ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurBuild")," in sbt shell or ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt docusaurBuild")," in your OS shell."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sbt:project-name> docusaurBuild\n[info] Successfully run npm for Docusaurus build\n[info]   - command: npm run run build\n[info]\n[info]   > website@0.0.0 build /path/to/project-name/website\n[info]   > docusaurus build\n[info]\n[info]   Creating an optimized production build...\n[info]   \u2139 Compiling Client\n[info]   \u2139 Compiling Server\n[info]   \u2714 Client: Compiled successfully in 10.70s\n[info]   \u2714 Server: Compiled successfully in 12.74s\n[info]\n[info]   Success! Generated static files in build.\n[info]\n[info]\n[success] Total time: 16 s, completed 27 Jun. 2020, 5:55:15 pm\n\n")),(0,a.kt)("p",null,"To publish ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages"),", run the following task in sbt console"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sbt:project-name> publishToGitHubPages\n")))}c.isMDXComponent=!0},7570:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"}}]);