(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1373],{12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return C}});var n=t(87462),o=t(63366),a=t(67294),i=(t(59864),t(86010)),s=t(27192),l=t(11496),c=t(33616),u=t(15861),d=t(41796),p=t(82066),f=t(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(49990);const x=(0,l.ZP)(m.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),g=(0,l.ZP)(h)({width:24,height:16});var v=function(e){const r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(x,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(g,{ownerState:r})}))})},b=t(28979);function y(e){return(0,b.Z)("MuiBreadcrumbs",e)}var j=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],O=(0,l.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${j.li}`]:r.li},r.root]})({}),w=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,r,t,n){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,f.jsx)(k,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${i}`)):o.push(a),o)),[])}var C=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:m=1,maxItems:x=8,separator:g="/"}=t,b=(0,o.Z)(t,Z),[j,k]=a.useState(!1),C=(0,n.Z)({},t,{component:d,expanded:j,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:m,maxItems:x,separator:g}),S=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,r)})(C),R=a.useRef(null),T=a.Children.toArray(l).filter((e=>a.isValidElement(e))).map(((e,r)=>(0,f.jsx)("li",{className:S.li,children:e},`child-${r}`)));return(0,f.jsx)(O,(0,n.Z)({ref:r,component:d,color:"text.secondary",className:(0,i.Z)(S.root,u),ownerState:C},b,{children:(0,f.jsx)(w,{className:S.ol,ref:R,ownerState:C,children:P(j||x&&T.length<=x?T:(e=>m+h>=e.length?e:[...e.slice(0,m),(0,f.jsx)(v,{"aria-label":p,onClick:()=>{k(!0);const e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(T),S.separator,g,C)})}))}))},78445:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var n=t(63366),o=t(87462),a=t(67294),i=t(86010),s=t(27192),l=t(15861),c=t(33616),u=t(11496),d=t(28979);function p(e){return(0,d.Z)("MuiCardHeader",e)}var f=(0,t(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=t(85893);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,r)=>(0,o.Z)({[`& .${f.title}`]:r.title,[`& .${f.subheader}`]:r.subheader},r.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,r)=>r.content})({flex:"1 1 auto"});var y=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:u,className:d,component:f="div",disableTypography:y=!1,subheader:j,subheaderTypographyProps:Z,title:O,titleTypographyProps:w}=t,k=(0,n.Z)(t,m),P=(0,o.Z)({},t,{component:f,disableTypography:y}),C=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,r)})(P);let S=O;null==S||S.type===l.Z||y||(S=(0,h.jsx)(l.Z,(0,o.Z)({variant:u?"body2":"h5",className:C.title,component:"span",display:"block"},w,{children:S})));let R=j;return null==R||R.type===l.Z||y||(R=(0,h.jsx)(l.Z,(0,o.Z)({variant:u?"body2":"body1",className:C.subheader,color:"text.secondary",component:"span",display:"block"},Z,{children:R}))),(0,h.jsxs)(x,(0,o.Z)({className:(0,i.Z)(C.root,d),as:f,ref:r,ownerState:P},k,{children:[u&&(0,h.jsx)(g,{className:C.avatar,ownerState:P,children:u}),(0,h.jsxs)(b,{className:C.content,ownerState:P,children:[S,R]}),a&&(0,h.jsx)(v,{className:C.action,ownerState:P,children:a})]}))}))},96601:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/popover",function(){return t(88183)}])},66723:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(85893),o=t(45697),a=t.n(o),i=t(41664),s=t(15861),l=t(12963),c=t(87357),u=t(50122);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var r=e.links,t=e.activeLast,o=void 0!==t&&t,a=p(e,["links","activeLast"]),i=r[r.length-1].name,u=r.map((function(e){return(0,n.jsx)(h,{link:e},e.name)})),f=r.map((function(e){return(0,n.jsx)("div",{children:e.name!==i?(0,n.jsx)(h,{link:e}):(0,n.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:i})},e.name)}));return(0,n.jsx)(l.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}({separator:(0,n.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a,{children:o?u:f}))}function h(e){var r=e.link,t=r.href,o=void 0===t?"":t,a=r.name,s=r.icon;return(0,n.jsx)(i.default,{href:o,passHref:!0,children:(0,n.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,n.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),a]},a)})}f.propTypes={activeLast:a().bool,links:a().array.isRequired},h.propTypes={link:a().shape({href:a().string,icon:a().any,name:a().string})}},28729:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(85893),o=t(45697),a=t.n(o),i=t(87357),s=t(15861),l=t(50122),c=t(66723);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var r=e.links,t=e.action,o=e.heading,a=e.moreLink,u=void 0===a?[]:a,f=e.sx,h=p(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:d({mb:5},f),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,n.jsx)(c.Z,d({links:r},h))]}),t&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:"string"===typeof u?(0,n.jsx)(l.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return(0,n.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}f.propTypes={links:a().array,action:a().node,heading:a().string.isRequired,moreLink:a().oneOfType([a().string,a().array]),sx:a().object}},88183:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var n=t(85893),o=t(67294),a=t(11496),i=t(87357),s=t(27948),l=t(11057),c=t(14564),u=t(15861),d=t(58260),p=t(31896),f=t(78545),h=t(28729),m=t(63552),x=(0,a.ZP)("div")((function(e){var r=e.theme;return{paddingTop:r.spacing(11),paddingBottom:r.spacing(15)}})),g={display:"flex",alignItems:"center",justifyContent:"center"};function v(){var e=(0,o.useState)(null),r=e[0],t=e[1],a=(0,o.useState)(null),p=a[0],v=a[1],b=function(){v(null)};return(0,n.jsx)(f.Z,{title:"Components: Popover",children:(0,n.jsxs)(x,{children:[(0,n.jsx)(i.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(h.Z,{heading:"Popover",links:[{name:"Components",href:d.ko.components},{name:"Popover"}],moreLink:"https://mui.com/components/popover"})})}),(0,n.jsx)(s.Z,{children:(0,n.jsxs)(i.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[(0,n.jsxs)(m.g,{title:"Click",sx:g,children:[(0,n.jsx)(l.Z,{variant:"contained",onClick:function(e){t(e.currentTarget)},children:"Open Popover"}),(0,n.jsx)(c.ZP,{open:Boolean(r),anchorEl:r,onClose:function(){t(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:(0,n.jsxs)(i.Z,{sx:{p:2,maxWidth:280},children:[(0,n.jsx)(u.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,n.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),(0,n.jsxs)(m.g,{title:"Hover",sx:g,children:[(0,n.jsx)(u.Z,{"aria-owns":p?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){v(e.currentTarget)},onMouseLeave:b,children:"Hover with a Popover."}),(0,n.jsx)(c.ZP,{id:"mouse-over-popover",open:Boolean(p),anchorEl:p,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:b,disableRestoreFocus:!0,sx:{pointerEvents:"none"},children:(0,n.jsxs)(i.Z,{sx:{p:2,maxWidth:280},children:[(0,n.jsx)(u.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,n.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})})]})})}v.getLayout=function(e){return(0,n.jsx)(p.Z,{variant:"main",children:e})}},63552:function(e,r,t){"use strict";t.d(r,{g:function(){return f},_:function(){return h}});var n=t(85893),o=t(45697),a=t.n(o),i=t(41796),s=t(55113),l=t(78445),c=t(87357),u=t(15861);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}function f(e){var r=e.title,t=e.sx,o=e.children;return(0,n.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[r&&(0,n.jsx)(l.Z,{title:r}),(0,n.jsx)(c.Z,{sx:p({p:5,minHeight:180},t),children:o})]})}function h(e){var r=e.title;return(0,n.jsx)(u.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:r})}f.propTypes={children:a().any.isRequired,sx:a().object,title:a().string},h.propTypes={title:a().string.isRequired}}},function(e){e.O(0,[3843,8607,2392,1896,9774,2888,179],(function(){return r=96601,e(e.s=r);var r}));var r=e.O();_N_E=r}]);