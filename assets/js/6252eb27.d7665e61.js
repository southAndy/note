"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[450],{9033:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var o=c(4848),l=c(8453);const i={},r="[JS] Scoped",s={id:"Javascript/scoped",title:"[JS] Scoped",description:"\u5728 JavaScript \u4e2d\uff0c\u6709\u4e09\u7a2e Scope\uff1a",source:"@site/docs/Javascript/scoped.md",sourceDirName:"Javascript",slug:"/Javascript/scoped",permalink:"/docs/Javascript/scoped",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"[JS] Promise",permalink:"/docs/Javascript/promise"},next:{title:"[JS] \u6bd4\u8f03 var, let, const",permalink:"/docs/Javascript/variable-declare"}},t={},a=[{value:"Global Scope",id:"global-scope",level:3},{value:"Function Scope",id:"function-scope",level:3},{value:"Block Scope",id:"block-scope",level:3},{value:"Scope chain",id:"scope-chain",level:3}];function p(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"js-scoped",children:"[JS] Scoped"}),"\n",(0,o.jsx)(n.p,{children:"\u5728 JavaScript \u4e2d\uff0c\u6709\u4e09\u7a2e Scope\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Global Scope"}),"\n",(0,o.jsx)(n.li,{children:"Function Scope"}),"\n",(0,o.jsx)(n.li,{children:"Block Scope"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"global-scope",children:"Global Scope"}),"\n",(0,o.jsx)(n.p,{children:"Global Scope \u662f\u6307\u5728\u5168\u57df\u7bc4\u570d\u5167\u5ba3\u544a\u7684\u8b8a\u6578\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u5b58\u53d6\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"var globalVar = 'global';\n"})}),"\n",(0,o.jsx)(n.h3,{id:"function-scope",children:"Function Scope"}),"\n",(0,o.jsx)(n.p,{children:"Function Scope \u662f\u6307\u5728\u51fd\u6578\u5167\u5ba3\u544a\u7684\u8b8a\u6578\uff0c\u53ea\u80fd\u5728\u51fd\u6578\u5167\u5b58\u53d6\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"function myFunction() {\n    let functionVar = 'function';\n}\nconsole.log(functionVar); // ReferenceError: functionVar is not defined\n"})}),"\n",(0,o.jsx)(n.h3,{id:"block-scope",children:"Block Scope"}),"\n",(0,o.jsx)(n.p,{children:"Block Scope \u662f\u6307\u5728 Block \u5167\u5ba3\u544a\u7684\u8b8a\u6578\uff0c\u53ea\u80fd\u5728 Block \u5167\u5b58\u53d6\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"let x = true;\nif (x) {\n    let y = 10;\n}\nconsole.log(y); // ReferenceError: y is not defined\n"})}),"\n",(0,o.jsx)(n.h3,{id:"scope-chain",children:"Scope chain"}),"\n",(0,o.jsx)(n.p,{children:"scope chain \u662f\u6307\u5728\u51fd\u6578\u5167\u5b58\u53d6\u8b8a\u6578\u7684\u9806\u5e8f\uff0c\u5f9e\u5167\u90e8\u5411\u5916\u5c64\u5c0b\u627e\uff0c\u76f4\u5230\u627e\u5230\u8b8a\u6578\u70ba\u6b62\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"let globalVar = 'global';\nfunction myFunction() {\n    console.log(globalVar);\n}\nmyFunction(); // global\n"})})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>s});var o=c(6540);const l={},i=o.createContext(l);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);