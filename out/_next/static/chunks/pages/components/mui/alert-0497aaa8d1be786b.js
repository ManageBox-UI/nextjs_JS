(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4960],{78445:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(63366),i=t(87462),o=t(67294),s=t(86010),a=t(27192),c=t(15861),l=t(33616),u=t(11496),d=t(28979);function h(e){return(0,d.Z)("MuiCardHeader",e)}var f=(0,t(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),p=t(85893);const x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,n)=>(0,i.Z)({[`& .${f.title}`]:n.title,[`& .${f.subheader}`]:n.subheader},n.root)})({display:"flex",alignItems:"center",padding:16}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,n)=>n.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,n)=>n.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,n)=>n.content})({flex:"1 1 auto"});var m=o.forwardRef((function(e,n){const t=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:u,className:d,component:f="div",disableTypography:m=!1,subheader:b,subheaderTypographyProps:Z,title:k,titleTypographyProps:w}=t,O=(0,r.Z)(t,x),T=(0,i.Z)({},t,{component:f,disableTypography:m}),P=(e=>{const{classes:n}=e;return(0,a.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,n)})(T);let S=k;null==S||S.type===c.Z||m||(S=(0,p.jsx)(c.Z,(0,i.Z)({variant:u?"body2":"h5",className:P.title,component:"span",display:"block"},w,{children:S})));let C=b;return null==C||C.type===c.Z||m||(C=(0,p.jsx)(c.Z,(0,i.Z)({variant:u?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},Z,{children:C}))),(0,p.jsxs)(v,(0,i.Z)({className:(0,s.Z)(P.root,d),as:f,ref:n,ownerState:T},O,{children:[u&&(0,p.jsx)(y,{className:P.avatar,ownerState:T,children:u}),(0,p.jsxs)(j,{className:P.content,ownerState:T,children:[S,C]}),o&&(0,p.jsx)(g,{className:P.action,ownerState:T,children:o})]}))}))},65320:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/alert",function(){return t(20177)}])},66723:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(85893),i=t(45697),o=t.n(i),s=t(41664),a=t(15861),c=t(12963),l=t(87357),u=t(50122);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function f(e){var n=e.links,t=e.activeLast,i=void 0!==t&&t,o=h(e,["links","activeLast"]),s=n[n.length-1].name,u=n.map((function(e){return(0,r.jsx)(p,{link:e},e.name)})),f=n.map((function(e){return(0,r.jsx)("div",{children:e.name!==s?(0,r.jsx)(p,{link:e}):(0,r.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:s})},e.name)}));return(0,r.jsx)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}({separator:(0,r.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o,{children:i?u:f}))}function p(e){var n=e.link,t=n.href,i=void 0===t?"":t,o=n.name,a=n.icon;return(0,r.jsx)(s.default,{href:i,passHref:!0,children:(0,r.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,r.jsx)(l.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),o]},o)})}f.propTypes={activeLast:o().bool,links:o().array.isRequired},p.propTypes={link:o().shape({href:o().string,icon:o().any,name:o().string})}},28729:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(85893),i=t(45697),o=t.n(i),s=t(87357),a=t(15861),c=t(50122),l=t(66723);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function f(e){var n=e.links,t=e.action,i=e.heading,o=e.moreLink,u=void 0===o?[]:o,f=e.sx,p=h(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(s.Z,{sx:d({mb:5},f),children:[(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(s.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,r.jsx)(l.Z,d({links:n},p))]}),t&&(0,r.jsx)(s.Z,{sx:{flexShrink:0},children:t})]}),(0,r.jsx)(s.Z,{sx:{mt:2},children:"string"===typeof u?(0,r.jsx)(c.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return(0,r.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}f.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},20177:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(85893),i=t(11496),o=t(41796),s=t(87462),a=t(63366),c=t(67294),l=t(86010),u=t(27192),d=t(33616),h=t(15861),f=t(28979);function p(e){return(0,f.Z)("MuiAlertTitle",e)}(0,t(76087).Z)("MuiAlertTitle",["root"]);const x=["className"],v=(0,i.ZP)(h.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,n)=>n.root})((({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})));var y=c.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiAlertTitle"}),{className:i}=t,o=(0,a.Z)(t,x),c=t,h=(e=>{const{classes:n}=e;return(0,u.Z)({root:["root"]},p,n)})(c);return(0,r.jsx)(v,(0,s.Z)({gutterBottom:!0,component:"div",ownerState:c,ref:n,className:(0,l.Z)(h.root,i)},o))})),g=t(87357),j=t(27948),m=t(26447),b=t(46901),Z=t(11057),k=t(78672),w=t(58260),O=t(57325),T=t(78545),P=t(28729),S=t(63552),C=(0,i.ZP)("div")((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));function R(){return(0,r.jsx)(T.Z,{title:"Components: Alert",children:(0,r.jsxs)(C,{children:[(0,r.jsx)(g.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(j.Z,{children:(0,r.jsx)(P.Z,{heading:"Alert",links:[{name:"Components",href:w.ko.components},{name:"Alert"}],moreLink:"https://mui.com/components/alert"})})}),(0,r.jsx)(j.Z,{children:(0,r.jsxs)(k.ZP,{columns:2,spacing:3,children:[(0,r.jsx)(S.g,{title:"Simple",children:(0,r.jsxs)(m.Z,{spacing:2,children:[(0,r.jsx)(b.Z,{severity:"error",onClose:function(){},children:"This is an error alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{severity:"warning",onClose:function(){},children:"This is a warning alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{severity:"info",children:"This is an info alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{severity:"success",children:"This is a success alert \u2014 check it out!"})]})}),(0,r.jsx)(S.g,{title:"Filled",children:(0,r.jsxs)(m.Z,{spacing:2,children:[(0,r.jsx)(b.Z,{variant:"filled",severity:"error",onClose:function(){},children:"This is an error alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{variant:"filled",severity:"warning",onClose:function(){},children:"This is a warning alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{variant:"filled",severity:"info",children:"This is an info alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{variant:"filled",severity:"success",children:"This is a success alert \u2014 check it out!"})]})}),(0,r.jsx)(S.g,{title:"Outlined",children:(0,r.jsxs)(m.Z,{spacing:2,children:[(0,r.jsx)(b.Z,{variant:"outlined",severity:"error",onClose:function(){},children:"This is an error alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{variant:"outlined",severity:"warning",onClose:function(){},children:"This is a warning alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{variant:"outlined",severity:"info",children:"This is an info alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{variant:"outlined",severity:"success",children:"This is a success alert \u2014 check it out!"})]})}),(0,r.jsx)(S.g,{title:"Description",children:(0,r.jsxs)(m.Z,{spacing:2,children:[(0,r.jsxs)(b.Z,{severity:"error",onClose:function(){},children:[(0,r.jsx)(y,{children:"Error"}),"This is an error alert \u2014 ",(0,r.jsx)("strong",{children:"check it out!"})]}),(0,r.jsxs)(b.Z,{severity:"warning",children:[(0,r.jsx)(y,{children:"Warning"}),"This is a warning alert \u2014 ",(0,r.jsx)("strong",{children:"check it out!"})]}),(0,r.jsxs)(b.Z,{severity:"info",children:[(0,r.jsx)(y,{children:"Info"}),"This is an info alert \u2014 ",(0,r.jsx)("strong",{children:"check it out!"})]}),(0,r.jsxs)(b.Z,{severity:"success",children:[(0,r.jsx)(y,{children:"Success"}),"This is a success alert \u2014 ",(0,r.jsx)("strong",{children:"check it out!"})]})]})}),(0,r.jsx)(S.g,{title:"Actions",children:(0,r.jsxs)(m.Z,{spacing:2,children:[(0,r.jsx)(b.Z,{severity:"info",action:(0,r.jsx)(Z.Z,{color:"info",size:"small",variant:"outlined",children:"Undo"}),children:"This is an info alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{severity:"info",variant:"filled",action:(0,r.jsx)(Z.Z,{color:"inherit",size:"small",variant:"outlined",sx:{border:function(e){return"1px solid ".concat((0,o.Fq)(e.palette.common.white,.48))}},children:"Undo"}),children:"This is an info alert \u2014 check it out!"}),(0,r.jsx)(b.Z,{severity:"info",variant:"outlined",action:(0,r.jsx)(Z.Z,{color:"info",size:"small",variant:"outlined",children:"Undo"}),children:"This is an info alert \u2014 check it out!"})]})})]})})]})})}R.getLayout=function(e){return(0,r.jsx)(O.Z,{variant:"main",children:e})}},63552:function(e,n,t){"use strict";t.d(n,{g:function(){return f},_:function(){return p}});var r=t(85893),i=t(45697),o=t.n(i),s=t(41796),a=t(55113),c=t(78445),l=t(87357),u=t(15861);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function f(e){var n=e.title,t=e.sx,i=e.children;return(0,r.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,s.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,r.jsx)(c.Z,{title:n}),(0,r.jsx)(l.Z,{sx:h({p:5,minHeight:180},t),children:i})]})}function p(e){var n=e.title;return(0,r.jsx)(u.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}f.propTypes={children:o().any.isRequired,sx:o().object,title:o().string},p.propTypes={title:o().string.isRequired}}},function(e){e.O(0,[5434,2381,4525,2392,7325,9774,2888,179],(function(){return n=65320,e(e.s=n);var n}));var n=e.O();_N_E=n}]);