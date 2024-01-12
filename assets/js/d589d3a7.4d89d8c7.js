"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return t?o.createElement(m,s(s({ref:n},c),{},{components:t})):o.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=t(7462),a=(t(7294),t(3905));const r={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},s=void 0,i={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"sbt-docusaur",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},sidebar:"someSidebar",next:{title:"Config",permalink:"/docs/config"}},l={},u=[{value:"sbt-docusaur",id:"sbt-docusaur",level:2},{value:"Get sbt-docusaur",id:"get-sbt-docusaur",level:2}],c={toc:u};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sbt-docusaur"},"sbt-docusaur"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kevin-Lee/sbt-docusaur/actions?workflow=Build+All"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/Kevin-Lee/sbt-docusaur/workflows/Build%20All/badge.svg",alt:"Build Status"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kevin-Lee/sbt-docusaur/actions?workflow=Release"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/Kevin-Lee/sbt-docusaur/workflows/Release/badge.svg",alt:"Release Status"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kevinlee/sbt-docusaur"},(0,a.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/io.kevinlee/sbt-docusaur/badge.svg",alt:"Maven Central"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://index.scala-lang.org/kevin-lee/sbt-docusaur/sbt-docusaur"},(0,a.kt)("img",{parentName:"a",src:"https://index.scala-lang.org/kevin-lee/sbt-docusaur/sbt-docusaur/latest.svg",alt:"Latest version"}))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sbt-docusaur logo",src:t(1837).Z,width:"400",height:"400"})),(0,a.kt)("p",null,"sbt plugin for Docusaurus"),(0,a.kt)("h2",{id:"get-sbt-docusaur"},"Get sbt-docusaur"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt"),", add the following line,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("io.kevinlee" % "sbt-docusaur" % "0.15.0")\n')),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt"),","),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'lazy val root = (project in file("."))\n  .enablePlugins(DocusaurPlugin)\n  .settings(\n    organization := "com.some.org",\n    name         := "project-name",\n\n    docusaurDir := (ThisBuild / baseDirectory).value / "website",\n    docusaurBuildDir := docusaurDir.value / "build",\n\n    // Optional. It\'s automatically done by sbt-github-pages\n    // gitHubPagesOrgName := "github-username",\n    \n    // Optional. It\'s automatically done by sbt-github-pages\n    // gitHubPagesRepoName := "project-name"\n  )\n')),(0,a.kt)("p",null,"To do , ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),", run ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurInstall")," in sbt shell (or ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt docusaurInstall")," in bash or zsh)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sbt:project-name> docusaurInstall\n[info] Successfully run npm for Docusaurus install\n[info]   - command: npm run install\n[info]\n[info]   > fsevents@1.2.13 install /path/to/project-name/website/node_modules/watchpack-chokidar2/node_modules/fsevents\n[info]   > node install.js\n[info]\n[info]     SOLINK_MODULE(target) Release/.node\n[info]     CXX(target) Release/obj.target/fse/fsevents.o\n[info]     SOLINK_MODULE(target) Release/fse.node\n[info]\n[info]   > fsevents@1.2.13 install /path/to/project-name/website/node_modules/webpack-dev-server/node_modules/fsevents\n[info]   > node install.js\n[info]\n[info]     SOLINK_MODULE(target) Release/.node\n[info]     CXX(target) Release/obj.target/fse/fsevents.o\n[info]     SOLINK_MODULE(target) Release/fse.node\n[info]\n[info]   > core-js@2.6.11 postinstall /path/to/project-name/website/node_modules/core-js\n[info]   > node -e \"try{require('./postinstall')}catch(e){}\"\n[info]\n[info]   Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!\n[info]\n[info]   The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:\n[info]   > https://opencollective.com/core-js\n[info]   > https://www.patreon.com/zloirock\n[info]\n[info]   Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)\n[info]\n[info]\n[info]   > ejs@2.7.4 postinstall /path/to/project-name/website/node_modules/ejs\n[info]   > node ./postinstall.js\n[info]\n[info]   Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)\n[info]\n[info]   added 1603 packages from 672 contributors and audited 1604 packages in 30.257s\n[info]\n[info]   122 packages are looking for funding\n[info]     run `npm fund` for details\n[info]\n[info]   found 0 vulnerabilities\n[info]\n[info]\n[success] Total time: 32 s, completed 27 Jun. 2020, 5:52:58 pm\n\n")),(0,a.kt)("p",null,"To do ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build"),", run ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurBuild")," in sbt shell or ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt docusaurBuild")," in your OS shell."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sbt:project-name> docusaurBuild\n[info] Successfully run npm for Docusaurus build\n[info]   - command: npm run run build\n[info]\n[info]   > website@0.0.0 build /path/to/project-name/website\n[info]   > docusaurus build\n[info]\n[info]   Creating an optimized production build...\n[info]   \u2139 Compiling Client\n[info]   \u2139 Compiling Server\n[info]   \u2714 Client: Compiled successfully in 10.70s\n[info]   \u2714 Server: Compiled successfully in 12.74s\n[info]\n[info]   Success! Generated static files in build.\n[info]\n[info]\n[success] Total time: 16 s, completed 27 Jun. 2020, 5:55:15 pm\n\n")),(0,a.kt)("p",null,"To publish ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages"),", run the following task in sbt console"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sbt:project-name> publishToGitHubPages\n")))}p.isMDXComponent=!0},1837:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sbt-docusaur-400x400-3fe939c98c11934926049e803be28480.png"}}]);