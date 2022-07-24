"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1946],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>f});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?t.createElement(g,l(l({ref:a},p),{},{components:n})):t.createElement(g,l({ref:a},p))}));function f(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1401:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(7462),r=(n(7294),n(3905));const i={},l="Carbon language specification",o={unversionedId:"lang/README",id:"lang/README",title:"Carbon language specification",description:"\x3c!--",source:"@site/../docs/spec/lang/README.md",sourceDirName:"lang",slug:"/lang/",permalink:"/carbon-lang/spec/lang/",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/spec/lang/README.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Spec",permalink:"/carbon-lang/spec/"},next:{title:"Execution",permalink:"/carbon-lang/spec/lang/execution"}},s={},c=[{value:"Program structure",id:"program-structure",level:2},{value:"Conformance",id:"conformance",level:2},{value:"Translation",id:"translation",level:2},{value:"Linkage",id:"linkage",level:2}],p={toc:c};function m(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"carbon-language-specification"},"Carbon language specification"),(0,r.kt)("h2",{id:"program-structure"},"Program structure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("em",{parentName:"p"},"program")," is a collection of one or more linkage units that are\n",(0,r.kt)("a",{parentName:"p",href:"#linkage"},"linked")," together.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("em",{parentName:"p"},"Carbon linkage unit")," is the result of ",(0,r.kt)("a",{parentName:"p",href:"#translation"},"translating")," a\nsource file. A ",(0,r.kt)("em",{parentName:"p"},"foreign linkage unit")," is an artifact produced by a\ntranslation process for some other programming language. A linkage unit is\neither a Carbon linkage unit or a foreign linkage unit.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("em",{parentName:"p"},"source file")," is a sequence of Unicode code points."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: Source files are typically stored on disk in files with a ",(0,r.kt)("inlineCode",{parentName:"p"},".carbon"),"\nfile extension, encoded in UTF-8.")))),(0,r.kt)("h2",{id:"conformance"},"Conformance"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A program is ",(0,r.kt)("em",{parentName:"p"},"valid"),' if it contains no constructs that violate "shall"\nconstraints in this specification. Otherwise, the program is ',(0,r.kt)("em",{parentName:"p"},"invalid"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An implementation is ",(0,r.kt)("em",{parentName:"p"},"conforming")," if it accepts all valid programs, it\nrejects all invalid programs for which a diagnostic is required, and the\n",(0,r.kt)("a",{parentName:"p",href:"/carbon-lang/spec/lang/execution"},"execution")," semantics of all accepted programs is as specified\nin this specification."))),(0,r.kt)("h2",{id:"translation"},"Translation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Translation of a source file into a Carbon linkage unit proceeds as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/carbon-lang/spec/lang/lex"},"Lexical analysis")," decomposes the sequence of code points into a\nsequence of lexical elements."),(0,r.kt)("li",{parentName:"ul"},"Whitespace and text comments are discarded, leaving a sequence of\n",(0,r.kt)("a",{parentName:"li",href:"/carbon-lang/spec/lang/lex"},"tokens"),"."),(0,r.kt)("li",{parentName:"ul"},"The tokens are ",(0,r.kt)("a",{parentName:"li",href:"/carbon-lang/spec/lang/parsing"},"parsed")," into an abstract syntax tree."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/carbon-lang/spec/lang/names"},"Unqualified names are bound")," to declarations in the abstract\nsyntax tree."),(0,r.kt)("li",{parentName:"ul"},"A translated form of each imported ",(0,r.kt)("a",{parentName:"li",href:"/carbon-lang/spec/lang/libs"},"library")," is located and\nloaded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/carbon-lang/spec/lang/semantics"},"Semantic analysis")," is performed: types are determined and\nsemantic checks are performed for all non-template-dependent constructs\nin the abstract syntax tree, constant expressions are evaluated, and\ntemplates are instantiated and semantically analyzed."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: After semantic analysis, an implementation may optionally\nmonomorphize generics by a process similar to template instantiation."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The resulting linkage unit comprises all entities in the translated source\nfile that are either ",(0,r.kt)("a",{parentName:"p",href:"#linkage"},"external")," or are reachable from an external\nentity."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: A linkage unit can include non-monomorphized generics, but never\nincludes templates. Constant evaluation can eliminate references to\nentities.")))),(0,r.kt)("h2",{id:"linkage"},"Linkage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Two declarations declare the same entity if both declarations are in the\nsame library and the same ",(0,r.kt)("a",{parentName:"p",href:"/carbon-lang/spec/lang/names#scopes"},"scope")," and declare the same\n",(0,r.kt)("a",{parentName:"p",href:"/carbon-lang/spec/lang/names"},"name"),"."),(0,r.kt)("p",{parentName:"li"},"TODO: Linkage rules for foreign entities. TODO: Ability to declare\nfile-local entities.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All declarations of an entity shall use the same type.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Every entity that is reachable from a linkage unit in a program shall be\ndefined by a linkage unit in the program; no diagnostic is required unless\nan entity that can be referenced during the ",(0,r.kt)("a",{parentName:"p",href:"/carbon-lang/spec/lang/execution"},"execution")," of the\nprogram is not defined.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"There shall not be more than one definition of an entity in a program."))))}m.isMDXComponent=!0}}]);