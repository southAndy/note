"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[916],{4288:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var r=s(4848),c=s(8453);const t={},l=void 0,a={id:"Javascript/js-Destructuring",title:"js-Destructuring",description:"\u524d\u8a00",source:"@site/docs/Javascript/js-Destructuring.md",sourceDirName:"Javascript",slug:"/Javascript/js-Destructuring",permalink:"/note/docs/Javascript/js-Destructuring",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/js-Destructuring.md",tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"Express-\u7b46\u8a18",permalink:"/note/docs/Javascript/Express-\u7b46\u8a18"},next:{title:"\u4e8b\u4ef6\u5faa\u74b0 eventloop",permalink:"/note/docs/Javascript/js-Eventloop"}},i={},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"\u9663\u5217\u89e3\u69cb",id:"\u9663\u5217\u89e3\u69cb",level:3},{value:"\u7269\u4ef6\u89e3\u69cb",id:"\u7269\u4ef6\u89e3\u69cb",level:3},{value:"\u4e0d\u53ef\u89e3\u69cb\u578b\u5225\u8207\u7528\u6cd5",id:"\u4e0d\u53ef\u89e3\u69cb\u578b\u5225\u8207\u7528\u6cd5",level:3},{value:"\u5be6\u969b\u61c9\u7528",id:"\u5be6\u969b\u61c9\u7528",level:3},{value:"1. react \u5143\u4ef6 props \u6578\u503c\u63d0\u53d6",id:"1-react-\u5143\u4ef6-props-\u6578\u503c\u63d0\u53d6",level:4},{value:"2. \u53d6\u51fa API \u4e2d\u7279\u5b9a\u7684\u8cc7\u6599",id:"2-\u53d6\u51fa-api-\u4e2d\u7279\u5b9a\u7684\u8cc7\u6599",level:4},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}];function d(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,r.jsx)(e.p,{children:"\u89e3\u69cb\u8ce6\u503c\u662f\u5728 es6 \u4e4b\u5f8c\u63a8\u51fa\u7684\u8a9e\u6cd5\u7cd6\uff0c\u7528\u66f4\u7c21\u55ae\u7684\u65b9\u5f0f\u5c07\u9663\u5217\u3001\u7269\u4ef6\u5167\u7684\u503c\u55ae\u7368\u53d6\u51fa\u53e6\u5b58\u65bc\u65b0\u7684\u8b8a\u6578\u3002\u6211\u81ea\u5df1\u7684\u7406\u89e3\u53ef\u4ee5\u521d\u7565\u5206\u70ba\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u9663\u5217\u89e3\u69cb"}),"\n",(0,r.jsx)(e.li,{children:"\u7269\u4ef6\u89e3\u69cb"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5169\u8005\u5dee\u7570\u8207\u9650\u5236\u6703\u65bc\u4e0b\u65b9\u8aaa\u660e"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"\u9663\u5217\u89e3\u69cb",children:"\u9663\u5217\u89e3\u69cb"}),"\n",(0,r.jsxs)(e.p,{children:["\u53ea\u8981\u7b26\u5408 ",(0,r.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols",children:"iterable protocol"})," \u7684\u5167\u5bb9\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528\u9663\u5217\u89e3\u69cb"]}),"\n",(0,r.jsx)(e.p,{children:"string"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const x = 'string'\nlet [s,t,r,i,n,g] = x\n\nconsole.log(s,t,r) //s,t,r\n"})}),"\n",(0,r.jsx)(e.p,{children:"Map"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const x = new Map([1,2])\nconst [a,b] = x\n\nconsole.log(a,b) //1,2\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u9664\u4e86\u57fa\u672c\u7684\u53d6\u503c\u4e4b\u5916\uff0c\u9084\u53ef\u4ee5\u6839\u64da\u60c5\u5883\u9700\u6c42\u505a\u4ee5\u4e0b\u7684\u4e8b\u60c5\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5ffd\u7565\u9663\u5217\u5167\u7279\u5b9a index \u5167\u7684\u503c"}),"\n",(0,r.jsx)(e.li,{children:"\u8a2d\u5b9a\u9810\u8a2d\u503c"}),"\n",(0,r.jsx)(e.li,{children:"\u642d\u914d\u96e2\u6563\u4f7f\u7528"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"\n// \u5ffd\u7565\u7279\u5b9a index\nconst list = [1,2,3]\nconst [a, ,c] = list //\u53d6\u51fa list \u4e2d\u7684 1,3\nconsole.log(a,c) //1,3\n\n\n//\u589e\u52a0\u9810\u8a2d\u503c\nconst list = [1,2,3]\nconst [a=1, ,c=3] = list\nconsole.log(a,c) //1,3\n\n//\u642d\u914d\u96e2\u6563\nconst [a,...b] = [1,2,3,4,5,6]\nconsole.log(a,b)\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"\u7269\u4ef6\u89e3\u69cb",children:"\u7269\u4ef6\u89e3\u69cb"}),"\n",(0,r.jsx)(e.p,{children:"\u6700\u57fa\u672c\u53ef\u4ee5\u7406\u89e3\u662f\u53d6\u51fa\u7269\u4ef6 key \u7684\u503c\uff0c\u4f46\u89e3\u69cb\u540d\u7a31\u8981\u8207 key \u76f8\u540c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const obj = {a:1,b:2}\nconst {a,b} = obj\nconsole.log(a,b) //1,2\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u91cd\u65b0\u70ba\u89e3\u69cb\u547d\u540d"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const obj = {a:1,b:2}\nlet {a:newA,b:newB} = obj\n\nconsole.log(newA,newB) //1,2\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u55ae\u7368\u63d0\u53d6\u7269\u4ef6 key \u503c\u4f5c\u70ba\u51fd\u5f0f\u53c3\u6578"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const x = {userName:2}\n\nfunction getName({userName}){\n\treturn userName\n}\nconsole.log(getName(x)); //2\n\n\n//\u8981\u53e6\u5916\u70ba\u53c3\u6578\u547d\u540d\u4f5c\u6cd5\u5c31\u985e\u4f3c\u4e0a\u9762\nfunction getNewName({userName:newName}){\n\treturn newName\n}\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"\u4e0d\u53ef\u89e3\u69cb\u578b\u5225\u8207\u7528\u6cd5",children:"\u4e0d\u53ef\u89e3\u69cb\u578b\u5225\u8207\u7528\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const {a} = 1 //undefined\nconst {a} = undefined // error\nconst {a} = null //error\n\nconst [a] = {a:1} //error \n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"\u5be6\u969b\u61c9\u7528",children:"\u5be6\u969b\u61c9\u7528"}),"\n",(0,r.jsx)(e.h4,{id:"1-react-\u5143\u4ef6-props-\u6578\u503c\u63d0\u53d6",children:"1. react \u5143\u4ef6 props \u6578\u503c\u63d0\u53d6"}),"\n",(0,r.jsx)(e.p,{children:"react \u7684 props \u5be6\u969b\u4e0a\u662f\u4e00\u500b\u7269\u4ef6\uff0c\u82e5\u6c92\u6709\u900f\u904e\u89e3\u69cb\uff0c\u5be6\u969b\u4e0a\u53d6\u503c\u6703\u662f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const reactComponent = (name)=>{\n\treturn '\n\t\t<div>{props.name}</div>\n\t'\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u82e5\u662f\u900f\u904e\u89e3\u69cb\u5247\u53ef\u6539\u5beb\u70ba"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const reactComponent = ({name})=>{\n\treturn '\n\t\t<div>{name}</div>\n\t'\n}\n"})}),"\n",(0,r.jsx)(e.h4,{id:"2-\u53d6\u51fa-api-\u4e2d\u7279\u5b9a\u7684\u8cc7\u6599",children:"2. \u53d6\u51fa API \u4e2d\u7279\u5b9a\u7684\u8cc7\u6599"}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u5e38 api \u90fd\u662f\u8907\u5408\u7684\u8cc7\u6599\u7d50\u69cb\uff0c\u5047\u8a2d\u4eca\u5929\u6211\u5011\u62ff\u5230\u7684\u56de\u50b3\u8cc7\u6599\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'const api = {\n\tuser:[{name:"andy"},{name:"leo"}],\n\tstatus:200\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5047\u8a2d\u4eca\u5929\u53ea\u60f3\u53d6\u51fa\u5176\u4e2d user \u4e2d\u7b2c\u4e00\u500b\u7269\u4ef6\u7684\u503c\uff0c\u900f\u904e\u89e3\u69cb"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const {user:[firstUser]} = api\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#try_it",children:"Mdn"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://medium.com/@leo122196/%E7%AD%86%E8%A8%98-es6-%E7%9A%84%E8%A7%A3%E6%A7%8B%E8%B3%A6%E5%80%BC-destructuring-assignment-8a1df9eddbd7",children:"[\u7b46\u8a18] ES6 \u7684\u89e3\u69cb\u8ce6\u503c(Destructuring Assignment)"})}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>a});var r=s(6540);const c={},t=r.createContext(c);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);