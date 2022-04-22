(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2899],{12963:function(e,t,i){"use strict";i.d(t,{Z:function(){return O}});var r=i(87462),n=i(63366),a=i(67294),s=(i(59864),i(86010)),o=i(27192),l=i(11496),u=i(33616),c=i(15861),m=i(41796),d=i(82066),p=i(85893),h=(0,d.Z)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=i(49990);const g=(0,l.ZP)(f.Z)((({theme:e})=>(0,r.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,r.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,r.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,m._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(e.palette.grey[600],.12)})}))),b=(0,l.ZP)(h)({width:24,height:16});var v=function(e){const t=e;return(0,p.jsx)("li",{children:(0,p.jsx)(g,(0,r.Z)({focusRipple:!0},e,{ownerState:t,children:(0,p.jsx)(b,{ownerState:t})}))})},x=i(28979);function y(e){return(0,x.Z)("MuiBreadcrumbs",e)}var Z=(0,i(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const j=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=(0,l.ZP)(c.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${Z.li}`]:t.li},t.root]})({}),w=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),q=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function C(e,t,i,r){return e.reduce(((n,a,s)=>(s<e.length-1?n=n.concat(a,(0,p.jsx)(q,{"aria-hidden":!0,className:t,ownerState:r,children:i},`separator-${s}`)):n.push(a),n)),[])}var O=a.forwardRef((function(e,t){const i=(0,u.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:c,component:m="nav",expandText:d="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:f=1,maxItems:g=8,separator:b="/"}=i,x=(0,n.Z)(i,j),[Z,q]=a.useState(!1),O=(0,r.Z)({},i,{component:m,expanded:Z,expandText:d,itemsAfterCollapse:h,itemsBeforeCollapse:f,maxItems:g,separator:b}),k=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,t)})(O),S=a.useRef(null),N=a.Children.toArray(l).filter((e=>a.isValidElement(e))).map(((e,t)=>(0,p.jsx)("li",{className:k.li,children:e},`child-${t}`)));return(0,p.jsx)(P,(0,r.Z)({ref:t,component:m,color:"text.secondary",className:(0,s.Z)(k.root,c),ownerState:O},x,{children:(0,p.jsx)(w,{className:k.ol,ref:S,ownerState:O,children:C(Z||g&&N.length<=g?N:(e=>f+h>=e.length?e:[...e.slice(0,f),(0,p.jsx)(v,{"aria-label":d,onClick:()=>{q(!0);const e=S.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-h,e.length)])(N),k.separator,b,O)})}))}))},44267:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var r=i(87462),n=i(63366),a=i(67294),s=i(86010),o=i(27192),l=i(11496),u=i(33616),c=i(28979);function m(e){return(0,c.Z)("MuiCardContent",e)}(0,i(76087).Z)("MuiCardContent",["root"]);var d=i(85893);const p=["className","component"],h=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var f=a.forwardRef((function(e,t){const i=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:a,component:l="div"}=i,c=(0,n.Z)(i,p),f=(0,r.Z)({},i,{component:l}),g=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"]},m,t)})(f);return(0,d.jsx)(h,(0,r.Z)({as:l,className:(0,s.Z)(g.root,a),ownerState:f,ref:t},c))}))},78445:function(e,t,i){"use strict";i.d(t,{Z:function(){return y}});var r=i(63366),n=i(87462),a=i(67294),s=i(86010),o=i(27192),l=i(15861),u=i(33616),c=i(11496),m=i(28979);function d(e){return(0,m.Z)("MuiCardHeader",e)}var p=(0,i(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=i(85893);const f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({[`& .${p.title}`]:t.title,[`& .${p.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),x=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var y=a.forwardRef((function(e,t){const i=(0,u.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:c,className:m,component:p="div",disableTypography:y=!1,subheader:Z,subheaderTypographyProps:j,title:P,titleTypographyProps:w}=i,q=(0,r.Z)(i,f),C=(0,n.Z)({},i,{component:p,disableTypography:y}),O=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},d,t)})(C);let k=P;null==k||k.type===l.Z||y||(k=(0,h.jsx)(l.Z,(0,n.Z)({variant:c?"body2":"h5",className:O.title,component:"span",display:"block"},w,{children:k})));let S=Z;return null==S||S.type===l.Z||y||(S=(0,h.jsx)(l.Z,(0,n.Z)({variant:c?"body2":"body1",className:O.subheader,color:"text.secondary",component:"span",display:"block"},j,{children:S}))),(0,h.jsxs)(g,(0,n.Z)({className:(0,s.Z)(O.root,m),as:p,ref:t,ownerState:C},q,{children:[c&&(0,h.jsx)(b,{className:O.avatar,ownerState:C,children:c}),(0,h.jsxs)(x,{className:O.content,ownerState:C,children:[k,S]}),a&&(0,h.jsx)(v,{className:O.action,ownerState:C,children:a})]}))}))},30975:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/extra/scroll",function(){return i(97591)}])},66723:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var r=i(85893),n=i(45697),a=i.n(n),s=i(41664),o=i(15861),l=i(12963),u=i(87357),c=i(50122);function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function d(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function p(e){var t=e.links,i=e.activeLast,n=void 0!==i&&i,a=d(e,["links","activeLast"]),s=t[t.length-1].name,c=t.map((function(e){return(0,r.jsx)(h,{link:e},e.name)})),p=t.map((function(e){return(0,r.jsx)("div",{children:e.name!==s?(0,r.jsx)(h,{link:e}):(0,r.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:s})},e.name)}));return(0,r.jsx)(l.Z,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){m(e,t,i[t])}))}return e}({separator:(0,r.jsx)(u.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a,{children:n?c:p}))}function h(e){var t=e.link,i=t.href,n=void 0===i?"":i,a=t.name,o=t.icon;return(0,r.jsx)(s.default,{href:n,passHref:!0,children:(0,r.jsxs)(c.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&(0,r.jsx)(u.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),a]},a)})}p.propTypes={activeLast:a().bool,links:a().array.isRequired},h.propTypes={link:a().shape({href:a().string,icon:a().any,name:a().string})}},28729:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var r=i(85893),n=i(45697),a=i.n(n),s=i(87357),o=i(15861),l=i(50122),u=i(66723);function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){c(e,t,i[t])}))}return e}function d(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function p(e){var t=e.links,i=e.action,n=e.heading,a=e.moreLink,c=void 0===a?[]:a,p=e.sx,h=d(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(s.Z,{sx:m({mb:5},p),children:[(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(s.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:n}),(0,r.jsx)(u.Z,m({links:t},h))]}),i&&(0,r.jsx)(s.Z,{sx:{flexShrink:0},children:i})]}),(0,r.jsx)(s.Z,{sx:{mt:2},children:"string"===typeof c?(0,r.jsx)(l.Z,{href:c,target:"_blank",variant:"body2",children:c}):c.map((function(e){return(0,r.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}p.propTypes={links:a().array,action:a().node,heading:a().string.isRequired,moreLink:a().oneOfType([a().string,a().array]),sx:a().object}},97591:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var r=i(85893),n=i(11496),a=i(87357),s=i(27948),o=i(66242),l=i(78445),u=i(44267),c=i(58260),m=i(57325),d=i(78545),p=i(96559),h=i(28729),f=(0,n.ZP)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function g(){return(0,r.jsx)(d.Z,{title:"Components: Scrollbar",children:(0,r.jsxs)(f,{children:[(0,r.jsx)(a.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(h.Z,{heading:"Scrollbar",links:[{name:"Components",href:c.ko.components},{name:"Scrollbar"}]})})}),(0,r.jsx)(s.Z,{children:(0,r.jsxs)(a.Z,{sx:{alignItems:"flex-start",display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{title:"Vertical"}),(0,r.jsx)(u.Z,{sx:{height:320},children:(0,r.jsx)(p.Z,{children:"Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum."})})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{title:"Horizontal"}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(p.Z,{children:(0,r.jsx)(a.Z,{sx:{width:"200%"},children:"Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum."})})})]})]})})]})})}g.getLayout=function(e){return(0,r.jsx)(m.Z,{variant:"main",children:e})}}},function(e){e.O(0,[5434,2847,2392,7325,9774,2888,179],(function(){return t=30975,e(e.s=t);var t}));var t=e.O();_N_E=t}]);