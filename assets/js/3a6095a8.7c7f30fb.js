"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[852],{8757:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var d=i(4848),r=i(8453);const l={},c="Render and Commit",t={id:"React/render",title:"Render and Commit",description:"\u89f8\u767c\u6642\u6a5f",source:"@site/docs/React/render.md",sourceDirName:"React",slug:"/React/render",permalink:"/docs/React/render",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"Redux \u6a5f\u5236\u521d\u63a2",permalink:"/docs/React/Redux - basic"},next:{title:"styled-component",permalink:"/docs/React/styled"}},s={},o=[{value:"\u89f8\u767c\u6642\u6a5f",id:"\u89f8\u767c\u6642\u6a5f",level:3},{value:"\u89f8\u767c\u6e32\u67d3",id:"\u89f8\u767c\u6e32\u67d3",level:2},{value:"1.\u521d\u6b21\u8f09\u5165",id:"1\u521d\u6b21\u8f09\u5165",level:3},{value:"2.\u72c0\u614b\u66f4\u65b0\u6e32\u67d3",id:"2\u72c0\u614b\u66f4\u65b0\u6e32\u67d3",level:3},{value:"\u6e32\u67d3\u756b\u9762\u6240\u9700\u5143\u4ef6",id:"\u6e32\u67d3\u756b\u9762\u6240\u9700\u5143\u4ef6",level:2},{value:"1.\u521d\u6b21\u6e32\u67d3",id:"1\u521d\u6b21\u6e32\u67d3",level:3},{value:"2.\u72c0\u614b\u6539\u8b8a",id:"2\u72c0\u614b\u6539\u8b8a",level:3},{value:"\u95dc\u65bc Diffing \u6f14\u7b97\u6cd5",id:"\u95dc\u65bc-diffing-\u6f14\u7b97\u6cd5",level:4},{value:"\u63d0\u4ea4\u6e32\u67d3\u81f3 DOM",id:"\u63d0\u4ea4\u6e32\u67d3\u81f3-dom",level:2},{value:"\u521d\u6b21\u6e32\u67d3",id:"\u521d\u6b21\u6e32\u67d3",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"render-and-commit",children:"Render and Commit"}),"\n",(0,d.jsx)(n.h3,{id:"\u89f8\u767c\u6642\u6a5f",children:"\u89f8\u767c\u6642\u6a5f"}),"\n",(0,d.jsx)(n.p,{children:"\u6839\u64da\u5b98\u65b9\u6587\u4ef6\uff0c\u4e3b\u8981\u53ef\u4ee5\u5206\u70ba\u4e09\u500b\u6b65\u9a5f\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u89f8\u767c\u6e32\u67d3(triggering)"}),"\n",(0,d.jsx)(n.li,{children:"\u6e32\u67d3\u756b\u9762\u6240\u9700\u5143\u4ef6(rendering)"}),"\n",(0,d.jsx)(n.li,{children:"\u5c07\u6e32\u67d3\u756b\u9762\u63d0\u4ea4\u81f3 DOM (committing)"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u89f8\u767c\u6e32\u67d3",children:"\u89f8\u767c\u6e32\u67d3"}),"\n",(0,d.jsxs)(n.p,{children:["\u6642\u6a5f\u5206\u5225\u662f ",(0,d.jsx)(n.strong,{children:"\u521d\u6b21\u8f09\u5165"})," \u8ddf ",(0,d.jsx)(n.strong,{children:"\u72c0\u614b\u66f4\u65b0"})]}),"\n",(0,d.jsx)(n.h3,{id:"1\u521d\u6b21\u8f09\u5165",children:"1.\u521d\u6b21\u8f09\u5165"}),"\n",(0,d.jsxs)(n.p,{children:["\u6703\u547c\u53eb ",(0,d.jsx)(n.code,{children:"creactRoot"})," \u4f86\u7522\u751f\u6839\u5c64\u7d1a\u7684\u865b\u64ec\u5bb9\u5668\uff08virtual DOM)\uff0c\u4e26\u4e14\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"appendChild()"})," \u7d81\u5b9a\u81f3\u6307\u5b9a\u7684 DOM \u7d50\u69cb\u4e0a\u4e26\u8fd4\u56de\u6839\u5bb9\u5668\uff0c\u63a5\u8457\u900f\u904e ",(0,d.jsx)(n.code,{children:"render"})," \u53bb\u6e32\u67d3\u5c0d\u61c9\u7684\u9801\u9762\u5167\u5bb9"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:'const root = reactDOM.create(getElementById("root"));\nroot.render()\n'})}),"\n",(0,d.jsxs)(n.admonition,{type:"tip",children:[(0,d.jsxs)(n.p,{children:["\u80fd\u7528 ",(0,d.jsx)(n.code,{children:"class"})," \u7d81\u5b9a\u55ce?\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662f\u8003\u91cf\u5230:"]}),(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"id \u5177\u6709\u552f\u4e00\u6027"}),"\n",(0,d.jsx)(n.li,{children:"\u82e5\u662f\u5927\u578b\u5c08\u6848\u67b6\u69cb\u9f90\u5927\u7684\u60c5\u6cc1\u4e0b\uff0c\u67e5\u627e class \u6703\u66f4\u82b1\u6642\u9593\uff0c\u8f03\u4e0d\u5229\u6027\u80fd"}),"\n"]}),(0,d.jsx)(n.p,{children:"\u7b49\u5169\u500b\u56e0\u7d20\uff0c\u6240\u4ee5\u901a\u5e38\u9084\u662f\u7d81\u5b9a id"})]}),"\n",(0,d.jsx)(n.h3,{id:"2\u72c0\u614b\u66f4\u65b0\u6e32\u67d3",children:"2.\u72c0\u614b\u66f4\u65b0\u6e32\u67d3"}),"\n",(0,d.jsxs)(n.p,{children:["\u6703\u4f7f\u7528\u6240\u8b02\u7684 ",(0,d.jsx)(n.em,{children:"set function"})," \u53bb\u7522\u751f\u53ca\u4fee\u6539\u72c0\u614b(state)\uff0c\u7576\u72c0\u614b\u503c\u767c\u751f\u6539\u8b8a\uff0c\u5c31\u6703\u89f8\u767c\u72c0\u614b\u66f4\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u6e32\u67d3\u756b\u9762\u6240\u9700\u5143\u4ef6",children:"\u6e32\u67d3\u756b\u9762\u6240\u9700\u5143\u4ef6"}),"\n",(0,d.jsx)(n.p,{children:"\u4e5f\u540c\u6a23\u53ef\u4ee5\u5206\u70ba\u521d\u6b21\u53ca\u72c0\u614b\u66f4\u65b0\u5169\u7a2e"}),"\n",(0,d.jsx)(n.h3,{id:"1\u521d\u6b21\u6e32\u67d3",children:"1.\u521d\u6b21\u6e32\u67d3"}),"\n",(0,d.jsx)(n.p,{children:"React \u521d\u6b21\u6e32\u67d3\u6a5f\u5236\u662f\u63a1\u53d6\u905e\u8ff4\u5f0f\u6e32\u67d3\uff0c\u6703\u900f\u904e\u4e0d\u65b7\u905e\u8ff4\u6aa2\u8996\u67b6\u69cb\u662f\u5426\u6709\u66f4\u591a\u5b50\u3001\u751a\u81f3\u5b6b\u7684\u67b6\u69cb\uff0c\u76f4\u5230\u78ba\u8a8d\u6c92\u6709\u70ba\u6b62\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5047\u8a2d\u4eca\u5929\u8981\u88ab\u6e32\u67d3\u7684\u9801\u9762\u67b6\u69cb\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const App = () => {\n  return (\n    <>\n      <h1>title</h1>\n      <Component />\n    </>\n  );\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u800c\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"<Component/>"})," \u67b6\u69cb"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:"const Component = () => {\n  return (\n    <>\n      <h2>subtitle</h2>\n      <ChildComponent />\n    </>\n  );\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u9019\u500b\u7bc4\u4f8b\u7a0b\u5f0f\u78bc\u4f86\u8aaa\uff0c\u6e32\u67d3\u6d41\u7a0b\u61c9\u8a72\u662f\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6700\u521d\u958b\u59cb\u6e32\u67d3 ",(0,d.jsx)(n.code,{children:"App"})," \u5143\u4ef6\u5167\u5bb9\uff0c\u905e\u8ff4\u6aa2\u67e5\u767c\u73fe\u6709\u5b50\u5143\u4ef6 ",(0,d.jsx)(n.code,{children:"Component"}),"\uff0c\u505c\u6b62 ",(0,d.jsx)(n.code,{children:"App"})," \u6e32\u67d3\u958b\u59cb\u6e32\u67d3 ",(0,d.jsx)(n.code,{children:"Component"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u6e32\u67d3 ",(0,d.jsx)(n.code,{children:"Component"})," \u5143\u4ef6\uff0c\u905e\u8ff4\u6aa2\u67e5\u767c\u73fe\u5b6b\u5143\u4ef6 ",(0,d.jsx)(n.code,{children:"ChildComponent"})," \u505c\u6b62 ",(0,d.jsx)(n.code,{children:"Component"})," \u6e32\u67d3\u958b\u59cb\u6e32\u67d3 ",(0,d.jsx)(n.code,{children:"ChildComponent"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u6e32\u67d3 ",(0,d.jsx)(n.code,{children:"ChildComponent"})," \u5143\u4ef6\u905e\u8ff4\u6aa2\u67e5\u6c92\u767c\u73fe\u66f4\u4e0b\u5c64\u5143\u4ef6\uff0c\u7d50\u675f\u5143\u4ef6\u6e32\u67d3\uff0c\u8fd4\u56de ",(0,d.jsx)(n.code,{children:"Component"})," \u5c64\u7d1a\u6e32\u67d3"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"2\u72c0\u614b\u6539\u8b8a",children:"2.\u72c0\u614b\u6539\u8b8a"}),"\n",(0,d.jsxs)(n.p,{children:["react \u662f\u4f7f\u7528 ",(0,d.jsx)(n.em,{children:"Diffing Algorith"})," \u53bb\u8655\u7406\u91cd\u65b0\u6e32\u67d3\u6a5f\u5236"]}),"\n",(0,d.jsx)(n.h4,{id:"\u95dc\u65bc-diffing-\u6f14\u7b97\u6cd5",children:"\u95dc\u65bc Diffing \u6f14\u7b97\u6cd5"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u72c0\u614b\u767c\u751f\u6539\u8b8a\u4e26\u89f8\u767c\u91cd\u65b0\u6e32\u67d3\u6642\uff0c\u9996\u5148\u6703\u6bd4\u5c0d\u767c\u751f\u8b8a\u5316\u7684 root element\uff0c\u5982\u679c root element \u7684\u5143\u7d20\u4e0d\u540c\uff08\u5982\u4e0b\uff09\uff0c\u5c31\u6703\u76f4\u63a5\u6574\u682a\u91cd\u65b0\u6e32\u67d3\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:"//\u539f\u672c\u7684\u67b6\u69cb root element \u70ba div\n<div>\n  {state}\n  <button>click</button>\n</div>\n\n//\u65b0\u7684\u67b6\u69cb root element \u70ba main\n<main>\n  {state}\n  <button>click</button>\n</main>\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u76f8\u53cd\u7684\uff0c\u5982\u679c\u6839\u5143\u7d20\u4e0d\u8b8a\uff0c\u5247\u4e0d\u6703\u6574\u682a\u66f4\u65b0\u800c\u662f\u50c5\u66f4\u65b0\u72c0\u614b\u6240\u5728\u7684\u5143\u7d20\uff08\u5982\u5716\uff09\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://imgur.com/Kvu3h0s.png",alt:""})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5716\u7247\u51fa\u8655\uff1a",(0,d.jsx)(n.a,{href:"https://react.dev/learn/render-and-commit",children:"https://react.dev/learn/render-and-commit"})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u63d0\u4ea4\u6e32\u67d3\u81f3-dom",children:"\u63d0\u4ea4\u6e32\u67d3\u81f3 DOM"}),"\n",(0,d.jsx)(n.h3,{id:"\u521d\u6b21\u6e32\u67d3",children:"\u521d\u6b21\u6e32\u67d3"}),"\n",(0,d.jsxs)(n.p,{children:["\u6703\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"appendChild()"})," \u628a Virtual DOM \u4e0a\u7522\u751f\u7684\u5168\u90e8\u5167\u5bb9\uff0c\u5f9e\u7d81\u5b9a\u7684\u6839\u7bc0\u9ede root dom \u5f80\u4e0b\u6e32\u67d3"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var d=i(6540);const r={},l=d.createContext(r);function c(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);