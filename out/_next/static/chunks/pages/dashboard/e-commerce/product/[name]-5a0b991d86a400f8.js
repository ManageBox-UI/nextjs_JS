(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1725],{99621:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/e-commerce/product/[name]",function(){return r(30369)}])},916:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(85893),i=r(45697),o=r.n(i),a=r(67294),c=r(92879),s=r(2734),l=r(41796),u=r(42287),d=r(15861);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}function h(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function x(){var e=(0,s.Z)(),t="rtl"===e.direction,r=e.palette.grey[600].replace("#",""),i=function(e){return"url(https://api.iconify.design/carbon/".concat(e,".svg?color=%23").concat(r,"&width=").concat(32,"&height=").concat(32,")")},o=function(t){return{opacity:1,alignItems:"center",display:"inline-flex",justifyContent:"center",backgroundImage:"unset",backgroundColor:"transparent",transition:e.transitions.create("opacity"),"&:before":{display:"block",width:32,height:32,content:i(t)},"&:hover":{opacity:.72}}};return(0,n.jsx)(u.Z,{styles:{"& .ReactModalPortal":{"& .ril__outer":{backgroundColor:(0,l.Fq)(e.palette.grey[900],.96)},"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:40,height:40,justifyContent:"center",marginLeft:e.spacing(2)}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":o("zoom-in"),"&.ril__zoomOutButton":o("zoom-out"),"&.ril__closeButton":o("close")},"& .ril__navButtons":{padding:e.spacing(3),"&.ril__navButtonPrev":f({right:"auto",left:e.spacing(2)},o(t?"arrow-right":"arrow-left")),"&.ril__navButtonNext":f({left:"auto",right:e.spacing(2)},o(t?"arrow-left":"arrow-right"))}}}})}function m(e){var t=e.images,r=e.photoIndex,i=e.setPhotoIndex,o=e.isOpen,s=h(e,["images","photoIndex","setPhotoIndex","isOpen"]);(0,a.useEffect)((function(){document.body.style.overflow=o?"hidden":""}),[o]);var l=[(0,n.jsx)(d.Z,{variant:"subtitle2",children:"".concat(r+1," / ").concat(t.length)})];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),o&&(0,n.jsx)(c.Z,f({animationDuration:160,nextSrc:t[(r+1)%t.length],prevSrc:t[(r+t.length-1)%t.length],onMovePrevRequest:function(){return i((r+t.length-1)%t.length)},onMoveNextRequest:function(){return i((r+1)%t.length)},toolbarButtons:l,reactModalStyle:{overlay:{zIndex:9999}}},s))]})}m.propTypes={images:o().array.isRequired,photoIndex:o().number,setPhotoIndex:o().func,isOpen:o().bool}},14502:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(85893),i=r(50197),o=r(34768),a=r(41664),c=r(11496),s=r(15861),l=r(67720),u=r(50122),d=r(84575);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}var x=(0,c.ZP)("div")((function(e){var t,r=e.theme,n="light"===r.palette.mode;return{"& ul, & ol":h({},r.typography.body1,{paddingLeft:r.spacing(5),"& li":{lineHeight:2}}),"& blockquote":(t={lineHeight:1.5,fontSize:"1.5em",margin:"40px auto",position:"relative",fontFamily:"Georgia, serif",padding:r.spacing(3,3,3,8),borderRadius:2*Number(r.shape.borderRadius),backgroundColor:r.palette.background.neutral,color:"".concat(r.palette.text.secondary," !important")},p(t,r.breakpoints.up("md"),{width:"80%"}),p(t,"& p, & span",{marginBottom:"0 !important",fontSize:"inherit !important",fontFamily:"Georgia, serif !important",color:"".concat(r.palette.text.secondary," !important")}),p(t,"&:before",{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:r.palette.text.disabled}),t),"& pre, & pre > code":{fontSize:16,overflowX:"auto",whiteSpace:"pre",padding:r.spacing(2),color:r.palette.common.white,borderRadius:r.shape.borderRadius,backgroundColor:n?r.palette.grey[900]:r.palette.grey[50016]},"& code":{fontSize:14,borderRadius:4,whiteSpace:"pre",padding:r.spacing(.2,.5),color:r.palette.warning[n?"darker":"lighter"],backgroundColor:r.palette.warning[n?"lighter":"darker"],"&.hljs":{padding:0,backgroundColor:"transparent"}}}}));function m(e){var t=f({},e);return(0,n.jsx)(x,{children:(0,n.jsx)(i.D,h({rehypePlugins:[o.Z],components:g},t))})}var g={h1:function(e){var t=f({},e);return(0,n.jsx)(s.Z,h({variant:"h1"},t))},h2:function(e){var t=f({},e);return(0,n.jsx)(s.Z,h({variant:"h2"},t))},h3:function(e){var t=f({},e);return(0,n.jsx)(s.Z,h({variant:"h3"},t))},h4:function(e){var t=f({},e);return(0,n.jsx)(s.Z,h({variant:"h4"},t))},h5:function(e){var t=f({},e);return(0,n.jsx)(s.Z,h({variant:"h5"},t))},h6:function(e){var t=f({},e);return(0,n.jsx)(s.Z,h({variant:"h6"},t))},hr:function(e){var t=f({},e);return(0,n.jsx)(l.Z,h({sx:{my:3}},t))},img:function(e){var t=f({},e);return(0,n.jsx)(d.Z,h({alt:t.alt,ratio:"16/9",sx:{borderRadius:2,my:5}},t))},a:function(e){var t=f({},e);return t.href.includes("http")?(0,n.jsx)(u.Z,h({target:"_blank",rel:"noopener"},t)):(0,n.jsx)(a.default,{href:t.href,passHref:!0,children:(0,n.jsx)(u.Z,h({},t,{children:t.children}))})}}},67594:function(e,t,r){"use strict";r.d(t,{cU:function(){return z},i5:function(){return w},A0:function(){return d}});var n=r(85893),i=r(11496),o=r(87357);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}var s=(0,i.ZP)(o.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":c({opacity:1},e.rounded&&{"& .dotActive":{width:16,borderRadius:6}})}})),l=(0,i.ZP)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),u=(0,i.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function d(e){var t=null===e||void 0===e?void 0:e.color,r=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s,c({rounded:r,component:"ul"},e,{children:t}))})},customPaging:function(){return(0,n.jsx)(l,{children:(0,n.jsx)(u,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var p=r(45697),f=r.n(p),h=r(2734),x=r(26447),m=r(21238),g=r(52500);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}function y(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var j=(0,i.ZP)(g.w_,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,r=e.theme;return v({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:r.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(r.shape.borderRadius),color:r.palette.common.white,backgroundColor:r.palette.grey[900],"&:hover":{opacity:1,color:r.palette.common.white,backgroundColor:r.palette.grey[900]}})}));function w(e){var t=e.filled,r=void 0!==t&&t,i=e.customIcon,a=e.onNext,c=e.onPrevious,s=e.children,l=y(e,["filled","customIcon","onNext","onPrevious","children"]),u="rtl"===(0,h.Z)().direction,d={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return s?(0,n.jsxs)(o.Z,v({},l,{children:[(0,n.jsx)(o.Z,{className:"arrow left",sx:v({},d,{left:0}),children:(0,n.jsx)(j,{filled:r,onClick:c,children:Z(i,u)})}),s,(0,n.jsx)(o.Z,{className:"arrow right",sx:v({},d,{right:0}),children:(0,n.jsx)(j,{filled:r,onClick:a,children:O(i,u)})})]})):(0,n.jsxs)(x.Z,v({direction:"row",spacing:1},l,{children:[(0,n.jsx)(j,{className:"arrow left",filled:r,onClick:c,children:Z(i,u)}),(0,n.jsx)(j,{className:"arrow right",filled:r,onClick:a,children:O(i,u)})]}))}w.propTypes={children:f().node,customIcon:f().oneOfType([f().element,f().string]),filled:f().bool,onNext:f().func,onPrevious:f().func};var Z=function(e,t){return(0,n.jsx)(m.Z,{icon:e||"eva:arrow-right-fill",sx:v({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},O=function(e,t){return(0,n.jsx)(m.Z,{icon:e||"eva:arrow-right-fill",sx:v({width:20,height:20},t&&{transform:" scaleX(-1)"})})},P=r(41796),k=r(93946),S=r(15861);function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){C(e,t,r[t])}))}return e}function R(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var _=(0,i.ZP)(o.Z)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:(0,P.Fq)(t.palette.grey[900],.48)}})),T=(0,i.ZP)(k.Z)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function z(e){var t=e.index,r=e.total,i=e.onNext,o=e.onPrevious,a=e.customIcon,c=R(e,["index","total","onNext","onPrevious","customIcon"]),s="rtl"===(0,h.Z)().direction;return(0,n.jsxs)(_,I({},c,{children:[(0,n.jsx)(T,{size:"small",onClick:o,children:q(a,s)}),(0,n.jsxs)(S.Z,{variant:"subtitle2",children:[t+1,"/",r]}),(0,n.jsx)(T,{size:"small",onClick:i,children:E(a,s)})]}))}z.propTypes={customIcon:f().oneOfType([f().element,f().string]),index:f().number,onNext:f().func,onPrevious:f().func,total:f().number};var q=function(e,t){return(0,n.jsx)(m.Z,{icon:e||"eva:arrow-right-fill",sx:I({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},E=function(e,t){return(0,n.jsx)(m.Z,{icon:e||"eva:arrow-right-fill",sx:I({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},95878:function(e,t,r){"use strict";r.d(t,{dS:function(){return b},ZQ:function(){return p},tR:function(){return P}});var n=r(85893),i=r(45697),o=r.n(i),a=r(11496),c=r(41796),s=r(87357),l=r(15861),u=(0,a.ZP)(s.Z)((function(){return{display:"flex",alignItems:"center",justifyContent:"flex-end"}})),d=(0,a.ZP)("div")((function(e){var t=e.theme;return{marginLeft:-4,borderRadius:"50%",width:t.spacing(2),height:t.spacing(2),border:"solid 2px ".concat(t.palette.background.paper),boxShadow:"inset -1px 1px 2px ".concat((0,c.Fq)(t.palette.common.black,.24))}}));function p(e){var t=e.colors,r=e.limit,i=void 0===r?3:r,o=e.sx,a=t.slice(0,i),c=t.length-i;return(0,n.jsxs)(u,{component:"span",sx:o,children:[a.map((function(e,t){return(0,n.jsx)(d,{sx:{bgcolor:e}},e+t)})),t.length>i&&(0,n.jsx)(l.Z,{variant:"subtitle2",children:"+".concat(c)})]})}p.propTypes={colors:o().arrayOf(o().string),limit:o().number,sx:o().object};var f=r(69368),h=r(21238);function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){x(e,t,r[t])}))}return e}function g(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function b(e){var t=e.colors,r=e.onChangeColor,i=e.sx,o=g(e,["colors","onChangeColor","sx"]);return(0,n.jsx)(s.Z,{sx:i,children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,n.jsx)(f.Z,m({size:"small",value:e,color:"default",onChange:function(){return r(e)},icon:(0,n.jsx)(v,{sx:m({},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)}})}),checkedIcon:(0,n.jsx)(v,{sx:m({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat(e.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:e,"&:hover":{opacity:.72}}},o),e)}))})}function v(e){var t=e.sx,r=g(e,["sx"]);return(0,n.jsx)(s.Z,m({sx:m({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},t)},r,{children:(0,n.jsx)(h.Z,{icon:"eva:checkmark-fill"})}))}b.propTypes={colors:o().arrayOf(o().string),onChangeColor:o().func,sx:o().object},v.propTypes={sx:o().object};var y=r(68061),j=r(49033);function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}function O(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function P(e){var t=e.colors,r=O(e,["colors"]);return(0,n.jsx)(y.Z,Z({row:!0},r,{children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,n.jsx)(j.Z,{value:e,color:"default",icon:(0,n.jsx)(k,{sx:Z({},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)}})}),checkedIcon:(0,n.jsx)(k,{sx:Z({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat(e.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:e,"&:hover":{opacity:.72}}},e)}))}))}function k(e){var t=e.sx,r=O(e,["sx"]);return(0,n.jsx)(s.Z,Z({sx:Z({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},t)},r,{children:(0,n.jsx)(h.Z,{icon:"eva:checkmark-fill"})}))}P.propTypes={colors:o().arrayOf(o().string)},k.propTypes={sx:o().object}},30369:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Fe}});var n=r(85893),i=r(49933),o=r(67294),a=r(11163),c=r(11496),s=r(41796),l=r(27948),u=r(66242),d=r(86886),p=r(87357),f=r(15861),h=r(40044),x=r(67720),m=r(45670),g=r(66568),b=r(55050),v=r(96242),y=r(16669),j=r(58260),w=r(73264),Z=r(57325),O=r(78545),P=r(21238),k=r(14502),S=r(85248),C=r(28729),I=r(45697),R=r.n(I),_=r(46066),T=r(84575),z=r(916),q=r(67594);function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){E(e,t,r[t])}))}return e}var F=64,D=(0,c.ZP)("div")((function(e){return{"& .slick-slide":{float:"rtl"===e.theme.direction?"right":"left","&:focus":{outline:"none"}}}}));function B(e){var t=e.product,r=(0,o.useState)(!1),i=r[0],a=r[1],c=(0,o.useState)(0),l=c[0],u=c[1],d=(0,o.useState)(0),f=d[0],h=d[1],x=(0,o.useState)(),m=x[0],g=x[1],b=(0,o.useState)(),v=b[0],y=b[1],j=(0,o.useRef)(null),w=(0,o.useRef)(null),Z=t.images.map((function(e){return e})),O={dots:!1,arrows:!1,slidesToShow:1,draggable:!1,slidesToScroll:1,adaptiveHeight:!0,beforeChange:function(e,t){return h(t)}},P={dots:!1,arrows:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:t.images.length>3?3:t.images.length};(0,o.useEffect)((function(){j.current&&g(j.current),w.current&&y(w.current)}),[]);return(0,n.jsxs)(D,{children:[(0,n.jsx)(p.Z,{sx:{p:1},children:(0,n.jsxs)(p.Z,{sx:{zIndex:0,borderRadius:2,overflow:"hidden",position:"relative"},children:[(0,n.jsx)(_.Z,N({},O,{asNavFor:v,ref:j,children:t.images.map((function(e){return(0,n.jsx)(T.Z,{alt:"large image",src:e,ratio:"1/1",onClick:function(){return function(e){var t=Z.findIndex((function(t){return t===e}));a(!0),u(t)}(e)},sx:{cursor:"zoom-in"}},e)}))})),(0,n.jsx)(q.cU,{index:f,total:t.images.length,onNext:function(){var e;null===(e=w.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=w.current)||void 0===e||e.slickPrev()}})]})}),(0,n.jsx)(p.Z,{sx:N({my:3,mx:"auto","& .slick-current .isActive":{opacity:1}},1===t.images.length&&{maxWidth:80},2===t.images.length&&{maxWidth:160},3===t.images.length&&{maxWidth:240},4===t.images.length&&{maxWidth:240},t.images.length>=5&&{maxWidth:384},t.images.length>2&&{position:"relative","&:before, &:after":{top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:128/3,backgroundImage:function(e){return"linear-gradient(to left, ".concat((0,s.Fq)(e.palette.background.paper,0)," 0%, ").concat(e.palette.background.paper," 100%)")}},"&:after":{right:0,transform:"scaleX(-1)"}}),children:(0,n.jsx)(_.Z,N({},P,{asNavFor:m,ref:w,children:t.images.map((function(e,t){return(0,n.jsx)(p.Z,{sx:{px:.75},children:(0,n.jsx)(T.Z,{disabledEffect:!0,alt:"thumb image",src:e,sx:N({width:F,height:F,borderRadius:1.5,cursor:"pointer"},f===t&&{border:function(e){return"solid 3px ".concat(e.palette.primary.main)}})})},e)}))}))}),(0,n.jsx)(z.Z,{images:Z,mainSrc:Z[l],photoIndex:l,setPhotoIndex:u,isOpen:i,onCloseRequest:function(){return a(!1)}})]})}B.propTypes={product:R().shape({images:R().arrayOf(R().string)})};var W=r(57922),A=r(34051),G=r.n(A),X=r(74231),Q=r(87536),L=r(95496),H=r(26447),M=r(91440),V=r(56815),U=r(11057),Y=r(31812),K=r(38897);function $(e,t,r,n,i,o,a){try{var c=e[o](a),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,i)}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){J(e,t,r[t])}))}return e}function te(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var re=(0,c.ZP)("div")((function(e){var t=e.theme;return{margin:t.spacing(3),padding:t.spacing(3),borderRadius:2*Number(t.shape.borderRadius),backgroundColor:t.palette.background.neutral}}));function ne(e){var t,r=e.onClose,i=e.id,o=te(e,["onClose","id"]),a=X.Ry().shape({rating:X.nK().required("Rating is required"),review:X.Z_().required("Review is required"),name:X.Z_().required("Name is required"),email:X.Z_().email("Email must be a valid email address").required("Email is required")}),c=(0,Q.cI)({resolver:(0,L.X)(a),defaultValues:{rating:null,review:"",name:"",email:""}}),s=c.reset,l=c.control,u=c.handleSubmit,d=c.formState,p=d.errors,h=d.isSubmitting,x=function(){var e,t=(e=G().mark((function e(){return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:s(),r(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){$(o,n,i,a,c,"next",e)}function c(e){$(o,n,i,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,n.jsxs)(re,ee({},o,{id:i,children:[(0,n.jsx)(f.Z,{variant:"subtitle1",gutterBottom:!0,children:"Add Review"}),(0,n.jsx)(K.RV,{methods:c,onSubmit:u(x),children:(0,n.jsxs)(H.Z,{spacing:3,children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(H.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",spacing:1.5,children:[(0,n.jsx)(f.Z,{variant:"body2",children:"Your review about this product:"}),(0,n.jsx)(Q.Qr,{name:"rating",control:l,render:function(e){var t=e.field;return(0,n.jsx)(M.Z,ee({},t,{value:Number(t.value)}))}})]}),!!p.rating&&(0,n.jsxs)(V.Z,{error:!0,children:[" ",null===(t=p.rating)||void 0===t?void 0:t.message]})]}),(0,n.jsx)(K.au,{name:"review",label:"Review *",multiline:!0,rows:3}),(0,n.jsx)(K.au,{name:"name",label:"Name *"}),(0,n.jsx)(K.au,{name:"email",label:"Email *"}),(0,n.jsxs)(H.Z,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[(0,n.jsx)(U.Z,{color:"inherit",variant:"outlined",onClick:function(){r(),s()},children:"Cancel"}),(0,n.jsx)(Y.Z,{type:"submit",variant:"contained",loading:h,children:"Post review"})]})]})})]}))}ne.propTypes={onClose:R().func,id:R().string};var ie=r(78462),oe=r(10633),ae=r(19294),ce=r(87952),se=r(77071),le=r(52281);function ue(e){var t=e.product.reviews;return(0,n.jsxs)(p.Z,{sx:{pt:3,px:2,pb:5},children:[(0,n.jsx)(ie.Z,{disablePadding:!0,children:t.map((function(e){return(0,n.jsx)(de,{review:e},e.id)}))}),(0,n.jsx)(p.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,n.jsx)(oe.Z,{count:10,color:"primary"})})]})}function de(e){var t=e.review,r=(0,o.useState)(!1),i=r[0],a=r[1],c=t.name,s=t.rating,l=t.comment,u=t.helpful,d=t.postedAt,h=t.avatarUrl,x=t.isPurchased;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(ae.ZP,{disableGutters:!0,sx:{mb:5,alignItems:"flex-start",flexDirection:{xs:"column",sm:"row"}},children:[(0,n.jsxs)(p.Z,{sx:{mr:2,display:"flex",alignItems:"center",mb:{xs:2,sm:0},minWidth:{xs:160,md:240},textAlign:{sm:"center"},flexDirection:{sm:"column"}},children:[(0,n.jsx)(ce.Z,{src:h,sx:{mr:{xs:2,sm:0},mb:{sm:2},width:{md:64},height:{md:64}}}),(0,n.jsxs)("div",{children:[(0,n.jsx)(f.Z,{variant:"subtitle2",noWrap:!0,children:c}),(0,n.jsx)(f.Z,{variant:"caption",sx:{color:"text.secondary"},noWrap:!0,children:(0,se.Mu)(d)})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(M.Z,{size:"small",value:s,precision:.1,readOnly:!0}),x&&(0,n.jsxs)(f.Z,{variant:"caption",sx:{my:1,display:"flex",alignItems:"center",color:"primary.main"},children:[(0,n.jsx)(P.Z,{icon:"ic:round-verified",width:16,height:16}),"\xa0Verified purchase"]}),(0,n.jsx)(f.Z,{variant:"body2",children:l}),(0,n.jsxs)(p.Z,{sx:{mt:1,display:"flex",flexWrap:"wrap",alignItems:"center"},children:[!i&&(0,n.jsx)(f.Z,{variant:"body2",sx:{mr:1},children:"Was this review helpful to you?"}),(0,n.jsxs)(U.Z,{size:"small",color:"inherit",startIcon:(0,n.jsx)(P.Z,{icon:i?"eva:checkmark-fill":"ic:round-thumb-up"}),onClick:function(){a((function(e){return!e}))},children:[i?"Helpful":"Thank","(",(0,le.v1)(i?u+1:u),")"]})]})]})]})})}ue.propTypes={product:R().object},de.propTypes={review:R().object};var pe=r(73303),fe=r.n(pe),he=r(50122),xe=r(81458);var me=(0,c.ZP)(M.Z)((function(e){return{marginBottom:e.theme.spacing(1)}})),ge=(0,c.ZP)(d.ZP)((function(e){var t,r,n,i=e.theme;return{padding:i.spacing(3),display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center","&:nth-of-type(2)":(t={},r=i.breakpoints.up("md"),n={borderLeft:"solid 1px ".concat(i.palette.divider),borderRight:"solid 1px ".concat(i.palette.divider)},r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t)}}));function be(e){var t=e.product,r=e.onOpen,i=t.totalRating,o=t.totalReview,a=t.ratings,c=fe()(a,(function(e){return e.starCount}));return(0,n.jsxs)(d.ZP,{container:!0,children:[(0,n.jsxs)(ge,{item:!0,xs:12,md:4,children:[(0,n.jsx)(f.Z,{variant:"subtitle1",gutterBottom:!0,children:"Average rating"}),(0,n.jsxs)(f.Z,{variant:"h2",gutterBottom:!0,sx:{color:"error.main"},children:[i,"/5"]}),(0,n.jsx)(me,{readOnly:!0,value:i,precision:.1}),(0,n.jsxs)(f.Z,{variant:"body2",sx:{color:"text.secondary"},children:["(",(0,le.v1)(o),"\xa0reviews)"]})]}),(0,n.jsx)(ge,{item:!0,xs:12,md:4,children:(0,n.jsx)(H.Z,{spacing:1.5,sx:{width:1},children:a.slice(0).reverse().map((function(e){return(0,n.jsx)(ve,{star:e,total:c},e.name)}))})}),(0,n.jsx)(ge,{item:!0,xs:12,md:4,children:(0,n.jsx)(he.Z,{href:"#move_add_review",underline:"none",children:(0,n.jsx)(U.Z,{size:"large",onClick:r,variant:"outlined",startIcon:(0,n.jsx)(P.Z,{icon:"eva:edit-2-fill"}),children:"Write your review"})})})]})}function ve(e){var t=e.star,r=e.total,i=t.name,o=t.starCount,a=t.reviewCount;return(0,n.jsxs)(H.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[(0,n.jsx)(f.Z,{variant:"subtitle2",children:i}),(0,n.jsx)(xe.Z,{variant:"determinate",value:o/r*100,sx:{mx:2,flexGrow:1,bgcolor:"divider"}}),(0,n.jsx)(f.Z,{variant:"body2",sx:{color:"text.secondary",minWidth:64,textAlign:"right"},children:(0,le.v1)(a)})]})}function ye(e){var t=e.product,r=(0,o.useState)(!1),i=r[0],a=r[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(be,{product:t,onOpen:function(){a((function(e){return!e}))}}),(0,n.jsx)(x.Z,{}),(0,n.jsxs)(W.Z,{in:i,children:[(0,n.jsx)(ne,{onClose:function(){a(!1)},id:"move_add_review"}),(0,n.jsx)(x.Z,{})]}),(0,n.jsx)(ue,{product:t})]})}be.propTypes={product:R().object,onOpen:R().func},ve.propTypes={star:R().object,total:R().number},ye.propTypes={product:R().object};var je=r(2734),we=r(93946),Ze=r(81772),Oe=r(92294),Pe=r(95878);function ke(e,t,r,n,i,o,a){try{var c=e[o](a),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,i)}function Se(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){ke(o,n,i,a,c,"next",e)}function c(e){ke(o,n,i,a,c,"throw",e)}a(void 0)}))}}function Ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Ce(e,t,r[t])}))}return e}function Re(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var _e=(0,c.ZP)("div")((function(e){var t=e.theme;return Ce({padding:t.spacing(3)},t.breakpoints.up(1368),{padding:t.spacing(5,8)})}));function Te(e){var t=e.cart,r=e.product,o=e.onAddCart,c=e.onGotoStep,s=Re(e,["cart","product","onAddCart","onGotoStep"]),l=(0,je.Z)(),u=(0,a.useRouter)().push,d=r.id,h=r.name,m=r.sizes,g=r.price,b=r.cover,v=r.status,y=r.colors,w=r.available,Z=r.priceSale,O=r.totalRating,k=r.totalReview,S=r.inventoryType,C=t.map((function(e){return e.id})).includes(d),I=t.filter((function(e){return e.id===d})).map((function(e){return e.quantity}))[0]>=w,R={id:d,name:h,cover:b,available:w,price:g,color:y[0],size:m[4],quantity:w<1?0:1},_=(0,Q.cI)({defaultValues:R}),T=_.watch,z=_.control,q=_.setValue,E=_.handleSubmit,N=T(),F=function(){var e=Se(G().mark((function e(t){return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{C||o(Ie({},t,{subtotal:t.price*t.quantity})),c(0),u(j.vB.eCommerce.checkout)}catch(r){console.error(r)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Se(G().mark((function e(){return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o(Ie({},N,{subtotal:N.price*N.quantity}))}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,n.jsx)(_e,Ie({},s,{children:(0,n.jsxs)(K.RV,{methods:_,onSubmit:E(F),children:[(0,n.jsx)(Ze.Z,{variant:"light"===l.palette.mode?"ghost":"filled",color:"in_stock"===S?"success":"error",sx:{textTransform:"uppercase"},children:(0,i.G)(S||"")}),(0,n.jsx)(f.Z,{variant:"overline",sx:{mt:2,mb:1,display:"block",color:"sale"===v?"error.main":"info.main"},children:v}),(0,n.jsx)(f.Z,{variant:"h5",paragraph:!0,children:h}),(0,n.jsxs)(H.Z,{direction:"row",alignItems:"center",spacing:1,sx:{mb:2},children:[(0,n.jsx)(M.Z,{value:O,precision:.1,readOnly:!0}),(0,n.jsxs)(f.Z,{variant:"body2",sx:{color:"text.secondary"},children:["(",(0,le.v1)(k),"reviews)"]})]}),(0,n.jsxs)(f.Z,{variant:"h4",sx:{mb:3},children:[(0,n.jsx)(p.Z,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through"},children:Z&&(0,le.e_)(Z)}),"\xa0",(0,le.e_)(g)]}),(0,n.jsx)(x.Z,{sx:{borderStyle:"dashed"}}),(0,n.jsxs)(H.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{my:3},children:[(0,n.jsx)(f.Z,{variant:"subtitle1",sx:{mt:.5},children:"Color"}),(0,n.jsx)(Q.Qr,{name:"color",control:z,render:function(e){var t=e.field;return(0,n.jsx)(Pe.tR,{colors:y,value:t.value,onChange:t.onChange,sx:Ie({},y.length>4&&{maxWidth:144,justifyContent:"flex-end"})})}})]}),(0,n.jsxs)(H.Z,{direction:"row",justifyContent:"space-between",sx:{mb:3},children:[(0,n.jsx)(f.Z,{variant:"subtitle1",sx:{mt:.5},children:"Size"}),(0,n.jsx)(K.Cc,{name:"size",size:"small",fullWidth:!1,FormHelperTextProps:{sx:{textAlign:"right",margin:0,mt:1}},helperText:(0,n.jsx)(he.Z,{underline:"always",color:"text.secondary",children:"Size Chart"}),children:m.map((function(e){return(0,n.jsx)("option",{value:e,children:e},e)}))})]}),(0,n.jsxs)(H.Z,{direction:"row",justifyContent:"space-between",sx:{mb:3},children:[(0,n.jsx)(f.Z,{variant:"subtitle1",sx:{mt:.5},children:"Quantity"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(ze,{name:"quantity",quantity:N.quantity,available:w,onIncrementQuantity:function(){return q("quantity",N.quantity+1)},onDecrementQuantity:function(){return q("quantity",N.quantity-1)}}),(0,n.jsxs)(f.Z,{variant:"caption",component:"div",sx:{mt:1,textAlign:"right",color:"text.secondary"},children:["Available: ",w]})]})]}),(0,n.jsx)(x.Z,{sx:{borderStyle:"dashed"}}),(0,n.jsxs)(H.Z,{direction:"row",spacing:2,sx:{mt:5},children:[(0,n.jsx)(U.Z,{fullWidth:!0,disabled:I,size:"large",color:"warning",variant:"contained",startIcon:(0,n.jsx)(P.Z,{icon:"ic:round-add-shopping-cart"}),onClick:D,sx:{whiteSpace:"nowrap"},children:"Add to Cart"}),(0,n.jsx)(U.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Buy Now"})]}),(0,n.jsx)(H.Z,{alignItems:"center",sx:{mt:3},children:(0,n.jsx)(Oe.Z,{initialColor:!0})})]})}))}function ze(e){var t=e.available,r=e.quantity,i=e.onIncrementQuantity,o=e.onDecrementQuantity;return(0,n.jsxs)(p.Z,{sx:{py:.5,px:.75,border:1,lineHeight:0,borderRadius:1,display:"flex",alignItems:"center",borderColor:"grey.50032"},children:[(0,n.jsx)(we.Z,{size:"small",color:"inherit",disabled:r<=1,onClick:o,children:(0,n.jsx)(P.Z,{icon:"eva:minus-fill",width:14,height:14})}),(0,n.jsx)(f.Z,{variant:"body2",component:"span",sx:{width:40,textAlign:"center"},children:r}),(0,n.jsx)(we.Z,{size:"small",color:"inherit",disabled:r>=t,onClick:i,children:(0,n.jsx)(P.Z,{icon:"eva:plus-fill",width:14,height:14})})]})}Te.propTypes={cart:R().array,onAddCart:R().func,onGotoStep:R().func,product:R().shape({available:R().number,colors:R().arrayOf(R().string),cover:R().string,id:R().string,inventoryType:R().string,name:R().string,price:R().number,priceSale:R().number,sizes:R().arrayOf(R().string),status:R().string,totalRating:R().number,totalReview:R().number})},ze.propTypes={available:R().number,quantity:R().number,onIncrementQuantity:R().func,onDecrementQuantity:R().func};var qe=r(2709),Ee=[{title:"100% Original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"ic:round-verified"},{title:"10 Day Replacement",description:"Marshmallow biscuit donut drag\xe9e fruitcake wafer.",icon:"eva:clock-fill"},{title:"Year Warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"ic:round-verified-user"}],Ne=(0,c.ZP)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),justifyContent:"center",height:t.spacing(8),marginBottom:t.spacing(3),color:t.palette.primary.main,backgroundColor:"".concat((0,s.Fq)(t.palette.primary.main,.08))}}));function Fe(){var e=(0,w.Z)().themeStretch,t=(0,v.I0)(),r=(0,o.useState)("1"),c=r[0],s=r[1],Z=(0,a.useRouter)().query.name,I=(0,v.v9)((function(e){return e.product})),R=I.product,_=I.error,T=I.checkout;(0,o.useEffect)((function(){t((0,y.wv)(Z))}),[t,Z]);return(0,n.jsx)(O.Z,{title:"Ecommerce: Product Details",children:(0,n.jsxs)(l.Z,{maxWidth:!e&&"lg",children:[(0,n.jsx)(C.Z,{heading:"Product Details",links:[{name:"Dashboard",href:j.vB.root},{name:"E-Commerce",href:j.vB.eCommerce.root},{name:"Shop",href:j.vB.eCommerce.shop},{name:(0,i.G)(Z)}]}),(0,n.jsx)(qe.Z,{}),R&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Z,{children:(0,n.jsxs)(d.ZP,{container:!0,children:[(0,n.jsx)(d.ZP,{item:!0,xs:12,md:6,lg:7,children:(0,n.jsx)(B,{product:R})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,md:6,lg:5,children:(0,n.jsx)(Te,{product:R,cart:T.cart,onAddCart:function(e){t((0,y.Z5)(e))},onGotoStep:function(e){t((0,y.$w)(e))}})})]})}),(0,n.jsx)(d.ZP,{container:!0,sx:{my:8},children:Ee.map((function(e){return(0,n.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,n.jsxs)(p.Z,{sx:{my:2,mx:"auto",maxWidth:280,textAlign:"center"},children:[(0,n.jsx)(Ne,{children:(0,n.jsx)(P.Z,{icon:e.icon,width:36,height:36})}),(0,n.jsx)(f.Z,{variant:"subtitle1",gutterBottom:!0,children:e.title}),(0,n.jsx)(f.Z,{sx:{color:"text.secondary"},children:e.description})]})},e.title)}))}),(0,n.jsx)(u.Z,{children:(0,n.jsxs)(m.ZP,{value:c,children:[(0,n.jsx)(p.Z,{sx:{px:3,bgcolor:"background.neutral"},children:(0,n.jsxs)(g.Z,{onChange:function(e,t){return s(t)},children:[(0,n.jsx)(h.Z,{disableRipple:!0,value:"1",label:"Description"}),(0,n.jsx)(h.Z,{disableRipple:!0,value:"2",label:"Review (".concat(R.reviews.length,")"),sx:{"& .MuiTab-wrapper":{whiteSpace:"nowrap"}}})]})}),(0,n.jsx)(x.Z,{}),(0,n.jsx)(b.Z,{value:"1",children:(0,n.jsx)(p.Z,{sx:{p:3},children:(0,n.jsx)(k.Z,{children:R.description})})}),(0,n.jsx)(b.Z,{value:"2",children:(0,n.jsx)(ye,{product:R})})]})})]}),!R&&(0,n.jsx)(S.Ti,{}),_&&(0,n.jsx)(f.Z,{variant:"h6",children:"404 Product not found"})]})})}Fe.getLayout=function(e){return(0,n.jsx)(Z.Z,{children:e})}},2709:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(85893),i=r(12297),o=r.n(i),a=r(41664),c=r(11496),s=r(71236),l=r(96242),u=r(58260),d=r(21238),p=(0,c.ZP)("div")((function(e){var t=e.theme;return{zIndex:999,right:0,display:"flex",cursor:"pointer",position:"fixed",alignItems:"center",top:t.spacing(16),height:t.spacing(5),paddingLeft:t.spacing(2),paddingRight:t.spacing(2),paddingTop:t.spacing(1.25),boxShadow:t.customShadows.z20,color:t.palette.text.primary,backgroundColor:t.palette.background.paper,borderTopLeftRadius:2*Number(t.shape.borderRadius),borderBottomLeftRadius:2*Number(t.shape.borderRadius),transition:t.transitions.create("opacity"),"&:hover":{opacity:.72}}}));function f(){var e=(0,l.v9)((function(e){return e.product})).checkout,t=o()(e.cart.map((function(e){return e.quantity})));return(0,n.jsx)(a.default,{href:u.vB.eCommerce.checkout,passHref:!0,children:(0,n.jsx)(p,{children:(0,n.jsx)(s.Z,{showZero:!0,badgeContent:t,color:"error",max:99,children:(0,n.jsx)(d.Z,{icon:"eva:shopping-cart-fill",width:24,height:24})})})})}}},function(e){e.O(0,[5434,2847,1033,8756,285,1323,6066,1440,2879,633,2811,2392,7325,5519,9774,2888,179],(function(){return t=99621,e(e.s=t);var t}));var t=e.O();_N_E=t}]);