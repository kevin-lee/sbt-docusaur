"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[446],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),g=l,k=d["".concat(p,".").concat(g)]||d[g]||m[g]||i;return a?n.createElement(k,r(r({ref:t},u),{},{components:a})):n.createElement(k,r({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5142:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),r=["components"],o={id:"config",title:"Config"},p=void 0,s={unversionedId:"config",id:"config",title:"Config",description:"Essential settings",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",tags:[],version:"current",frontMatter:{id:"config",title:"Config"},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Run to Build and Publish",permalink:"/docs/run"}},u={},m=[{value:"Essential settings",id:"essential-settings",level:2},{value:"Docusaur Directory *",id:"docusaur-directory-",level:3},{value:"Docusaur Build Directory *",id:"docusaur-build-directory-",level:3},{value:"GitHub Org Name / Username",id:"github-org-name--username",level:3},{value:"GitHub Repo Name",id:"github-repo-name",level:3},{value:"More Settings",id:"more-settings",level:2},{value:"<code>npm</code> Path",id:"npm-path",level:3},{value:"Algolia Config Filename (Optional)",id:"algolia-config-filename-optional",level:3},{value:"Algolia ApiKey (Optional)",id:"algolia-apikey-optional",level:3},{value:"Algolia Index Name (Optional)",id:"algolia-index-name-optional",level:3},{value:"Google Analytics Config File (Optional)",id:"google-analytics-config-file-optional",level:3},{value:"Google Analytics Tracking ID (Optional)",id:"google-analytics-tracking-id-optional",level:3},{value:"Google Analytics Anonymize IP (Optional)",id:"google-analytics-anonymize-ip-optional",level:3},{value:"Use GitHub Enterprise",id:"use-github-enterprise",level:2},{value:"GitHub Enterprise - Base URL",id:"github-enterprise---base-url",level:3},{value:"GitHub Enterprise - Authorize URL",id:"github-enterprise---authorize-url",level:3},{value:"GitHub Enterprise - Access Token URL",id:"github-enterprise---access-token-url",level:3},{value:"GitHub Enterprise - Headers",id:"github-enterprise---headers",level:3}],d={toc:m};function g(e){var t=e.components,a=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"essential-settings"},"Essential settings"),(0,i.kt)("p",null,"Add set ",(0,i.kt)("inlineCode",{parentName:"p"},"DocusaurPlugin")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt"),"."),(0,i.kt)("p",null,"e.g.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'lazy val root = (project in file("."))\n  .enablePlugins(DocusaurPlugin)\n')),(0,i.kt)("p",null,"and add the following setting keys to the project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurDir := file("path" / "to" / "docusaurus-website"),\ndocusaurBuildDir := docusaurDir.value / "build" / "path",\n')),(0,i.kt)("p",null,"To publish the website to GitHub Page, add the following keys as well. However, these can be automatically set by ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," if missing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// Optional. It\'s automatically done by sbt-github-pages\ngitHubPagesOrgName := "USERNAME_OR_ORG",\n// Optional. It\'s automatically done by sbt-github-pages\ngitHubPagesRepoName := "YOUR_PROJECT",\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"sbt-docusaur")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://sbt-github-pages.kevinly.dev"},"sbt-github-pages")," to publish the website to GitHub Pages."))),(0,i.kt)("p",null,"e.g.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'lazy val root = (project in file("."))\n  .enablePlugins(DocusaurPlugin)\n  .settings(\n    organization := "com.some.org",\n    name         := "project-name",\n\n    docusaurDir := (ThisBuild / baseDirectory).value / "website",\n    docusaurBuildDir := docusaurDir.value / "build",\n\n    gitHubPagesOrgName := "github-username",\n    gitHubPagesRepoName := "project-name"\n  )\n')),(0,i.kt)("h3",{id:"docusaur-directory-"},"Docusaur Directory *"),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This key must be set by the user of this plugin."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docusaurDir")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"File")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"The path to the Docusaurus webiste."),(0,i.kt)("p",null,"e.g.) If the Docusaurus website is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"project-root/website/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurDir := (ThisBuild / baseDirectory).value / "website"\n')),(0,i.kt)("h3",{id:"docusaur-build-directory-"},"Docusaur Build Directory *"),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This key must be set by the user of this plugin."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docusaurBuildDir")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"File")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"The path to the build path of Docusaurus webiste."),(0,i.kt)("p",null,"e.g.) If the Docusaurus website is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"project-root/website/")," and the build path is at ",(0,i.kt)("inlineCode",{parentName:"p"},"project-root/website/build")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurBuildDir := docusaurDir.value / "build"\n')),(0,i.kt)("p",null,"If the Docusaurus website is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"project-root/website/")," and the build path is at ",(0,i.kt)("inlineCode",{parentName:"p"},"project-root/website/build/some-project")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurBuildDir := docusaurDir.value / "build" / "some-project"\n')),(0,i.kt)("h3",{id:"github-org-name--username"},"GitHub Org Name / Username"),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This key must be set by the user of this plugin to publish the website to GitHub Pages."),(0,i.kt)("p",{parentName:"div"},"However, it is automatically done by ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," so you don't need to set it up unless you want to set it otherwise."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gitHubPagesOrgName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Value obtained from calling ",(0,i.kt)("inlineCode",{parentName:"td"},"git remote"))))),(0,i.kt)("p",null,"The GitHub organization name (or username) (i.e.",(0,i.kt)("inlineCode",{parentName:"p"},"OrgName")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/OrgName/RepoName"),")"),(0,i.kt)("p",null,"e.g.) If the repo is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Kevin-Lee/sbt-docusaur"},"https://github.com/Kevin-Lee/sbt-docusaur")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesOrgName := "Kevin-Lee"\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You don't need to set it up as ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," does it automatically with the value from ",(0,i.kt)("inlineCode",{parentName:"p"},"git remote"),"."))),(0,i.kt)("h3",{id:"github-repo-name"},"GitHub Repo Name"),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This key must be set by the user of this plugin to publish the website to GitHub Pages."),(0,i.kt)("p",{parentName:"div"},"However, it is automatically done by ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," so you don't need to set it up unless you want to set it otherwise."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gitHubPagesRepoName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Value obtained from calling ",(0,i.kt)("inlineCode",{parentName:"td"},"git remote"))))),(0,i.kt)("p",null,"The GitHub project repository name (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"RepoName")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/OrgName/RepoName"),")"),(0,i.kt)("p",null,"e.g.) If the repo is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Kevin-Lee/sbt-docusaur"},"https://github.com/Kevin-Lee/sbt-docusaur")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesRepoName := "sbt-docusaur"\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You don't need to set it up as ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," does it automatically with the value from ",(0,i.kt)("inlineCode",{parentName:"p"},"git remote"),"."))),(0,i.kt)("h2",{id:"more-settings"},"More Settings"),(0,i.kt)("h3",{id:"npm-path"},(0,i.kt)("inlineCode",{parentName:"h3"},"npm")," Path"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docusaurNpmPath")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Option[File]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"None"))))),(0,i.kt)("p",null,"This is a setting key to specify the path to ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),". By default, it uses npm found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," env var.\nSo you don't need to specify it unless you want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," from some other path."),(0,i.kt)("h3",{id:"algolia-config-filename-optional"},"Algolia Config Filename (Optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docusaurAlgoliaConfigFilename")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'sys.env.getOrElse("ALGOLIA_CONFIG_FILENAME", "algolia.config.json")'))))),(0,i.kt)("p",null,"The name of Algolia config file."),(0,i.kt)("h3",{id:"algolia-apikey-optional"},"Algolia ApiKey (Optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docusaurAlgoliaApiKey")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Option[String]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'sys.env.get("ALGOLIA_API_KEY")'))))),(0,i.kt)("p",null,"Algolia API Key. If missing, Algolia config with an empty object (",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),") is created."),(0,i.kt)("h3",{id:"algolia-index-name-optional"},"Algolia Index Name (Optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docusaurAlgoliaIndexName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Option[String]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'sys.env.get("ALGOLIA_INDEX_NAME")'))))),(0,i.kt)("p",null,"Algolia index name. If missing, Algolia config with an empty object (",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),") is created."),(0,i.kt)("h3",{id:"google-analytics-config-file-optional"},"Google Analytics Config File (Optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docusaurGoogleAnalyticsConfigFilename")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'sys.env.getOrElse("GA_CONFIG_FILENAME", "google-analytics.config.json")'))))),(0,i.kt)("p",null,"e.g.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export GA_CONFIG_FILENAME=ga-conf.json\n")),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurGoogleAnalyticsConfigFilename := "ga-conf.json"\n')),(0,i.kt)("h3",{id:"google-analytics-tracking-id-optional"},"Google Analytics Tracking ID (Optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docusaurGoogleAnalyticsTrackingId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Option[String]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'sys.env.getOrElse("GA_TRACKING_ID")'))))),(0,i.kt)("p",null,"Google Analytics Tracking ID. If missing, Google Analytics config with an empty object (",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),") is created."),(0,i.kt)("p",null,"e.g.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export GA_TRACKING_ID=UA-000000-1\n")),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'docusaurGoogleAnalyticsTrackingId := Some("UA-000000-1")\n')),(0,i.kt)("h3",{id:"google-analytics-anonymize-ip-optional"},"Google Analytics Anonymize IP (Optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docusaurGoogleAnalyticsAnonymizeIp")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Option[Boolean]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'sys.env.getOrElse("GA_ANONYMIZE_IP")'))))),(0,i.kt)("p",null,"If missing, no ",(0,i.kt)("inlineCode",{parentName:"p"},"anonymizeIP")," is written in the config file."),(0,i.kt)("p",null,"e.g.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export GA_ANONYMIZE_IP=true\n")),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"docusaurGoogleAnalyticsAnonymizeIp := Some(true)\n")),(0,i.kt)("h2",{id:"use-github-enterprise"},"Use GitHub Enterprise"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sbt-github-pages")," support GitHub Enterprise"),(0,i.kt)("p",null,"There are four properties can be used to use GitHub Enterprise.\nTo set these up, get the right values from your company."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gitHubPagesGitHubBaseUrl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gitHubPagesGitHubAuthorizeUrl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gitHubPagesGitHubAccessTokenUrl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gitHubPagesGitHubHeaders"))),(0,i.kt)("h3",{id:"github-enterprise---base-url"},"GitHub Enterprise - Base URL"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gitHubPagesGitHubBaseUrl")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"ENV VAR ",(0,i.kt)("inlineCode",{parentName:"td"},"GITHUB_ENT_BASE_URL")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"https://api.github.com/"))))),(0,i.kt)("p",null,"NOTE: The trailing slash is significant. So ",(0,i.kt)("inlineCode",{parentName:"p"},"https://some.url.blah")," does not work. It should be ",(0,i.kt)("inlineCode",{parentName:"p"},"https://some.url.blah/"),"."),(0,i.kt)("p",null,"e.g.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export GITHUB_ENT_BASE_URL="https://github.my-company.internal/api/v3/"\n')),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesGitHubBaseUrl := "https://github.my-company.internal/api/v3/"\n')),(0,i.kt)("h3",{id:"github-enterprise---authorize-url"},"GitHub Enterprise - Authorize URL"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gitHubPagesGitHubAuthorizeUrl")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"ENV VAR ",(0,i.kt)("inlineCode",{parentName:"td"},"GITHUB_ENT_AUTHORIZE_URL")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"https://github.com/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&state=%s"))))),(0,i.kt)("p",null,"e.g.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export GITHUB_ENT_AUTHORIZE_URL="https://github.my-company.internal/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&state=%s"\n')),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesGitHubAuthorizeUrl :=\n  "https://github.my-company.internal/login/oauth/authorize?client_id=%s&redirect_uri=%s&scope=%s&state=%s"\n')),(0,i.kt)("h3",{id:"github-enterprise---access-token-url"},"GitHub Enterprise - Access Token URL"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gitHubPagesGitHubAccessTokenUrl")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"ENV VAR ",(0,i.kt)("inlineCode",{parentName:"td"},"GITHUB_ENT_ACCESS_TOKEN_URL")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"https://github.com/login/oauth/access_token"))))),(0,i.kt)("p",null,"e.g.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export GITHUB_ENT_ACCESS_TOKEN_URL="https://github.my-company.internal/login/oauth/access_token"\n')),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesGitHubAccessTokenUrl :=\n  "https://github.my-company.internal/login/oauth/access_token"\n')),(0,i.kt)("h3",{id:"github-enterprise---headers"},"GitHub Enterprise - Headers"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gitHubPagesGitHubHeaders")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Map[String, String]")),(0,i.kt)("td",{parentName:"tr",align:null},"ENV VAR ",(0,i.kt)("inlineCode",{parentName:"td"},"GITHUB_ENT_HEADERS")," or ",(0,i.kt)("inlineCode",{parentName:"td"},'Map("User-Agent" -> "github4s")'))))),(0,i.kt)("p",null,"e.g.)\nWhen using the environment variable, the value should be JSON containing String key to String value pairs.\ne.g.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export GITHUB_ENT_HEADERS=\'{"User-Agent":"app-doc-publisher", "something-else":"blah"}\'\n')),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'gitHubPagesGitHubHeaders := Map("User-Agent" -> "app-doc-publisher")\n')))}g.isMDXComponent=!0}}]);