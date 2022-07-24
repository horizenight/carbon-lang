"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={},r="Principle: Prefer providing only one way to do a given thing",l={unversionedId:"principles/one_way",id:"principles/one_way",title:"Principle: Prefer providing only one way to do a given thing",description:"\x3c!--",source:"@site/../docs/project/principles/one_way.md",sourceDirName:"principles",slug:"/principles/one_way",permalink:"/carbon-lang/project/principles/one_way",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/project/principles/one_way.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Principle: Low context-sensitivity",permalink:"/carbon-lang/project/principles/low_context_sensitivity"},next:{title:"Safety strategy",permalink:"/carbon-lang/project/principles/safety_strategy"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Background",id:"background",level:2},{value:"Principle",id:"principle",level:2},{value:"Applications of this principle",id:"applications-of-this-principle",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Specialized syntax",id:"specialized-syntax",level:3},{value:"Non-obvious alternatives",id:"non-obvious-alternatives",level:3},{value:"In evolution",id:"in-evolution",level:3},{value:"Alternatives considered",id:"alternatives-considered",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"principle-prefer-providing-only-one-way-to-do-a-given-thing"},"Principle: Prefer providing only one way to do a given thing"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#background"},"Background")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#principle"},"Principle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#applications-of-this-principle"},"Applications of this principle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#caveats"},"Caveats"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#specialized-syntax"},"Specialized syntax")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#non-obvious-alternatives"},"Non-obvious alternatives")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#in-evolution"},"In evolution")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#alternatives-considered"},"Alternatives considered"))),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"It's common in programming languages to provide multiple, similar ways of doing\nthe same thing. Sometimes this reflects the legacy of a language, and\ndifficulties in evolving in ways that would require changes to\ndeveloper-authored code, thereby retaining backwards compatibility. Other times\nit reflects a desire to provide both verbose and concise versions of the same\nsyntax. We are concerned with both forms."),(0,i.kt)("p",null,"We also are cautious about creating alternatives that may give rise to a\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/The_Paradox_of_Choice"},"paradox of choice"),",\nwherein options are similar enough that developers actively spend time analyzing\ntarde-offs, and the time spent that way outweighs the potential benefits of a\ncorrect choice."),(0,i.kt)("p",null,"Where multiple, similar implementation options exist, it can sometimes give rise\nto style guidelines to indicate a preferential choice; sometimes because one\noption is objectively better, but sometimes because making a choice is better\nthan not making one. Even with a style guide, developers may diverge in style by\naccident or intent, choosing different coding patterns simply because either\noption works. It can also become an issue as developers move between an\norganization that they need to learn a new style guide, and relearn habits."),(0,i.kt)("p",null,"A couple examples of this in other languages are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In Perl,\n",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it"},'"There is more than one way to do it."')),(0,i.kt)("li",{parentName:"ul"},"In Python,\n",(0,i.kt)("a",{parentName:"li",href:"https://www.python.org/dev/peps/pep-0020/"},'"There should be one -- and preferably only one -- obvious way to do it."'))),(0,i.kt)("h2",{id:"principle"},"Principle"),(0,i.kt)("p",null,"In Carbon, we will prefer providing only one way to do a given thing. That is,\ngiven a syntax scenario where multiple design options are available, we will\ntend to provide ",(0,i.kt)("em",{parentName:"p"},"one")," option rather than providing several and letting users\nchoose. This echoes Python's principle."),(0,i.kt)("p",null,"Minimizing choices serves several goals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//docs/project/goals.md#language-tools-and-ecosystem"},"Language tools")," should\nbe easier to write and maintain with the lower language complexity implied\nby less duplication of functionality."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//docs/project/goals.md#software-and-language-evolution"},"Software and language evolution"),"\nprocesses should find it easier to both consider existing syntax and avoid\ncreation of new syntax conflicts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//docs/project/goals.md#code-that-is-easy-to-read-understand-and-write"},"Understandability of code"),"\nshould be promoted if developers have less syntax they need to understand.\nThis can be expected to improve code quality and productivity so long as the\nresulting code structures aren't overly complicated.")),(0,i.kt)("p",null,"By minimizing the overlap of language features, we hope to make work easier for\nboth Carbon's maintainers and developers."),(0,i.kt)("h2",{id:"applications-of-this-principle"},"Applications of this principle"),(0,i.kt)("p",null,"We can observe the application of this principle by comparing several language\nfeatures to C++. There, improving understandability is frequently the primary\nmotivation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Where C++ allows logical operators to be written with either symbols (for\nexample, ",(0,i.kt)("inlineCode",{parentName:"li"},"&&"),") or text (for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"and"),"), Carbon will only support one\nform (in this case, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//proposals/p0680.md"},"text"),")."),(0,i.kt)("li",{parentName:"ul"},"Where C++ allows hexadecimal numeric literals to be either lowercase\n(",(0,i.kt)("inlineCode",{parentName:"li"},"0xaa"),") or uppercase (",(0,i.kt)("inlineCode",{parentName:"li"},"0xAA"),"), and with ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," optionally uppercase as well,\nCarbon will only allow the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//proposals/p0143.md"},(0,i.kt)("inlineCode",{parentName:"a"},"0xAA")," casing"),"."),(0,i.kt)("li",{parentName:"ul"},"Where C++ provides both ",(0,i.kt)("inlineCode",{parentName:"li"},"struct")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"class")," with the only difference is\naccess control defaults, Carbon will only provide one (",(0,i.kt)("inlineCode",{parentName:"li"},"class"),", albeit with\ndefault public visibility diverging from C++).")),(0,i.kt)("p",null,"However, sometimes language tools are the primary motivation. For example, where\nC++ allows braces to be omitted for single-statement control flow blocks, Carbon\nwill ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//proposals/p0623.md"},"require braces"),". This offers a syntax simplification\nthat should allow for better error detection."),(0,i.kt)("h2",{id:"caveats"},"Caveats"),(0,i.kt)("h3",{id:"specialized-syntax"},"Specialized syntax"),(0,i.kt)("p",null,"Sometimes overlap will occur because a specialized syntax offers particular\nbenefits, typically as a matter of convenience for either a common use-case or a\nparticularly complex and important use-case. Some examples of why and where this\noccurs are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//docs/project/goals.md#performance-critical-software"},"performance"),", it\nmay at times be necessary to provide a specialized syntax that better\nsupports optimization than a generic syntax."),(0,i.kt)("li",{parentName:"ul"},"For\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//docs/project/goals.md#code-that-is-easy-to-read-understand-and-write"},"understandability of code"),",\nthere may be times that a particular use-case is common enough that\nsimplifying its syntax provides substantial benefit.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"for (var x: auto in list)")," could typically be written with\nas a ",(0,i.kt)("inlineCode",{parentName:"li"},"while")," loop, but range-based for loops are considered to improve\nunderstandability. However, C++'s ",(0,i.kt)("inlineCode",{parentName:"li"},"for (;;)")," syntax is sufficiently\nclose to ",(0,i.kt)("inlineCode",{parentName:"li"},"while")," that we expect to use ",(0,i.kt)("inlineCode",{parentName:"li"},"while")," to address the\ncorresponding use-cases."))),(0,i.kt)("li",{parentName:"ul"},"For\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//docs/project/goals.md#interoperability-with-and-migration-from-existing-c-code"},"migration and interoperability"),",\nit may be pragmatic to provide both an ideal way of doing things for new\nCarbon code, and a separate approach that is more C++-compatible for\nmigration.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, consider generics and templates: generics are considered to\nbe the preferred form for new code, but templates are considered a\nnecessity for migration of C++ code. This is not an evolution situation\nbecause we do not anticipate ever removing templates.")))),(0,i.kt)("h3",{id:"non-obvious-alternatives"},"Non-obvious alternatives"),(0,i.kt)("p",null,"Echoing Python, there may be non-obvious alternative ways of doing a given\nthing, such as using ",(0,i.kt)("inlineCode",{parentName:"p"},"while (condition) { DoSomething(); break; }")," in place of\n",(0,i.kt)("inlineCode",{parentName:"p"},"if (condition) { DoSomething(); }"),". As a more complex example, lambdas could be\nimplemented using other code constructs; this would require significantly more\ncode and hinder understandability."),(0,i.kt)("p",null,"This kind of overlap may exist, but will hopefully be considered sufficiently\nnon-idiomatic that examples won't be common in code. If a choice would not\nlikely be based mainly on coding styles, it's likely sufficiently distinct that\nthis principle won't apply."),(0,i.kt)("h3",{id:"in-evolution"},"In evolution"),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//docs/project/goals.md#software-and-language-evolution"},"evolution"),', it will\noften be necessary to temporarily provide an "old" and "new" way of doing things\nsimultaneously.'),(0,i.kt)("p",null,"For example, if renaming a language feature, it may be appropriate to provide\nthe same functionality under two identifiers. However, one should be marked as\ndeprecated and eventually removed. We should be cautious of adding new,\noverlapping features without a plan to remove the corresponding legacy version."),(0,i.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//proposals/p0829.md#provide-multiple-ways-of-doing-a-given-thing"},"Provide multiple ways of doing a given thing"))))}d.isMDXComponent=!0}}]);