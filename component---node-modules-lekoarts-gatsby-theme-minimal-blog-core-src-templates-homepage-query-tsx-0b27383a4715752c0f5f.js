"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[366],{40890:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r,o=n(67294),a=n(70977),i=n(25444),l=n(69748),c=n(35441),s=n(58470),p=function(e){var t=e.children;return(0,a.tZ)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3},a:{variant:"links.listItem"}}},t)},g=n(71299),u=n(1435),m=n(80126),d=n(31439),b=n(63366),f=n(64983),h=["components"],x=(r="Text",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,f.mdx)("div",e)}),y={_frontmatter:{}};function v(e){var t=e.components,n=(0,b.Z)(e,h);return(0,f.mdx)("wrapper",Object.assign({},y,n,{components:t,mdxType:"MDXLayout"}),(0,f.mdx)(x,{sx:{fontSize:[4,5,6],fontWeight:"bold",color:"heading"},mdxType:"Text"},"Hi."),(0,f.mdx)("p",null,'I\'m Lupin - currently teaching "Defense against the Dark Arts" at Hogwarts, Great Britain. I recently published a book called ',(0,f.mdx)("a",{parentName:"p",href:"https://www.lekoarts.de"},"Those nasty Dementors"),".\nIt teaches everything you need to know about defending against Dementors."))}v.isMDXComponent=!0;var k=["components"],w=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,f.mdx)("div",t)}}("Title"),Z={_frontmatter:{}};function j(e){var t=e.components,n=(0,b.Z)(e,k);return(0,f.mdx)("wrapper",Object.assign({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,f.mdx)(w,{text:"Projects",mdxType:"Title"}),(0,f.mdx)("ul",null,(0,f.mdx)("li",{parentName:"ul"},(0,f.mdx)("a",{parentName:"li",href:"https://www.lekoarts.de/art/3d?utm_source=minimal-blog&utm_medium=Theme"},"3D Art with Cinema4D")),(0,f.mdx)("li",{parentName:"ul"},(0,f.mdx)("a",{parentName:"li",href:"https://www.lekoarts.de/art/photography?utm_source=minimal-blog&utm_medium=Theme"},"Landscape Photography"))))}j.isMDXComponent=!0;var O=function(e){var t=e.posts,n=(0,g.Z)(),r=n.basePath,o=n.blogPath,b=(0,u.Z)().siteTitle;return(0,a.tZ)(l.Z,null,(0,a.tZ)("h1",{sx:d.j},b),(0,a.tZ)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,a.tZ)(v,null)),(0,a.tZ)(c.Z,{text:"Latest Posts"},(0,a.tZ)(i.Link,{to:(0,m.Z)("/"+r+"/"+o)},"Read all posts")),(0,a.tZ)(s.Z,{posts:t,showTags:!1}),(0,a.tZ)(p,{sx:{variant:"section_bottom"}},(0,a.tZ)(j,null)))};var S=function(e){var t=Object.assign({},e),n=t.data.allPost;return o.createElement(O,Object.assign({posts:n.nodes},t))}},61930:function(e,t,n){var r=n(67294),o=n(9983),a=n(25444),i=n(71299),l=n(80126);t.Z=function(e){var t=e.tags,n=(0,i.Z)(),c=n.tagsPath,s=n.basePath;return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(r.Fragment,{key:e.slug},!!t&&", ",r.createElement(o.rU,{as:a.Link,to:(0,l.Z)("/"+s+"/"+c+"/"+e.slug)},e.name))})))}},69748:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(4942),o=n(67294),a=n(23431),i=n(70977),l=n(9983),c=n(77710),s=n(95078),p=n(71299),g=function(e){var t=e.isDark,n=e.toggle;return(0,i.tZ)("button",{onClick:n,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},(0,i.tZ)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+e.colors.toggleIcon:"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+e.colors.toggleIcon},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+e.colors.toggleIcon:"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+e.colors.toggleIcon+", 0 23px 0 "+e.colors.toggleIcon+", 23px 0 0 "+e.colors.toggleIcon+", -23px 0 0 "+e.colors.toggleIcon+", 15px 15px 0 "+e.colors.toggleIcon+", -15px 15px 0 "+e.colors.toggleIcon+", 15px -15px 0 "+e.colors.toggleIcon+", -15px -15px 0 "+e.colors.toggleIcon},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},u=n(25444),m=n(80126);function d(e){return(0,i.tZ)(u.Link,Object.assign({activeClassName:"active"},e))}var b=function(e){var t=e.nav,n=(0,p.Z)().basePath;return(0,i.tZ)(o.Fragment,null,t&&t.length>0&&(0,i.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return(0,i.tZ)(l.rU,{key:e.slug,as:d,to:(0,m.Z)("/"+n+"/"+e.slug)},e.title)}))))},f=n(1435),h=function(){var e=(0,f.Z)().siteTitle,t=(0,p.Z)().basePath;return(0,i.tZ)(u.Link,{to:(0,m.Z)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,i.tZ)("div",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e))},x=function(){var e=(0,p.Z)().externalLinks;return(0,i.tZ)(o.Fragment,null,e&&e.length>0&&(0,i.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((function(e){return(0,i.tZ)(l.rU,{key:e.url,href:e.url},e.name)}))))},y=function(){var e=(0,p.Z)().navigation,t=(0,s.If)(),n=t[0],r=t[1],o="dark"===n;return(0,i.tZ)("header",{sx:{mb:[5,6]}},(0,i.tZ)(l.kC,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,i.tZ)(h,null),(0,i.tZ)(g,{isDark:o,toggle:function(e){e.preventDefault(),r(o?"light":"dark")}})),(0,i.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,i.tZ)(b,{nav:e}),(0,i.tZ)(x,null)))},v=function(){var e=(0,f.Z)().siteTitle;return(0,i.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,i.tZ)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),(0,i.tZ)("div",null,(0,i.tZ)(l.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"},"Theme")," ","by"," ",(0,i.tZ)(l.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")))},k=n(66795),w={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:(0,k.nV)("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:"2rem 1rem 1rem 1rem",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:"1rem"}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"rgb(1, 22, 39)"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:(0,k.nV)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".react-live-wrapper":{position:"relative"},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]}},Z=n(63366),j=["children"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}},P=function(e){var t=e.children,n=(0,Z.Z)(e,j);return(0,i.tZ)("a",Object.assign({},n,{sx:S({},E),href:"#skip-nav","data-skip-link":"true"}),t)};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=e.children,n=e.className,r=void 0===n?"":n;return(0,i.tZ)(o.Fragment,null,(0,i.tZ)(a.xB,{styles:function(e){return{"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:e.colors.text,color:e.colors.background},a:{transition:"all 0.3s ease-in-out",color:"text"}}}}),(0,i.tZ)(c.Z,null),(0,i.tZ)(P,null,"Skip to content"),(0,i.tZ)(l.W2,null,(0,i.tZ)(y,null),(0,i.tZ)(l.xu,{id:"skip-nav",sx:T({},w),className:r},t),(0,i.tZ)(v,null)))}},58470:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(70977),o=n(67294),a=n(9983),i=n(25444),l=n(61930),c=function(e){var t=e.post,n=e.showTags,c=void 0===n||n;return(0,r.tZ)(a.xu,{mb:4},(0,r.tZ)(a.rU,{as:i.Link,to:t.slug,sx:{fontSize:[1,2,3],color:"text"}},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&c&&(0,r.tZ)(o.Fragment,null," — ",(0,r.tZ)(l.Z,{tags:t.tags}))))},s=function(e){var t=e.posts,n=e.className,o=void 0===n?"":n,a=e.showTags,i=void 0===a||a;return(0,r.tZ)("section",{sx:{mb:[5,6,7]},className:o},t.map((function(e){return(0,r.tZ)(c,{key:e.slug,post:e,showTags:i})})))}},77710:function(e,t,n){var r=n(67294),o=n(35414),a=n(25444),i=n(1435);t.Z=function(e){var t=e.title,n=void 0===t?"":t,l=e.description,c=void 0===l?"":l,s=e.pathname,p=void 0===s?"":s,g=e.image,u=void 0===g?"":g,m=e.children,d=void 0===m?null:m,b=e.canonicalUrl,f=void 0===b?"":b,h=(0,i.Z)(),x=h.siteTitle,y=h.siteTitleAlt,v=h.siteUrl,k=h.siteDescription,w=h.siteLanguage,Z=h.siteImage,j=h.author,O={title:n||y,description:c||k,url:""+v+(p||""),image:""+v+(u||Z)};return r.createElement(o.q,{title:n,defaultTitle:y,titleTemplate:"%s | "+x},r.createElement("html",{lang:w}),r.createElement("meta",{name:"description",content:O.description}),r.createElement("meta",{name:"image",content:O.image}),r.createElement("meta",{property:"og:title",content:O.title}),r.createElement("meta",{property:"og:url",content:O.url}),r.createElement("meta",{property:"og:description",content:O.description}),r.createElement("meta",{property:"og:image",content:O.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:O.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:O.title}),r.createElement("meta",{name:"twitter:url",content:O.url}),r.createElement("meta",{name:"twitter:description",content:O.description}),r.createElement("meta",{name:"twitter:image",content:O.image}),r.createElement("meta",{name:"twitter:image:alt",content:O.description}),r.createElement("meta",{name:"twitter:creator",content:j}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),f?r.createElement("link",{rel:"canonical",href:f}):null,d)}},1435:function(e,t,n){var r=n(25444);t.Z=function(){return(0,r.useStaticQuery)("318001574").site.siteMetadata}},80126:function(e,t){t.Z=function(e){return e.replace(/\/\/+/g,"/")}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-0b27383a4715752c0f5f.js.map