(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1937],{12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var n=t(87462),o=t(63366),a=t(67294),i=(t(59864),t(86010)),l=t(27192),s=t(11496),c=t(33616),u=t(15861),d=t(41796),p=t(82066),f=t(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(49990);const g=(0,s.ZP)(m.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),x=(0,s.ZP)(h)({width:24,height:16});var b=function(e){const r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(g,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(x,{ownerState:r})}))})},y=t(28979);function v(e){return(0,y.Z)("MuiBreadcrumbs",e)}var j=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,s.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${j.li}`]:r.li},r.root]})({}),O=(0,s.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,s.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function S(e,r,t,n){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,f.jsx)(k,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${i}`)):o.push(a),o)),[])}var P=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:s,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:m=1,maxItems:g=8,separator:x="/"}=t,y=(0,o.Z)(t,Z),[j,k]=a.useState(!1),P=(0,n.Z)({},t,{component:d,expanded:j,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:m,maxItems:g,separator:x}),C=(e=>{const{classes:r}=e;return(0,l.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},v,r)})(P),_=a.useRef(null),B=a.Children.toArray(s).filter((e=>a.isValidElement(e))).map(((e,r)=>(0,f.jsx)("li",{className:C.li,children:e},`child-${r}`)));return(0,f.jsx)(w,(0,n.Z)({ref:r,component:d,color:"text.secondary",className:(0,i.Z)(C.root,u),ownerState:P},y,{children:(0,f.jsx)(O,{className:C.ol,ref:_,ownerState:P,children:S(j||g&&B.length<=g?B:(e=>m+h>=e.length?e:[...e.slice(0,m),(0,f.jsx)(b,{"aria-label":p,onClick:()=>{k(!0);const e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(B),C.separator,x,P)})}))}))},71846:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/blog/new",function(){return t(50528)}])},66723:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(85893),o=t(45697),a=t.n(o),i=t(41664),l=t(15861),s=t(12963),c=t(87357),u=t(50122);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var r=e.links,t=e.activeLast,o=void 0!==t&&t,a=p(e,["links","activeLast"]),i=r[r.length-1].name,u=r.map((function(e){return(0,n.jsx)(h,{link:e},e.name)})),f=r.map((function(e){return(0,n.jsx)("div",{children:e.name!==i?(0,n.jsx)(h,{link:e}):(0,n.jsx)(l.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:i})},e.name)}));return(0,n.jsx)(s.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}({separator:(0,n.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a,{children:o?u:f}))}function h(e){var r=e.link,t=r.href,o=void 0===t?"":t,a=r.name,l=r.icon;return(0,n.jsx)(i.default,{href:o,passHref:!0,children:(0,n.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[l&&(0,n.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:l}),a]},a)})}f.propTypes={activeLast:a().bool,links:a().array.isRequired},h.propTypes={link:a().shape({href:a().string,icon:a().any,name:a().string})}},28729:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(85893),o=t(45697),a=t.n(o),i=t(87357),l=t(15861),s=t(50122),c=t(66723);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var r=e.links,t=e.action,o=e.heading,a=e.moreLink,u=void 0===a?[]:a,f=e.sx,h=p(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:d({mb:5},f),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,n.jsx)(c.Z,d({links:r},h))]}),t&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:"string"===typeof u?(0,n.jsx)(s.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return(0,n.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}f.propTypes={links:a().array,action:a().node,heading:a().string.isRequired,moreLink:a().oneOfType([a().string,a().array]),sx:a().object}},50528:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var n=t(85893),o=t(27948),a=t(58260),i=t(73264),l=t(31896),s=t(78545),c=t(28729),u=t(26312);function d(){var e=(0,i.Z)().themeStretch;return(0,n.jsx)(s.Z,{title:"Blog: New Post",children:(0,n.jsxs)(o.Z,{maxWidth:!e&&"lg",children:[(0,n.jsx)(c.Z,{heading:"Create a new post",links:[{name:"Dashboard",href:a.vB.root},{name:"Blog",href:a.vB.blog.root},{name:"New Post"}]}),(0,n.jsx)(u.Ge,{})]})})}d.getLayout=function(e){return(0,n.jsx)(l.Z,{children:e})}}},function(e){e.O(0,[3843,8607,5306,1323,9,2392,1896,6312,9774,2888,179],(function(){return r=71846,e(e.s=r);var r}));var r=e.O();_N_E=r}]);