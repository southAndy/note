"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[879],{4285:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var i=s(4848),l=s(8453);const c={},r=void 0,t={id:"css/pug",title:"pug",description:"\u5728\u9019\u4e00\u7bc7\u6703\u4ecb\u7d39\uff1a",source:"@site/docs/css/pug.md",sourceDirName:"css",slug:"/css/pug",permalink:"/note/docs/css/pug",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"\u95dc\u9375\u5b57\u7b46\u8a18",permalink:"/note/docs/Webpack/\u95dc\u9375\u5b57\u7b46\u8a18"},next:{title:"tailwindcss",permalink:"/note/docs/css/tailwindcss"}},a={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"pug \u662f\u4ec0\u9ebc\uff1f",id:"pug-\u662f\u4ec0\u9ebc",level:3},{value:"\u67b6\u69cb\u600e\u9ebc\u64b0\u5beb\uff1f",id:"\u67b6\u69cb\u600e\u9ebc\u64b0\u5beb",level:3},{value:"\u689d\u4ef6\u5f0f\u6e32\u67d3",id:"\u689d\u4ef6\u5f0f\u6e32\u67d3",level:3},{value:"mixin \u7684\u4f7f\u7528",id:"mixin-\u7684\u4f7f\u7528",level:3},{value:"\u5f15\u5165\u5c08\u6848",id:"\u5f15\u5165\u5c08\u6848",level:3},{value:"\u5f8c\u7aef\u5c08\u6848\u5f15\u5165 - express",id:"\u5f8c\u7aef\u5c08\u6848\u5f15\u5165---express",level:4},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u5728\u9019\u4e00\u7bc7\u6703\u4ecb\u7d39\uff1a"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("a",{href:"#pug-\u662f\u4ec0\u9ebc",children:"pug \u662f\u4ec0\u9ebc\uff1f"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("a",{href:"#html-\u5c64\u7d1a\u600e\u9ebc\u64b0\u5beb",children:"\u5e7e\u7a2e\u4f7f\u7528\u65b9\u5f0f"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("a",{href:"#react-\u4e2d\u6700\u57fa\u672c\u7684\u55ae\u4f4d---\u5143\u4ef6",children:"\u5982\u4f55\u5728\u5c08\u6848\u5f15\u5165"}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u8fd1\u8981\u8ddf\u540c\u4e8b\u4e00\u8d77\u8abf\u6574\u4e00\u500b\u820a\u5c08\u6848\u7684\u7248\u9762\u67b6\u69cb\uff0c\u6253\u958b\u5c08\u6848\u7b2c\u4e00\u500b\u5143\u4ef6 ",(0,i.jsx)(n.code,{children:"template"})," \u99ac\u4e0a\u8fce\u9762\u800c\u4f86\u7684\u662f"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pug",children:'  ul.categories-list.nav.flex-column li.nav-item(v-for="category in categories")\n      h4.font-weight-normal(v-if="category.id === 0"):\n  a.nav-link(@click="redirectHome(category)", :class="{ \'active\':\n  isActive(category) }") \u9996\u9801 h5(v-else) a.nav-link(v-if="category.sub_types &&\n  category.sub_types.length > 0", data-toggle="collapse",\n  :data-target="`#${type}CategoryCollapse${category.id}`",\n  :aria-expanded="parentCategoryShouldExpand(category) ? \'true\' : \'false\'",\n  :class="{ \'active\': isRootActive(category) }") {{ category.name }}\n  a.nav-link(v-else, @click="switchCategory(category)", :class="{ \'active\':\n  isActive(category) }") {{ category.name }}\n  ul.collapse.list-unstyled(v-if="category.sub_types &&\n  category.sub_types.length > 0", :id="`${type}CategoryCollapse${category.id}`",\n  :class="{ show: parentCategoryShouldExpand(category) }") li.nav-item h5:\n  a.nav-link(@click="switchCategory(category)", :class="{ \'active\':\n  isActive(category) }") \u5168\u90e8 li.nav-item(v-for="subCategory in\n  category.sub_types") h5: a.nav-link(@click="switchCategory(subCategory)",\n  :class="{ \'active\': isActive(subCategory) }") {{ subCategory.name }}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u54c7\uff0c",(0,i.jsx)(n.del,{children:"\u9019\u4ec0\u9ebc\u770b\u4e0d\u61c2\u7684\u5916\u661f\u8a9e\u8a00"}),"\uff0c\u53ea\u597d\u5c07\u95dc\u9375 ",(0,i.jsx)(n.code,{children:"pug"})," \u5b57\u4e1f\u7d66 gpt \u5feb\u901f\u7406\u89e3\u4e00\u4e0b \uff0c\u4e26\u505a\u500b\u7b46\u8a18\u4f9b\u4ee5\u5f8c\u7684\u81ea\u5df1\u53c3\u8003\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"pug-\u662f\u4ec0\u9ebc",children:"pug \u662f\u4ec0\u9ebc\uff1f"}),"\n",(0,i.jsxs)(n.p,{children:["pug\uff08\u524d\u8eab\u662f Jade\uff09 \u662f\u4e00\u500b\u6a21\u677f\u5f15\u64ce\uff0c\u5e38\u898b\u662f ",(0,i.jsx)(n.code,{children:"Nodejs"})," \u900f\u904e\u9019\u500b\u6a21\u677f\u5f15\u64ce\u4f86\u7522\u751f\u524d\u7aef\u756b\u9762\uff0c\u5b83\u5177\u6709\u4ee5\u4e0b\u5e7e\u500b\u7279\u8272\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u66f4\u7c21\u5316\u7684\u65b9\u5f0f\u4f86\u6a19\u793a html \u67b6\u69cb"}),"\n",(0,i.jsxs)(n.li,{children:["\u6a21\u677f\u53ef\u4ee5\u900f\u904e\u689d\u4ef6\u5224\u65b7\u3001",(0,i.jsx)(n.code,{children:"@mixin"}),"\u3001\u7e7c\u627f\u7b49\u65b9\u5f0f\u4f86\u6c7a\u5b9a\u7522\u751f\u5167\u5bb9"]}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301 Javascript \u8868\u9054\u5f0f\u4f7f\u7528"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u67b6\u69cb\u600e\u9ebc\u64b0\u5beb",children:"\u67b6\u69cb\u600e\u9ebc\u64b0\u5beb\uff1f"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 pug \u900f\u904e",(0,i.jsx)(n.strong,{children:"\u7e2e\u6392"}),"\u4f86\u8868\u793a html \u5c64\u7d1a\u95dc\u4fc2\uff0c\u6240\u4ee5\u4e00\u500b\u67b6\u69cb ",(0,i.jsx)(n.code,{children:"body"})," \u8981\u5305\u542b\u540d\u70ba\u300c\u6a19\u984c\u300d\u7684 ",(0,i.jsx)(n.code,{children:"h1"})," \u53ef\u4ee5\u9019\u6a23\u5beb\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pug",children:"html\n    head\n    body\n        h1 \u6a19\u984c\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u689d\u4ef6\u5f0f\u6e32\u67d3",children:"\u689d\u4ef6\u5f0f\u6e32\u67d3"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\u7406\u89e3\u7684\u5169\u7a2e\u5beb\u6cd5\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u689d\u4ef6\u53e5\u7368\u7acb\u4e00\u884c\u64b0\u5beb"}),"\n",(0,i.jsxs)(n.li,{children:["\u7528 ",(0,i.jsx)(n.code,{children:"()"})," \u5305\u8986\u689d\u4ef6"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pug",children:"//1\nif [conditional]\n    h2 \u986f\u793a if\nelse [conditional]\n    h2 \u986f\u793a else\n\n//2\nh2(if) a \u986f\u793a if \u9023\u7d50\nh2(else) a \u986f\u793a else \u9023\u7d50\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"mixin-\u7684\u4f7f\u7528",children:"mixin \u7684\u4f7f\u7528"}),"\n",(0,i.jsxs)(n.p,{children:["\u900f\u904e ",(0,i.jsx)(n.code,{children:"mixin"})," \u4f5c\u70ba\u5ba3\u544a\u4f86\u7522\u751f\u7279\u5b9a\u67b6\u69cb\uff0c\u4ee5 ",(0,i.jsx)(n.code,{children:"+"})," \u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"mixin"})," \u6a21\u677f\u5167\u5bb9"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pug",children:"mixin List\n    ul\n        li\n        li\n        li\n\n+List\n+List\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7522\u751f\u7684\u67b6\u69cb\u5c31\u662f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<ul>\n  <li></li>\n  <li>23</li>\n  <li></li>\n</ul>\n<ul>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"\u5f15\u5165\u5c08\u6848",children:"\u5f15\u5165\u5c08\u6848"}),"\n",(0,i.jsx)(n.h4,{id:"\u5f8c\u7aef\u5c08\u6848\u5f15\u5165---express",children:"\u5f8c\u7aef\u5c08\u6848\u5f15\u5165 - express"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u9019\u908a\u4ee5 ",(0,i.jsx)(n.code,{children:"express"})," \u70ba\u4f8b\uff0c\u7576\u4f60\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"yarn"})," , ",(0,i.jsx)(n.code,{children:"npm"})," \u7b49\u65b9\u5f0f\u4e0b\u8f09\u5b8c\u5f8c\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'app.set("view engine", "pug");\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5c31\u53ef\u4ee5\u958b\u59cb\u5728 express \u5c08\u6848\u5167\u4f7f\u7528\uff0c\u5176\u4ed6\u8a2d\u5b9a express \u90fd\u5728\u5167\u90e8\u5e6b\u5fd9\u8655\u7406\u5b8c\u6210\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://pugjs.org/api/getting-started.html",children:"Pug document"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://expressjs.com/en/guide/using-template-engines.html",children:"Using template engines with Express"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var i=s(6540);const l={},c=i.createContext(l);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);