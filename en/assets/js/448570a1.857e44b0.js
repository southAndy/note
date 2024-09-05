"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[697],{7130:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var i=e(4848),l=e(8453);const t={},c=void 0,d={id:"css/tailwindcss",title:"tailwindcss",description:"\u65b0\u589e tailwindcss \u81f3\u5c08\u6848\u5167",source:"@site/docs/css/tailwindcss.md",sourceDirName:"css",slug:"/css/tailwindcss",permalink:"/note/en/docs/css/tailwindcss",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"pug",permalink:"/note/en/docs/css/pug"},next:{title:"React - \u57fa\u672c",permalink:"/note/en/docs/react/React - \u57fa\u672c"}},r={},o=[{value:"\u65b0\u589e tailwindcss \u81f3\u5c08\u6848\u5167",id:"\u65b0\u589e-tailwindcss-\u81f3\u5c08\u6848\u5167",level:3},{value:"tailwindcss \u521d\u59cb\u914d\u7f6e",id:"tailwindcss-\u521d\u59cb\u914d\u7f6e",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}];function a(n){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"#tailwindcss"}),"\n",(0,i.jsx)(s.h3,{id:"\u65b0\u589e-tailwindcss-\u81f3\u5c08\u6848\u5167",children:"\u65b0\u589e tailwindcss \u81f3\u5c08\u6848\u5167"}),"\n",(0,i.jsx)(s.p,{children:"\u5b98\u65b9\u6587\u4ef6\u63d0\u4f9b\u4e86\u56db\u7a2e\u65b9\u5f0f\uff0c\u4ee5\u4e0b\u6703\u642d\u914d postCSS \u4f86\u904b\u884c"}),"\n",(0,i.jsx)(s.p,{children:"1.\u4e0b\u8f09 tailwindCSS (\u5728\u9019\u4ee5 pnpm \u65b9\u5f0f\u4e0b\u8f09)"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"pnpm install tailwind\n"})}),"\n",(0,i.jsx)(s.p,{children:"2.\u900f\u904e\u4ee5\u4e0b\u6307\u4ee4\u53ef\u4ee5\u7522\u751f\u57fa\u672c\u7684 1. tailwind \u8a2d\u5b9a\u6a94 2. postCSS \u8a2d\u5b9a\u6a94"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"npx tailwind init -p\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:"\u900f\u904e postCSS \u8655\u7406 tailwindCSS \u6a23\u5f0f\u6709\u4ee5\u4e0b\u5e7e\u500b\u597d\u8655\uff1a"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\u900f\u904e postCSS \u96c6\u4e2d\u7de8\u8b6f\uff08",(0,i.jsx)(s.strong,{children:"\u7de8\u8b6f\u529f\u80fd"}),"\uff09"]}),"\n",(0,i.jsx)(s.li,{children:"\u53ef\u4ee5\u900f\u904e PurgeCSS \uff0c\u6703\u81ea\u52d5\u522a\u9664\u672a\u4f7f\u7528\u7684 css \uff0c\u6e1b\u5c11\u6a23\u5f0f\u6a94\u9ad4\u7a4d\u3001\u63d0\u5347\u6548\u80fd"}),"\n",(0,i.jsxs)(s.li,{children:["\u53ef\u642d\u914d autoprefixer \u81ea\u52d5\u6dfb\u52a0\u8de8\u700f\u89bd\u5668\u7684\u524d\u7db4\uff08",(0,i.jsx)(s.strong,{children:"\u8655\u7406\u8de8\u700f\u89bd\u5668\u554f\u984c"}),"\uff09"]}),"\n"]})]}),"\n",(0,i.jsx)(s.h3,{id:"tailwindcss-\u521d\u59cb\u914d\u7f6e",children:"tailwindcss \u521d\u59cb\u914d\u7f6e"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="tailwindcss.config.js"',children:'module.exports = {\n content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], \n theme: {\n\t extend: {},\n },\n plugins: [],\n};\n'})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"content"}),"\uff1a\u6383\u63cf\u54ea\u4e9b\u8def\u5f91\u4e0b\u7684\u6a94\u6848\u53ef\u4f7f\u7528 tailwindcss \u6a23\u5f0f\u8a2d\u5b9a"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"theme"}),"\uff1a\u53ef\u65bc\u6b64\u5f15\u5165\u7684\u5176\u4ed6 tailwind \u4e3b\u984c"]}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:"** \u8ddf * \u90fd\u662f\u6240\u8b02\u7684\u300c\u5339\u914d\u7b26\u300d"}),(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"**"})," \u6307\u7684\u662f\u5176\u5c64\u7d1a\u53ca\u5b50\u5c64\u7d1a\u5167\u7684\u6240\u6709\u5167\u5bb9\uff0c\u4ee5\u4e0a\u9762\u7bc4\u4f8b\uff0c\u6307\u7684\u5c31\u662f src \u5167\u7684\u6240\u6709 .vue, .jsx, .tsx\u7684\u6587\u4ef6"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"*"})," \u6307\u7684\u662f\u55ae\u4e00\u6216\u591a\u5b57\u7b26"]}),"\n"]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,i.jsxs)(s.p,{children:["\u4e0d\u540c\u65bc\u50b3\u7d71 css \u8981\u5c07\u6a23\u5f0f\u53e6\u5916\u5beb\uff0c tailwindcss \u53ef\u76f4\u63a5\u5c07\u6a23\u5f0f\u5beb\u65bc html \u5143\u7d20\u4e0a\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a",(0,i.jsx)(s.strong,{children:"\u5176\u6b0a\u91cd\u5c0f\u65bc\u4e00\u822c\u7684 class \u8a2d\u5b9a"}),"\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u898b\u7c21\u55ae\u7528\u6cd5\u7b46\u8a18"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-HTML",children:'\x3c!-- \u8a2d\u5b9a\u5143\u7d20 hover \u6548\u679c --\x3e\n<div class="hover:bg-red-600">\n\n\x3c!-- \u8a2d\u5b9a\u5143\u7d20\u5b9a\u4f4d --\x3e\n<div class="relative">\n\t<div class="absolute top-0"></div>\n</div>\n\n\x3c!-- border --\x3e\n<div class="border"></div>\n\n\x3c!-- border-radious --\x3e\n<div class="rounded" ></div>\n'})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://tailwindcss.com/docs/installation",children:"tailwindcss docs"})}),"\n"]})]})}function h(n={}){const{wrapper:s}={...(0,l.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>d});var i=e(6540);const l={},t=i.createContext(l);function c(n){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function d(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),i.createElement(t.Provider,{value:s},n.children)}}}]);