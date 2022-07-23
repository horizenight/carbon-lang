"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3549:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(7294),a=n(2164),o=n(7462),l=n(3905);const i={toc:[{value:"Installation",id:"installation",level:3},{value:"Local Development",id:"local-development",level:3},{value:"Build",id:"build",level:3},{value:"Deployment",id:"deployment",level:3}]};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"website"},"Website"),(0,l.kt)("p",null,"This website is built using ",(0,l.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus 2"),", a modern static website generator."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ yarn\n")),(0,l.kt)("h3",{id:"local-development"},"Local Development"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ yarn start\n")),(0,l.kt)("p",null,"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."),(0,l.kt)("h3",{id:"build"},"Build"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ yarn build\n")),(0,l.kt)("p",null,"This command generates static content into the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," directory and can be served using any static contents hosting service."),(0,l.kt)("h3",{id:"deployment"},"Deployment"),(0,l.kt)("p",null,"Using SSH:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ USE_SSH=true yarn deploy\n")),(0,l.kt)("p",null,"Not using SSH:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ GIT_USER=<Your GitHub username> yarn deploy\n")),(0,l.kt)("p",null,"If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the ",(0,l.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch."))}p.isMDXComponent=!0;const c="main_iUjq";function u(){return r.createElement(a.Z,null,r.createElement("main",{className:c},r.createElement(p,null)))}}}]);