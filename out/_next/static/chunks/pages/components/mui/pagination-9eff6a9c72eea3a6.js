(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7972],{25727:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/pagination",function(){return t(75228)}])},66723:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r=t(85893),i=t(45697),o=t.n(i),s=t(41664),a=t(15861),c=t(12963),l=t(87357),u=t(50122);function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function f(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function p(n){var e=n.links,t=n.activeLast,i=void 0!==t&&t,o=f(n,["links","activeLast"]),s=e[e.length-1].name,u=e.map((function(n){return(0,r.jsx)(x,{link:n},n.name)})),p=e.map((function(n){return(0,r.jsx)("div",{children:n.name!==s?(0,r.jsx)(x,{link:n}):(0,r.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:s})},n.name)}));return(0,r.jsx)(c.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){d(n,e,t[e])}))}return n}({separator:(0,r.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o,{children:i?u:p}))}function x(n){var e=n.link,t=e.href,i=void 0===t?"":t,o=e.name,a=e.icon;return(0,r.jsx)(s.default,{href:i,passHref:!0,children:(0,r.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,r.jsx)(l.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),o]},o)})}p.propTypes={activeLast:o().bool,links:o().array.isRequired},x.propTypes={link:o().shape({href:o().string,icon:o().any,name:o().string})}},28729:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r=t(85893),i=t(45697),o=t.n(i),s=t(87357),a=t(15861),c=t(50122),l=t(66723);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){u(n,e,t[e])}))}return n}function f(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function p(n){var e=n.links,t=n.action,i=n.heading,o=n.moreLink,u=void 0===o?[]:o,p=n.sx,x=f(n,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(s.Z,{sx:d({mb:5},p),children:[(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(s.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,r.jsx)(l.Z,d({links:e},x))]}),t&&(0,r.jsx)(s.Z,{sx:{flexShrink:0},children:t})]}),(0,r.jsx)(s.Z,{sx:{mt:2},children:"string"===typeof u?(0,r.jsx)(c.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(n){return(0,r.jsx)(c.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",sx:{display:"table"},children:n},n)}))})]})}p.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},75228:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var r=t(85893),i=t(67294),o=t(11496),s=t(87357),a=t(27948),c=t(10633),l=t(36125),u=t(78672),d=t(58260),f=t(57325),p=t(78545),x=t(28729),g=t(63552),h=(0,o.ZP)("div")((function(n){var e=n.theme;return{paddingTop:e.spacing(11),paddingBottom:e.spacing(15)}})),j={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{my:1}};function b(){var n=(0,i.useState)(2),e=n[0],t=n[1],o=(0,i.useState)(10),f=o[0],b=o[1];return(0,r.jsx)(p.Z,{title:"Components: Pagination",children:(0,r.jsxs)(h,{children:[(0,r.jsx)(s.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(x.Z,{heading:"Pagination",links:[{name:"Components",href:d.ko.components},{name:"Pagination"}],moreLink:"https://mui.com/components/pagination"})})}),(0,r.jsx)(a.Z,{children:(0,r.jsxs)(u.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,r.jsxs)(g.g,{title:"Basic",sx:j,children:[(0,r.jsx)(c.Z,{count:10}),(0,r.jsx)(c.Z,{count:10,color:"primary"}),(0,r.jsx)(c.Z,{count:10,disabled:!0})]}),(0,r.jsxs)(g.g,{title:"Outlined",sx:j,children:[(0,r.jsx)(c.Z,{count:10,variant:"outlined"}),(0,r.jsx)(c.Z,{count:10,variant:"outlined",color:"primary"}),(0,r.jsx)(c.Z,{count:10,variant:"outlined",disabled:!0})]}),(0,r.jsxs)(g.g,{title:"Rounded",sx:j,children:[(0,r.jsx)(c.Z,{count:10,shape:"rounded"}),(0,r.jsx)(c.Z,{count:10,variant:"outlined",shape:"rounded"}),(0,r.jsx)(c.Z,{count:10,shape:"rounded",color:"primary"}),(0,r.jsx)(c.Z,{count:10,variant:"outlined",shape:"rounded",color:"primary"})]}),(0,r.jsxs)(g.g,{title:"Size",sx:j,children:[(0,r.jsx)(c.Z,{count:10,size:"small"}),(0,r.jsx)(c.Z,{count:10}),(0,r.jsx)(c.Z,{count:10,size:"large"})]}),(0,r.jsxs)(g.g,{title:"Buttons",sx:j,children:[(0,r.jsx)(c.Z,{count:10,showFirstButton:!0,showLastButton:!0}),(0,r.jsx)(c.Z,{count:10,hidePrevButton:!0,hideNextButton:!0})]}),(0,r.jsxs)(g.g,{title:"Ranges",sx:j,children:[(0,r.jsx)(c.Z,{count:11,defaultPage:6,siblingCount:0}),(0,r.jsx)(c.Z,{count:11,defaultPage:6}),(0,r.jsx)(c.Z,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),(0,r.jsx)(c.Z,{count:11,defaultPage:6,boundaryCount:2})]}),(0,r.jsx)(g.g,{title:"Table",sx:j,children:(0,r.jsx)(l.Z,{component:"div",count:100,page:e,onPageChange:function(n,e){t(e)},rowsPerPage:f,onRowsPerPageChange:function(n){b(parseInt(n.target.value,10)),t(0)}})})]})})]})})}b.getLayout=function(n){return(0,r.jsx)(f.Z,{variant:"main",children:n})}},63552:function(n,e,t){"use strict";t.d(e,{g:function(){return p},_:function(){return x}});var r=t(85893),i=t(45697),o=t.n(i),s=t(41796),a=t(55113),c=t(78445),l=t(87357),u=t(15861);function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){d(n,e,t[e])}))}return n}function p(n){var e=n.title,t=n.sx,i=n.children;return(0,r.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return(0,s.Fq)(n.palette.grey[500],.04)}},children:[e&&(0,r.jsx)(c.Z,{title:e}),(0,r.jsx)(l.Z,{sx:f({p:5,minHeight:180},t),children:i})]})}function x(n){var e=n.title;return(0,r.jsx)(u.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}p.propTypes={children:o().any.isRequired,sx:o().object,title:o().string},x.propTypes={title:o().string.isRequired}}},function(n){n.O(0,[5434,2847,4525,633,9535,2392,7325,9774,2888,179],(function(){return e=25727,n(n.s=e);var e}));var e=n.O();_N_E=e}]);