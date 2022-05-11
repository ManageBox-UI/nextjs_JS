(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4172],{12963:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(87462),o=r(63366),a=r(67294),i=(r(59864),r(86010)),s=r(27192),l=r(11496),c=r(33616),u=r(15861),d=r(41796),p=r(82066),f=r(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=r(49990);const x=(0,l.ZP)(m.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),g=(0,l.ZP)(h)({width:24,height:16});var b=function(e){const t=e;return(0,f.jsx)("li",{children:(0,f.jsx)(x,(0,n.Z)({focusRipple:!0},e,{ownerState:t,children:(0,f.jsx)(g,{ownerState:t})}))})},y=r(28979);function v(e){return(0,y.Z)("MuiBreadcrumbs",e)}var j=(0,r(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const w=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],Z=(0,l.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${j.li}`]:t.li},t.root]})({}),O=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),S=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function k(e,t,r,n){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,f.jsx)(S,{"aria-hidden":!0,className:t,ownerState:n,children:r},`separator-${i}`)):o.push(a),o)),[])}var P=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:m=1,maxItems:x=8,separator:g="/"}=r,y=(0,o.Z)(r,w),[j,S]=a.useState(!1),P=(0,n.Z)({},r,{component:d,expanded:j,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:m,maxItems:x,separator:g}),C=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},v,t)})(P),R=a.useRef(null),T=a.Children.toArray(l).filter((e=>a.isValidElement(e))).map(((e,t)=>(0,f.jsx)("li",{className:C.li,children:e},`child-${t}`)));return(0,f.jsx)(Z,(0,n.Z)({ref:t,component:d,color:"text.secondary",className:(0,i.Z)(C.root,u),ownerState:P},y,{children:(0,f.jsx)(O,{className:C.ol,ref:R,ownerState:P,children:k(j||x&&T.length<=x?T:(e=>m+h>=e.length?e:[...e.slice(0,m),(0,f.jsx)(b,{"aria-label":p,onClick:()=>{S(!0);const e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(T),C.separator,g,P)})}))}))},78445:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),s=r(27192),l=r(15861),c=r(33616),u=r(11496),d=r(28979);function p(e){return(0,d.Z)("MuiCardHeader",e)}var f=(0,r(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=r(85893);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,o.Z)({[`& .${f.title}`]:t.title,[`& .${f.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var v=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:u,className:d,component:f="div",disableTypography:v=!1,subheader:j,subheaderTypographyProps:w,title:Z,titleTypographyProps:O}=r,S=(0,n.Z)(r,m),k=(0,o.Z)({},r,{component:f,disableTypography:v}),P=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(k);let C=Z;null==C||C.type===l.Z||v||(C=(0,h.jsx)(l.Z,(0,o.Z)({variant:u?"body2":"h5",className:P.title,component:"span",display:"block"},O,{children:C})));let R=j;return null==R||R.type===l.Z||v||(R=(0,h.jsx)(l.Z,(0,o.Z)({variant:u?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:R}))),(0,h.jsxs)(x,(0,o.Z)({className:(0,i.Z)(P.root,d),as:f,ref:t,ownerState:k},S,{children:[u&&(0,h.jsx)(g,{className:P.avatar,ownerState:k,children:u}),(0,h.jsxs)(y,{className:P.content,ownerState:k,children:[C,R]}),a&&(0,h.jsx)(b,{className:P.action,ownerState:k,children:a})]}))}))},33468:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/foundation/shadows",function(){return r(53694)}])},66723:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(85893),o=r(45697),a=r.n(o),i=r(41664),s=r(15861),l=r(12963),c=r(87357),u=r(50122);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e){var t=e.links,r=e.activeLast,o=void 0!==r&&r,a=p(e,["links","activeLast"]),i=t[t.length-1].name,u=t.map((function(e){return(0,n.jsx)(h,{link:e},e.name)})),f=t.map((function(e){return(0,n.jsx)("div",{children:e.name!==i?(0,n.jsx)(h,{link:e}):(0,n.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:i})},e.name)}));return(0,n.jsx)(l.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({separator:(0,n.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a,{children:o?u:f}))}function h(e){var t=e.link,r=t.href,o=void 0===r?"":r,a=t.name,s=t.icon;return(0,n.jsx)(i.default,{href:o,passHref:!0,children:(0,n.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,n.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),a]},a)})}f.propTypes={activeLast:a().bool,links:a().array.isRequired},h.propTypes={link:a().shape({href:a().string,icon:a().any,name:a().string})}},28729:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(85893),o=r(45697),a=r.n(o),i=r(87357),s=r(15861),l=r(50122),c=r(66723);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e){var t=e.links,r=e.action,o=e.heading,a=e.moreLink,u=void 0===a?[]:a,f=e.sx,h=p(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:d({mb:5},f),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,n.jsx)(c.Z,d({links:t},h))]}),r&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:r})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:"string"===typeof u?(0,n.jsx)(l.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return(0,n.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}f.propTypes={links:a().array,action:a().node,heading:a().string.isRequired,moreLink:a().oneOfType([a().string,a().array]),sx:a().object}},53694:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(85893),o=r(45697),a=r.n(o),i=r(11496),s=r(2734),l=r(87357),c=r(27948),u=r(26447),d=r(55113),p=r(15861),f=r(58260),h=r(31896),m=r(78545),x=r(28729),g=r(63552);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}var v={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}},j=(0,i.ZP)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function w(){var e=(0,s.Z)(),t=e.shadows.slice(1,e.shadows.length),r=[["z1",e.customShadows.z1],["z8",e.customShadows.z8],["z12",e.customShadows.z12],["z16",e.customShadows.z16],["z20",e.customShadows.z20],["z24",e.customShadows.z24],["card",e.customShadows.card],["dropdown",e.customShadows.dropdown],["dialog",e.customShadows.dialog]];return(0,n.jsx)(m.Z,{title:"Foundations: Shadows",children:(0,n.jsxs)(j,{children:[(0,n.jsx)(l.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(x.Z,{heading:"Shadows",links:[{name:"Components",href:f.ko.components},{name:"Shadows"}]})})}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(u.Z,{spacing:5,children:[(0,n.jsx)(g.g,{title:"System",sx:v,children:t.map((function(e,t){return(0,n.jsx)(Z,{title:"z".concat(t+1),sx:{boxShadow:e}},e)}))}),(0,n.jsx)(g.g,{title:"Customs",sx:v,children:r.map((function(e){return(0,n.jsx)(Z,{title:e[0],sx:{boxShadow:e[1]}},e[0])}))}),(0,n.jsx)(g.g,{title:"Colors",sx:v,children:["primary","secondary","info","success","warning","error"].map((function(t){return(0,n.jsx)(Z,{title:t,sx:{color:e.palette[t].contrastText,bgcolor:e.palette[t].main,boxShadow:e.customShadows[t]}},t)}))})]})})]})})}function Z(e){var t=e.sx,r=e.title;return(0,n.jsx)(d.Z,{sx:y({padding:3,margin:1.5,display:"flex",alignItems:"center",justifyContent:"center",width:{xs:"calc((100%/2) - 24px)",sm:"calc((100%/4) - 24px)",md:"calc((100%/6) - 24px)"}},t),children:(0,n.jsx)(p.Z,{variant:"subtitle2",sx:{textTransform:"capitalize"},children:r})})}w.getLayout=function(e){return(0,n.jsx)(h.Z,{variant:"main",children:e})},Z.propTypes={sx:a().object,title:a().string}},63552:function(e,t,r){"use strict";r.d(t,{g:function(){return f},_:function(){return h}});var n=r(85893),o=r(45697),a=r.n(o),i=r(41796),s=r(55113),l=r(78445),c=r(87357),u=r(15861);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function f(e){var t=e.title,r=e.sx,o=e.children;return(0,n.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,n.jsx)(l.Z,{title:t}),(0,n.jsx)(c.Z,{sx:p({p:5,minHeight:180},r),children:o})]})}function h(e){var t=e.title;return(0,n.jsx)(u.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}f.propTypes={children:a().any.isRequired,sx:a().object,title:a().string},h.propTypes={title:a().string.isRequired}}},function(e){e.O(0,[3843,8607,2392,1896,9774,2888,179],(function(){return t=33468,e(e.s=t);var t}));var t=e.O();_N_E=t}]);