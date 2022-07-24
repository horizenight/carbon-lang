"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8308],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,u=m["".concat(s,".").concat(d)]||m[d]||h[d]||o;return t?a.createElement(u,r(r({ref:n},c),{},{components:t})):a.createElement(u,r({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const o={},r="Carbon: alternatives to coherence",l={unversionedId:"generics/appendix-coherence",id:"generics/appendix-coherence",title:"Carbon: alternatives to coherence",description:"\x3c!--",source:"@site/../docs/design/generics/appendix-coherence.md",sourceDirName:"generics",slug:"/generics/appendix-coherence",permalink:"/carbon-lang/design/generics/appendix-coherence",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/generics/appendix-coherence.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Generics",permalink:"/carbon-lang/design/generics/"},next:{title:"Generics: Details",permalink:"/carbon-lang/design/generics/details"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Approach taken: coherence",id:"approach-taken-coherence",level:2},{value:"The &quot;Hashtable Problem&quot;",id:"the-hashtable-problem",level:2},{value:"Rejected alternative: no orphan rule",id:"rejected-alternative-no-orphan-rule",level:2},{value:"Rejected alternative: incoherence",id:"rejected-alternative-incoherence",level:2},{value:"Incoherence means context sensitivity",id:"incoherence-means-context-sensitivity",level:3},{value:"Rejected variation: dynamic implementation binding",id:"rejected-variation-dynamic-implementation-binding",level:3},{value:"Rejected variation: manual conflict resolution",id:"rejected-variation-manual-conflict-resolution",level:3}],c={toc:p};function h(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"carbon-alternatives-to-coherence"},"Carbon: alternatives to coherence"),(0,i.kt)("p",null,"This document explains the rationale for choosing to make\n",(0,i.kt)("a",{parentName:"p",href:"/carbon-lang/design/generics/terminology#coherence"},"implementation coherence"),"\n",(0,i.kt)("a",{parentName:"p",href:"/carbon-lang/design/generics/goals#coherence"},"a goal for Carbon"),", and the alternatives considered."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#approach-taken-coherence"},"Approach taken: coherence")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the-hashtable-problem"},'The "Hashtable Problem"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rejected-alternative-no-orphan-rule"},"Rejected alternative: no orphan rule")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rejected-alternative-incoherence"},"Rejected alternative: incoherence"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#incoherence-means-context-sensitivity"},"Incoherence means context sensitivity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rejected-variation-dynamic-implementation-binding"},"Rejected variation: dynamic implementation binding")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rejected-variation-manual-conflict-resolution"},"Rejected variation: manual conflict resolution"))))),(0,i.kt)("h2",{id:"approach-taken-coherence"},"Approach taken: coherence"),(0,i.kt)("p",null,"The main thing to understand is that coherence is a desirable property, but to\nget that property we need an orphan rule, and that rule has a cost. It in\nparticular limits how much control users of a type have over how that type\nimplements interfaces. There are a few main problematic use cases to consider:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selecting between multiple implementations of an interface for a type. For\nexample selecting the implementation of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Comparable")," interface for a\n",(0,i.kt)("inlineCode",{parentName:"li"},"Song"),' type to support "by title", "by artist", and "by album" orderings.'),(0,i.kt)("li",{parentName:"ul"},"Implementing an interface for a type when there is no relationship between\nthe libraries defining the interface and the type."),(0,i.kt)("li",{parentName:"ul"},"When the implementation of an interface for a type uses an associated type\nthat can't be referenced from the file or files where the implementation is\nallowed to be defined.")),(0,i.kt)("p",null,"These last two cases are highlighted as concerns in Rust in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rfcs/issues/1856"},"Rust RFC #1856: orphan rules are stricter than we would like"),"."),(0,i.kt)("p",null,"Since Carbon is bundling interface implementations into types, for the\nconvenience and expressiveness that provides, we satisfy those use cases by\ngiving the user control over the type of a value. This means having facilities\nfor defining new ",(0,i.kt)("a",{parentName:"p",href:"/carbon-lang/design/generics/terminology#compatible-types"},"compatible types")," with\ndifferent interface implementations, and casting between those types as needed."),(0,i.kt)("h2",{id:"the-hashtable-problem"},'The "Hashtable Problem"'),(0,i.kt)("p",null,'The "Hashtable problem" is that the specific hash function used to compute the\nhash of keys in a hashtable must be the same when adding an entry, when looking\nit up, and other operations like resizing. So a hashtable type is dependent on\nboth the key type, and the key type\'s implementation of the ',(0,i.kt)("inlineCode",{parentName:"p"},"Hashable"),"\ninterface. If the key type can have more than one implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Hashable"),",\nthere needs to be some mechanism for choosing a single one to be used\nconsistently by the hashtable type, or the invariants of the type will be\nviolated."),(0,i.kt)("p",null,"Without the orphan rule to enforce coherence, we might have a situation like\nthis:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Package ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"HashSet")," type."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"package Container;\nstruct HashSet(Key:! Hashable) { ... }\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Song")," type is defined in package ",(0,i.kt)("inlineCode",{parentName:"p"},"SongLib"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Package ",(0,i.kt)("inlineCode",{parentName:"p"},"SongHashArtistAndTitle")," defines an implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Hashable")," for\n",(0,i.kt)("inlineCode",{parentName:"p"},"SongLib.Song"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"package SongHashArtistAndTitle;\nimport SongLib;\nimpl SongLib.Song as Hashable {\n  fn Hash[me: Self]() -> u64 { ... }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Package ",(0,i.kt)("inlineCode",{parentName:"p"},"SongUtil")," uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hashable")," implementation from\n",(0,i.kt)("inlineCode",{parentName:"p"},"SongHashArtistAndTitle")," to define a function ",(0,i.kt)("inlineCode",{parentName:"p"},"IsInHashSet"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"package SongUtil;\nimport SongLib;\nimport SongHashArtistAndTitle;\nimport Containers;\n\nfn IsInHashSet(\n    s: SongLib.Song,\n    h: Containers.HashSet(SongLib.Song)*) -> bool {\n  return h->Contains(s);\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Package ",(0,i.kt)("inlineCode",{parentName:"p"},"SongHashAppleMusicURL")," defines a different implementation of\n",(0,i.kt)("inlineCode",{parentName:"p"},"Hashable")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"SongLib.Song")," than package ",(0,i.kt)("inlineCode",{parentName:"p"},"SongHashArtistAndTitle"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"package SongHashAppleMusicURL;\nimport SongLib;\nimpl SongLib.Song as Hashable {\n  fn Hash[me: Self]() -> u64 { ... }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, package ",(0,i.kt)("inlineCode",{parentName:"p"},"Trouble")," imports ",(0,i.kt)("inlineCode",{parentName:"p"},"SongHashAppleMusicURL"),", creates a hash\nset, and then calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"IsInHashSet")," function from package ",(0,i.kt)("inlineCode",{parentName:"p"},"SongUtil"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'package Trouble;\nimport SongLib;\nimport SongHashAppleMusicURL;\nimport Containers;\nimport SongUtil;\n\nfn SomethingWeirdHappens() {\n  var unchained_melody: SongLib.Song = ...;\n  var song_set: auto = Containers.HashSet(SongLib.Song).Create();\n  song_set.Add(unchained_melody);\n  // Either this is a compile error or does something unexpected.\n  if (SongUtil.IsInHashSet(unchained_melody, &song_set)) {\n    Print("This is expected, but doesn\'t happen.");\n  } else {\n    Print("This is what happens even though it is unexpected.");\n  }\n}\n')))),(0,i.kt)("p",null,"The issue is that in package ",(0,i.kt)("inlineCode",{parentName:"p"},"Trouble"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"song_set")," is created in a context\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"SongLib.Song")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hashable")," implementation from\n",(0,i.kt)("inlineCode",{parentName:"p"},"SongHashAppleMusicURL"),", and stores ",(0,i.kt)("inlineCode",{parentName:"p"},"unchained_melody")," under that hash value.\nWhen we go to look up the same song in ",(0,i.kt)("inlineCode",{parentName:"p"},"SongUtil.IsInHashSet"),", it uses the hash\nfunction from ",(0,i.kt)("inlineCode",{parentName:"p"},"SongHashArtistAndTitle")," which returns a different hash value for\n",(0,i.kt)("inlineCode",{parentName:"p"},"unchained_melody"),", and so reports the song is missing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Background:")," ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/nikomatsakis/1421744"},"This post"),"\ndiscusses the hashtable problem in the context of Haskell, and\n",(0,i.kt)("a",{parentName:"p",href:"https://mail.mozilla.org/pipermail/rust-dev/2011-December/001036.html"},"this 2011 Rust followup"),"\ndiscusses how to detect problems at compile time."),(0,i.kt)("h2",{id:"rejected-alternative-no-orphan-rule"},"Rejected alternative: no orphan rule"),(0,i.kt)("p",null,'In Swift an implementation of an interface, or a "protocol" as it is called in\nSwift, can be provided in any module. As long as any module provides an\nimplementation, that implementation is\n',(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/48762971/swift-protocol-conformance-by-extension-between-frameworks"},"used globally throughout the program"),"."),(0,i.kt)("p",null,"In Swift, since some protocol implementations can come from the runtime\nenvironment provided by the operating system, multiple implementations for a\nprotocol can arise as a runtime warning. When this happens, Swift picks one\nimplementation arbitrarily."),(0,i.kt)("p",null,"In Carbon, we could make this a build time error. However, there would be\nnothing preventing two independent libraries from providing conflicting\nimplementations. Furthermore, the error would only be diagnosed at link time."),(0,i.kt)("h2",{id:"rejected-alternative-incoherence"},"Rejected alternative: incoherence"),(0,i.kt)("h3",{id:"incoherence-means-context-sensitivity"},"Incoherence means context sensitivity"),(0,i.kt)("p",null,"The undesirable result of incoherence is that the interpretation of source code\nchanges based on imports. In particular, imagine there is a function call that\ndepends on a type implementing an interface, and two different implementations\nare defined in two different libraries. A call to that function will be treated\ndifferently depending on which of those two libraries are imported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If neither is imported, it is an error."),(0,i.kt)("li",{parentName:"ul"},"If both are imported, it is ambiguous."),(0,i.kt)("li",{parentName:"ul"},"If only one is imported, you get totally different code executed depending\non which it is.")),(0,i.kt)("p",null,"Furthermore, this means that the behavior of a file can depend on an import even\nif nothing from that package is referenced explicitly. In general, Carbon is\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//docs/project/principles/low_context_sensitivity.md"},"avoiding this sort of context sensitivity"),".\nThis context sensitivity would make moving code between files when refactoring\nmore difficult and less safe."),(0,i.kt)("h3",{id:"rejected-variation-dynamic-implementation-binding"},"Rejected variation: dynamic implementation binding"),(0,i.kt)("p",null,"One possible approach would be to bind interface implementations to a value at\nthe point it was created. In ",(0,i.kt)("a",{parentName:"p",href:"#the-hashtable-problem"},"the example above"),", the\nimplementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hashable")," interface for ",(0,i.kt)("inlineCode",{parentName:"p"},"Song")," would be fixed for the\n",(0,i.kt)("inlineCode",{parentName:"p"},"song_set")," ",(0,i.kt)("inlineCode",{parentName:"p"},"HashSet")," object based on which implementation was in scope in the\nbody of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SomethingWeirdHappens")," function."),(0,i.kt)("p",null,'This idea is discussed briefly in section 5.4 on separate compilation of WG21\nproposal n1848 for implementing "Indiana" C++0x concepts\n(',(0,i.kt)("a",{parentName:"p",href:"https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.86.9526&rep=rep1&type=pdf"},"1"),",\nand ",(0,i.kt)("a",{parentName:"p",href:"https://wg21.link/n1848"},"2"),")."),(0,i.kt)("p",null,"This has some downsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is harder to reason about. The behavior of ",(0,i.kt)("inlineCode",{parentName:"li"},"SongUtil.IsInHashSet")," depends\non the dynamic behavior of the program. At the time of the call, we may have\nno idea where the ",(0,i.kt)("inlineCode",{parentName:"li"},"HashSet")," argument was created."),(0,i.kt)("li",{parentName:"ul"},"An object may be created far from a call that has a particular interface\nrequirement, with no guarantee that the object was created with any\nimplementation of the interface at all. This error would only be detected at\nruntime, not at type checking time."),(0,i.kt)("li",{parentName:"ul"},"It requires more data space at runtime because we need to store a pointer to\nthe witness table representing the implementation with the object, since it\nvaries instead of being known statically."),(0,i.kt)("li",{parentName:"ul"},"It is slower to execute from dynamic dispatch and the inability to inline."),(0,i.kt)("li",{parentName:"ul"},"In some cases it may not be feasible to use dynamic dispatch. For example,\nif an interface method returns an associated type, we might not know the\ncalling convention of the function without knowing some details about the\ntype.")),(0,i.kt)("p",null,"As a result, this doesn't make sense as the default behavior for Carbon based on\nits ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk//docs/project/goals.md"},"goals"),". That being said, this could be a feature\nadded later as opt-in behavior to either allow users to reduce code size or\nsupport use cases that require dynamic dispatch."),(0,i.kt)("h3",{id:"rejected-variation-manual-conflict-resolution"},"Rejected variation: manual conflict resolution"),(0,i.kt)("p",null,"Carbon could alternatively provide some kind of manual disambiguation syntax to\nresolve problems where they arise. The problems with this approach have been\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Ixrec/rust-orphan-rules#whats-wrong-with-incoherence"},"considered in the context of Rust"),"."),(0,i.kt)("p",null,"A specific example of this approach is called\n",(0,i.kt)("a",{parentName:"p",href:"https://forums.swift.org/t/scoped-conformances/37159"},"scoped conformance"),",\nwhere the conflict resolution is based on limiting the visibility of\nimplementations to particular scopes. This hasn't been implemented, but it has\nthe drawbacks described above. Depending on the details of the implementation,\neither:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"there are incompatible values with types that have the same name, or"),(0,i.kt)("li",{parentName:"ul"},"it is difficult to reason about the program's behavior because it behaves\nlike\n",(0,i.kt)("a",{parentName:"li",href:"#rejected-variation-dynamic-implementation-binding"},"dynamic implementation binding"),"\n(though perhaps with a monomorphization cost instead of a runtime cost).")))}h.isMDXComponent=!0}}]);