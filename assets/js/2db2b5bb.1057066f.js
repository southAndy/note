"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[618],{4982:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(4848),t=i(8453);const r={},l="[\u7b46\u8a18] \u91cd\u69cb vue project",c={id:"Vue/refactor",title:"[\u7b46\u8a18] \u91cd\u69cb vue project",description:"\u70ba\u4f55\u8981\u91cd\u69cb\uff1f",source:"@site/docs/Vue/refactor.md",sourceDirName:"Vue",slug:"/Vue/refactor",permalink:"/docs/Vue/refactor",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"Vue CLI to Vite",permalink:"/docs/Vue/clitovite"},next:{title:"\u624b\u52d5\u6253\u5305vue\u5c08\u6848\u8a8d\u8b58webpack\u914d\u7f6e",permalink:"/docs/Webpack/\u624b\u52d5\u6253\u5305vue\u5c08\u6848\u8a8d\u8b58webpack\u914d\u7f6e"}},o={},d=[{value:"\u70ba\u4f55\u8981\u91cd\u69cb\uff1f",id:"\u70ba\u4f55\u8981\u91cd\u69cb",level:2},{value:"\u91cd\u69cb\u65b9\u5f0f",id:"\u91cd\u69cb\u65b9\u5f0f",level:3},{value:"\u91cd\u69cb\u524d\u529f\u80fd\u6e2c\u8a66",id:"\u91cd\u69cb\u524d\u529f\u80fd\u6e2c\u8a66",level:2},{value:"\u6e2c\u8a66\u65b9\u6cd5",id:"\u6e2c\u8a66\u65b9\u6cd5",level:3},{value:"\u91cd\u69cb\u8a18\u9304",id:"\u91cd\u69cb\u8a18\u9304",level:2},{value:"\u5716\u89e3\u5c08\u6848\u67b6\u69cb",id:"\u5716\u89e3\u5c08\u6848\u67b6\u69cb",level:3},{value:"\u662f\u5426\u5168\u9762\u6539\u5beb compositionAPI?",id:"\u662f\u5426\u5168\u9762\u6539\u5beb-compositionapi",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u7b46\u8a18-\u91cd\u69cb-vue-project",children:"[\u7b46\u8a18] \u91cd\u69cb vue project"}),"\n",(0,s.jsx)(n.h2,{id:"\u70ba\u4f55\u8981\u91cd\u69cb",children:"\u70ba\u4f55\u8981\u91cd\u69cb\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:["\u95b1\u8b80\u5b8c explain this \u7684",(0,s.jsx)(n.a,{href:"https://www.explainthis.io/zh-hant/swe/how-to-refactor",children:"\u91cd\u69cb\u6587\u7ae0"}),"\u5f8c\uff0c\u6211\u81ea\u5df1\u6c7a\u5b9a\u7df4\u7fd2\u91cd\u69cb\u5c08\u6848\u7684\u539f\u56e0\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6aa2\u8996\u81ea\u5df1\u7684\u7a0b\u5f0f\u78bc\u9032\u6b65\u72c0\u6cc1"}),"\n",(0,s.jsxs)(n.li,{children:["\u8a66\u8457\u4ee5\u63d0\u9ad8",(0,s.jsx)(n.strong,{children:"\u53ef\u8b80\u6027"}),"\u3001",(0,s.jsx)(n.strong,{children:"\u597d\u7dad\u8b77"}),"\u3001",(0,s.jsx)(n.strong,{children:"\u66f4\u597d\u7684\u6548\u80fd"})," \u7684\u8996\u89d2\u4f86\u512a\u5316"]}),"\n",(0,s.jsx)(n.li,{children:"\u9019\u500b\u5c08\u6848\u5f88\u5c0f\uff0c\u5f88\u9069\u5408\u5165\u9580\u7df4\u7fd2"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u91cd\u69cb\u65b9\u5f0f",children:"\u91cd\u69cb\u65b9\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u6703\u9644\u4e0a\u91cd\u69cb\u524d\u5f8c\u7a0b\u5f0f\u78bc\u9032\u884c\u6bd4\u5c0d\uff0c\u5728\u91cd\u69cb\u7684\u904e\u7a0b\u82e5\u6709\u9047\u5230\u503c\u5f97\u8907\u7fd2\u3001\u4e0d\u6e05\u695a\u7684\u6982\u5ff5\u6703\u8a18\u9304\u4e0b\u4f86\uff0c\u4ee5\u4e0b\u662f\u4e3b\u8981\u6b65\u9a5f\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5716\u89e3\u67b6\u69cb\u53ca\u5404\u500b\u67b6\u69cb\u7684\u529f\u80fd"}),"\n",(0,s.jsx)(n.li,{children:"\u70ba\u91cd\u8981\u529f\u80fd\u52a0\u5165\u55ae\u5143\u6e2c\u8a66(JEST + Vue Unit-Test)"}),"\n",(0,s.jsx)(n.li,{children:"\u4ee5\u9801\u9762\u70ba\u55ae\u4f4d\u53bb\u91dd\u5c0d\u7a0b\u5f0f\u78bc\u9032\u884c\u91cd\u69cb\uff08\u4e26\u4e14\u8a18\u9304\u4e0b\u7a0b\u5f0f\u78bc\u91cd\u69cb\u7684\u539f\u56e0\uff09"}),"\n",(0,s.jsx)(n.li,{children:"\u4ee5 Typescript \u9032\u884c\u7de8\u5beb"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u91cd\u69cb\u524d\u529f\u80fd\u6e2c\u8a66",children:"\u91cd\u69cb\u524d\u529f\u80fd\u6e2c\u8a66"}),"\n",(0,s.jsxs)(n.p,{children:["\u91cd\u69cb\u6700\u7c21\u55ae\u53ef\u4ee5\u7406\u89e3\u662f\u300c",(0,s.jsx)(n.strong,{children:"\u4e0d\u5f71\u97ff\u529f\u80fd\u904b\u884c\u4e0b\u8abf\u6574\u512a\u5316\u7a0b\u5f0f\u78bc"}),"\u300d\u7684\u884c\u70ba\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e\u64b0\u5beb\u6e2c\u8a66\u4f86\u78ba\u4fdd\u529f\u80fd\u904b\u4f5c\uff0c\u4f46\u4e00\u500b\u5c08\u6848\u5167\u529f\u80fd\u90a3\u9ebc\u591a\uff0c\u5168\u90e8\u90fd\u9700\u8981\u64b0\u5beb\u6e2c\u8a66\uff1f"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u6211\u5f97\u51fa\u9700\u8981\u6e2c\u8a66\u7684\u529f\u80fd\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9ad8\u983b\u7387\u4f7f\u7528/\u6838\u5fc3\u529f\u80fd"}),"\uff1a\u6240\u8b02\u7684\u6838\u5fc3\u529f\u80fd\u53ef\u4ee5\u662f\u6307\u300c\u6538\u95dc\u7db2\u7ad9\u71df\u6536\u300d\u3001\u300c\u73fe\u5728\u672a\u4f86\u4e3b\u8981\u767c\u5c55\u300d\u7684\u529f\u80fd\uff0c\u50cf\u662f\u4ee5\u5f8c\u53f0\u7cfb\u7d71\u4f86\u8aaa\uff0c\u6392\u9664 API \u4e0d\u6b63\u5e38\u7684\u60c5\u5883\uff0c\u641c\u5c0b\u3001\u5716\u8868\u986f\u793a\u529f\u80fd\u90fd\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u5e38\u898b\u8b58\u5225\u6838\u5fc3\u529f\u80fd\u7684\u65b9\u6cd5\u53ef\u900f\u904e Google Analysis, Meta Pixiel \u57cb\u9ede\uff0c\u4f86\u7d71\u8a08\u3001\u8ffd\u8e64\u4f7f\u7528\u8005\u4f7f\u7528\u884c\u70ba\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7570\u5e38\u72c0\u614b\u8655\u7406"}),"\uff1a\u50cf\u662f\u5728 API \u8cc7\u6599\u56de\u4f86\u524d\u8981\u986f\u793a\u7684\u8f09\u5165\u6548\u679c\u3001\u6216\u662f\u8f09\u5165\u5931\u6557\u7684\u932f\u8aa4\u756b\u9762\u986f\u793a\uff0c\u90fd\u53ef\u4ee5\u7b97\u5728\u9019\u985e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6e2c\u8a66\u65b9\u6cd5",children:"\u6e2c\u8a66\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h2,{id:"\u91cd\u69cb\u8a18\u9304",children:"\u91cd\u69cb\u8a18\u9304"}),"\n",(0,s.jsx)(n.h3,{id:"\u5716\u89e3\u5c08\u6848\u67b6\u69cb",children:"\u5716\u89e3\u5c08\u6848\u67b6\u69cb"}),"\n",(0,s.jsx)(n.p,{children:"\u5716\u7247\u8aaa\u660e\u7684\u662f\u5c08\u6848\u67b6\u69cb\u3001\u5167\u90e8\u5305\u542b\u7684\u5143\u4ef6\u4ee5\u53ca\u5143\u4ef6\u6982\u8981\u7684\u529f\u80fd\u8aaa\u660e"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(4428).A+"",width:"1488",height:"1240"})}),"\n",(0,s.jsx)(n.h3,{id:"\u662f\u5426\u5168\u9762\u6539\u5beb-compositionapi",children:"\u662f\u5426\u5168\u9762\u6539\u5beb compositionAPI?"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u767c\u73fe\u9019\u500b\u5c08\u6848\u76ee\u524d\u662f\u4f7f\u7528 optionAPI \u9032\u884c\u64b0\u5beb\uff0c\u8981\u6c7a\u5b9a\u5c08\u6848\u662f\u5426\u7ffb\u65b0\u524d\uff0c\u5148\u6aa2\u8996\u7576\u6642\u958b\u767c\u7684\u6642\u7a7a\u80cc\u666f\uff1a"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u88fd\u4f5c\u9019\u500b\u5c08\u6848\u6642\uff0c\u6211\u7b97\u662f\u521d\u6b21\u5165\u9580 vue\uff0c\u7576\u6642\u8077\u5834\u4e0a\u4e3b\u6d41\u9700\u6c42\u9084\u504f\u5411 vue2 \uff0coptionAPI \u67b6\u69cb\u8f03\u70ba\u985e\u4f3c vue2"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5927\u81f4\u78ba\u8a8d\u4e86\u6c92\u6709\u7279\u5225\u7684\u7406\u7531\u5f8c\uff0c\u5c31\u53ef\u4ee5\u55ae\u7d14\u4ee5\u7a0b\u5f0f\u9762\u4f86\u6bd4\u8f03\uff0c\u7d93\u904e research \u52a0\u4e0a\u81ea\u5df1\u958b\u767c\u7d93\u9a57\u5f97\u51fa\u4ee5\u4e0b\u7684\u7d50\u8ad6\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4ee5 compositionAPI \u958b\u767c\uff0c\u53ef\u4ee5\u5c07\u540c\u500b\u529f\u80fd\u7684\u72c0\u614b\u8207\u529f\u80fd\u51fd\u5f0f\u805a\u96c6\uff0c\u800c optionAPI \u5247\u56e0\u70ba\u67b6\u69cb\u898f\u7bc4\u7121\u6cd5\u505a\u5230\u9019\u4ef6\u4e8b\uff0c\u96a8\u8457\u5c08\u6848\u9ad4\u7a4d\u64f4\u5927\uff0c\u529f\u80fd\u7dad\u8b77\u7684\u5bb9\u6613\u6027\u8d8a\u5dee\u8d8a\u591a\uff0c\u5982\u540c\u5b98\u65b9\u6587\u4ef6\u7684\u6bd4\u8f03\u5716"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://vuejs.org/assets/composition-api-after.ZXskY_32.png",alt:""})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u76f8\u95dc\u751f\u614b\u7cfb\u8207 Typescript \u7684\u652f\u63f4\u7a0b\u5ea6\uff0c\u56e0\u70ba\u5f8c\u7e8c\u60f3\u4ee5 typescript \u9032\u884c\u6539\u5beb\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7d9c\u5408\u4e0a\u8ff0\u5169\u9ede\uff0c\u78ba\u8a8d\u8981\u7ffb\u5beb\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4428:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/structure-e1a14279c880f660772ed1a9f91eb002.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);