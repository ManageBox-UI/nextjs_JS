(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2287],{78445:function(n,r,e){"use strict";e.d(r,{Z:function(){return y}});var t=e(63366),i=e(87462),o=e(67294),a=e(86010),c=e(27192),s=e(15861),l=e(33616),u=e(11496),d=e(28979);function f(n){return(0,d.Z)("MuiCardHeader",n)}var h=(0,e(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),p=e(85893);const x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(n,r)=>(0,i.Z)({[`& .${h.title}`]:r.title,[`& .${h.subheader}`]:r.subheader},r.root)})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(n,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),m=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(n,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(n,r)=>r.content})({flex:"1 1 auto"});var y=o.forwardRef((function(n,r){const e=(0,l.Z)({props:n,name:"MuiCardHeader"}),{action:o,avatar:u,className:d,component:h="div",disableTypography:y=!1,subheader:j,subheaderTypographyProps:Z,title:k,titleTypographyProps:w}=e,O=(0,t.Z)(e,x),C=(0,i.Z)({},e,{component:h,disableTypography:y}),T=(n=>{const{classes:r}=n;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},f,r)})(C);let P=k;null==P||P.type===s.Z||y||(P=(0,p.jsx)(s.Z,(0,i.Z)({variant:u?"body2":"h5",className:T.title,component:"span",display:"block"},w,{children:P})));let S=j;return null==S||S.type===s.Z||y||(S=(0,p.jsx)(s.Z,(0,i.Z)({variant:u?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},Z,{children:S}))),(0,p.jsxs)(v,(0,i.Z)({className:(0,a.Z)(T.root,d),as:h,ref:r,ownerState:C},O,{children:[u&&(0,p.jsx)(g,{className:T.avatar,ownerState:C,children:u}),(0,p.jsxs)(b,{className:T.content,ownerState:C,children:[P,S]}),o&&(0,p.jsx)(m,{className:T.action,ownerState:C,children:o})]}))}))},2982:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/extra/snackbar",function(){return e(81018)}])},66723:function(n,r,e){"use strict";e.d(r,{Z:function(){return h}});var t=e(85893),i=e(45697),o=e.n(i),a=e(41664),c=e(15861),s=e(12963),l=e(87357),u=e(50122);function d(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function f(n,r){if(null==n)return{};var e,t,i=function(n,r){if(null==n)return{};var e,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)e=o[t],r.indexOf(e)>=0||(i[e]=n[e]);return i}(n,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)e=o[t],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function h(n){var r=n.links,e=n.activeLast,i=void 0!==e&&e,o=f(n,["links","activeLast"]),a=r[r.length-1].name,u=r.map((function(n){return(0,t.jsx)(p,{link:n},n.name)})),h=r.map((function(n){return(0,t.jsx)("div",{children:n.name!==a?(0,t.jsx)(p,{link:n}):(0,t.jsx)(c.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:a})},n.name)}));return(0,t.jsx)(s.Z,function(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),t.forEach((function(r){d(n,r,e[r])}))}return n}({separator:(0,t.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o,{children:i?u:h}))}function p(n){var r=n.link,e=r.href,i=void 0===e?"":e,o=r.name,c=r.icon;return(0,t.jsx)(a.default,{href:i,passHref:!0,children:(0,t.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,t.jsx)(l.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),o]},o)})}h.propTypes={activeLast:o().bool,links:o().array.isRequired},p.propTypes={link:o().shape({href:o().string,icon:o().any,name:o().string})}},28729:function(n,r,e){"use strict";e.d(r,{Z:function(){return h}});var t=e(85893),i=e(45697),o=e.n(i),a=e(87357),c=e(15861),s=e(50122),l=e(66723);function u(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function d(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),t.forEach((function(r){u(n,r,e[r])}))}return n}function f(n,r){if(null==n)return{};var e,t,i=function(n,r){if(null==n)return{};var e,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)e=o[t],r.indexOf(e)>=0||(i[e]=n[e]);return i}(n,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)e=o[t],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function h(n){var r=n.links,e=n.action,i=n.heading,o=n.moreLink,u=void 0===o?[]:o,h=n.sx,p=f(n,["links","action","heading","moreLink","sx"]);return(0,t.jsxs)(a.Z,{sx:d({mb:5},h),children:[(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,t.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,t.jsx)(l.Z,d({links:r},p))]}),e&&(0,t.jsx)(a.Z,{sx:{flexShrink:0},children:e})]}),(0,t.jsx)(a.Z,{sx:{mt:2},children:"string"===typeof u?(0,t.jsx)(s.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(n){return(0,t.jsx)(s.Z,{noWrap:!0,href:n,variant:"body2",target:"_blank",sx:{display:"table"},children:n},n)}))})]})}h.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},81018:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return g}});var t=e(85893),i=e(73400),o=e(11496),a=e(11057),c=e(87357),s=e(27948),l=e(78672),u=e(58260),d=e(31896),f=e(78545),h=e(28729),p=e(63552),x={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},v=(0,o.ZP)("div")((function(n){var r=n.theme;return{paddingTop:r.spacing(11),paddingBottom:r.spacing(15)}}));function g(){var n=(0,i.Ds)(),r=n.enqueueSnackbar,e=n.closeSnackbar,o=function(n,i){r("This is an ".concat(n),{variant:n,anchorOrigin:i,action:function(r){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Z,{size:"small",color:"default"!==n?n:"primary",onClick:function(){console.log("I belong to snackbar with key ".concat(r))},children:"Alert"}),(0,t.jsx)(a.Z,{size:"small",color:"inherit",onClick:function(){return e(r)},children:"Dismiss"})]})}})};return(0,t.jsx)(f.Z,{title:"Components: Snackbar",children:(0,t.jsxs)(v,{children:[(0,t.jsx)(c.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(n){return"light"===n.palette.mode?"grey.200":"grey.800"}},children:(0,t.jsx)(s.Z,{children:(0,t.jsx)(h.Z,{heading:"Snackbar",links:[{name:"Components",href:u.ko.components},{name:"Snackbar"}],moreLink:["https://mui.com/components/snackbars","https://www.iamhosseindhv.com/notistack"]})})}),(0,t.jsx)(s.Z,{children:(0,t.jsxs)(l.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,t.jsxs)(p.g,{title:"Simple",sx:x,children:[(0,t.jsx)(a.Z,{variant:"contained",color:"inherit",onClick:function(){return r("This is an default",{variant:"default",action:function(){}})},children:"Default"}),(0,t.jsx)(a.Z,{variant:"contained",color:"info",onClick:function(){return r("This is an info",{variant:"info",action:function(){}})},children:"Info"}),(0,t.jsx)(a.Z,{variant:"contained",color:"success",onClick:function(){return r("This is an success",{action:function(){}})},children:"Success"}),(0,t.jsx)(a.Z,{variant:"contained",color:"warning",onClick:function(){return r("This is an warning",{variant:"warning",action:function(){}})},children:"Warning"}),(0,t.jsx)(a.Z,{variant:"contained",color:"error",onClick:function(){return r("This is an error",{variant:"error",action:function(){}})},children:"Error"})]}),(0,t.jsxs)(p.g,{title:"With Close",sx:x,children:[(0,t.jsx)(a.Z,{variant:"contained",color:"inherit",onClick:function(){return r("This is an default",{variant:"default"})},children:"Default"}),(0,t.jsx)(a.Z,{variant:"contained",color:"info",onClick:function(){return r("This is an info",{variant:"info"})},children:"Info"}),(0,t.jsx)(a.Z,{variant:"contained",color:"success",onClick:function(){return r("This is an success",{variant:"success"})},children:"Success"}),(0,t.jsx)(a.Z,{variant:"contained",color:"warning",onClick:function(){return r("This is an warning",{variant:"warning"})},children:"Warning"}),(0,t.jsx)(a.Z,{variant:"contained",color:"error",onClick:function(){return r("This is an error",{variant:"error"})},children:"Error"})]}),(0,t.jsxs)(p.g,{title:"With Action",sx:x,children:[(0,t.jsx)(a.Z,{variant:"contained",color:"inherit",onClick:function(){return o("default")},children:"Default"}),(0,t.jsx)(a.Z,{variant:"contained",color:"info",onClick:function(){return o("info")},children:"Info"}),(0,t.jsx)(a.Z,{variant:"contained",color:"success",onClick:function(){return o("success")},children:"Success"}),(0,t.jsx)(a.Z,{variant:"contained",color:"warning",onClick:function(){return o("warning")},children:"Warning"}),(0,t.jsx)(a.Z,{variant:"contained",color:"error",onClick:function(){return o("error")},children:"Error"})]}),(0,t.jsxs)(p.g,{title:"anchorOrigin",sx:x,children:[(0,t.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"top",horizontal:"left"})},children:"Top Left"}),(0,t.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"top",horizontal:"center"})},children:"Top Center"}),(0,t.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return o("default")},children:"Top Right"}),(0,t.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"bottom",horizontal:"left"})},children:"Bottom Left"}),(0,t.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"bottom",horizontal:"center"})},children:"Bottom Center"}),(0,t.jsx)(a.Z,{variant:"text",color:"inherit",onClick:function(){return o("default",{vertical:"bottom",horizontal:"right"})},children:"Bottom Right"})]})]})})]})})}g.getLayout=function(n){return(0,t.jsx)(d.Z,{variant:"main",children:n})}},63552:function(n,r,e){"use strict";e.d(r,{g:function(){return h},_:function(){return p}});var t=e(85893),i=e(45697),o=e.n(i),a=e(41796),c=e(55113),s=e(78445),l=e(87357),u=e(15861);function d(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function f(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),t.forEach((function(r){d(n,r,e[r])}))}return n}function h(n){var r=n.title,e=n.sx,i=n.children;return(0,t.jsxs)(c.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(n){return(0,a.Fq)(n.palette.grey[500],.04)}},children:[r&&(0,t.jsx)(s.Z,{title:r}),(0,t.jsx)(l.Z,{sx:f({p:5,minHeight:180},e),children:i})]})}function p(n){var r=n.title;return(0,t.jsx)(u.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:r})}h.propTypes={children:o().any.isRequired,sx:o().object,title:o().string},p.propTypes={title:o().string.isRequired}}},function(n){n.O(0,[3843,8607,4525,2392,1896,9774,2888,179],(function(){return r=2982,n(n.s=r);var r}));var r=n.O();_N_E=r}]);