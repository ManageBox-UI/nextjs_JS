(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3708],{90421:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/tree-view",function(){return t(7517)}])},66723:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(85893),i=t(45697),l=t.n(i),o=t(41664),s=t(15861),a=t(12963),c=t(87357),d=t(50122);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function h(e){var n=e.links,t=e.activeLast,i=void 0!==t&&t,l=f(e,["links","activeLast"]),o=n[n.length-1].name,d=n.map((function(e){return(0,r.jsx)(b,{link:e},e.name)})),h=n.map((function(e){return(0,r.jsx)("div",{children:e.name!==o?(0,r.jsx)(b,{link:e}):(0,r.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:o})},e.name)}));return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}({separator:(0,r.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l,{children:i?d:h}))}function b(e){var n=e.link,t=n.href,i=void 0===t?"":t,l=n.name,s=n.icon;return(0,r.jsx)(o.default,{href:i,passHref:!0,children:(0,r.jsxs)(d.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,r.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),l]},l)})}h.propTypes={activeLast:l().bool,links:l().array.isRequired},b.propTypes={link:l().shape({href:l().string,icon:l().any,name:l().string})}},28729:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(85893),i=t(45697),l=t.n(i),o=t(87357),s=t(15861),a=t(50122),c=t(66723);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function f(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function h(e){var n=e.links,t=e.action,i=e.heading,l=e.moreLink,d=void 0===l?[]:l,h=e.sx,b=f(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(o.Z,{sx:u({mb:5},h),children:[(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,r.jsx)(c.Z,u({links:n},b))]}),t&&(0,r.jsx)(o.Z,{sx:{flexShrink:0},children:t})]}),(0,r.jsx)(o.Z,{sx:{mt:2},children:"string"===typeof d?(0,r.jsx)(a.Z,{href:d,target:"_blank",variant:"body2",children:d}):d.map((function(e){return(0,r.jsx)(a.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}h.propTypes={links:l().array,action:l().node,heading:l().string.isRequired,moreLink:l().oneOfType([l().string,l().array]),sx:l().object}},7517:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(85893),i=t(11496),l=t(41796),o=t(87357),s=t(27948),a=t(4707),c=t(2783),d=t(4020),u=t(58260),f=t(57325),h=t(78545),b=t(21238),x=t(28729),p=t(63552);function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var g=(0,i.ZP)("div")((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}})),m=(0,i.ZP)(a.Z)({height:240,flexGrow:1,maxWidth:400}),y=(0,i.ZP)((function(e){return(0,r.jsx)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){j(e,n,t[n])}))}return e}({},e))}))((function(e){var n,t=e.theme;return j(n={},"& .".concat(d.Z.iconContainer),{"& .close":{opacity:.3}}),j(n,"& .".concat(d.Z.group),{marginLeft:15,paddingLeft:18,borderLeft:"1px dashed ".concat((0,l.Fq)(t.palette.text.primary,.4))}),n}));function v(){return(0,r.jsx)(h.Z,{title:"Components: Tree View",children:(0,r.jsxs)(g,{children:[(0,r.jsx)(o.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(x.Z,{heading:"Tree View",links:[{name:"Components",href:u.ko.components},{name:"Tree View"}],moreLink:"https://mui.com/components/tree-view"})})}),(0,r.jsx)(s.Z,{children:(0,r.jsxs)(o.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"}},children:[(0,r.jsx)(p.g,{title:"Basic",children:(0,r.jsxs)(m,{defaultCollapseIcon:(0,r.jsx)(b.Z,{icon:"eva:chevron-down-fill",width:20,height:20}),defaultExpandIcon:(0,r.jsx)(b.Z,{icon:"eva:chevron-right-fill",width:20,height:20}),defaultEndIcon:null,children:[(0,r.jsxs)(c.Z,{nodeId:"1",label:"Applications",children:[(0,r.jsx)(c.Z,{nodeId:"2",label:"Calendar"}),(0,r.jsx)(c.Z,{nodeId:"3",label:"Chrome"}),(0,r.jsx)(c.Z,{nodeId:"4",label:"Webstorm"})]}),(0,r.jsxs)(c.Z,{nodeId:"5",label:"Documents",children:[(0,r.jsx)(c.Z,{nodeId:"10",label:"OSS"}),(0,r.jsx)(c.Z,{nodeId:"6",label:"Material-UI",children:(0,r.jsxs)(c.Z,{nodeId:"7",label:"src",children:[(0,r.jsx)(c.Z,{nodeId:"8",label:"index.js"}),(0,r.jsx)(c.Z,{nodeId:"9",label:"tree-view.js"})]})})]})]})}),(0,r.jsx)(p.g,{title:"Multi Select",children:(0,r.jsxs)(m,{multiSelect:!0,defaultCollapseIcon:(0,r.jsx)(b.Z,{icon:"eva:chevron-down-fill",width:20,height:20}),defaultExpandIcon:(0,r.jsx)(b.Z,{icon:"eva:chevron-right-fill",width:20,height:20}),defaultEndIcon:null,children:[(0,r.jsxs)(c.Z,{nodeId:"1",label:"Applications",children:[(0,r.jsx)(c.Z,{nodeId:"2",label:"Calendar"}),(0,r.jsx)(c.Z,{nodeId:"3",label:"Chrome"}),(0,r.jsx)(c.Z,{nodeId:"4",label:"Webstorm"})]}),(0,r.jsx)(c.Z,{nodeId:"5",label:"Documents",children:(0,r.jsx)(c.Z,{nodeId:"6",label:"Material-UI",children:(0,r.jsxs)(c.Z,{nodeId:"7",label:"src",children:[(0,r.jsx)(c.Z,{nodeId:"8",label:"index.js"}),(0,r.jsx)(c.Z,{nodeId:"9",label:"tree-view.js"})]})})})]})}),(0,r.jsx)(p.g,{title:"Customization",children:(0,r.jsx)(m,{defaultExpanded:["1"],children:(0,r.jsxs)(y,{nodeId:"1",label:"Main",children:[(0,r.jsx)(y,{nodeId:"2",label:"Hello"}),(0,r.jsxs)(y,{nodeId:"3",label:"Subtree with children",children:[(0,r.jsx)(y,{nodeId:"6",label:"Hello"}),(0,r.jsxs)(y,{nodeId:"7",label:"Sub-subtree with children",children:[(0,r.jsx)(y,{nodeId:"9",label:"Child 1"}),(0,r.jsx)(y,{nodeId:"10",label:"Child 2"}),(0,r.jsx)(y,{nodeId:"11",label:"Child 3"})]}),(0,r.jsx)(y,{nodeId:"8",label:"Hello"})]}),(0,r.jsx)(y,{nodeId:"4",label:"World"}),(0,r.jsx)(y,{nodeId:"5",label:"Something something"})]})})})]})})]})})}v.getLayout=function(e){return(0,r.jsx)(f.Z,{variant:"main",children:e})}},63552:function(e,n,t){"use strict";t.d(n,{g:function(){return h},_:function(){return b}});var r=t(85893),i=t(45697),l=t.n(i),o=t(41796),s=t(55113),a=t(78445),c=t(87357),d=t(15861);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function h(e){var n=e.title,t=e.sx,i=e.children;return(0,r.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,o.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,r.jsx)(a.Z,{title:n}),(0,r.jsx)(c.Z,{sx:f({p:5,minHeight:180},t),children:i})]})}function b(e){var n=e.title;return(0,r.jsx)(d.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}h.propTypes={children:l().any.isRequired,sx:l().object,title:l().string},b.propTypes={title:l().string.isRequired}}},function(e){e.O(0,[5434,3350,3752,2392,7325,9774,2888,179],(function(){return n=90421,e(e.s=n);var n}));var n=e.O();_N_E=n}]);