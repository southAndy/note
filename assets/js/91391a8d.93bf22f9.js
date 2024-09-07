"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[375],{1775:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=n(4848),l=n(8453);const c={},t=void 0,i={id:"Javascript/Express\u7b46\u8a18",title:"Express\u7b46\u8a18",description:"Express \u5be6\u4f8b\u65b9\u6cd5",source:"@site/docs/Javascript/Express\u7b46\u8a18.md",sourceDirName:"Javascript",slug:"/Javascript/Express\u7b46\u8a18",permalink:"/note/docs/Javascript/Express\u7b46\u8a18",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"\u5e38\u7528\u6307\u4ee4",permalink:"/note/docs/Docker/\u5e38\u7528\u6307\u4ee4"},next:{title:"js-Destructuring",permalink:"/note/docs/Javascript/js-Destructuring"}},d={},a=[{value:"Express \u5be6\u4f8b\u65b9\u6cd5",id:"express-\u5be6\u4f8b\u65b9\u6cd5",level:2},{value:"\u81ea\u52d5\u8b80\u53d6\u975c\u614b\u8cc7\u6e90",id:"\u81ea\u52d5\u8b80\u53d6\u975c\u614b\u8cc7\u6e90",level:3},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:2},{value:"\u5efa\u7acb\u4f3a\u670d\u5668",id:"\u5efa\u7acb\u4f3a\u670d\u5668",level:3},{value:"\u5efa\u7acb\u8def\u7531",id:"\u5efa\u7acb\u8def\u7531",level:3},{value:"\u52d5\u614b\u8def\u7531",id:"\u52d5\u614b\u8def\u7531",level:4},{value:"\u8def\u7531\u8655\u7406\u5668(routing handler)",id:"\u8def\u7531\u8655\u7406\u5668routing-handler",level:3},{value:"\u53c3\u8003\u8cc7\u6599\uff1a",id:"\u53c3\u8003\u8cc7\u6599",level:3}];function p(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"#express"}),"\n",(0,r.jsx)(s.h2,{id:"express-\u5be6\u4f8b\u65b9\u6cd5",children:"Express \u5be6\u4f8b\u65b9\u6cd5"}),"\n",(0,r.jsx)(s.h3,{id:"\u81ea\u52d5\u8b80\u53d6\u975c\u614b\u8cc7\u6e90",children:"\u81ea\u52d5\u8b80\u53d6\u975c\u614b\u8cc7\u6e90"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'app.use(express.static("public"));\n'})}),"\n",(0,r.jsx)(s.h2,{id:"\u57fa\u672c\u64cd\u4f5c",children:"\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,r.jsx)(s.h3,{id:"\u5efa\u7acb\u4f3a\u670d\u5668",children:"\u5efa\u7acb\u4f3a\u670d\u5668"}),"\n",(0,r.jsxs)(s.p,{children:["\u8981\u5efa\u7acb\u4e00\u500b\u4f3a\u670d\u5668\uff0c\u6700\u57fa\u672c\u8981\u7d66\u4e88\u4e00\u500b ",(0,r.jsx)(s.em,{children:"PORT"})," \uff0c",(0,r.jsx)(s.em,{children:"\u8b93\u4eba\u53ef\u4ee5\u900f\u904e\u9019\u500b"})," PORT \u4f86\u8a2a\u554f"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'//app.js\nconst express = require("express");\nconst app = express();\nconst PORT = 8000;\napp.listen(port);\n'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"PORT \u7684\u503c\u4e5f\u6709\u9650\u5236\uff0c\u50cf\u662f"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["0 - 1023 \u662f\u6240\u8b02\u7684 ",(0,r.jsx)(s.em,{children:"well-known-ports"})," \uff0c\u5df2\u7d93\u5206\u914d\u7d66\u7279\u5b9a\u7684\u5927\u773e\u670d\u52d9"]}),"\n",(0,r.jsxs)(s.li,{children:["1024 - 49151 \u5247\u662f ",(0,r.jsx)(s.em,{children:"register-ports"})," \uff0c\u901a\u5e38\u7528\u65bc\u8edf\u9ad4\u61c9\u7528\u7a0b\u5f0f\u4f7f\u7528"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u5efa\u7acb\u8def\u7531",children:"\u5efa\u7acb\u8def\u7531"}),"\n",(0,r.jsxs)(s.p,{children:["\u5047\u8a2d\u4eca\u5929\u7db2\u7ad9\u60f3\u65b0\u589e\u4e00\u500b\uff1a\u95dc\u65bc\u6211\u5011\u9801\u9762\uff0c\u6211\u5011\u70ba\u9019\u500b\u9801\u9762\u53d6\u540d\u70ba: ",(0,r.jsx)(s.code,{children:"/about"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'app.get("/about");\n'})}),"\n",(0,r.jsx)(s.h4,{id:"\u52d5\u614b\u8def\u7531",children:"\u52d5\u614b\u8def\u7531"}),"\n",(0,r.jsxs)(s.p,{children:["\u5728\u8def\u7531\u52a0\u5165",(0,r.jsx)(s.code,{children:":"})," \u4f86\u7522\u751f\u52d5\u614b\u53c3\u6578"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript!",children:'app.get("/:product",(req,res)=>{})\n'})}),"\n",(0,r.jsx)(s.p,{children:"\u53c3\u6578\u503c\u53ef\u4ee5\u900f\u904e reqeust \u7269\u4ef6\u4e2d\u53d6\u5f97"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'app.get("/:product", (req, res) => {\n  //\u53d6\u5f97\u52d5\u614b\u53c3\u6578product\n  let { product } = req.params;\n  res.send("string" + product);\n});\n'})}),"\n",(0,r.jsx)(s.p,{children:"HTTP \u5be6\u4f8b\u6709\u63d0\u4f9b\u591a\u7a2e\u7684\u65b9\u6cd5\uff0c\u6700\u5e38\u898b\u7684\u50cf\u662f CRUD\uff1aget, post, delete, update \u7b49\u65b9\u6cd5\uff0cexpress \u53ef\u4ee5\u8b93\u4f60\u91dd\u5c0d\u4e0d\u540c\u985e\u578b\u7684\u8acb\u6c42\u53bb\u8a2d\u5b9a\u4e0d\u540c\u7684\u97ff\u61c9\u884c\u70ba\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u5148\u77e5\u9053\u9019\u908a\u6307\u7684 request , response \u5206\u5225\u4ee3\u8868\u5ba2\u6236\u7aef\u7684\u8acb\u6c42\u53ca\u4f3a\u670d\u5668\u7aef\u7684\u56de\u61c9"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript!",children:'app.get("routeName",(request,response)=>{\n\n})\n'})}),"\n",(0,r.jsx)(s.h3,{id:"\u8def\u7531\u8655\u7406\u5668routing-handler",children:"\u8def\u7531\u8655\u7406\u5668(routing handler)"}),"\n",(0,r.jsxs)(s.p,{children:["\u7528\u4f86\u5b9a\u7fa9\u89f8\u767c\u8def\u7531\u7684\u5c0d\u61c9\u884c\u70ba\uff0c\u4f8b\u5982\uff1a\u5411 ",(0,r.jsx)(s.code,{children:"https://test/user/andy"})," \u767c\u51fa\u8acb\u6c42"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'app.use("/user", (req, res, next) => {\n  //\u505a\u4e00\u4e9b\u4e8b\u60c5\n});\n'})}),"\n",(0,r.jsx)(s.p,{children:"\u4f46\u5047\u8a2d\u8655\u7406\u5668\u4e0d\u53ea\u4e00\u500b\uff0c\u4f8b\u5982\uff1a\u4e00\u822c\u4f86\u8aaa\uff0c\u4f7f\u7528\u8005\u767b\u5165\u6d41\u7a0b\u5047\u8a2d\u5206\u5225\u8981\u7d93\u904e\uff1a"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"\u6aa2\u67e5\u662f\u5426\u6709\u6b64\u4eba\u5b58\u5728"}),"\n",(0,r.jsx)(s.li,{children:"\u5bc6\u78bc\u662f\u5426\u904e\u671f"}),"\n",(0,r.jsx)(s.li,{children:"\u53d6\u5f97\u9a57\u8b49\u78bc"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u9019\u6642\u5c31\u53ef\u4ee5\u4ee5\u9663\u5217\u7684\u65b9\u5f0f\u4f86\u88dd\u591a\u500b\u8655\u7406\u5668"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'app.use("/user", [checkPerson, checkPassword, getID]);\n'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u6ce8\u610f\uff1a\u6703\u4f9d\u7167\u9663\u5217\u7d22\u5f15\u503c\u9806\u5e8f\u4f86\u57f7\u884c"}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599\uff1a"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://expressjs.com/zh-tw/api.html",children:"https://expressjs.com/zh-tw/api.html"})}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>i});var r=n(6540);const l={},c=r.createContext(l);function t(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);