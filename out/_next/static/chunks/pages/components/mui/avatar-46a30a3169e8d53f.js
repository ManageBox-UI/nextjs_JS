(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4013],{4850:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/avatar",function(){return r(28065)}])},66723:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(85893),a=r(45697),i=r.n(a),s=r(41664),o=r(15861),l=r(12963),c=r(87357),p=r(50122);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function x(e){var t=e.links,r=e.activeLast,a=void 0!==r&&r,i=u(e,["links","activeLast"]),s=t[t.length-1].name,p=t.map((function(e){return(0,n.jsx)(h,{link:e},e.name)})),x=t.map((function(e){return(0,n.jsx)("div",{children:e.name!==s?(0,n.jsx)(h,{link:e}):(0,n.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:s})},e.name)}));return(0,n.jsx)(l.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({separator:(0,n.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},i,{children:a?p:x}))}function h(e){var t=e.link,r=t.href,a=void 0===r?"":r,i=t.name,o=t.icon;return(0,n.jsx)(s.default,{href:a,passHref:!0,children:(0,n.jsxs)(p.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&(0,n.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),i]},i)})}x.propTypes={activeLast:i().bool,links:i().array.isRequired},h.propTypes={link:i().shape({href:i().string,icon:i().any,name:i().string})}},28729:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(85893),a=r(45697),i=r.n(a),s=r(87357),o=r(15861),l=r(50122),c=r(66723);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function x(e){var t=e.links,r=e.action,a=e.heading,i=e.moreLink,p=void 0===i?[]:i,x=e.sx,h=u(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(s.Z,{sx:d({mb:5},x),children:[(0,n.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(s.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:a}),(0,n.jsx)(c.Z,d({links:t},h))]}),r&&(0,n.jsx)(s.Z,{sx:{flexShrink:0},children:r})]}),(0,n.jsx)(s.Z,{sx:{mt:2},children:"string"===typeof p?(0,n.jsx)(l.Z,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return(0,n.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}x.propTypes={links:i().array,action:i().node,heading:i().string.isRequired,moreLink:i().oneOfType([i().string,i().array]),sx:i().object}},28065:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(85893),a=r(11496),i=r(2734),s=r(87357),o=r(27948),l=r(51107),c=r(71236),p=r(78672),d=r(58260),u=r(57325),x=r(78545),h=r(68012),f=r(21238),v=r(19835),m=r(28729),g=r(63552),j=(0,a.ZP)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function y(){var e=(0,i.Z)();return(0,n.jsx)(x.Z,{title:"Components: Avatar",children:(0,n.jsxs)(j,{children:[(0,n.jsx)(s.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,n.jsx)(o.Z,{children:(0,n.jsx)(m.Z,{heading:"Avatar",links:[{name:"Components",href:d.ko.components},{name:"Avatar"}],moreLink:"https://mui.com/components/avatars"})})}),(0,n.jsx)(o.Z,{children:(0,n.jsxs)(p.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,n.jsx)(g.g,{title:"Image avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[1,2,3,4,5].map((function(e,t){return(0,n.jsx)(h.Z,{alt:"Remy Sharp",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_".concat(t+1,".jpg")},t)}))}),(0,n.jsxs)(g.g,{title:"Letter avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,n.jsx)(h.Z,{children:"H"}),(0,n.jsx)(h.Z,{color:"primary",children:"N"}),(0,n.jsx)(h.Z,{color:"info",children:"OP"}),(0,n.jsx)(h.Z,{color:"success",children:"CB"}),(0,n.jsx)(h.Z,{color:"warning",children:"ZP"}),(0,n.jsx)(h.Z,{color:"error",children:"OH"})]}),(0,n.jsxs)(g.g,{title:"Icon avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,n.jsx)(h.Z,{color:"primary",children:(0,n.jsx)(f.Z,{icon:"eva:folder-add-outline",width:24,height:24})}),(0,n.jsx)(h.Z,{color:"info",children:(0,n.jsx)(f.Z,{icon:"eva:file-text-outline",width:24,height:24})}),(0,n.jsx)(h.Z,{color:"success",children:(0,n.jsx)(f.Z,{icon:"eva:bell-off-outline",width:24,height:24})})]}),(0,n.jsxs)(g.g,{title:"Variant",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,n.jsx)(h.Z,{variant:"square",color:"primary",children:(0,n.jsx)(f.Z,{icon:"eva:folder-add-outline",width:24,height:24})}),(0,n.jsx)(h.Z,{variant:"rounded",color:"info",children:(0,n.jsx)(f.Z,{icon:"eva:file-text-outline",width:24,height:24})})]}),(0,n.jsx)(g.g,{title:"Grouped",sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsxs)(l.Z,{max:4,children:[(0,n.jsx)(h.Z,{alt:"Remy Sharp",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg"}),(0,n.jsx)(h.Z,{color:"info",children:"OP"}),(0,n.jsx)(h.Z,{alt:"Cindy Baker",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg"}),(0,n.jsx)(h.Z,{alt:"Agnes Walker",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg"}),(0,n.jsx)(h.Z,{alt:"Trevor Henderson",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg"}),(0,n.jsx)(h.Z,{alt:"Trevor Henderson",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg"}),(0,n.jsx)(h.Z,{alt:"Trevor Henderson",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg"})]})}),(0,n.jsxs)(g.g,{title:"With badge",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,n.jsx)(c.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,n.jsx)(h.Z,{alt:"Travis Howard",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg",sx:{width:24,height:24,border:"solid 2px ".concat(e.palette.background.paper)}}),children:(0,n.jsx)(h.Z,{alt:"Travis Howard",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg"})}),["online","away","busy","invisible"].map((function(e,t){return(0,n.jsxs)(s.Z,{sx:{position:"relative"},children:[(0,n.jsx)(h.Z,{alt:"Travis Howard",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_".concat(t+7,".jpg")}),(0,n.jsx)(v.Z,{status:e,sx:{right:2,bottom:2,position:"absolute"}})]},e)}))]}),(0,n.jsx)(g.g,{title:"Sizes",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[24,32,48,56,64,80,128].map((function(e,t){return(0,n.jsx)(h.Z,{alt:"Travis Howard",src:"https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_".concat(t+4,".jpg"),sx:{width:e,height:e}},e)}))})]})})]})})}y.getLayout=function(e){return(0,n.jsx)(u.Z,{variant:"main",children:e})}},63552:function(e,t,r){"use strict";r.d(t,{g:function(){return x},_:function(){return h}});var n=r(85893),a=r(45697),i=r.n(a),s=r(41796),o=r(55113),l=r(78445),c=r(87357),p=r(15861);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function x(e){var t=e.title,r=e.sx,a=e.children;return(0,n.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,s.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,n.jsx)(l.Z,{title:t}),(0,n.jsx)(c.Z,{sx:u({p:5,minHeight:180},r),children:a})]})}function h(e){var t=e.title;return(0,n.jsx)(p.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}x.propTypes={children:i().any.isRequired,sx:i().object,title:i().string},h.propTypes={title:i().string.isRequired}}},function(e){e.O(0,[5434,6886,4525,6590,2392,7325,9774,2888,179],(function(){return t=4850,e(e.s=t);var t}));var t=e.O();_N_E=t}]);