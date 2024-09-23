"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[310],{3948:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var c=s(4848),l=s(8453);const t={},o="[JS] Event Loop",r={id:"Javascript/[js]eventloop",title:"[JS] Event Loop",description:"\u524d\u8a00",source:"@site/docs/Javascript/[js]eventloop.md",sourceDirName:"Javascript",slug:"/Javascript/[js]eventloop",permalink:"/note/docs/Javascript/[js]eventloop",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"[Nodejs] Expressjs basic",permalink:"/note/docs/Javascript/Express\u7b46\u8a18"},next:{title:"[JS] Destructuring",permalink:"/note/docs/Javascript/js-Destructuring"}},i={},a=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"\u540c\u6b65\u8207\u975e\u540c\u6b65\u7684\u6982\u5ff5",id:"\u540c\u6b65\u8207\u975e\u540c\u6b65\u7684\u6982\u5ff5",level:3},{value:"\u4e8b\u4ef6\u5faa\u74b0\u5167\u90e8\u7684\u5e7e\u500b\u5143\u7d20",id:"\u4e8b\u4ef6\u5faa\u74b0\u5167\u90e8\u7684\u5e7e\u500b\u5143\u7d20",level:3},{value:"\u4e8b\u4ef6\u5faa\u74b0\u904b\u884c\u6d41\u7a0b",id:"\u4e8b\u4ef6\u5faa\u74b0\u904b\u884c\u6d41\u7a0b",level:3},{value:"\u7d30\u63a2 callback queue",id:"\u7d30\u63a2-callback-queue",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"js-event-loop",children:"[JS] Event Loop"}),"\n",(0,c.jsx)(n.h3,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,c.jsx)(n.p,{children:"\u7576\u4f60\u64b0\u5beb\u5b8c\u4e00\u6bb5\u7a0b\u5f0f\u78bc\uff0c\u4f60\u662f\u5426\u6703\u597d\u5947\u5b83\u662f\u5982\u4f55\u57f7\u884c\uff1f\u5728 javascript \u4e2d\u53ef\u4ee5\u900f\u904e\u7406\u89e3\u300c\u4e8b\u4ef6\u5faa\u74b0\u300d\u4f86\u8a8d\u8b58\u7a0b\u5f0f\u78bc\u57f7\u884c\u65b9\u5f0f\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u540c\u6b65\u8207\u975e\u540c\u6b65\u7684\u6982\u5ff5",children:"\u540c\u6b65\u8207\u975e\u540c\u6b65\u7684\u6982\u5ff5"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f46\u5728\u9032\u5165\u4e8b\u4ef6\u5faa\u74b0\u4e4b\u524d\uff0c\u8981\u5148\u4e86\u89e3\u4ec0\u9ebc\u662f",(0,c.jsx)(n.strong,{children:"\u540c\u6b65"}),"\u8207",(0,c.jsx)(n.strong,{children:"\u975e\u540c\u6b65"}),"\uff0c\u8981\u77e5\u9053 Javascript \u662f\u55ae\u57f7\u884c\u5e8f\u7684\u8a9e\u8a00\uff0c\u610f\u601d\u662f\u4e00\u6b21\u57f7\u884c\u4e00\u500b\u7a0b\u5f0f\u78bc\u5b8c\u6210\u624d\u5f80\u4e0b\u57f7\u884c\uff0c\u9019\u5c31\u662f",(0,c.jsx)(n.strong,{children:"\u540c\u6b65"}),"\u7684\u884c\u70ba\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'console.log("1");\n// \u9019\u6642\u5019\u6703\u5148\u57f7\u884c\u5370\u51fa 1 \u5f8c\uff0c\u624d\u6703\u57f7\u884c 2\nconsole.log("2");\n// \u9019\u6642\u5019\u6703\u5148\u57f7\u884c\u5370\u51fa 2 \u5f8c\uff0c\u624d\u6703\u57f7\u884c 3\nconsole.log("3");\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5047\u60f3\u4eca\u5929\u6211\u5011\u57f7\u884c\u4e00\u500b\u7a0b\u5f0f\u78bc\uff0c\u5b8c\u6210\u7a0b\u5f0f\u78bc\u57f7\u884c\u6703\u9700\u8981\u7b49\u5f85\u4e00\u6bb5\u6642\u9593\uff08\u5e38\u898b\u8ddf\u4f3a\u670d\u5668\u6aa2\u7d22\u8cc7\u6599\u4e4b\u985e\uff09\uff0c\u5982\u679c\u4ee5\u540c\u6b65\u65b9\u5f0f\u57f7\u884c\uff0c\u6703\u9020\u6210\u4e3b\u57f7\u884c\u5e8f\u963b\u585e\uff0c\u9019\u6642\u5019\u5c31\u9700\u8981",(0,c.jsx)(n.strong,{children:"\u975e\u540c\u6b65"}),"\u7684\u884c\u70ba\u4f86\u89e3\u6c7a\u3002\u900f\u904e\u975e\u540c\u6b65\u884c\u70ba\uff0c\u6211\u5011\u53ef\u4ee5\u8b93\u7a0b\u5f0f\u78bc\u5728\u7b49\u5f85\u5b8c\u6210\u7684\u6642\u9593\u53bb\u505a\u5176\u4ed6\u4e8b\uff0c\u800c\u4e0d\u662f\u963b\u585e\u5728\u90a3\u908a\uff0c\u800c\u57f7\u884c\u74b0\u5883\uff08\u5982\u700f\u89bd\u5668,nodejs\uff09\u80fd\u5920\u5be6\u73fe\u975e\u540c\u6b65\u64cd\u4f5c\u5c31\u662f\u900f\u904e\u4e8b\u4ef6\u5faa\u74b0\u7684\u6a5f\u5236\u3002",(0,c.jsx)(n.strong,{children:"\u4e8b\u4ef6\u5faa\u74b0\u6a5f\u5236\u6709\u6548\u89e3\u6c7a\u4e86JavaScript\u4e2d\u7684\u55ae\u57f7\u884c\u7dd2\u554f\u984c\uff0c\u4e26\u78ba\u4fdd\u8017\u6642\u64cd\u4f5c\u4e0d\u6703\u963b\u585e\u4e3b\u57f7\u884c\u7dd2\u3002"})]}),"\n",(0,c.jsx)(n.h3,{id:"\u4e8b\u4ef6\u5faa\u74b0\u5167\u90e8\u7684\u5e7e\u500b\u5143\u7d20",children:"\u4e8b\u4ef6\u5faa\u74b0\u5167\u90e8\u7684\u5e7e\u500b\u5143\u7d20"}),"\n",(0,c.jsx)(n.p,{children:"\u9019\u908a\u57f7\u884c\u74b0\u5883\u8209\u4f8b\u70ba\u700f\u89bd\u5668\uff0c\u5176\u4e3b\u8981\u67b6\u69cb\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5806\u758a (call stack)\uff1a\u63a1\u53d6\u300c\u5f8c\u9032\u5148\u51fa\u300d\u7684\u6a5f\u5236\uff0c\u5167\u5bb9\u6703\u4f9d\u5e8f\u653e\u7f6e\u5728\u6b64"}),"\n",(0,c.jsx)(n.li,{children:"\u5806\u758a (heap)\uff1a\u5b58\u653e\u8b8a\u6578\u3001\u7269\u4ef6\u7b49\u8cc7\u6599"}),"\n",(0,c.jsx)(n.li,{children:"\u4f47\u5217 (callback queue)\uff1a\u6700\u6982\u7565\u7684\u8aaa\u6cd5\u5c31\u662f\uff1a\u5b58\u653e\u975e\u540c\u6b65\u7684\u57f7\u884c\u5167\u5bb9\u653e\u7f6e"}),"\n",(0,c.jsx)(n.li,{children:"Web-API\uff1a\u57f7\u884c\u74b0\u5883\uff08\u700f\u89bd\u5668\uff09\u63d0\u4f9b\u7684\u5404\u7a2e\u65b9\u6cd5"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(10).A+"",width:"700",height:"525"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5716\u7247\u4f86\u6e90\uff1a",(0,c.jsx)(n.a,{href:"https://subhra.hashnode.dev/all-about-javascript-event-loop",children:"https://subhra.hashnode.dev/all-about-javascript-event-loop"})]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u4e8b\u4ef6\u5faa\u74b0\u904b\u884c\u6d41\u7a0b",children:"\u4e8b\u4ef6\u5faa\u74b0\u904b\u884c\u6d41\u7a0b"}),"\n",(0,c.jsxs)(n.p,{children:["\u5c0d\u65bc\u540c\u6b65\u8207\u975e\u540c\u6b65\u4ee5\u53ca\u4e8b\u4ef6\u5faa\u74b0\u6709\u57fa\u672c\u8a8d\u8b58\u5f8c\uff0c\u8b93\u6211\u5011\u56de\u5230\u6587\u7ae0\u4e3b\u984c",(0,c.jsx)(n.strong,{children:"\u4e8b\u4ef6\u5faa\u74b0"})," \uff0c\u6bcf\u6b21\u4e8b\u4ef6\u5faa\u74b0\u7684\u57f7\u884c\u6b65\u9a5f\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u6383\u63cf\u6240\u6709\u7684\u7a0b\u5f0f\u78bc\u5167\u5bb9\uff0c\u6240\u6709\u7684\u540c\u6b65\u57f7\u884c\u90fd\u6703\u653e\u5165 call stack \u4e2d\u57f7\u884c"}),"\n",(0,c.jsx)(n.li,{children:"\u4e2d\u9593\u9047\u5230\u975e\u540c\u6b65\u7684\u7a0b\u5f0f\u78bc\uff0c\u82e5\u662f\u9700\u900f\u904e Web-API \u57f7\u884c\uff08\u5982 setTimeout\uff09\uff0c\u6703\u5148\u5c07\u975e\u540c\u6b65\u7684\u7a0b\u5f0f\u78bc\u4ea4\u7d66 Web-API \u57f7\u884c\uff0c\u57f7\u884c\u5b8c\u5f8c\u6703\u63a8\u5165 callback queue \u4e2d\u7b49\u5f85\u88ab\u57f7\u884c"}),"\n",(0,c.jsx)(n.li,{children:"\u7b49\u5f85 call stack \u5167\u6c92\u6709\u5f85\u57f7\u884c\u5167\u5bb9\u5f8c\uff0c\u6703\u53bb callback queue \u67e5\u770b\u662f\u5426\u6709\u975e\u540c\u6b65\u7684\u7a0b\u5f0f\u78bc\u5f85\u8655\u7406\uff0c\u6709\u5247\u63a8\u5165 call stack \u5167\u958b\u59cb\u57f7\u884c"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8209\u4f8b\u4f86\u8aaa\uff0c\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\uff0c\u5716\u89e3\u57f7\u884c\u6d41\u7a0b\u5982\u4e0b"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(3606).A+"",width:"2234",height:"1220"})}),"\n",(0,c.jsx)(n.h3,{id:"\u7d30\u63a2-callback-queue",children:"\u7d30\u63a2 callback queue"}),"\n",(0,c.jsx)(n.p,{children:"\u4f46\u5176\u5be6 callback queue \u9084\u53ef\u4ee5\u7d30\u5206 microtask queue \u8207 macrotask queue\uff0c\u4ee5\u4e0b\u662f MDN \u7684\u89e3\u91cb\uff1a"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5fae\u4efb\u52d9\uff08Microtasks\uff09\uff1a\u5fae\u4efb\u52d9\u662f\u8f03\u8f15\u91cf\u7d1a\u7684\u4efb\u52d9\uff0c\u901a\u5e38\u7528\u65bc\u8655\u7406\u975e\u540c\u6b65\u4e8b\u4ef6\u7684\u56de\u8abf\u3002\u5fae\u4efb\u52d9\u7684\u57f7\u884c\u512a\u5148\u7d1a\u9ad8\u65bc\u5de8\u96c6\u4efb\u52d9\uff0c\u56e0\u6b64\u5b83\u5011\u6703\u5728\u5de8\u96c6\u4efb\u52d9\u4e4b\u524d\u57f7\u884c\u3002\u5fae\u4efb\u52d9\u901a\u5e38\u5305\u62ec ",(0,c.jsx)(n.code,{children:"Promise"}),",",(0,c.jsx)(n.code,{children:"MutationObserver"})," \u7b49\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5de8\u96c6\u4efb\u52d9\uff08Macrotasks\uff09\uff1a\u5de8\u96c6\u4efb\u52d9\u662f\u8f03\u91cd\u91cf\u7d1a\u7684\u4efb\u52d9\uff0c\u901a\u5e38\u7528\u65bc\u8655\u7406\u8f03\u6162\u7684\u975e\u540c\u6b65\u64cd\u4f5c\uff0c\u5982 I/O \u64cd\u4f5c\u3001\u7db2\u8def\u8acb\u6c42\u7b49\u3002**\u5de8\u96c6\u4efb\u52d9\u7684\u57f7\u884c\u512a\u5148\u7d1a\u4f4e\u65bc\u5fae\u4efb\u52d9\uff0c\u56e0\u6b64\u5b83\u5011\u6703\u5728\u5fae\u4efb\u52d9\u4e4b\u5f8c\u57f7\u884c\u3002**\u5de8\u96c6\u4efb\u52d9\u901a\u5e38\u5305\u62ec ",(0,c.jsx)(n.code,{children:"script"})," ",(0,c.jsx)(n.code,{children:"setTimeout"}),"\u3001",(0,c.jsx)(n.code,{children:"setInterval"}),"\u3001",(0,c.jsx)(n.code,{children:"XMLHttpRequest"})," \u7b49\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u770b\u5b8c\u4e86\u90a3\u6211\u5011\u4f86\u6e2c\u8a66\u4e00\u4e0b\uff0c\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7684\u57f7\u884c\u9806\u5e8f"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"console.log('script start');\n\nsetTimeout(() => {\n  console.log('setTimeout');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('Promise');\n});\n\nconsole.log('script end');\n\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4f60\u89ba\u5f97\u6703\u5370\u51fa\u4ec0\u9ebc\u5462\uff1f"}),"\n",(0,c.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},3606:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/eventloop-work-c967d4665107229c3773d69c2cf1245e.png"},10:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/eventloop-13affaeb1a6bd14d588f026d98154b29.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var c=s(6540);const l={},t=c.createContext(l);function o(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);