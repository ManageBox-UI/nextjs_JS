(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5142],{5067:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/badge",function(){return t(18425)}])},66723:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(85893),i=t(45697),o=t.n(i),l=t(41664),a=t(15861),c=t(12963),s=t(87357),d=t(50122);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function f(e){var n=e.links,t=e.activeLast,i=void 0!==t&&t,o=h(e,["links","activeLast"]),l=n[n.length-1].name,d=n.map((function(e){return(0,r.jsx)(x,{link:e},e.name)})),f=n.map((function(e){return(0,r.jsx)("div",{children:e.name!==l?(0,r.jsx)(x,{link:e}):(0,r.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return(0,r.jsx)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}({separator:(0,r.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o,{children:i?d:f}))}function x(e){var n=e.link,t=n.href,i=void 0===t?"":t,o=n.name,a=n.icon;return(0,r.jsx)(l.default,{href:i,passHref:!0,children:(0,r.jsxs)(d.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,r.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),o]},o)})}f.propTypes={activeLast:o().bool,links:o().array.isRequired},x.propTypes={link:o().shape({href:o().string,icon:o().any,name:o().string})}},28729:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(85893),i=t(45697),o=t.n(i),l=t(87357),a=t(15861),c=t(50122),s=t(66723);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function f(e){var n=e.links,t=e.action,i=e.heading,o=e.moreLink,d=void 0===o?[]:o,f=e.sx,x=h(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(l.Z,{sx:u({mb:5},f),children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,r.jsx)(s.Z,u({links:n},x))]}),t&&(0,r.jsx)(l.Z,{sx:{flexShrink:0},children:t})]}),(0,r.jsx)(l.Z,{sx:{mt:2},children:"string"===typeof d?(0,r.jsx)(c.Z,{href:d,target:"_blank",variant:"body2",children:d}):d.map((function(e){return(0,r.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}f.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},18425:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(85893),i=t(11496),o=t(87357),l=t(27948),a=t(71236),c=t(15861),s=t(78672),d=t(58260),u=t(31896),h=t(78545),f=t(21238),x=t(28729),g=t(63552),p=(0,i.ZP)("div")((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));function j(){return(0,r.jsx)(h.Z,{title:"Components: Badge",children:(0,r.jsxs)(p,{children:[(0,r.jsx)(o.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(x.Z,{heading:"Badge",links:[{name:"Components",href:d.ko.components},{name:"Badge"}],moreLink:"https://mui.com/components/badges"})})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(s.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,r.jsxs)(g.g,{title:"Basic",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,r.jsx)(a.Z,{badgeContent:4,children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(a.Z,{badgeContent:4,color:"primary",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(a.Z,{badgeContent:4,color:"secondary",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(a.Z,{badgeContent:4,color:"info",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(a.Z,{badgeContent:4,color:"success",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(a.Z,{badgeContent:4,color:"warning",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(a.Z,{badgeContent:4,color:"error",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})})]}),(0,r.jsxs)(g.g,{title:"Maximum value",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,r.jsx)(a.Z,{badgeContent:99,color:"error",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(a.Z,{badgeContent:100,color:"error",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(a.Z,{badgeContent:1e3,max:999,color:"error",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})})]}),(0,r.jsxs)(g.g,{title:"Dot badge",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,r.jsx)(a.Z,{color:"info",variant:"dot",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(a.Z,{color:"info",variant:"dot",children:(0,r.jsx)(c.Z,{children:"Typography"})})]}),(0,r.jsxs)(g.g,{title:"Badge overlap",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,r.jsx)(a.Z,{color:"info",badgeContent:" ",children:(0,r.jsx)(o.Z,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),(0,r.jsx)(a.Z,{color:"info",badgeContent:" ",variant:"dot",children:(0,r.jsx)(o.Z,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),(0,r.jsx)(a.Z,{color:"info",overlap:"circular",badgeContent:" ",children:(0,r.jsx)(o.Z,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})}),(0,r.jsx)(a.Z,{color:"info",overlap:"circular",badgeContent:" ",variant:"dot",children:(0,r.jsx)(o.Z,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})})]})]})})]})})}j.getLayout=function(e){return(0,r.jsx)(u.Z,{variant:"main",children:e})}},63552:function(e,n,t){"use strict";t.d(n,{g:function(){return f},_:function(){return x}});var r=t(85893),i=t(45697),o=t.n(i),l=t(41796),a=t(55113),c=t(78445),s=t(87357),d=t(15861);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function f(e){var n=e.title,t=e.sx,i=e.children;return(0,r.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,l.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,r.jsx)(c.Z,{title:n}),(0,r.jsx)(s.Z,{sx:h({p:5,minHeight:180},t),children:i})]})}function x(e){var n=e.title;return(0,r.jsx)(d.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}f.propTypes={children:o().any.isRequired,sx:o().object,title:o().string},x.propTypes={title:o().string.isRequired}}},function(e){e.O(0,[3843,8607,4525,3852,2392,1896,9774,2888,179],(function(){return n=5067,e(e.s=n);var n}));var n=e.O();_N_E=n}]);