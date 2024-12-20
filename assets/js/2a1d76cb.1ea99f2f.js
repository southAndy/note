"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[95],{3564:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var c=r(4848),s=r(8453);const i={},d="Redux - \u6a5f\u5236\u521d\u63a2",l={id:"React/Redux-basic",title:"Redux - \u6a5f\u5236\u521d\u63a2",description:"store",source:"@site/docs/React/Redux-basic.md",sourceDirName:"React",slug:"/React/Redux-basic",permalink:"/docs/React/Redux-basic",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"React - \u57fa\u672c",permalink:"/docs/React/React - \u57fa\u672c"},next:{title:"Render and Commit",permalink:"/docs/React/render"}},t={},o=[{value:"store",id:"store",level:3},{value:"action",id:"action",level:3},{value:"reducer",id:"reducer",level:3},{value:"\u5b9a\u7fa9\u7d14\u51fd\u5f0f",id:"\u5b9a\u7fa9\u7d14\u51fd\u5f0f",level:3},{value:"\u70ba\u4ec0\u9ebc Redux \u5f37\u8abf reducer \u662f\u7d14\u51fd\u5f0f\uff1f",id:"\u70ba\u4ec0\u9ebc-redux-\u5f37\u8abf-reducer-\u662f\u7d14\u51fd\u5f0f",level:3},{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",level:2},{value:"\u55ae\u5411\u8cc7\u6599\u6d41",id:"\u55ae\u5411\u8cc7\u6599\u6d41",level:3},{value:"\u512a\u7f3a\u9ede",id:"\u512a\u7f3a\u9ede",level:3},{value:"\u512a\u9ede",id:"\u512a\u9ede",level:4},{value:"\u7f3a\u9ede",id:"\u7f3a\u9ede",level:4}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"redux---\u6a5f\u5236\u521d\u63a2",children:"Redux - \u6a5f\u5236\u521d\u63a2"}),"\n",(0,c.jsx)(n.h3,{id:"store",children:"store"}),"\n",(0,c.jsx)(n.p,{children:"\u63d0\u4f9b\u4ee5\u4e0b\u5e7e\u7a2e\u65b9\u6cd5\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"getValue"})," : \u7372\u53d6\u7576\u524d\u72c0\u614b"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"dispatch(action)"}),"\uff1a\u901a\u77e5 redux \u66f4\u65b0\u72c0\u614b\u503c"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"subscribe"}),"\uff1a\u8a02\u95b1\u72c0\u614b\u8b8a\u5316"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"action",children:"action"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3b\u8981\u76ee\u7684\u662f",(0,c.jsx)(n.strong,{children:"\u63cf\u8ff0\u767c\u751f\u4e8b\u4ef6"}),"\uff0c\u7528\u4f86\u8b93 reducer \u77e5\u9053\u8981\u505a\u4ec0\u9ebc\uff0c ",(0,c.jsx)(n.code,{children:"action"})," \u662f\u4e00\u500b Javascript \u7269\u4ef6\u67b6\u69cb"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const action = {\n\ttype:\"\", //\u8981\u89f8\u767c\u7684 reducer \u540d\u7a31\n\tpayload:'' //\u5e0c\u671b\u66f4\u65b0\u7684\u503c\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"reducer",children:"reducer"}),"\n",(0,c.jsxs)(n.p,{children:["\u5b83\u662f\u4e00\u500b ",(0,c.jsx)(n.strong,{children:"\u7d14\u51fd\u5f0f"})," \uff0c\u63a5\u6536\u5169\u500b\u53c3\u6578\uff0c\u5206\u5225\u4ee3\u8868 ",(0,c.jsx)(n.strong,{children:"\u7576\u524d\u72c0\u614b"}),"\u3001 **\u52d5\u4f5c (action) **\uff0c\u4e0b\u9762\u4ee5\u4e00\u500b\u8a08\u7b97\u529f\u80fd\u70ba\u4f8b"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"function counterReducer(state = { count: 0 }, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u90a3\u6240\u8b02\u7684\u7d14\u51fd\u5f0f\u53c8\u662f\u4ec0\u9ebc\uff1f\u70ba\u4f55\u5b83\u9700\u8981\u662f\u4e00\u500b\u7d14\u51fd\u5f0f\uff1f"}),"\n",(0,c.jsx)(n.h3,{id:"\u5b9a\u7fa9\u7d14\u51fd\u5f0f",children:"\u5b9a\u7fa9\u7d14\u51fd\u5f0f"}),"\n",(0,c.jsxs)(n.p,{children:["\u7d14\u51fd\u5f0f\uff0c\u53ef\u4ee5\u662f ",(0,c.jsx)(n.strong,{children:"\u8f38\u5165\u6c7a\u5b9a\u8f38\u51fa"}),"\u3001",(0,c.jsx)(n.strong,{children:"\u7121\u526f\u4f5c\u7528"}),"\u3001",(0,c.jsx)(n.strong,{children:"\u4e0d\u6539\u8b8a\u8f38\u5165\u503c"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"//\u6709\u526f\u4f5c\u7528\nlet counter = 0;\n\nfunction increment() {\n    counter += 1; // \u9019\u500b\u51fd\u5f0f\u4fee\u6539\u4e86\u5916\u90e8\u8b8a\u6578\n    return counter;\n}\n\n//\u6539\u8b8a\u8f38\u5165\u503c\nfunction pushToArray(arr, value) {\n    arr.push(value); // \u4fee\u6539\u4e86\u8f38\u5165\u7684\u9663\u5217\n    return arr;\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u70ba\u4ec0\u9ebc-redux-\u5f37\u8abf-reducer-\u662f\u7d14\u51fd\u5f0f",children:"\u70ba\u4ec0\u9ebc Redux \u5f37\u8abf reducer \u662f\u7d14\u51fd\u5f0f\uff1f"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u53ef\u9810\u6e2c\u6027\u9ad8"}),"\uff1a\u56e0\u70ba\u8f38\u5165\u6c7a\u5b9a\u8f38\u51fa\uff0c\u6211\u5011\u53ef\u4ee5\u8f15\u9b06\u5730\u6e2c\u8a66\u548c\u8ffd\u8e64\u72c0\u614b\u7684\u8b8a\u5316\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u65b9\u4fbf\u6e2c\u8a66"}),"\uff1a\u7d14\u51fd\u5f0f\u6c92\u6709\u526f\u4f5c\u7528\uff0c\u6e2c\u8a66\u6642\u53ea\u9700\u8981\u6aa2\u67e5\u8f38\u5165\u8207\u8f38\u51fa\u662f\u5426\u7b26\u5408\u9810\u671f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u6642\u9593\u65c5\u884c\u548c\u5feb\u7167\u529f\u80fd"}),"\uff1aRedux \u4e2d\u7684 DevTools \u53ef\u4ee5\u5e6b\u52a9\u4f60\u300c\u6642\u9593\u65c5\u884c\u300d\uff0c\u5373\u9084\u539f\u6216\u91cd\u64ad\u67d0\u500b\u72c0\u614b\uff0c\u9019\u8981\u6c42 reducer \u5fc5\u9808\u662f\u7d14\u51fd\u5f0f\uff0c\u78ba\u4fdd\u91cd\u64ad\u7684\u7d50\u679c\u4e00\u81f4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u907f\u514d\u4e0d\u5fc5\u8981\u7684 bug"}),"\uff1a\u5982\u679c reducer \u4fee\u6539\u4e86\u5916\u90e8\u8b8a\u6578\u6216\u72c0\u614b\uff0c\u53ef\u80fd\u5c0e\u81f4\u96e3\u4ee5\u8ffd\u8e64\u7684\u554f\u984c\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u8cc7\u6599\u51fa\u81ea\uff1a\u90e8\u5206\u53c3\u8003 gpt"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6838\u5fc3\u6982\u5ff5",children:"\u6838\u5fc3\u6982\u5ff5"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 redux \u5167\u6709\u4e09\u500b\u6838\u5fc3\u6982\u5ff5\uff0c\u5206\u5225\u662f ",(0,c.jsx)(n.strong,{children:"\u55ae\u5411\u8cc7\u6599\u6d41"}),"\u3001 ",(0,c.jsx)(n.strong,{children:"\u55ae\u4e00\u72c0\u614b\u7ba1\u7406"}),"\u3001",(0,c.jsx)(n.strong,{children:"\u4e0d\u53ef\u8b8a\u72c0\u614b"})," \u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u55ae\u5411\u8cc7\u6599\u6d41",children:"\u55ae\u5411\u8cc7\u6599\u6d41"}),"\n",(0,c.jsx)(n.p,{children:"\u9996\u5148\uff0c\u8981\u5148\u77e5\u9053\u66f4\u65b0 redux \u5167\u72c0\u614b\u7684\u6b65\u9a5f\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["UI \u4ecb\u9762\u4e0a\u547c\u53eb ",(0,c.jsx)(n.code,{children:"dispatch"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"dispatch"})," \u6703\u651c\u5e36 ",(0,c.jsx)(n.code,{children:"action"})," \u544a\u77e5 Store"]}),"\n",(0,c.jsxs)(n.li,{children:["redux \u6703\u5e36\u8457 ",(0,c.jsx)(n.code,{children:"action"})," \u7d66 reducer"]}),"\n",(0,c.jsx)(n.li,{children:"\u89f8\u767c middleware \u64cd\u4f5c\uff0c\u5982\u767c\u51fa\u8acb\u6c42\u53d6\u5f97 API \u7b49\u975e\u540c\u6b65\u884c\u70ba\uff08\u975e\u540c\u6b65\u64cd\u4f5c\u6642\uff09"}),"\n",(0,c.jsxs)(n.li,{children:["reducer \u6839\u64da ",(0,c.jsx)(n.code,{children:"action"})," \u5167\u5bb9\u6c7a\u5b9a\u8981\u5982\u4f55\u66f4\u65b0\u72c0\u614b"]}),"\n",(0,c.jsx)(n.li,{children:"\u66f4\u65b0\u5b8c\u6210\u72c0\u614b\u5f8c\uff0c\u91cd\u65b0\u89f8\u767c UI \u6539\u8b8a"}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u540c\u6b65\u64cd\u4f5c\u6d41\u7a0b\u5716"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:r(9149).A+"",width:"1644",height:"1112"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u975e\u540c\u6b65\u64cd\u4f5c\u6d41\u7a0b\u5716"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:r(5829).A+"",width:"1744",height:"1364"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6240\u8b02\u7684\u55ae\u5411\u8cc7\u6599\u6d41\u6307\u7684\u5c31\u662f ",(0,c.jsx)(n.strong,{children:"\u8cc7\u6599\u53ea\u80fd\u6309\u7167\u55ae\u4e00\u65b9\u5411\u6d41\u7a0b\u6539\u8b8a"}),"\uff0c\u4e5f\u5c31\u662f\u4f60\u6c92\u8fa6\u6cd5\u8df3\u904e\u3001\u6216\u662f\u53cd\u65b9\u5411\u4f86\u6539\u8b8a\u8cc7\u6599\uff0c\u4f8b\u5982\uff1a\u8df3\u904e\u547c\u53eb ",(0,c.jsx)(n.code,{children:"dispatch"})," \u76f4\u63a5\u4fee\u6539 state\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u512a\u7f3a\u9ede",children:"\u512a\u7f3a\u9ede"}),"\n",(0,c.jsx)(n.h4,{id:"\u512a\u9ede",children:"\u512a\u9ede"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u8cc7\u6599\u6539\u8b8a\u53ef\u9810\u6e2c\u6027\u5f37"}),"\n",(0,c.jsx)(n.li,{children:"\u6613\u65bc\u9032\u884c\u6e2c\u8a66\uff08\u56e0\u70ba\u662f\u7d14\u51fd\u5f0f\uff09"}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"\u7f3a\u9ede",children:"\u7f3a\u9ede"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5b78\u7fd2\u66f2\u7dda\u9ad8\uff0c\u5c08\u6848\u5f15\u5165\u6210\u672c\u4e5f\u9ad8\u3002"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},5829:(e,n,r)=>{r.d(n,{A:()=>c});const c=r.p+"assets/images/redux-async-b04a4be4089b2ea659eb33eb5d462c9b.png"},9149:(e,n,r)=>{r.d(n,{A:()=>c});const c=r.p+"assets/images/redux-dataflow-ab959e13514a4c1cb630b40e0efbd023.png"},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var c=r(6540);const s={},i=c.createContext(s);function d(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);