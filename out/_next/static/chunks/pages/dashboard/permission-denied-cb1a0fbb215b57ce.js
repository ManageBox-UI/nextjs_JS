(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3329],{12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var n=t(87462),i=t(63366),o=t(67294),a=(t(59864),t(86010)),l=t(27192),s=t(11496),c=t(33616),u=t(15861),d=t(41796),f=t(82066),p=t(85893),m=(0,f.Z)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=t(49990);const x=(0,s.ZP)(h.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),g=(0,s.ZP)(m)({width:24,height:16});var b=function(e){const r=e;return(0,p.jsx)("li",{children:(0,p.jsx)(x,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,p.jsx)(g,{ownerState:r})}))})},y=t(28979);function v(e){return(0,y.Z)("MuiBreadcrumbs",e)}var j=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,s.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${j.li}`]:r.li},r.root]})({}),O=(0,s.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,s.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function S(e,r,t,n){return e.reduce(((i,o,a)=>(a<e.length-1?i=i.concat(o,(0,p.jsx)(k,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${a}`)):i.push(o),i)),[])}var P=o.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:s,className:u,component:d="nav",expandText:f="Show path",itemsAfterCollapse:m=1,itemsBeforeCollapse:h=1,maxItems:x=8,separator:g="/"}=t,y=(0,i.Z)(t,Z),[j,k]=o.useState(!1),P=(0,n.Z)({},t,{component:d,expanded:j,expandText:f,itemsAfterCollapse:m,itemsBeforeCollapse:h,maxItems:x,separator:g}),C=(e=>{const{classes:r}=e;return(0,l.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},v,r)})(P),_=o.useRef(null),A=o.Children.toArray(s).filter((e=>o.isValidElement(e))).map(((e,r)=>(0,p.jsx)("li",{className:C.li,children:e},`child-${r}`)));return(0,p.jsx)(w,(0,n.Z)({ref:r,component:d,color:"text.secondary",className:(0,a.Z)(C.root,u),ownerState:P},y,{children:(0,p.jsx)(O,{className:C.ol,ref:_,ownerState:P,children:S(j||x&&A.length<=x?A:(e=>h+m>=e.length?e:[...e.slice(0,h),(0,p.jsx)(b,{"aria-label":f,onClick:()=>{k(!0);const e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-m,e.length)])(A),C.separator,g,P)})}))}))},72171:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/permission-denied",function(){return t(75224)}])},66723:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(85893),i=t(45697),o=t.n(i),a=t(41664),l=t(15861),s=t(12963),c=t(87357),u=t(50122);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function p(e){var r=e.links,t=e.activeLast,i=void 0!==t&&t,o=f(e,["links","activeLast"]),a=r[r.length-1].name,u=r.map((function(e){return(0,n.jsx)(m,{link:e},e.name)})),p=r.map((function(e){return(0,n.jsx)("div",{children:e.name!==a?(0,n.jsx)(m,{link:e}):(0,n.jsx)(l.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:a})},e.name)}));return(0,n.jsx)(s.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}({separator:(0,n.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o,{children:i?u:p}))}function m(e){var r=e.link,t=r.href,i=void 0===t?"":t,o=r.name,l=r.icon;return(0,n.jsx)(a.default,{href:i,passHref:!0,children:(0,n.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[l&&(0,n.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:l}),o]},o)})}p.propTypes={activeLast:o().bool,links:o().array.isRequired},m.propTypes={link:o().shape({href:o().string,icon:o().any,name:o().string})}},28729:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(85893),i=t(45697),o=t.n(i),a=t(87357),l=t(15861),s=t(50122),c=t(66723);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}function f(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function p(e){var r=e.links,t=e.action,i=e.heading,o=e.moreLink,u=void 0===o?[]:o,p=e.sx,m=f(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(a.Z,{sx:d({mb:5},p),children:[(0,n.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,n.jsx)(c.Z,d({links:r},m))]}),t&&(0,n.jsx)(a.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(a.Z,{sx:{mt:2},children:"string"===typeof u?(0,n.jsx)(s.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return(0,n.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}p.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},75224:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var n=t(85893),i=t(67294),o=t(27948),a=t(33454),l=t(96420),s=t(87357),c=t(66242),u=t(78445),d=t(15861),f=t(73264),p=t(57325),m=t(58260),h=t(78545),x=t(28729),g=t(25990);function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(){var e=(0,f.Z)().themeStretch,r=(0,i.useState)("admin"),t=r[0],p=r[1];return(0,n.jsx)(h.Z,{title:"Permission Denied",children:(0,n.jsxs)(o.Z,{maxWidth:!e&&"lg",children:[(0,n.jsx)(x.Z,{heading:"Permission Denied",links:[{name:"Dashboard",href:m.vB.root},{name:"Permission Denied"}]}),(0,n.jsxs)(a.Z,{exclusive:!0,value:t,onChange:function(e,r){null!==r&&p(r)},color:"primary",sx:{mb:5},children:[(0,n.jsx)(l.Z,{value:"admin","aria-label":"admin role",children:"isAdmin"}),(0,n.jsx)(l.Z,{value:"user","aria-label":"user role",children:"isUser"})]}),(0,n.jsx)(g.Z,{hasContent:!0,roles:[t],children:(0,n.jsx)(s.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:"repeat(2, 1fr)"},children:y(Array(8)).map((function(e,r){return(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(u.Z,{title:"Card ".concat(r+1),subheader:"Proin viverra ligula"}),(0,n.jsx)(d.Z,{sx:{p:3,color:"text.secondary"},children:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Vestibulum fringilla pede sit amet augue."})]},r)}))})})]})})}v.getLayout=function(e){return(0,n.jsx)(p.Z,{children:e})}}},function(e){e.O(0,[5434,2847,9737,2392,7325,9774,2888,179],(function(){return r=72171,e(e.s=r);var r}));var r=e.O();_N_E=r}]);