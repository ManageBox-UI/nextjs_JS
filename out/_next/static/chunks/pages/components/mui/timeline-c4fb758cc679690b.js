(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3641],{71301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/timeline",function(){return t(50124)}])},66723:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(85893),i=t(45697),o=t.n(i),l=t(41664),s=t(15861),c=t(12963),a=t(87357),u=t(50122);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function h(e){var n=e.links,t=e.activeLast,i=void 0!==t&&t,o=x(e,["links","activeLast"]),l=n[n.length-1].name,u=n.map((function(e){return(0,r.jsx)(p,{link:e},e.name)})),h=n.map((function(e){return(0,r.jsx)("div",{children:e.name!==l?(0,r.jsx)(p,{link:e}):(0,r.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return(0,r.jsx)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}({separator:(0,r.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o,{children:i?u:h}))}function p(e){var n=e.link,t=n.href,i=void 0===t?"":t,o=n.name,s=n.icon;return(0,r.jsx)(l.default,{href:i,passHref:!0,children:(0,r.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,r.jsx)(a.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),o]},o)})}h.propTypes={activeLast:o().bool,links:o().array.isRequired},p.propTypes={link:o().shape({href:o().string,icon:o().any,name:o().string})}},28729:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(85893),i=t(45697),o=t.n(i),l=t(87357),s=t(15861),c=t(50122),a=t(66723);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function x(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function h(e){var n=e.links,t=e.action,i=e.heading,o=e.moreLink,u=void 0===o?[]:o,h=e.sx,p=x(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(l.Z,{sx:d({mb:5},h),children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,r.jsx)(a.Z,d({links:n},p))]}),t&&(0,r.jsx)(l.Z,{sx:{flexShrink:0},children:t})]}),(0,r.jsx)(l.Z,{sx:{mt:2},children:"string"===typeof u?(0,r.jsx)(c.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return(0,r.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}h.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},50124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r=t(85893),i=t(11496),o=t(87357),l=t(27948),s=t(15861),c=t(55113),a=t(63366),u=t(87462),d=t(67294),x=t(86010),h=t(33616),p=t(98216),f=t(27192),j=t(43129),m=t(87848);const y=["className"],Z=(0,i.ZP)(s.Z,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`position${(0,p.Z)(t.position)}`]]}})((({ownerState:e})=>(0,u.Z)({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},"left"===e.position&&{textAlign:"left"}))),g=d.forwardRef((function(e,n){const t=(0,h.Z)({props:e,name:"MuiTimelineOppositeContent"}),{className:i}=t,o=(0,a.Z)(t,y),{position:l}=d.useContext(j.Z),s=(0,u.Z)({},t,{position:l||"left"}),c=(e=>{const{position:n,classes:t}=e,r={root:["root",`position${(0,p.Z)(n)}`]};return(0,f.Z)(r,m.W,t)})(s);return(0,r.jsx)(Z,(0,u.Z)({component:"div",className:(0,x.Z)(c.root,i),ownerState:s,ref:n},o))}));g.muiName="TimelineOppositeContent";var b=g,v=t(78672),k=t(36599),O=t(36270),w=t(9601),P=t(17494),S=t(51221),T=t(72162),_=t(58260),E=t(57325),R=t(78545),C=t(21238),M=t(28729),N=t(63552),L=[{key:1,title:"Default",des:"Morbi mattis ullamcorper",time:"09:30 am",icon:(0,r.jsx)(C.Z,{icon:"eva:folder-add-fill",width:24,height:24})},{key:2,title:"Primary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"primary",icon:(0,r.jsx)(C.Z,{icon:"eva:image-2-fill",width:24,height:24})},{key:3,title:"Secondary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"secondary",icon:(0,r.jsx)(C.Z,{icon:"eva:pantone-fill",width:24,height:24})},{key:4,title:"Info",des:"Morbi mattis ullamcorper",time:"10:30 am",color:"info",icon:(0,r.jsx)(C.Z,{icon:"eva:tv-fill",width:24,height:24})},{key:5,title:"Success",des:"Morbi mattis ullamcorper",time:"11:00 am",color:"success",icon:(0,r.jsx)(C.Z,{icon:"eva:activity-fill",width:24,height:24})},{key:6,title:"Warning",des:"Morbi mattis ullamcorper",time:"11:30 am",color:"warning",icon:(0,r.jsx)(C.Z,{icon:"eva:cube-fill",width:24,height:24})},{key:7,title:"Error",des:"Morbi mattis ullamcorper",time:"12:00 am",color:"error",icon:(0,r.jsx)(C.Z,{icon:"eva:film-fill",width:24,height:24})}],q=(0,i.ZP)("div")((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));function D(){var e=L[L.length-1].key,n=L.slice(L.length-3);return(0,r.jsx)(R.Z,{title:"Components: Timeline",children:(0,r.jsxs)(q,{children:[(0,r.jsx)(o.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(M.Z,{heading:"Timeline",links:[{name:"Components",href:_.ko.components},{name:"Timeline"}],moreLink:"https://mui.com/components/timeline"})})}),(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(v.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,r.jsx)(N.g,{title:"Default",children:(0,r.jsx)(k.Z,{children:n.map((function(n){return(0,r.jsxs)(O.Z,{children:[(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(P.Z,{}),e===n.key?null:(0,r.jsx)(S.Z,{})]}),(0,r.jsx)(T.Z,{children:n.title})]},n.key)}))})}),(0,r.jsx)(N.g,{title:"Right",children:(0,r.jsx)(k.Z,{position:"right",children:n.map((function(n){return(0,r.jsxs)(O.Z,{children:[(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(P.Z,{}),e===n.key?null:(0,r.jsx)(S.Z,{})]}),(0,r.jsx)(T.Z,{children:n.title})]},n.key)}))})}),(0,r.jsx)(N.g,{title:"Alternating",children:(0,r.jsx)(k.Z,{position:"alternate",children:n.map((function(n){return(0,r.jsxs)(O.Z,{children:[(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(P.Z,{}),e===n.key?null:(0,r.jsx)(S.Z,{})]}),(0,r.jsx)(T.Z,{children:n.title})]},n.key)}))})}),(0,r.jsx)(N.g,{title:"Filled",children:(0,r.jsx)(k.Z,{position:"alternate",children:L.map((function(n){return(0,r.jsxs)(O.Z,{children:[(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(P.Z,{color:n.color}),e===n.key?null:(0,r.jsx)(S.Z,{})]}),(0,r.jsx)(T.Z,{children:n.title})]},n.key)}))})}),(0,r.jsx)(N.g,{title:"Outlined",children:(0,r.jsx)(k.Z,{position:"alternate",children:L.map((function(n){return(0,r.jsxs)(O.Z,{children:[(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(P.Z,{variant:"outlined",color:n.color}),e===n.key?null:(0,r.jsx)(S.Z,{})]}),(0,r.jsx)(T.Z,{children:n.title})]},n.key)}))})}),(0,r.jsx)(N.g,{title:"Opposite content",children:(0,r.jsx)(k.Z,{position:"alternate",children:L.map((function(n){return(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(b,{children:(0,r.jsx)(s.Z,{sx:{color:"text.secondary"},children:n.time})}),(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(P.Z,{color:n.color}),e===n.key?null:(0,r.jsx)(S.Z,{})]}),(0,r.jsx)(T.Z,{children:(0,r.jsxs)(s.Z,{children:[" ",n.title]})})]},n.key)}))})})]}),(0,r.jsx)(N.g,{title:"Customized",children:(0,r.jsx)(k.Z,{position:"alternate",children:L.map((function(e){return(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(b,{children:(0,r.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.time})}),(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(P.Z,{color:e.color,children:e.icon}),(0,r.jsx)(S.Z,{})]}),(0,r.jsx)(T.Z,{children:(0,r.jsxs)(c.Z,{sx:{p:3,bgcolor:"grey.50012"},children:[(0,r.jsx)(s.Z,{variant:"subtitle2",children:e.title}),(0,r.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.des})]})})]},e.key)}))})})]})]})})}D.getLayout=function(e){return(0,r.jsx)(E.Z,{variant:"main",children:e})}},63552:function(e,n,t){"use strict";t.d(n,{g:function(){return h},_:function(){return p}});var r=t(85893),i=t(45697),o=t.n(i),l=t(41796),s=t(55113),c=t(78445),a=t(87357),u=t(15861);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function h(e){var n=e.title,t=e.sx,i=e.children;return(0,r.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,l.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,r.jsx)(c.Z,{title:n}),(0,r.jsx)(a.Z,{sx:x({p:5,minHeight:180},t),children:i})]})}function p(e){var n=e.title;return(0,r.jsx)(u.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}h.propTypes={children:o().any.isRequired,sx:o().object,title:o().string},p.propTypes={title:o().string.isRequired}}},function(e){e.O(0,[5434,3350,4525,3140,2392,7325,9774,2888,179],(function(){return n=71301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);