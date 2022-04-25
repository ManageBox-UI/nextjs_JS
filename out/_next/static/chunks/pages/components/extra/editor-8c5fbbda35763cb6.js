(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1096],{12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n=t(87462),o=t(63366),a=t(67294),i=(t(59864),t(86010)),s=t(27192),l=t(11496),c=t(33616),d=t(15861),u=t(41796),p=t(82066),h=t(85893),f=(0,p.Z)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(49990);const g=(0,l.ZP)(m.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,u._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,u._4)(e.palette.grey[600],.12)})}))),x=(0,l.ZP)(f)({width:24,height:16});var b=function(e){const r=e;return(0,h.jsx)("li",{children:(0,h.jsx)(g,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,h.jsx)(x,{ownerState:r})}))})},v=t(28979);function y(e){return(0,v.Z)("MuiBreadcrumbs",e)}var Z=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const j=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,l.ZP)(d.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Z.li}`]:r.li},r.root]})({}),k=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),O=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,r,t,n){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,h.jsx)(O,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${i}`)):o.push(a),o)),[])}var S=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:d,component:u="nav",expandText:p="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:m=1,maxItems:g=8,separator:x="/"}=t,v=(0,o.Z)(t,j),[Z,O]=a.useState(!1),S=(0,n.Z)({},t,{component:u,expanded:Z,expandText:p,itemsAfterCollapse:f,itemsBeforeCollapse:m,maxItems:g,separator:x}),C=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,r)})(S),R=a.useRef(null),N=a.Children.toArray(l).filter((e=>a.isValidElement(e))).map(((e,r)=>(0,h.jsx)("li",{className:C.li,children:e},`child-${r}`)));return(0,h.jsx)(w,(0,n.Z)({ref:r,component:u,color:"text.secondary",className:(0,i.Z)(C.root,d),ownerState:S},v,{children:(0,h.jsx)(k,{className:C.ol,ref:R,ownerState:S,children:P(Z||g&&N.length<=g?N:(e=>m+f>=e.length?e:[...e.slice(0,m),(0,h.jsx)(b,{"aria-label":p,onClick:()=>{O(!0);const e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-f,e.length)])(N),C.separator,x,S)})}))}))},44267:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(87462),o=t(63366),a=t(67294),i=t(86010),s=t(27192),l=t(11496),c=t(33616),d=t(28979);function u(e){return(0,d.Z)("MuiCardContent",e)}(0,t(76087).Z)("MuiCardContent",["root"]);var p=t(85893);const h=["className","component"],f=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var m=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:a,component:l="div"}=t,d=(0,o.Z)(t,h),m=(0,n.Z)({},t,{component:l}),g=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"]},u,r)})(m);return(0,p.jsx)(f,(0,n.Z)({as:l,className:(0,i.Z)(g.root,a),ownerState:m,ref:r},d))}))},78445:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var n=t(63366),o=t(87462),a=t(67294),i=t(86010),s=t(27192),l=t(15861),c=t(33616),d=t(11496),u=t(28979);function p(e){return(0,u.Z)("MuiCardHeader",e)}var h=(0,t(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=t(85893);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,r)=>(0,o.Z)({[`& .${h.title}`]:r.title,[`& .${h.subheader}`]:r.subheader},r.root)})({display:"flex",alignItems:"center",padding:16}),x=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,r)=>r.content})({flex:"1 1 auto"});var y=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:d,className:u,component:h="div",disableTypography:y=!1,subheader:Z,subheaderTypographyProps:j,title:w,titleTypographyProps:k}=t,O=(0,n.Z)(t,m),P=(0,o.Z)({},t,{component:h,disableTypography:y}),S=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,r)})(P);let C=w;null==C||C.type===l.Z||y||(C=(0,f.jsx)(l.Z,(0,o.Z)({variant:d?"body2":"h5",className:S.title,component:"span",display:"block"},k,{children:C})));let R=Z;return null==R||R.type===l.Z||y||(R=(0,f.jsx)(l.Z,(0,o.Z)({variant:d?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},j,{children:R}))),(0,f.jsxs)(g,(0,o.Z)({className:(0,i.Z)(S.root,u),as:h,ref:r,ownerState:P},O,{children:[d&&(0,f.jsx)(x,{className:S.avatar,ownerState:P,children:d}),(0,f.jsxs)(v,{className:S.content,ownerState:P,children:[C,R]}),a&&(0,f.jsx)(b,{className:S.action,ownerState:P,children:a})]}))}))},5540:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/extra/editor",function(){return t(7431)}])},66723:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(85893),o=t(45697),a=t.n(o),i=t(41664),s=t(15861),l=t(12963),c=t(87357),d=t(50122);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function h(e){var r=e.links,t=e.activeLast,o=void 0!==t&&t,a=p(e,["links","activeLast"]),i=r[r.length-1].name,d=r.map((function(e){return(0,n.jsx)(f,{link:e},e.name)})),h=r.map((function(e){return(0,n.jsx)("div",{children:e.name!==i?(0,n.jsx)(f,{link:e}):(0,n.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:i})},e.name)}));return(0,n.jsx)(l.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}({separator:(0,n.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a,{children:o?d:h}))}function f(e){var r=e.link,t=r.href,o=void 0===t?"":t,a=r.name,s=r.icon;return(0,n.jsx)(i.default,{href:o,passHref:!0,children:(0,n.jsxs)(d.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,n.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),a]},a)})}h.propTypes={activeLast:a().bool,links:a().array.isRequired},f.propTypes={link:a().shape({href:a().string,icon:a().any,name:a().string})}},28729:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(85893),o=t(45697),a=t.n(o),i=t(87357),s=t(15861),l=t(50122),c=t(66723);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function h(e){var r=e.links,t=e.action,o=e.heading,a=e.moreLink,d=void 0===a?[]:a,h=e.sx,f=p(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:u({mb:5},h),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,n.jsx)(c.Z,u({links:r},f))]}),t&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:"string"===typeof d?(0,n.jsx)(l.Z,{href:d,target:"_blank",variant:"body2",children:d}):d.map((function(e){return(0,n.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}h.propTypes={links:a().array,action:a().node,heading:a().string.isRequired,moreLink:a().oneOfType([a().string,a().array]),sx:a().object}},14502:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var n=t(85893),o=t(50197),a=t(34768),i=t(41664),s=t(11496),l=t(15861),c=t(67720),d=t(50122),u=t(84575);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function h(){return h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){p(e,r,t[r])}))}return e}var m=(0,s.ZP)("div")((function(e){var r,t=e.theme,n="light"===t.palette.mode;return{"& ul, & ol":f({},t.typography.body1,{paddingLeft:t.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(r={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:t.spacing(3,3,3,8),borderRadius:2*Number(t.shape.borderRadius),backgroundColor:t.palette.background.neutral,color:"".concat(t.palette.text.secondary," !important")},p(r,t.breakpoints.up("md"),{width:"80%"}),p(r,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(t.palette.text.secondary," !important")}),p(r,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:t.palette.text.disabled}),r),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:n?t.palette.grey[900]:t.palette.grey[50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:t.spacing(.2,.5),color:t.palette.warning[n?"darker":"lighter"],backgroundColor:t.palette.warning[n?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}}));function g(e){var r=h({},e);return(0,n.jsx)(m,{children:(0,n.jsx)(o.D,f({rehypePlugins:[a.Z],components:x},r))})}var x={h1:function(e){var r=h({},e);return(0,n.jsx)(l.Z,f({variant:"h1"},r))},h2:function(e){var r=h({},e);return(0,n.jsx)(l.Z,f({variant:"h2"},r))},h3:function(e){var r=h({},e);return(0,n.jsx)(l.Z,f({variant:"h3"},r))},h4:function(e){var r=h({},e);return(0,n.jsx)(l.Z,f({variant:"h4"},r))},h5:function(e){var r=h({},e);return(0,n.jsx)(l.Z,f({variant:"h5"},r))},h6:function(e){var r=h({},e);return(0,n.jsx)(l.Z,f({variant:"h6"},r))},hr:function(e){var r=h({},e);return(0,n.jsx)(c.Z,f({sx:{my:3}},r))},img:function(e){var r=h({},e);return(0,n.jsx)(u.Z,f({alt:r.alt,ratio:"16/9",sx:{borderRadius:2,my:5}},r))},a:function(e){var r=h({},e);return r.href.includes("http")?(0,n.jsx)(d.Z,f({target:"_blank",rel:"noopener"},r)):(0,n.jsx)(i.default,{href:r.href,passHref:!0,children:(0,n.jsx)(d.Z,f({},r,{children:r.children}))})}}},7431:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Z}});var n=t(85893),o=t(67294),a=t(11496),i=t(87357),s=t(27948),l=t(86886),c=t(66242),d=t(78445),u=t(44267),p=t(26447),h=t(15861),f=t(58260),m=t(57325),g=t(78545),x=t(94684),b=t(14502),v=t(28729),y=(0,a.ZP)("div")((function(e){var r=e.theme;return{paddingTop:r.spacing(11),paddingBottom:r.spacing(15)}}));function Z(){var e=(0,o.useState)(""),r=e[0],t=e[1],a=(0,o.useState)(""),m=a[0],Z=a[1];return(0,n.jsx)(g.Z,{title:"Components: Editor",children:(0,n.jsxs)(y,{children:[(0,n.jsx)(i.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(v.Z,{heading:"Editor",links:[{name:"Components",href:f.ko.components},{name:"Editor"}],moreLink:["https://github.com/zenoamaro/react-quill"]})})}),(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,n.jsx)(l.ZP,{item:!0,xs:12,md:8,children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{title:"Editor Simple"}),(0,n.jsx)(u.Z,{children:(0,n.jsx)(x.Z,{simple:!0,id:"simple-editor",value:r,onChange:function(e){return t(e)}})})]})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,n.jsxs)(p.Z,{spacing:3,sx:{height:1},children:[(0,n.jsxs)(c.Z,{sx:{height:1,boxShadow:0,bgcolor:"background.neutral"},children:[(0,n.jsx)(d.Z,{title:"Preview Plain Text"}),(0,n.jsx)(i.Z,{sx:{p:3},children:(0,n.jsx)(b.Z,{children:r})})]}),(0,n.jsxs)(c.Z,{sx:{height:1,boxShadow:0,bgcolor:"background.neutral"},children:[(0,n.jsx)(d.Z,{title:"Preview Html"}),(0,n.jsx)(h.Z,{sx:{p:3},children:r})]})]})})]}),(0,n.jsx)(l.ZP,{container:!0,sx:{mt:3},children:(0,n.jsx)(l.ZP,{item:!0,xs:12,md:8,children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{title:"Editor Full"}),(0,n.jsx)(u.Z,{children:(0,n.jsx)(x.Z,{id:"full-editor",value:m,onChange:function(e){return Z(e)}})})]})})})]})]})})}Z.getLayout=function(e){return(0,n.jsx)(m.Z,{variant:"main",children:e})}}},function(e){e.O(0,[5434,2847,1323,2392,7325,9774,2888,179],(function(){return r=5540,e(e.s=r);var r}));var r=e.O();_N_E=r}]);