(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5543],{12963:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(87462),o=t(63366),a=t(67294),i=(t(59864),t(86010)),l=t(27192),s=t(11496),c=t(33616),u=t(15861),d=t(41796),p=t(82066),f=t(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(49990);const x=(0,s.ZP)(m.Z)((({theme:e})=>(0,r.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,r.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,r.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),g=(0,s.ZP)(h)({width:24,height:16});var y=function(e){const n=e;return(0,f.jsx)("li",{children:(0,f.jsx)(x,(0,r.Z)({focusRipple:!0},e,{ownerState:n,children:(0,f.jsx)(g,{ownerState:n})}))})},b=t(28979);function v(e){return(0,b.Z)("MuiBreadcrumbs",e)}var j=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=(0,s.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,n)=>[{[`& .${j.li}`]:n.li},n.root]})({}),w=(0,s.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,n)=>n.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),O=(0,s.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,n)=>n.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function C(e,n,t,r){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,f.jsx)(O,{"aria-hidden":!0,className:n,ownerState:r,children:t},`separator-${i}`)):o.push(a),o)),[])}var P=a.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:s,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:m=1,maxItems:x=8,separator:g="/"}=t,b=(0,o.Z)(t,Z),[j,O]=a.useState(!1),P=(0,r.Z)({},t,{component:d,expanded:j,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:m,maxItems:x,separator:g}),S=(e=>{const{classes:n}=e;return(0,l.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},v,n)})(P),T=a.useRef(null),M=a.Children.toArray(s).filter((e=>a.isValidElement(e))).map(((e,n)=>(0,f.jsx)("li",{className:S.li,children:e},`child-${n}`)));return(0,f.jsx)(k,(0,r.Z)({ref:n,component:d,color:"text.secondary",className:(0,i.Z)(S.root,u),ownerState:P},b,{children:(0,f.jsx)(w,{className:S.ol,ref:T,ownerState:P,children:C(j||x&&M.length<=x?M:(e=>m+h>=e.length?e:[...e.slice(0,m),(0,f.jsx)(y,{"aria-label":p,onClick:()=>{O(!0);const e=T.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(M),S.separator,g,P)})}))}))},78445:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(63366),o=t(87462),a=t(67294),i=t(86010),l=t(27192),s=t(15861),c=t(33616),u=t(11496),d=t(28979);function p(e){return(0,d.Z)("MuiCardHeader",e)}var f=(0,t(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=t(85893);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,n)=>(0,o.Z)({[`& .${f.title}`]:n.title,[`& .${f.subheader}`]:n.subheader},n.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,n)=>n.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,n)=>n.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,n)=>n.content})({flex:"1 1 auto"});var v=a.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:u,className:d,component:f="div",disableTypography:v=!1,subheader:j,subheaderTypographyProps:Z,title:k,titleTypographyProps:w}=t,O=(0,r.Z)(t,m),C=(0,o.Z)({},t,{component:f,disableTypography:v}),P=(e=>{const{classes:n}=e;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,n)})(C);let S=k;null==S||S.type===s.Z||v||(S=(0,h.jsx)(s.Z,(0,o.Z)({variant:u?"body2":"h5",className:P.title,component:"span",display:"block"},w,{children:S})));let T=j;return null==T||T.type===s.Z||v||(T=(0,h.jsx)(s.Z,(0,o.Z)({variant:u?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},Z,{children:T}))),(0,h.jsxs)(x,(0,o.Z)({className:(0,i.Z)(P.root,d),as:f,ref:n,ownerState:C},O,{children:[u&&(0,h.jsx)(g,{className:P.avatar,ownerState:C,children:u}),(0,h.jsxs)(b,{className:P.content,ownerState:C,children:[S,T]}),a&&(0,h.jsx)(y,{className:P.action,ownerState:C,children:a})]}))}))},21363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/menu",function(){return t(64492)}])},66723:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(85893),o=t(45697),a=t.n(o),i=t(41664),l=t(15861),s=t(12963),c=t(87357),u=t(50122);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var n=e.links,t=e.activeLast,o=void 0!==t&&t,a=p(e,["links","activeLast"]),i=n[n.length-1].name,u=n.map((function(e){return(0,r.jsx)(h,{link:e},e.name)})),f=n.map((function(e){return(0,r.jsx)("div",{children:e.name!==i?(0,r.jsx)(h,{link:e}):(0,r.jsx)(l.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:i})},e.name)}));return(0,r.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}({separator:(0,r.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a,{children:o?u:f}))}function h(e){var n=e.link,t=n.href,o=void 0===t?"":t,a=n.name,l=n.icon;return(0,r.jsx)(i.default,{href:o,passHref:!0,children:(0,r.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[l&&(0,r.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:l}),a]},a)})}f.propTypes={activeLast:a().bool,links:a().array.isRequired},h.propTypes={link:a().shape({href:a().string,icon:a().any,name:a().string})}},28729:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(85893),o=t(45697),a=t.n(o),i=t(87357),l=t(15861),s=t(50122),c=t(66723);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var n=e.links,t=e.action,o=e.heading,a=e.moreLink,u=void 0===a?[]:a,f=e.sx,h=p(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(i.Z,{sx:d({mb:5},f),children:[(0,r.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,r.jsx)(c.Z,d({links:n},h))]}),t&&(0,r.jsx)(i.Z,{sx:{flexShrink:0},children:t})]}),(0,r.jsx)(i.Z,{sx:{mt:2},children:"string"===typeof u?(0,r.jsx)(s.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return(0,r.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}f.propTypes={links:a().array,action:a().node,heading:a().string.isRequired,moreLink:a().oneOfType([a().string,a().array]),sx:a().object}},64492:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var r=t(85893),o=t(67294),a=t(11496),i=t(87357),l=t(27948),s=t(11057),c=t(25464),u=t(18972),d=t(78462),p=t(98619),f=t(59334),h=t(93946),m=t(58260),x=t(31896),g=t(78545),y=t(21238),b=t(28729),v=t(63552),j=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],Z=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],k={display:"flex",alignItems:"center",justifyContent:"center"},w=(0,a.ZP)("div")((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));function O(){var e=(0,o.useState)(1),n=e[0],t=e[1],a=(0,o.useState)(null),x=a[0],O=a[1],C=(0,o.useState)(null),P=C[0],S=C[1],T=(0,o.useState)(null),M=T[0],R=T[1],N=function(){O(null)},_=function(){R(null)};return(0,r.jsx)(g.Z,{title:"Components: Menu",children:(0,r.jsxs)(w,{children:[(0,r.jsx)(i.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(b.Z,{heading:"Menu",links:[{name:"Components",href:m.ko.components},{name:"Menu"}],moreLink:"https://mui.com/components/menus"})})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(i.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"}},children:[(0,r.jsxs)(v.g,{title:"Simple",sx:k,children:[(0,r.jsx)(s.Z,{variant:"outlined",onClick:function(e){O(e.currentTarget)},children:"Open Menu"}),(0,r.jsx)(c.Z,{keepMounted:!0,id:"simple-menu",anchorEl:x,onClose:N,open:Boolean(x),children:["Profile","My account","Logout"].map((function(e){return(0,r.jsx)(u.Z,{onClick:N,children:e},e)}))})]}),(0,r.jsxs)(v.g,{title:"Selected",sx:k,children:[(0,r.jsx)(d.Z,{component:"nav","aria-label":"Device settings",children:(0,r.jsx)(p.Z,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){S(e.currentTarget)},children:(0,r.jsx)(f.Z,{primary:"When device is locked",secondary:j[n]})})}),(0,r.jsx)(c.Z,{keepMounted:!0,id:"lock-menu",anchorEl:P,onClose:N,open:Boolean(P),children:j.map((function(e,o){return(0,r.jsx)(u.Z,{disabled:0===o,selected:o===n,onClick:function(e){return function(e,n){t(n),S(null)}(0,o)},children:e},e)}))})]}),(0,r.jsxs)(v.g,{title:"Max height",sx:k,children:[(0,r.jsx)(h.Z,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){R(e.currentTarget)},children:(0,r.jsx)(y.Z,{icon:"eva:more-vertical-fill"})}),(0,r.jsx)(c.Z,{keepMounted:!0,id:"long-menu",anchorEl:M,onClose:_,open:Boolean(M),PaperProps:{style:{maxHeight:216,width:"20ch"}},children:Z.map((function(e){return(0,r.jsx)(u.Z,{selected:"Pyxis"===e,onClick:_,children:e},e)}))})]})]})})]})})}O.getLayout=function(e){return(0,r.jsx)(x.Z,{variant:"main",children:e})}},63552:function(e,n,t){"use strict";t.d(n,{g:function(){return f},_:function(){return h}});var r=t(85893),o=t(45697),a=t.n(o),i=t(41796),l=t(55113),s=t(78445),c=t(87357),u=t(15861);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function f(e){var n=e.title,t=e.sx,o=e.children;return(0,r.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,r.jsx)(s.Z,{title:n}),(0,r.jsx)(c.Z,{sx:p({p:5,minHeight:180},t),children:o})]})}function h(e){var n=e.title;return(0,r.jsx)(u.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}f.propTypes={children:a().any.isRequired,sx:a().object,title:a().string},h.propTypes={title:a().string.isRequired}}},function(e){e.O(0,[3843,8607,2392,1896,9774,2888,179],(function(){return n=21363,e(e.s=n);var n}));var n=e.O();_N_E=n}]);