(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3958],{78445:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(63366),a=n(87462),i=n(67294),l=n(86010),o=n(27192),s=n(15861),u=n(33616),c=n(11496),d=n(28979);function p(e){return(0,d.Z)("MuiCardHeader",e)}var f=(0,n(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=n(85893);const h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,a.Z)({[`& .${f.title}`]:t.title,[`& .${f.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var y=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCardHeader"}),{action:i,avatar:c,className:d,component:f="div",disableTypography:y=!1,subheader:j,subheaderTypographyProps:Z,title:O,titleTypographyProps:w}=n,k=(0,r.Z)(n,h),P=(0,a.Z)({},n,{component:f,disableTypography:y}),T=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)})(P);let S=O;null==S||S.type===s.Z||y||(S=(0,x.jsx)(s.Z,(0,a.Z)({variant:c?"body2":"h5",className:T.title,component:"span",display:"block"},w,{children:S})));let C=j;return null==C||C.type===s.Z||y||(C=(0,x.jsx)(s.Z,(0,a.Z)({variant:c?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},Z,{children:C}))),(0,x.jsxs)(m,(0,a.Z)({className:(0,l.Z)(T.root,d),as:f,ref:t,ownerState:P},k,{children:[c&&(0,x.jsx)(b,{className:T.avatar,ownerState:P,children:c}),(0,x.jsxs)(g,{className:T.content,ownerState:P,children:[S,C]}),i&&(0,x.jsx)(v,{className:T.action,ownerState:P,children:i})]}))}))},42742:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/slider",function(){return n(37930)}])},66723:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(85893),a=n(45697),i=n.n(a),l=n(41664),o=n(15861),s=n(12963),u=n(87357),c=n(50122);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e){var t=e.links,n=e.activeLast,a=void 0!==n&&n,i=p(e,["links","activeLast"]),l=t[t.length-1].name,c=t.map((function(e){return(0,r.jsx)(x,{link:e},e.name)})),f=t.map((function(e){return(0,r.jsx)("div",{children:e.name!==l?(0,r.jsx)(x,{link:e}):(0,r.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return(0,r.jsx)(s.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({separator:(0,r.jsx)(u.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},i,{children:a?c:f}))}function x(e){var t=e.link,n=t.href,a=void 0===n?"":n,i=t.name,o=t.icon;return(0,r.jsx)(l.default,{href:a,passHref:!0,children:(0,r.jsxs)(c.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&(0,r.jsx)(u.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),i]},i)})}f.propTypes={activeLast:i().bool,links:i().array.isRequired},x.propTypes={link:i().shape({href:i().string,icon:i().any,name:i().string})}},28729:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(85893),a=n(45697),i=n.n(a),l=n(87357),o=n(15861),s=n(50122),u=n(66723);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e){var t=e.links,n=e.action,a=e.heading,i=e.moreLink,c=void 0===i?[]:i,f=e.sx,x=p(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(l.Z,{sx:d({mb:5},f),children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:a}),(0,r.jsx)(u.Z,d({links:t},x))]}),n&&(0,r.jsx)(l.Z,{sx:{flexShrink:0},children:n})]}),(0,r.jsx)(l.Z,{sx:{mt:2},children:"string"===typeof c?(0,r.jsx)(s.Z,{href:c,target:"_blank",variant:"body2",children:c}):c.map((function(e){return(0,r.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}f.propTypes={links:i().array,action:i().node,heading:i().string.isRequired,moreLink:i().oneOfType([i().string,i().array]),sx:i().object}},37930:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(85893),a=n(67294),i=n(11496),l=n(87357),o=n(27948),s=n(26447),u=n(64986),c=n(15861),d=n(78672),p=n(58260),f=n(57325),x=n(78545),h=n(21238),m=n(28729),b=n(63552),v=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}],g=[{value:0,label:"$0"},{value:25,label:"250"},{value:50,label:"500"},{value:75,label:"750"},{value:100,label:"1000"}],y={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},j=(0,i.ZP)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function Z(e){return e>0?"$".concat(e,"0"):"".concat(e)}function O(e){return e>0?"$".concat(e):e}function w(e){return"$".concat(e,"\xb0C")}function k(e){return v.findIndex((function(t){return t.value===e}))+1}function P(){var e=(0,a.useState)(30),t=e[0],n=e[1],i=(0,a.useState)([20,37]),f=i[0],P=i[1];return(0,r.jsx)(x.Z,{title:"Components: Slider",children:(0,r.jsxs)(j,{children:[(0,r.jsx)(l.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(o.Z,{children:(0,r.jsx)(m.Z,{heading:"Slider",links:[{name:"Components",href:p.ko.components},{name:"Slider"}],moreLink:"https://mui.com/components/slider"})})}),(0,r.jsx)(o.Z,{children:(0,r.jsxs)(d.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,r.jsx)(b.g,{title:"Volume",sx:y,children:(0,r.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:1,width:1,children:[(0,r.jsx)(h.Z,{icon:"eva:volume-mute-fill",width:24,height:24}),(0,r.jsx)(u.ZP,{value:t,onChange:function(e,t){n(t)},"aria-labelledby":"continuous-slider"}),(0,r.jsx)(h.Z,{icon:"eva:volume-up-fill",width:24,height:24})]})}),(0,r.jsx)(b.g,{title:"Disabled",sx:y,children:(0,r.jsx)(u.ZP,{disabled:!0,defaultValue:30})}),(0,r.jsx)(b.g,{title:"Temperature",sx:y,children:(0,r.jsx)(u.ZP,{defaultValue:30,getAriaValueText:w,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})}),(0,r.jsxs)(b.g,{title:"Size",sx:y,children:[(0,r.jsx)(u.ZP,{size:"medium",marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:w}),(0,r.jsx)(u.ZP,{marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:w})]}),(0,r.jsx)(b.g,{title:"Small steps",sx:y,children:(0,r.jsx)(u.ZP,{defaultValue:5e-8,getAriaValueText:w,step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"})}),(0,r.jsx)(b.g,{title:"Custom marks",sx:y,children:(0,r.jsx)(u.ZP,{defaultValue:20,getAriaValueText:w,step:10,valueLabelDisplay:"auto",marks:v})}),(0,r.jsx)(b.g,{title:"Restricted values",sx:y,children:(0,r.jsx)(u.ZP,{defaultValue:20,valueLabelFormat:k,getAriaValueText:w,step:null,valueLabelDisplay:"auto",marks:v})}),(0,r.jsxs)(b.g,{title:"Range",sx:y,children:[(0,r.jsx)(l.Z,{sx:{width:"100%"},children:(0,r.jsx)(u.ZP,{scale:function(e){return 10*e},step:10,marks:g,value:f,onChange:function(e,t){P(t)},valueLabelDisplay:"on",getAriaValueText:Z,valueLabelFormat:O})}),(0,r.jsxs)(l.Z,{sx:{p:2,width:"100%",borderRadius:1,bgcolor:"grey.50012"},children:[(0,r.jsxs)(c.Z,{variant:"subtitle2",gutterBottom:!0,children:["Min: ",Z(f[0])]}),(0,r.jsxs)(c.Z,{variant:"subtitle2",children:["Max: ",Z(f[1])]})]})]})]})})]})})}P.getLayout=function(e){return(0,r.jsx)(f.Z,{variant:"main",children:e})}},63552:function(e,t,n){"use strict";n.d(t,{g:function(){return f},_:function(){return x}});var r=n(85893),a=n(45697),i=n.n(a),l=n(41796),o=n(55113),s=n(78445),u=n(87357),c=n(15861);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function f(e){var t=e.title,n=e.sx,a=e.children;return(0,r.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,l.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,r.jsx)(s.Z,{title:t}),(0,r.jsx)(u.Z,{sx:p({p:5,minHeight:180},n),children:a})]})}function x(e){var t=e.title;return(0,r.jsx)(c.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}f.propTypes={children:i().any.isRequired,sx:i().object,title:i().string},x.propTypes={title:i().string.isRequired}}},function(e){e.O(0,[5434,2381,4525,4986,2392,7325,9774,2888,179],(function(){return t=42742,e(e.s=t);var t}));var t=e.O();_N_E=t}]);