(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7831],{12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n=t(87462),o=t(63366),i=t(67294),a=(t(59864),t(86010)),s=t(27192),l=t(11496),c=t(33616),d=t(15861),u=t(41796),p=t(82066),f=t(85893),h=(0,p.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=t(49990);const m=(0,l.ZP)(x.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,u._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,u._4)(e.palette.grey[600],.12)})}))),b=(0,l.ZP)(h)({width:24,height:16});var g=function(e){const r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(m,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(b,{ownerState:r})}))})},v=t(28979);function y(e){return(0,v.Z)("MuiBreadcrumbs",e)}var j=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,l.ZP)(d.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${j.li}`]:r.li},r.root]})({}),O=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,r,t,n){return e.reduce(((o,i,a)=>(a<e.length-1?o=o.concat(i,(0,f.jsx)(k,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${a}`)):o.push(i),o)),[])}var S=i.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:d,component:u="nav",expandText:p="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:x=1,maxItems:m=8,separator:b="/"}=t,v=(0,o.Z)(t,Z),[j,k]=i.useState(!1),S=(0,n.Z)({},t,{component:u,expanded:j,expandText:p,itemsAfterCollapse:h,itemsBeforeCollapse:x,maxItems:m,separator:b}),C=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,r)})(S),_=i.useRef(null),R=i.Children.toArray(l).filter((e=>i.isValidElement(e))).map(((e,r)=>(0,f.jsx)("li",{className:C.li,children:e},`child-${r}`)));return(0,f.jsx)(w,(0,n.Z)({ref:r,component:u,color:"text.secondary",className:(0,a.Z)(C.root,d),ownerState:S},v,{children:(0,f.jsx)(O,{className:C.ol,ref:_,ownerState:S,children:P(j||m&&R.length<=m?R:(e=>x+h>=e.length?e:[...e.slice(0,x),(0,f.jsx)(g,{"aria-label":p,onClick:()=>{k(!0);const e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(R),C.separator,b,S)})}))}))},3282:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/user/cards",function(){return t(5622)}])},66723:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(85893),o=t(45697),i=t.n(o),a=t(41664),s=t(15861),l=t(12963),c=t(87357),d=t(50122);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var r=e.links,t=e.activeLast,o=void 0!==t&&t,i=p(e,["links","activeLast"]),a=r[r.length-1].name,d=r.map((function(e){return(0,n.jsx)(h,{link:e},e.name)})),f=r.map((function(e){return(0,n.jsx)("div",{children:e.name!==a?(0,n.jsx)(h,{link:e}):(0,n.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:a})},e.name)}));return(0,n.jsx)(l.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}({separator:(0,n.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},i,{children:o?d:f}))}function h(e){var r=e.link,t=r.href,o=void 0===t?"":t,i=r.name,s=r.icon;return(0,n.jsx)(a.default,{href:o,passHref:!0,children:(0,n.jsxs)(d.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,n.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),i]},i)})}f.propTypes={activeLast:i().bool,links:i().array.isRequired},h.propTypes={link:i().shape({href:i().string,icon:i().any,name:i().string})}},28729:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(85893),o=t(45697),i=t.n(o),a=t(87357),s=t(15861),l=t(50122),c=t(66723);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e){var r=e.links,t=e.action,o=e.heading,i=e.moreLink,d=void 0===i?[]:i,f=e.sx,h=p(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(a.Z,{sx:u({mb:5},f),children:[(0,n.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,n.jsx)(c.Z,u({links:r},h))]}),t&&(0,n.jsx)(a.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(a.Z,{sx:{mt:2},children:"string"===typeof d?(0,n.jsx)(l.Z,{href:d,target:"_blank",variant:"body2",children:d}):d.map((function(e){return(0,n.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}f.propTypes={links:i().array,action:i().node,heading:i().string.isRequired,moreLink:i().oneOfType([i().string,i().array]),sx:i().object}},5622:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return C}});var n=t(85893),o=t(27948),i=t(87357),a=t(58260),s=t(73264),l=t(63298),c=t(31896),d=t(78545),u=t(28729),p=t(45697),f=t.n(p),h=t(11496),x=t(66242),m=t(87952),b=t(15861),g=t(26447),v=t(67720),y=t(71264),j=t(52281),Z=t(84575),w=t(92294),O=t(27209);function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var P=(0,h.ZP)("div")((function(e){var r=e.theme;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){k(e,r,t[r])}))}return e}({},(0,y.Z)().bgBlur({blur:2,color:r.palette.primary.darker}),{top:0,zIndex:8,content:"''",width:"100%",height:"100%",position:"absolute"})}));function S(e){var r=e.user,t=r.name,o=r.cover,a=r.position,s=r.follower,l=r.totalPost,c=r.avatarUrl,d=r.following;return(0,n.jsxs)(x.Z,{sx:{textAlign:"center"},children:[(0,n.jsxs)(i.Z,{sx:{position:"relative"},children:[(0,n.jsx)(O.Z,{src:"https://minimal-assets-api-dev.vercel.app/assets/icons/shape-avatar.svg",sx:{width:144,height:62,zIndex:10,left:0,right:0,bottom:-26,mx:"auto",position:"absolute",color:"background.paper"}}),(0,n.jsx)(m.Z,{alt:t,src:c,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),(0,n.jsx)(P,{}),(0,n.jsx)(Z.Z,{src:o,alt:o,ratio:"16/9"})]}),(0,n.jsx)(b.Z,{variant:"subtitle1",sx:{mt:6},children:t}),(0,n.jsx)(b.Z,{variant:"body2",sx:{color:"text.secondary"},children:a}),(0,n.jsx)(g.Z,{alignItems:"center",children:(0,n.jsx)(w.Z,{initialColor:!0,sx:{my:2.5}})}),(0,n.jsx)(v.Z,{sx:{borderStyle:"dashed"}}),(0,n.jsxs)(i.Z,{sx:{py:3,display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(b.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Follower"}),(0,n.jsx)(b.Z,{variant:"subtitle1",children:(0,j.v1)(s)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(b.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Following"}),(0,n.jsx)(b.Z,{variant:"subtitle1",children:(0,j.v1)(d)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(b.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Total Post"}),(0,n.jsx)(b.Z,{variant:"subtitle1",children:(0,j.v1)(l)})]})]})]})}function C(){var e=(0,s.Z)().themeStretch;return(0,n.jsx)(d.Z,{title:"User: Cards",children:(0,n.jsxs)(o.Z,{maxWidth:!e&&"lg",children:[(0,n.jsx)(u.Z,{heading:"User Cards",links:[{name:"Dashboard",href:a.vB.root},{name:"User",href:a.vB.user.root},{name:"Cards"}]}),(0,n.jsx)(i.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:l.oe.map((function(e){return(0,n.jsx)(S,{user:e},e.id)}))})]})})}S.propTypes={user:f().object.isRequired},C.getLayout=function(e){return(0,n.jsx)(c.Z,{children:e})}}},function(e){e.O(0,[3843,8607,2392,1896,9774,2888,179],(function(){return r=3282,e(e.s=r);var r}));var r=e.O();_N_E=r}]);