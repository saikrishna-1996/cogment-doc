"use strict";(self.webpackChunkcogment_doc=self.webpackChunkcogment_doc||[]).push([[696],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6485:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"CLI",sidebar_position:1},l="Command Line Interface (CLI)",p={unversionedId:"cogment-components/cli",id:"cogment-components/cli",title:"CLI",description:"Repository Latest GitHub release",source:"@site/docs/cogment-components/cli.md",sourceDirName:"cogment-components",slug:"/cogment-components/cli",permalink:"/docs/cogment-components/cli",tags:[],version:"current",lastUpdatedAt:1645720139,formattedLastUpdatedAt:"2/24/2022",sidebarPosition:1,frontMatter:{title:"CLI",sidebar_position:1},sidebar:"docSidebar",previous:{title:"Migrate from Cogment v1 to v2",permalink:"/docs/cogment/implementation-recipes/v2-migration-guide"},next:{title:"Orchestrator",permalink:"/docs/cogment-components/orchestrator"}},s=[{value:"copy",id:"copy",children:[],level:2},{value:"init",id:"init",children:[],level:2},{value:"run",id:"run",children:[],level:2}],m={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cogment/cogment-cli"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/repository-cogment%2Fcogment--cli-%23ffb400?style=flat-square&logo=github",alt:"Repository"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cogment/cogment-cli/releases"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/cogment/cogment-cli?label=release&sort=semver&style=flat-square",alt:"Latest GitHub release"}))),(0,a.kt)("p",null,"Cogment CLI is the ",(0,a.kt)("strong",{parentName:"p"},"out-of-the-box")," entry point to use Cogment. It provides a set of tools to initialize a Cogment project and run the code generations phase."),(0,a.kt)("h1",{id:"commands"},"Commands"),(0,a.kt)("h2",{id:"copy"},"copy"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Copy all files in a list into all folders in that list, supports glob"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cogment copy spec.yaml *.proto environment agent web-client\n")),(0,a.kt)("h2",{id:"init"},"init"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Initializes a cogment project, this will ask you a few questions about what should be included in the generated project"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cogment init my_new_project\n")),(0,a.kt)("p",null,"A full tutorial on how to bootstrap a project can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/cogment/tutorial/bootstrap-and-data-structures"},"here")),(0,a.kt)("h2",{id:"run"},"run"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Runs a command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"commands:")," section of the cogment.yaml file in the current directory."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cogment run generate\n")),(0,a.kt)("p",null,"An explanation of the cogment.yaml file can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/cogment/cogment-api-reference/cogment-yaml"},"here")))}u.isMDXComponent=!0}}]);