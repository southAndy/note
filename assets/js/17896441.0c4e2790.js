"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[401],{1983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>me});var s=n(6540),a=n(1003),i=n(9532),o=n(4848);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(4164),u=n(4581),h=n(1312),b=n(8774);function p(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,o.jsxs)(b.A,{className:(0,m.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}function g(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(p,{...t,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(p,{...n,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x({id:e,host:t,repo:a,repoId:i,category:l,categoryId:r,mapping:c,term:d,strict:m,reactionsEnabled:u,emitMetadata:h,inputPosition:b,theme:p,lang:g,loading:x}){const[v,j]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{v||(n.e(135).then(n.bind(n,1135)),j(!0))}),[]),v?(0,o.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:i,category:l,categoryid:r,mapping:c,term:d,strict:m,reactionsenabled:u,emitmetadata:h,inputposition:b,theme:p,lang:g,loading:x}):null}var v=n(5293);function j(){const{colorMode:e}=(0,v.G)();return(0,o.jsx)(x,{repo:"southAndy/note",repoId:"R_kgDOLemRPQ",category:"Announcements",categoryId:"DIC_kwDOLemRPc4CjMNI",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:e,lang:"zh-TW",loading:"lazy",crossorigin:"anonymous",async:!0})}function f(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{...e}),(0,o.jsx)(j,{})]})}function _(){const{metadata:e}=c();return(0,o.jsx)(f,{previous:e.previous,next:e.next})}var A=n(4586),C=n(4070),N=n(7559),L=n(5597),T=n(2252);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function M(e){const t=k[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function y(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(b.A,{to:n,onClick:s,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function I(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,A.A)(),{pluginId:a}=(0,C.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,L.g1)(a),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,C.HW)(a),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,m.A)(t,N.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(M,{siteTitle:s,versionMetadata:n})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(y,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function w(e){let{className:t}=e;const n=(0,T.r)();return n.banner?(0,o.jsx)(I,{className:t,versionMetadata:n}):null}function B(e){let{className:t}=e;const n=(0,T.r)();return n.badge?(0,o.jsx)("span",{className:(0,m.A)(t,N.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const V={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function H(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,o.jsxs)(b.A,{href:t,title:a,className:(0,m.A)(V.tag,s?V.tagWithCount:V.tagRegular),children:[n,s&&(0,o.jsx)("span",{children:s})]})}const E={tags:"tags_jXut",tag:"tag_QGVx"};function P(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,m.A)(E.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:E.tag,children:(0,o.jsx)(H,{...e})},e.permalink)))})]})}var G=n(2153);function R(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(t||n||s);return i||l?(0,o.jsxs)("footer",{className:(0,m.A)(N.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,m.A)("row margin-top--sm",N.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(P,{tags:a})})}),l&&(0,o.jsx)(G.A,{className:(0,m.A)("margin-top--sm",N.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var D=n(1422),F=n(5195);const O={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function S(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,m.A)("clean-btn",O.tocCollapsibleButton,!t&&O.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const U={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function z(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,D.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,m.A)(U.tocCollapsible,!i&&U.tocCollapsibleExpanded,n),children:[(0,o.jsx)(S,{collapsed:i,onClick:l}),(0,o.jsx)(D.N,{lazy:!0,className:U.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(F.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const W={tocMobile:"tocMobile_ITEo"};function Q(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(N.G.docs.docTocMobile,W.tocMobile)})}var X=n(7763);function Y(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(X.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:N.G.docs.docTocDesktop})}var Z=n(1107),$=n(5533);function q(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,m.A)(N.G.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(Z.A,{as:"h1",children:n})}),(0,o.jsx)($.A,{children:t})]})}var J=n(1754),K=n(9169),ee=n(6025);function te(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ne={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function se(){const e=(0,ee.Ay)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(b.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(te,{className:ne.breadcrumbHomeIcon})})})}const ae={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ie(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,o.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,o.jsx)(b.A,{className:a,href:n,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:a,children:t})}function oe(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,o.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,m.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function le(){const e=(0,J.OF)(),t=(0,K.Dt)();return e?(0,o.jsx)("nav",{className:(0,m.A)(N.G.docs.docBreadcrumbs,ae.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(se,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(oe,{active:s,index:n,addMicrodata:!!a,children:(0,o.jsx)(ie,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var re=n(996);const ce={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function de(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,u.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,o.jsx)(Q,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(Y,{})}}(),{metadata:{unlisted:s}}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,m.A)("col",!n.hidden&&ce.docItemCol),children:[s&&(0,o.jsx)(re.A,{}),(0,o.jsx)(w,{}),(0,o.jsxs)("div",{className:ce.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(le,{}),(0,o.jsx)(B,{}),n.mobile,(0,o.jsx)(q,{children:t}),(0,o.jsx)(R,{})]}),(0,o.jsx)(_,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function me(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(de,{children:(0,o.jsx)(n,{})})]})})}}}]);