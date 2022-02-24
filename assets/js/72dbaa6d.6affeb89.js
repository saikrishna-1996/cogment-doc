"use strict";(self.webpackChunkcogment_doc=self.webpackChunkcogment_doc||[]).push([[923],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,u=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return r?n.createElement(u,o(o({ref:t},m),{},{components:r})):n.createElement(u,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6661:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Orchestrator",sidebar_position:2},s="Orchestrator",c={unversionedId:"cogment-components/orchestrator",id:"cogment-components/orchestrator",title:"Orchestrator",description:"Repository Latest Release",source:"@site/docs/cogment-components/orchestrator.md",sourceDirName:"cogment-components",slug:"/cogment-components/orchestrator",permalink:"/docs/cogment-components/orchestrator",tags:[],version:"current",lastUpdatedAt:1645720139,formattedLastUpdatedAt:"2/24/2022",sidebarPosition:2,frontMatter:{title:"Orchestrator",sidebar_position:2},sidebar:"docSidebar",previous:{title:"CLI",permalink:"/docs/cogment-components/cli"},next:{title:"Model Registry",permalink:"/docs/cogment-components/model-registry"}},m=[{value:"Command line",id:"command-line",children:[],level:2},{value:"Environment variables",id:"environment-variables",children:[],level:2}],p={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"orchestrator"},"Orchestrator"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cogment/cogment-orchestrator"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/repository-cogment%2Fcogment--orchestrator-%23ffb400?style=flat-square&logo=github",alt:"Repository"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/cogment/orchestrator"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/v/cogment/orchestrator?sort=semver&style=flat-square",alt:"Latest Release"}))),(0,i.kt)("p",null,"The Orchestrator is the heart of Cogment. It ties all services together. It is a Linux based single executable configured through command line and some environment variables."),(0,i.kt)("h2",{id:"command-line"},"Command line"),(0,i.kt)("p",null,"The Orchestrator is simply called this way"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ orchestrator --lifecycle_port=9001 --actor_port=9001 --params=params.yaml --pre_trial_hooks=grpc://config:9001\n")),(0,i.kt)("p",null,"All configuration is possible through the command line. The various command line options are described here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"help"),": Outputs the list of command line arguments with a short description. Also shows the recognized ",(0,i.kt)("a",{parentName:"li",href:"#environment-variables"},"environment variables"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": Outputs the version of the Orchestrator to stdout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lifecycle_port"),": The TCP port where to serve the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cogment/cogment-low-level-api-guide/grpc#service-triallifecyclesp"},"trial lifecycle gRPC service"),". This is where the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cogment/cogment-api-guide#controller"},"Controller")," connects to. Default: 9000."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actor_port"),": The TCP port where to serve the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cogment/cogment-low-level-api-guide/grpc#service-clientactorsp"},"client actor gRPC service"),". This is where ",(0,i.kt)("a",{parentName:"li",href:"/docs/cogment/cogment-api-guide#service-actor-client-actor"},"Client Actors")," connect to. Default: 9000"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),": The name of the YAML file containing the ",(0,i.kt)("a",{parentName:"li",href:"/docs/cogment/cogment-api-reference/parameters"},"default parameters for new trials"),". If defined, these parameters will be sent to the first pre-trial hooks before trial starts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pre_trial_hooks"),": gRPC endpoint definitions for ",(0,i.kt)("a",{parentName:"li",href:"/docs/cogment/cogment-api-guide#pre-trial-hook"},"pre-trial hooks"),', separated by commas. A gRPC endpoint is a URL that starts with "grpc://". Hooks are called before a new trial starts. They are called in order, in a pipeline fashion to set the parameters for new trials. The first hook will receive the default parameters, the last hook result will be used as the parameters for the new trial.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prometheus_port"),": The TCP port where to serve Prometheus metrics. If not defined, Prometheus metrics are not served."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status_file"),': File containing simple status for the Orchestrator. This is useful when running the Orchestrator inside containers or synchronizing with external components. The file is open and stays open while the Orchestrator runs. The file will contain one to three letters: I, R, T. "I" indicates that the Orchestrator is initializing. When the Orchestrator starts, the file only contains this letter. "R" indicates that the Orchestrator is ready. This letter is added to the file (thus the file will normally contain "IR" at this point). "T" indicates that the Orchestrator has terminated (crashes will not set this file to "T"). Thus after a normal end, the file will contain "IRT".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"private_key"),": File name containg a PEM encoded private key for encrypted communication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"root_cert"),": File name containing a PEM encoded trusted root certificate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trust_chain"),": File name containing a PEM encoded trust chain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"log_level"),": Set to define the minimum level for logging. Possible values are: ",(0,i.kt)("inlineCode",{parentName:"li"},"off"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"warning"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"debug"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"trace"),". Note however that all trace and most debug level logs will only output if running the debug compiled version of the Orchestrator. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"info"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"log_file"),": Base file name for daily log output. The name will be suffixed with the date and a new file will be made every day. If not provided the logs go to stdout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gc_frequency"),": Number of (started) trials between trial garbage collection. The Orchestrator periodically deletes ended and stale trials, this parameter controls how often this cleanup happens. The garbage collection may happen on the start of any trial.")),(0,i.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"Environment variables correspond to one of the command line parameters. But if both are provided, the command line takes precedence."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COGMENT_LIFECYCLE_PORT"),": This is the same as the ",(0,i.kt)("inlineCode",{parentName:"li"},"lifecycle_port")," command line parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COGMENT_ACTOR_PORT"),": This is the same as the ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_port")," command line parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COGMENT_ORCHESTRATOR_PROMETHEUS_PORT"),": This is the same as the ",(0,i.kt)("inlineCode",{parentName:"li"},"prometheus_port")," command line parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COGMENT_PRE_TRIAL_HOOKS"),": This is the same as the ",(0,i.kt)("inlineCode",{parentName:"li"},"pre_trial_hooks")," command line parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COGMENT_DEFAULT_PARAMS_FILE"),": This is the same as the ",(0,i.kt)("inlineCode",{parentName:"li"},"params")," command line parameter.")))}h.isMDXComponent=!0}}]);