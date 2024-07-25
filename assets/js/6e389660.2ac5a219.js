"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[350],{7823:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(4848),c=s(8453);const r={},l=void 0,a={id:"react/React - \u57fa\u672c",title:"React - \u57fa\u672c",description:"\u5728\u9019\u4e00\u7bc7\u6703\u4ecb\u7d39\u7684\uff1a",source:"@site/docs/react/React - \u57fa\u672c.md",sourceDirName:"react",slug:"/react/React - \u57fa\u672c",permalink:"/docs/react/React - \u57fa\u672c",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/React - \u57fa\u672c.md",tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"tailwindcss",permalink:"/docs/css/tailwindcss"},next:{title:"React - \u6e32\u67d3\u6a5f\u5236",permalink:"/docs/react/React - \u6e32\u67d3\u6a5f\u5236"}},i={},d=[{value:"JSX",id:"jsx",level:3},{value:"\u5728 JSX \u4f7f\u7528 JS",id:"\u5728-jsx-\u4f7f\u7528-js",level:4},{value:"\u4f7f\u7528\u4e8b\u4ef6",id:"\u4f7f\u7528\u4e8b\u4ef6",level:3},{value:"\u8a9e\u6cd5",id:"\u8a9e\u6cd5",level:4},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:4},{value:"react \u4e2d\u6700\u57fa\u672c\u7684\u55ae\u4f4d - \u5143\u4ef6",id:"react-\u4e2d\u6700\u57fa\u672c\u7684\u55ae\u4f4d---\u5143\u4ef6",level:3},{value:"\u57fa\u672c\u5beb\u6cd5",id:"\u57fa\u672c\u5beb\u6cd5",level:4}];function o(e){const n={admonition:"admonition",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"\u5728\u9019\u4e00\u7bc7\u6703\u4ecb\u7d39\u7684\uff1a"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#jsx",children:"\u8a8d\u8b58 JSX"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#\u4f7f\u7528\u4e8b\u4ef6",children:"\u5728 react \u4e2d\u5982\u4f55\u4f7f\u7528\u4e8b\u4ef6(event)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"#react-\u4e2d\u6700\u57fa\u672c\u7684\u55ae\u4f4d---\u5143\u4ef6",children:"react \u4e2d\u6700\u57fa\u672c\u7684\u55ae\u4f4d - \u5143\u4ef6"}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h3,{id:"jsx",children:"JSX"}),"\n",(0,t.jsx)(n.p,{children:"JSX (Javascript XML) \u662f\u4e00\u7a2e\u8a9e\u6cd5\u64f4\u7de8\uff0c\u8b93\u4f60\u53ef\u4ee5\u5728 Js \u6a94\u6848\u5167\u64b0\u5beb\u985e\u4f3c XML, HTML \u7684\u5167\u5bb9\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const hTag = <h1>\u9019\u662f h1 </h1>;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u900f\u904e\u7de8\u8b6f\u5668\uff08\u5982 babel\uff09\u5e6b\u5fd9\u8f49\u8b6f\u5f8c\uff0c\u5c31\u80fd\u7522\u751f\u5c0d\u61c9\u7684 html \u67b6\u69cb\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"\u5728-jsx-\u4f7f\u7528-js",children:"\u5728 JSX \u4f7f\u7528 JS"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 react \u900f\u904e ",(0,t.jsx)(n.code,{children:"{}"})," \u5141\u8a31\u4f60\u5c07 ",(0,t.jsx)(n.strong,{children:"Javascript \u8868\u9054\u5f0f"})," \u7684\u5167\u5bb9\u653e\u5165 JSX \u4e2d"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const x = 2;\nconst hTag = <h1>{x}</h1>;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7c21\u55ae\u689d\u5217\u5e38\u898b\u7684\u7c21\u55ae\u7528\u9014\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'// \u986f\u793a\u6a23\u5f0f\nconst isShow = true;\nconst showElement = isShow ? "block" : "none";\nconst hTag = <h1 className={{ display: showElement }}></h1>;\n\n// \u6dfb\u52a0\u5c6c\u6027\nlet type = "text";\nconst inputTag = <input type={type} />;\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u4e8b\u4ef6",children:"\u4f7f\u7528\u4e8b\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u539f\u751f Javascript \uff0c\u6211\u5011\u900f\u904e\u4e8b\u4ef6\u4f86\u8ddf\u4f7f\u7528\u8005\u7522\u751f\u4e92\u52d5\uff0c\u50cf\u662f\u7576\u4f7f\u7528\u8005\u9ede\u64ca\u6309\u9215\u5f8c\u6703\u8df3\u51fa\u63d0\u793a\u8a0a\u606f\uff0c\u5728 react \u540c\u6a23\u4e5f\u53ef\u900f\u904e\u4e8b\u4ef6\u4f86\u5be6\u73fe\u9019\u4e9b\uff1a"}),"\n",(0,t.jsx)(n.h4,{id:"\u8a9e\u6cd5",children:"\u8a9e\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<tag event={eventHandler}></tag>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7c21\u55ae\u53ef\u5206\u70ba\u7acb\u523b\u3001\u8ddf\u88ab\u52d5\u89f8\u767c\u4e8b\u4ef6\u5169\u7a2e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"//\u88ab\u52d5\u89f8\u767c\n<h1 event={eventHandler}></h1>\n\n//\u7acb\u523b\u89f8\u767c\n<h1 event={eventHandler()}></h1>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u7acb\u523b\u89f8\u767c\u7684\u65b9\u5f0f\u6703\u8b93\u5f37\u8feb react \u7acb\u523b\u91cd\u65b0\u6e32\u67d3\uff0c\u53ef\u80fd\u6703\u7522\u751f\u4e0d\u5fc5\u8981\u7684\u8017\u80fd\u3002"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7576\u4f60\u60f3\u8981\u50b3\u905e\u53c3\u6578\u7d66 ",(0,t.jsx)(n.code,{children:"handler"})," \u6642\uff0c\u53ef\u4ee5\u6539\u7528 callback \u7684\u65b9\u5f0f\u547c\u53eb\u4e8b\u4ef6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<h1 event={(params) => eventHandler}></h1>\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"react-\u4e2d\u6700\u57fa\u672c\u7684\u55ae\u4f4d---\u5143\u4ef6",children:"react \u4e2d\u6700\u57fa\u672c\u7684\u55ae\u4f4d - \u5143\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 react \u4e2d\u6700\u57fa\u672c\u7684\u55ae\u4f4d\u5c31\u662f\u5143\u4ef6\uff0c\u6bcf\u500b\u5143\u4ef6\u90fd\u53ef\u4ee5\u7406\u89e3\u662f\u4e00\u500b\u51fd\u5f0f\uff0c\u6240\u4ee5\u6703\u5177\u6709\u51fd\u5f0f\u7684\u4ee5\u4e0b\u512a\u9ede\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5c01\u88dd\u53ef\u8907\u7528"}),"\n",(0,t.jsx)(n.li,{children:"\u908f\u8f2f\u6709 scope \u4fdd\u8b77\u4e0d\u6613\u88ab\u5168\u57df\u503c\u6c61\u67d3"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"\u57fa\u672c\u5beb\u6cd5",children:"\u57fa\u672c\u5beb\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function Button() {\n  return <button></button>;\n}\nexport default Button;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(6540);const c={},r=t.createContext(c);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);