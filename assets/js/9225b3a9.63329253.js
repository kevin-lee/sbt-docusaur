"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[446],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),g=l,k=m["".concat(p,".").concat(g)]||m[g]||d[g]||i;return a?n.createElement(k,r(r({ref:t},s),{},{components:a})):n.createElement(k,r({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const i={id:"config",title:"Config"},r=void 0,o={unversionedId:"config",id:"config",title:"Config",description:"Essential settings",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",draft:!1,tags:[],version:"current",frontMatter:{id:"config",title:"Config"},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Run to Build and Publish",permalink:"/docs/run"}},p={},u=[{value:"Essential settings",id:"essential-settings",level:2},{value:"Docusaur Directory *",id:"docusaur-directory-",level:3},{value:"Docusaur Build Directory *",id:"docusaur-build-directory-",level:3},{value:"GitHub Org Name / Username",id:"github-org-name--username",level:3},{value:"GitHub Repo Name",id:"github-repo-name",level:3},{value:"More Settings",id:"more-settings",level:2},{value:"<code>npm</code> Path",id:"npm-path",level:3},{value:"Algolia Config Filename (Optional)",id:"algolia-config-filename-optional",level:3},{value:"Algolia Application ID (Optional)",id:"algolia-application-id-optional",level:3},{value:"Algolia ApiKey (Optional)",id:"algolia-apikey-optional",level:3},{value:"Algolia Index Name (Optional)",id:"algolia-index-name-optional",level:3},{value:"Google Analytics Config File (Optional)",id:"google-analytics-config-file-optional",level:3},{value:"Google Analytics Tracking ID (Optional)",id:"google-analytics-tracking-id-optional",level:3},{value:"Google Analytics Anonymize IP (Optional)",id:"google-analytics-anonymize-ip-optional",level:3},{value:"Use GitHub Enterprise",id:"use-github-enterprise",level:2},{value:"GitHub Enterprise - Base URL",id:"github-enterprise---base-url",level:3},{value:"GitHub Enterprise - Authorize URL",id:"github-enterprise---authorize-url",level:3},{value:"GitHub Enterprise - Access Token URL",id:"github-enterprise---access-token-url",level:3},{value:"GitHub Enterprise - Headers",id:"github-enterprise---headers",level:3}],s={toc:u};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"essential-settings"},"Essential settings"),(0,l.kt)("p",null,"Add set ",(0,l.kt)("inlineCode",{parentName:"p"},"DocusaurPlugin")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"build.sbt"),"."),(0,l.kt)("p",null,"e.g.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'lazy val root = (project in file("."))\n  .enablePlugins(DocusaurPlugin)\n')),(0,l.kt)("p",null,"and add the following setting keys to the project."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurDir := file("path" / "to" / "docusaurus-website"),\ndocusaurBuildDir := docusaurDir.value / "build" / "path",\n')),(0,l.kt)("p",null,"To publish the website to GitHub Page, add the following keys as well. However, these can be automatically set by ",(0,l.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," if missing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'// Optional. It\'s automatically done by sbt-github-pages\ngitHubPagesOrgName := "USERNAME_OR_ORG",\n// Optional. It\'s automatically done by sbt-github-pages\ngitHubPagesRepoName := "YOUR_PROJECT",\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"sbt-docusaur")," uses ",(0,l.kt)("a",{parentName:"p",href:"https://sbt-github-pages.kevinly.dev"},"sbt-github-pages")," to publish the website to GitHub Pages.")),(0,l.kt)("p",null,"e.g.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'lazy val root = (project in file("."))\n  .enablePlugins(DocusaurPlugin)\n  .settings(\n    organization := "com.some.org",\n    name         := "project-name",\n\n    docusaurDir := (ThisBuild / baseDirectory).value / "website",\n    docusaurBuildDir := docusaurDir.value / "build",\n\n    gitHubPagesOrgName := "github-username",\n    gitHubPagesRepoName := "project-name"\n  )\n')),(0,l.kt)("h3",{id:"docusaur-directory-"},"Docusaur Directory *"),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"This key must be set by the user of this plugin.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docusaurDir")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"File")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"The path to the Docusaurus webiste."),(0,l.kt)("p",null,"e.g.) If the Docusaurus website is located at ",(0,l.kt)("inlineCode",{parentName:"p"},"project-root/website/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurDir := (ThisBuild / baseDirectory).value / "website"\n')),(0,l.kt)("h3",{id:"docusaur-build-directory-"},"Docusaur Build Directory *"),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"This key must be set by the user of this plugin.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docusaurBuildDir")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"File")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"The path to the build path of Docusaurus webiste."),(0,l.kt)("p",null,"e.g.) If the Docusaurus website is located at ",(0,l.kt)("inlineCode",{parentName:"p"},"project-root/website/")," and the build path is at ",(0,l.kt)("inlineCode",{parentName:"p"},"project-root/website/build")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurBuildDir := docusaurDir.value / "build"\n')),(0,l.kt)("p",null,"If the Docusaurus website is located at ",(0,l.kt)("inlineCode",{parentName:"p"},"project-root/website/")," and the build path is at ",(0,l.kt)("inlineCode",{parentName:"p"},"project-root/website/build/some-project")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurBuildDir := docusaurDir.value / "build" / "some-project"\n')),(0,l.kt)("h3",{id:"github-org-name--username"},"GitHub Org Name / Username"),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"This key must be set by the user of this plugin to publish the website to GitHub Pages."),(0,l.kt)("p",{parentName:"admonition"},"However, it is automatically done by ",(0,l.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," so you don't need to set it up unless you want to set it otherwise.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gitHubPagesOrgName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Value obtained from calling ",(0,l.kt)("inlineCode",{parentName:"td"},"git remote"))))),(0,l.kt)("p",null,"The GitHub organization name (or username) (i.e.",(0,l.kt)("inlineCode",{parentName:"p"},"OrgName")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"https://github.com/OrgName/RepoName"),")"),(0,l.kt)("p",null,"e.g.) If the repo is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kevin-Lee/sbt-docusaur"},"https://github.com/Kevin-Lee/sbt-docusaur")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesOrgName := "Kevin-Lee"\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You don't need to set it up as ",(0,l.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," does it automatically with the value from ",(0,l.kt)("inlineCode",{parentName:"p"},"git remote"),".")),(0,l.kt)("h3",{id:"github-repo-name"},"GitHub Repo Name"),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"This key must be set by the user of this plugin to publish the website to GitHub Pages."),(0,l.kt)("p",{parentName:"admonition"},"However, it is automatically done by ",(0,l.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," so you don't need to set it up unless you want to set it otherwise.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gitHubPagesRepoName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Value obtained from calling ",(0,l.kt)("inlineCode",{parentName:"td"},"git remote"))))),(0,l.kt)("p",null,"The GitHub project repository name (i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"RepoName")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"https://github.com/OrgName/RepoName"),")"),(0,l.kt)("p",null,"e.g.) If the repo is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kevin-Lee/sbt-docusaur"},"https://github.com/Kevin-Lee/sbt-docusaur")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesRepoName := "sbt-docusaur"\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You don't need to set it up as ",(0,l.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," does it automatically with the value from ",(0,l.kt)("inlineCode",{parentName:"p"},"git remote"),".")),(0,l.kt)("h2",{id:"more-settings"},"More Settings"),(0,l.kt)("h3",{id:"npm-path"},(0,l.kt)("inlineCode",{parentName:"h3"},"npm")," Path"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docusaurNpmPath")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option[File]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None"))))),(0,l.kt)("p",null,"This is a setting key to specify the path to ",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),". By default, it uses npm found in the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," env var.\nSo you don't need to specify it unless you want to use ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," from some other path."),(0,l.kt)("h3",{id:"algolia-config-filename-optional"},"Algolia Config Filename (Optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docusaurAlgoliaConfigFilename")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'sys.env.getOrElse("ALGOLIA_CONFIG_FILENAME", "algolia.config.json")'))))),(0,l.kt)("p",null,"The name of Algolia config file."),(0,l.kt)("h3",{id:"algolia-application-id-optional"},"Algolia Application ID (Optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docusaurAlgoliaAppId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option[String]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'sys.env.get("ALGOLIA_APP_ID")'))))),(0,l.kt)("p",null,"Algolia Application ID. If missing, Algolia config with an empty object (",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),") is created."),(0,l.kt)("h3",{id:"algolia-apikey-optional"},"Algolia ApiKey (Optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docusaurAlgoliaApiKey")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option[String]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'sys.env.get("ALGOLIA_API_KEY")'))))),(0,l.kt)("p",null,"Algolia API Key. If missing, Algolia config with an empty object (",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),") is created."),(0,l.kt)("h3",{id:"algolia-index-name-optional"},"Algolia Index Name (Optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docusaurAlgoliaIndexName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option[String]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'sys.env.get("ALGOLIA_INDEX_NAME")'))))),(0,l.kt)("p",null,"Algolia index name. If missing, Algolia config with an empty object (",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),") is created."),(0,l.kt)("h3",{id:"google-analytics-config-file-optional"},"Google Analytics Config File (Optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docusaurGoogleAnalyticsConfigFilename")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'sys.env.getOrElse("GA_CONFIG_FILENAME", "google-analytics.config.json")'))))),(0,l.kt)("p",null,"e.g.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export GA_CONFIG_FILENAME=ga-conf.json\n")),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurGoogleAnalyticsConfigFilename := "ga-conf.json"\n')),(0,l.kt)("h3",{id:"google-analytics-tracking-id-optional"},"Google Analytics Tracking ID (Optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docusaurGoogleAnalyticsTrackingId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List[String]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'sys.env.getOrElse("GA_TRACKING_ID")'))))),(0,l.kt)("p",null,"Google Analytics Tracking ID. If missing, Google Analytics config with an empty object (",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),") is created."),(0,l.kt)("p",null,"e.g.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export GA_TRACKING_ID=G-000000\n")),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurGoogleAnalyticsTrackingId := List("G-000000")\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,"You can have multiple Tracking IDs with comma separated values (CSV) in the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"GA_TRACKING_ID"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export GA_TRACKING_ID=G-000000,G-000001,G-000002,G-000003\n")),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurGoogleAnalyticsTrackingId := List("G-000000", "G-000001", "G-000002", "G-000003")\n')),(0,l.kt)("h3",{id:"google-analytics-anonymize-ip-optional"},"Google Analytics Anonymize IP (Optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docusaurGoogleAnalyticsAnonymizeIp")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option[Boolean]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'sys.env.getOrElse("GA_ANONYMIZE_IP")'))))),(0,l.kt)("p",null,"If missing, no ",(0,l.kt)("inlineCode",{parentName:"p"},"anonymizeIP")," is written in the config file."),(0,l.kt)("p",null,"e.g.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export GA_ANONYMIZE_IP=true\n")),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"docusaurGoogleAnalyticsAnonymizeIp := Some(true)\n")),(0,l.kt)("h2",{id:"use-github-enterprise"},"Use GitHub Enterprise"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," support GitHub Enterprise"),(0,l.kt)("p",null,"There are four properties can be used to use GitHub Enterprise.\nTo set these up, get the right values from your company."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gitHubPagesGitHubBaseUrl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gitHubPagesGitHubAuthorizeUrl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gitHubPagesGitHubAccessTokenUrl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gitHubPagesGitHubHeaders"))),(0,l.kt)("h3",{id:"github-enterprise---base-url"},"GitHub Enterprise - Base URL"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gitHubPagesGitHubBaseUrl")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"ENV VAR ",(0,l.kt)("inlineCode",{parentName:"td"},"GITHUB_ENT_BASE_URL")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https://api.github.com/"))))),(0,l.kt)("p",null,"NOTE: The trailing slash is significant. So ",(0,l.kt)("inlineCode",{parentName:"p"},"https://some.url.blah")," does not work. It should be ",(0,l.kt)("inlineCode",{parentName:"p"},"https://some.url.blah/"),"."),(0,l.kt)("p",null,"e.g.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'export GITHUB_ENT_BASE_URL="https://github.my-company.internal/api/v3/"\n')),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesGitHubBaseUrl := "https://github.my-company.internal/api/v3/"\n')),(0,l.kt)("h3",{id:"github-enterprise---authorize-url"},"GitHub Enterprise - Authorize URL"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gitHubPagesGitHubAuthorizeUrl")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"ENV VAR ",(0,l.kt)("inlineCode",{parentName:"td"},"GITHUB_ENT_AUTHORIZE_URL")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https://github.com/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&state=%s"))))),(0,l.kt)("p",null,"e.g.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'export GITHUB_ENT_AUTHORIZE_URL="https://github.my-company.internal/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&state=%s"\n')),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesGitHubAuthorizeUrl :=\n  "https://github.my-company.internal/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&state=%s"\n')),(0,l.kt)("h3",{id:"github-enterprise---access-token-url"},"GitHub Enterprise - Access Token URL"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gitHubPagesGitHubAccessTokenUrl")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"ENV VAR ",(0,l.kt)("inlineCode",{parentName:"td"},"GITHUB_ENT_ACCESS_TOKEN_URL")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https://github.com/login/oauth/access_token"))))),(0,l.kt)("p",null,"e.g.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'export GITHUB_ENT_ACCESS_TOKEN_URL="https://github.my-company.internal/login/oauth/access_token"\n')),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesGitHubAccessTokenUrl :=\n  "https://github.my-company.internal/login/oauth/access_token"\n')),(0,l.kt)("h3",{id:"github-enterprise---headers"},"GitHub Enterprise - Headers"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gitHubPagesGitHubHeaders")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Map[String, String]")),(0,l.kt)("td",{parentName:"tr",align:null},"ENV VAR ",(0,l.kt)("inlineCode",{parentName:"td"},"GITHUB_ENT_HEADERS")," or ",(0,l.kt)("inlineCode",{parentName:"td"},'Map("User-Agent" -> "github4s")'))))),(0,l.kt)("p",null,"e.g.)\nWhen using the environment variable, the value should be JSON containing String key to String value pairs.\ne.g.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'export GITHUB_ENT_HEADERS=\'{"User-Agent":"app-doc-publisher", "something-else":"blah"}\'\n')),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesGitHubHeaders := Map("User-Agent" -> "app-doc-publisher")\n')))}m.isMDXComponent=!0}}]);