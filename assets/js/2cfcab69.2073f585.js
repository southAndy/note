"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[885],{3522:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var c=s(4848),d=s(8453);const r={},l=void 0,i={id:"Webpack/\u624b\u52d5\u6253\u5305vue\u5c08\u6848\u8a8d\u8b58webpack\u914d\u7f6e",title:"\u624b\u52d5\u6253\u5305vue\u5c08\u6848\u8a8d\u8b58webpack\u914d\u7f6e",description:"\u9019\u908a\u662f\u4ee5 webpack4 \u70ba\u4e3b\u7684\u7b46\u8a18",source:"@site/docs/Webpack/\u624b\u52d5\u6253\u5305vue\u5c08\u6848\u8a8d\u8b58webpack\u914d\u7f6e.md",sourceDirName:"Webpack",slug:"/Webpack/\u624b\u52d5\u6253\u5305vue\u5c08\u6848\u8a8d\u8b58webpack\u914d\u7f6e",permalink:"/docs/Webpack/\u624b\u52d5\u6253\u5305vue\u5c08\u6848\u8a8d\u8b58webpack\u914d\u7f6e",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"techNoteSidebar",previous:{title:"[Vue] keywords",permalink:"/docs/Vue/Keywords"},next:{title:"pug",permalink:"/docs/css/pug"}},o={},a=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"\u5be6\u4f5c vue \u6253\u5305",id:"\u5be6\u4f5c-vue-\u6253\u5305",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.admonition,{type:"warning",children:(0,c.jsx)(n.p,{children:"\u9019\u908a\u662f\u4ee5 webpack4 \u70ba\u4e3b\u7684\u7b46\u8a18"})}),"\n",(0,c.jsx)(n.h3,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,c.jsxs)(n.p,{children:["webpack \u6bcf\u500b\u90e8\u5206\u5167\u5bb9\u5982\u4f55\u6253\u5305\u90fd\u662f\u9700\u8981\u5728 ",(0,c.jsx)(n.code,{children:"webpack.config.js"})," \u4e2d\u8a2d\u5b9a\uff0c\u96d6\u7136\u5230\u4e86 webpack4 \u5f8c\u5247\u975e\u5fc5\u8981\uff08\u539f\u56e0\u5982\u4e0b\uff09\uff0c\u4f46\u96e3\u4fdd\u51fa\u73fe\u4e00\u4e9b\u60c5\u5883\u662f\u9700\u8981\u900f\u904e\u624b\u52d5\u8abf\u6574\u914d\u7f6e\u53bb\u89e3\u6c7a\uff0c\u9019\u6642\u9084\u662f\u8981\u56de\u982d\u53bb\u7406\u89e3\u5b83\u7684\u914d\u7f6e\u5167\u5bb9\u3002"]}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.p,{children:["Webpack4 \u5167\u5efa\u4e86\u9810\u8a2d\u7684\u6253\u5305\u8a2d\u5b9a\uff0c\u8b93\u4f60\u53ef\u4ee5\u4e0d\u9700\u8981\u624b\u52d5\u64b0\u5beb ",(0,c.jsx)(n.code,{children:"webpack.config.js"})," \u4e5f\u53ef\u4ee5\u9032\u884c\u6253\u5305\u3002"]})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u9019\u908a\u6703\u900f\u904e ",(0,c.jsx)(n.code,{children:"webpack.config.js"})," \u53bb\u6253\u5305\u4e00\u500b\u57fa\u672c\u67b6\u69cb\u7684 vue \u5c08\u6848\uff08\u4e0b\u65b9\uff09\uff0c\u5728\u5be6\u8e10\u904e\u7a0b\u9806\u4fbf\u4ecb\u7d39\u5404\u500b\u914d\u7f6e\u53ca\u529f\u80fd"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"- public\n  - index.html\n- src\n| main.js\n| App.vue\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u5be6\u4f5c-vue-\u6253\u5305",children:"\u5be6\u4f5c vue \u6253\u5305"}),"\n",(0,c.jsx)(n.p,{children:"\u9996\u5148\u6211\u5011\u8981\u5c07 webpack \u5b89\u88dd\u9032\u5c08\u6848\u5167"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"npm i webpack webpack-cli\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u76f4\u63a5\u57f7\u884c\u6253\u5305\u7684\u6307\u4ee4"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"npx webpack\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8fce\u4f86\u7b2c\u4e00\u500b\u932f\u8aa4\uff08\u5982\u4e0b\u5716\uff09"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(2677).A+"",width:"2320",height:"1144"})}),"\n",(0,c.jsx)(n.p,{children:"\u9019\u908a\u53ef\u4ee5\u7c21\u55ae\u5340\u5206\u6709\u4e00\u500b warn, error \u5c64\u7d1a\u7684\u8a0a\u606f\uff0c\u5148\u8aaa warn \u7684\u90e8\u5206\uff1a"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:["\u662f webpack \u63d0\u793a\u958b\u767c\u8005\u61c9\u65bc\u914d\u7f6e\u6a94\u6848\u65b0\u589e ",(0,c.jsx)(n.code,{children:"mode"})," \u503c"]}),"\uff0c\u539f\u56e0\u662f\u4e0d\u540c ",(0,c.jsx)(n.code,{children:"mode"})," \u6703\u5c0d\u61c9\u4e0d\u540c\u7684\u6253\u5305\u8a2d\u5b9a\uff0c\u8a73\u7d30\u5dee\u7570\u53ef\u770b",(0,c.jsx)(n.a,{href:"https://v4.webpack.js.org/configuration/mode/",children:"\u5b98\u7db2"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6240\u4ee5\u6211\u5011\u5efa\u7acb\u4e00\u500b ",(0,c.jsx)(n.code,{children:"webpack.config.js"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  mode:\"production\", //\u9084\u6709 'development' , 'none' \u53ef\u4ee5\u9078\u64c7\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u63a5\u8457\u9032\u5230 error \u7684\u90e8\u5206\uff1a"}),"\n",(0,c.jsxs)(n.p,{children:["\u9019\u662f webpack \u627e\u4e0d\u5230\u6240\u8b02\u7684\u9032\u5165\u9ede\uff0c\u66f4\u767d\u8a71\u6587\u4e00\u9ede\u5c31\u662f\uff1a\u4e0d\u77e5\u9053\u5f9e\u54ea\u500b\u6a94\u6848\u958b\u59cb\u6253\u5305\uff0c\u4e0a\u9762\u6709\u8aaa\u904e webpack4 \u662f\u6709\u9810\u8a2d\u8a2d\u5b9a\u7684\uff0c\u9019\u908a\u4ecd\u7136\u5831\u932f\u662f\u56e0\u70ba\u6c92\u5075\u6e2c\u5230\u9810\u8a2d\u7684\u9032\u5165\u9ede (",(0,c.jsx)(n.code,{children:"./src/index.js"}),")\uff0c\u4f46 vue \u67b6\u69cb\u4e0b\u521d\u59cb\u9032\u5165\u9ede\u662f ",(0,c.jsx)(n.code,{children:"main.js"}),"\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e\u624b\u52d5\u8abf\u6574 ",(0,c.jsx)(n.code,{children:"entry"})," \u53bb\u6539\u8b8a\u9032\u5165\u9ede\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'//webpack.config.js\n\nmodule.exports = {\n  mode:"production",\n  entry:"./src/main.js"\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u91cd\u65b0\u57f7\u884c\u6253\u5305\uff0c\u63a5\u8457\u518d\u6b21\u51fa\u73fe\u5831\u932f"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(6828).A+"",width:"1270",height:"656"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4ed4\u7d30\u6aa2\u8996\u8a0a\u606f\uff0c\u9019\u6b21\u7684\u554f\u984c\u662f\u51fa\u5728\u6253\u5305 ",(0,c.jsx)(n.code,{children:"App.vue"})," \uff0c\u539f\u56e0\u662f webpack \u672c\u8eab\u53ea\u5177\u5099\u7de8\u8b6f\u6253\u5305 js \u529f\u80fd\uff0c\u4e26\u4e0d\u77e5\u9053\u5982\u4f55\u7de8\u8b6f ",(0,c.jsx)(n.code,{children:".vue"})," \u6a94\u6848\uff0c\u6216\u662f\u5176\u9918\u50cf\u662f css,assets\u5167\u7684\u5167\u5bb9\u3002\u9019\u6642\u5019\u5c31\u662f webpack \u53e6\u4e00\u500b\u91cd\u8981\u914d\u7f6e ",(0,c.jsx)(n.code,{children:"loader"})," \u7684\u4f7f\u7528\u6642\u6a5f\uff0c\u5b83\u7684\u529f\u80fd\u5c31\u662f\uff1a\u8a2d\u5b9a\u6253\u5305\u6a94\u6848\u7b26\u5408\u689d\u4ef6\u6642\u8981\u88ab\u600e\u9ebc\u8655\u7406\uff0cvue \u5b98\u65b9\u63d0\u4f9b vue-loader \u6383\u63cf ",(0,c.jsx)(n.code,{children:".vue"})," \u6a94\u6848(SFC)\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'module.exports = {\n  mode:"production",\n  entry:"./src/main.js",\n  module:{\n    rules:[\n      {\n        test:/\\.vue$/,\n        use:[\'vue-loader\']\n      }\n    ]\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f46\u9019\u6a23\u9084\u662f\u7121\u6cd5\u6210\u529f\u7de8\u8b6f\uff0c\u56e0\u70ba ",(0,c.jsx)(n.code,{children:".vue"})," \u6a94\u6848\u5167\u6709\u4e09\u500b\u5340\u57df\u5b9a\u7fa9\u4e0d\u540c\u5167\u5bb9\uff0c\u82e5\u662f\u5168\u90e8\u90fd\u4f7f\u7528\u76f8\u540c loader \u8655\u7406\u80af\u5b9a\u6703\u51fa\u932f\u3002\u6839\u64da vue-loader \u6587\u4ef6\u5167\u5bb9\uff0c\u9019\u500b\u554f\u984c\u53ef\u900f\u904e\u5728 webpack \u7684 ",(0,c.jsx)(n.code,{children:"plugins"})," \u914d\u7f6e\u4e2d\u52a0\u5165 ",(0,c.jsx)(n.code,{children:"VueLoaderPlugin"}),"\uff0c\u5b83\u7684\u529f\u80fd\u5c31\u662f\u544a\u8a34 webpack \u4e0d\u540c\u5340\u57df\u4f7f\u7528\u54ea\u500b loader\uff08\u5982\u4e0b\u5716\uff09"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:s(7581).A+"",width:"2014",height:"1278"})}),"\n",(0,c.jsx)(n.p,{children:"\u6240\u4ee5\u6211\u5011\u8abf\u6574\u5f8c\u7684\u914d\u7f6e\u6a94\u6848\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const { VueLoaderPlugin } = require(\"vue-loader\");\n\nmodule.exports = {\n  mode:\"production\",\n  entry:\"./src/main.js\",\n  module:{\n    rules:[\n      {\n        test:/\\.vue$/,\n        use:['vue-loader']\n      },\n      // \u8655\u7406\u5c08\u6848\u5167\u7684 js \u5167\u5bb9\uff0c\u900f\u904e VueLoaderPlugin \u5354\u52a9\uff0c\u5b83\u4e5f\u6703\u8655\u7406 .vue \u5167 script \u7684\u5167\u5bb9\n      {\n        test: /\\.js$/,\n        loader: 'babel-loader',\n        exclude:/node_modules/ //\u4e0d\u53bb\u5f71\u97ff\u7b2c\u4e09\u65b9\u5167\u90e8\u7684\u7a0b\u5f0f\u78bc\n      },\n      // \u8655\u7406\u5c08\u6848\u5167\u7684 .css \u5167\u5bb9\uff0c\u900f\u904e VueLoaderPlugin \u5354\u52a9\uff0c\u5b83\u4e5f\u6703\u8655\u7406 .vue \u5167 style \u7684\u5167\u5bb9\n      {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n      }\n    ]\n  },\n  plugins:[new VueLoaderPlugin()]\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6700\u5f8c\uff0c\u4e0d\u8ad6\u4f60\u8981\u5728\u672c\u5730\u7aef\u900f\u904e webpack-dev-server \u904b\u884c\uff0c\u6216\u662f\u771f\u6b63\u7684\u6253\u5305\uff0c\u90fd\u9700\u8981\u5c07\u639b\u8f09 vue \u7684 html \u67b6\u69cb\u6253\u5305\u8d77\u4f86\uff0c\u5426\u5247\u756b\u9762\u6703\u662f\u4e00\u7247\u7a7a\u767d\u3002\u5728 webpack \u901a\u5e38\u6703\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"html-webpack-plugin"})," \u4f86\u81ea\u52d5\u7522\u751f\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const { VueLoaderPlugin } = require(\"vue-loader\");\nconst  HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = {\n  mode:\"production\",\n  entry:\"./src/main.js\",\n  module:{\n    rules:[\n      {\n        test:/\\.vue$/,\n        use:['vue-loader']\n      },\n      // \u8655\u7406\u5c08\u6848\u5167\u7684 js \u5167\u5bb9\uff0c\u900f\u904e VueLoaderPlugin \u5354\u52a9\uff0c\u5b83\u4e5f\u6703\u8655\u7406 .vue \u5167 script \u7684\u5167\u5bb9\n      {\n        test: /\\.js$/,\n        loader: 'babel-loader',\n        exclude:/node_modules/ //\u4e0d\u53bb\u5f71\u97ff\u7b2c\u4e09\u65b9\u5167\u90e8\u7684\u7a0b\u5f0f\u78bc\n      },\n      // \u8655\u7406\u5c08\u6848\u5167\u7684 .css \u5167\u5bb9\uff0c\u900f\u904e VueLoaderPlugin \u5354\u52a9\uff0c\u5b83\u4e5f\u6703\u8655\u7406 .vue \u5167 style \u7684\u5167\u5bb9\n      {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n      }\n    ]\n  },\n  plugins:[new VueLoaderPlugin()]\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u9019\u6a23\u5c31\u5927\u529f\u544a\u6210\u4e86\uff01"}),"\n",(0,c.jsx)(n.h3,{id:"\u5c0f\u7d50",children:"\u5c0f\u7d50"}),"\n",(0,c.jsx)(n.p,{children:"\u8b93\u6211\u5011\u4f86\u8907\u7fd2\u4e0a\u9762\u63d0\u5230\u7684\u6253\u5305\u914d\u7f6e\u6982\u5ff5"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"entry"}),": \u8a2d\u5b9a webpack \u5f9e\u54ea\u500b\u6a94\u6848\u958b\u59cb\u6253\u5305\uff08\u6a94\u6848\u5fc5\u9808\u70ba ",(0,c.jsx)(n.code,{children:".js"})," \uff09"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"module"}),":\u53ef\u5728\u5167\u90e8\u8a2d\u5b9a\u4e0d\u540c\u6a94\u6848\u985e\u578b\u8981\u5982\u4f55\u88ab\u7de8\u8b6f\uff08\u5982 ",(0,c.jsx)(n.code,{children:".vue"})," \u6a94\u6848\u5982\u4f55\u7de8\u8b6f\u3001",(0,c.jsx)(n.code,{children:".css"})," \u6a94\u6848\u5982\u4f55\u7de8\u8b6f\u7b49\u7b49\uff09"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"plugins"}),":\u529f\u80fd\u985e\u4f3c ",(0,c.jsx)(n.code,{children:"module"}),"\uff0c\u4f46\u4e0d\u9650\u65bc\u7de8\u8b6f\u6253\u5305\u529f\u80fd\uff0c\u9084\u6709\u66f4\u591a\uff08\u6703\u5728\u4e0b\u7bc7\u4ecb\u7d39\uff09"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"mode"}),": \u8b93 webpack \u53ef\u4ee5\u6839\u64da\u4e0d\u540c\u6a21\u5f0f\u8f09\u5165\u4e00\u4e9b\u521d\u59cb\u5167\u5bb9"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/wangfupeng1988/read-notes/blob/master/video/webpack4.md",children:"Webpack 4.x \u5e38\u7528\u532f\u7e3d\u914d\u7f6e"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://v4.webpack.js.org/configuration/mode/",children:"Mode"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://vue-loader.vuejs.org/guide/#manual-setup",children:"Vue-loader"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},2677:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/webpack-entry-0c741077e06587572f4a4a394179f627.png"},6828:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/webpack-loader-87001ec67ab1f66cf2a3a92d7fc026dd.png"},7581:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/webpack-plugins-628b41254ba35f0ca2fa47cab637728d.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var c=s(6540);const d={},r=c.createContext(d);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);