(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8599],{45670:function(e,n,i){"use strict";i.d(n,{ZP:function(){return c},_i:function(){return l},uU:function(){return s},pQ:function(){return a}});var r=i(67294),o=i(85893);const t=r.createContext(null);function c(e){const{children:n,value:i}=e,c=function(){const[e,n]=r.useState(null);return r.useEffect((()=>{n(`mui-p-${Math.round(1e5*Math.random())}`)}),[]),e}(),l=r.useMemo((()=>({idPrefix:c,value:i})),[c,i]);return(0,o.jsx)(t.Provider,{value:l,children:n})}function l(){return r.useContext(t)}function s(e,n){const{idPrefix:i}=e;return null===i?null:`${e.idPrefix}-P-${n}`}function a(e,n){const{idPrefix:i}=e;return null===i?null:`${e.idPrefix}-T-${n}`}},66568:function(e,n,i){"use strict";var r=i(87462),o=i(63366),t=i(67294),c=i(37023),l=i(45670),s=i(85893);const a=["children"],d=t.forwardRef((function(e,n){const{children:i}=e,d=(0,o.Z)(e,a),h=(0,l._i)();if(null===h)throw new TypeError("No TabContext provided");const x=t.Children.map(i,(e=>t.isValidElement(e)?t.cloneElement(e,{"aria-controls":(0,l.uU)(h,e.props.value),id:(0,l.pQ)(h,e.props.value)}):null));return(0,s.jsx)(c.Z,(0,r.Z)({},d,{ref:n,value:h.value,children:x}))}));n.Z=d},55050:function(e,n,i){"use strict";i.d(n,{Z:function(){return v}});var r=i(87462),o=i(63366),t=i(67294),c=i(86010),l=i(11496),s=i(33616),a=i(27192),d=i(28979);function h(e){return(0,d.Z)("MuiTabPanel",e)}(0,i(76087).Z)("MuiTabPanel",["root"]);var x=i(45670),u=i(85893);const j=["children","className","value"],Z=(0,l.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:(e,n)=>n.root})((({theme:e})=>({padding:e.spacing(3)})));var v=t.forwardRef((function(e,n){const i=(0,s.Z)({props:e,name:"MuiTabPanel"}),{children:t,className:l,value:d}=i,v=(0,o.Z)(i,j),g=(0,r.Z)({},i),f=(e=>{const{classes:n}=e;return(0,a.Z)({root:["root"]},h,n)})(g),m=(0,x._i)();if(null===m)throw new TypeError("No TabContext provided");const p=(0,x.uU)(m,d),b=(0,x.pQ)(m,d);return(0,u.jsx)(Z,(0,r.Z)({"aria-labelledby":b,className:(0,c.Z)(f.root,l),hidden:d!==m.value,id:p,ref:n,role:"tabpanel",ownerState:g},v,{children:d===m.value&&t}))}))},97082:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/buttons",function(){return i(76908)}])},66723:function(e,n,i){"use strict";i.d(n,{Z:function(){return u}});var r=i(85893),o=i(45697),t=i.n(o),c=i(41664),l=i(15861),s=i(12963),a=i(87357),d=i(50122);function h(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function x(e,n){if(null==e)return{};var i,r,o=function(e,n){if(null==e)return{};var i,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}function u(e){var n=e.links,i=e.activeLast,o=void 0!==i&&i,t=x(e,["links","activeLast"]),c=n[n.length-1].name,d=n.map((function(e){return(0,r.jsx)(j,{link:e},e.name)})),u=n.map((function(e){return(0,r.jsx)("div",{children:e.name!==c?(0,r.jsx)(j,{link:e}):(0,r.jsx)(l.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,r.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(n){h(e,n,i[n])}))}return e}({separator:(0,r.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},t,{children:o?d:u}))}function j(e){var n=e.link,i=n.href,o=void 0===i?"":i,t=n.name,l=n.icon;return(0,r.jsx)(c.default,{href:o,passHref:!0,children:(0,r.jsxs)(d.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[l&&(0,r.jsx)(a.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:l}),t]},t)})}u.propTypes={activeLast:t().bool,links:t().array.isRequired},j.propTypes={link:t().shape({href:t().string,icon:t().any,name:t().string})}},28729:function(e,n,i){"use strict";i.d(n,{Z:function(){return u}});var r=i(85893),o=i(45697),t=i.n(o),c=i(87357),l=i(15861),s=i(50122),a=i(66723);function d(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function h(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(n){d(e,n,i[n])}))}return e}function x(e,n){if(null==e)return{};var i,r,o=function(e,n){if(null==e)return{};var i,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}function u(e){var n=e.links,i=e.action,o=e.heading,t=e.moreLink,d=void 0===t?[]:t,u=e.sx,j=x(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(c.Z,{sx:h({mb:5},u),children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,r.jsx)(a.Z,h({links:n},j))]}),i&&(0,r.jsx)(c.Z,{sx:{flexShrink:0},children:i})]}),(0,r.jsx)(c.Z,{sx:{mt:2},children:"string"===typeof d?(0,r.jsx)(s.Z,{href:d,target:"_blank",variant:"body2",children:d}):d.map((function(e){return(0,r.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}u.propTypes={links:t().array,action:t().node,heading:t().string.isRequired,moreLink:t().oneOfType([t().string,t().array]),sx:t().object}},76908:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return ie}});var r=i(85893),o=i(67294),t=i(11496),c=i(87357),l=i(27948),s=i(40044),a=i(45670),d=i(66568),h=i(55050),x=i(58260),u=i(57325),j=i(78545),Z=i(28729),v=i(11057),g=i(78672),f=i(31812),m=i(21238),p=i(63552),b={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function w(){return(0,r.jsxs)(g.ZP,{columns:2,spacing:3,children:[(0,r.jsxs)(p.g,{title:"Base",sx:b,children:[(0,r.jsx)(v.Z,{color:"inherit",children:"Default"}),(0,r.jsx)(v.Z,{color:"secondary",children:"Secondary"}),(0,r.jsx)(v.Z,{children:"Primary"}),(0,r.jsx)(v.Z,{disabled:!0,children:"Disabled"}),(0,r.jsx)(v.Z,{children:"Link"})]}),(0,r.jsxs)(p.g,{title:"Adding Colors",sx:b,children:[(0,r.jsx)(v.Z,{color:"inherit",children:"Default"}),(0,r.jsx)(v.Z,{children:"Primary"}),(0,r.jsx)(v.Z,{color:"secondary",children:"Secondary"}),(0,r.jsx)(v.Z,{color:"info",children:"Info"}),(0,r.jsx)(v.Z,{color:"success",children:"Success"}),(0,r.jsx)(v.Z,{color:"warning",children:"Warning"}),(0,r.jsx)(v.Z,{color:"error",children:"Error"})]}),(0,r.jsxs)(p.g,{title:"With Icon & Loading",sx:b,children:[(0,r.jsx)(v.Z,{color:"error",startIcon:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"}),children:"Icon Left"}),(0,r.jsx)(v.Z,{color:"error",endIcon:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"}),children:"Icon Right"}),(0,r.jsx)(f.Z,{loading:!0,children:"Submit"}),(0,r.jsx)(f.Z,{loading:!0,loadingIndicator:"Loading...",children:"Fetch data"}),(0,r.jsx)(f.Z,{loading:!0,loadingPosition:"start",startIcon:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"}),children:"Save"})]}),(0,r.jsxs)(p.g,{title:"Size",sx:b,children:[(0,r.jsx)(v.Z,{color:"info",size:"small",children:"Small"}),(0,r.jsx)(v.Z,{color:"info",children:"Medium"}),(0,r.jsx)(v.Z,{color:"info",size:"large",children:"Large"})]})]})}var y=i(93946),T={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function O(){return(0,r.jsxs)(g.ZP,{columns:3,spacing:3,children:[(0,r.jsxs)(p.g,{title:"Base",sx:T,children:[(0,r.jsx)(y.Z,{color:"inherit",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{color:"primary",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{color:"secondary",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{disabled:!0,children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})})]}),(0,r.jsxs)(p.g,{title:"Adding Colors",sx:T,children:[(0,r.jsx)(y.Z,{color:"inherit",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{color:"primary",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{color:"secondary",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{color:"info",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{color:"success",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{color:"warning",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{color:"error",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"})})]}),(0,r.jsxs)(p.g,{title:"Size",sx:T,children:[(0,r.jsx)(y.Z,{size:"small",color:"info",children:(0,r.jsx)(m.Z,{fontSize:"inherit",icon:"ic:round-access-alarm"})}),(0,r.jsx)(y.Z,{color:"info",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:20,height:20})}),(0,r.jsx)(y.Z,{color:"info",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(y.Z,{color:"info",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:32,height:32})})]})]})}var S=i(63366),P=i(87462),C=i(86010),$=i(27192),R=i(41796),k=i(98216),z=i(33616),I=i(28979);function B(e){return(0,I.Z)("MuiButtonGroup",e)}var E=(0,i(76087).Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),L=i(34510);const W=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],Y=(0,t.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[{[`& .${E.grouped}`]:n.grouped},{[`& .${E.grouped}`]:n[`grouped${(0,k.Z)(i.orientation)}`]},{[`& .${E.grouped}`]:n[`grouped${(0,k.Z)(i.variant)}`]},{[`& .${E.grouped}`]:n[`grouped${(0,k.Z)(i.variant)}${(0,k.Z)(i.orientation)}`]},{[`& .${E.grouped}`]:n[`grouped${(0,k.Z)(i.variant)}${(0,k.Z)(i.color)}`]},n.root,n[i.variant],!0===i.disableElevation&&n.disableElevation,i.fullWidth&&n.fullWidth,"vertical"===i.orientation&&n.vertical]}})((({theme:e,ownerState:n})=>(0,P.Z)({display:"inline-flex",borderRadius:e.shape.borderRadius},"contained"===n.variant&&{boxShadow:e.shadows[2]},n.disableElevation&&{boxShadow:"none"},n.fullWidth&&{width:"100%"},"vertical"===n.orientation&&{flexDirection:"column"},{[`& .${E.grouped}`]:(0,P.Z)({minWidth:40,"&:not(:first-of-type)":(0,P.Z)({},"horizontal"===n.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===n.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===n.variant&&"horizontal"===n.orientation&&{marginLeft:-1},"outlined"===n.variant&&"vertical"===n.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,P.Z)({},"horizontal"===n.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===n.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===n.variant&&"horizontal"===n.orientation&&{borderRight:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===n.variant&&"vertical"===n.orientation&&{borderBottom:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===n.variant&&"inherit"!==n.color&&{borderColor:(0,R.Fq)(e.palette[n.color].main,.5)},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"transparent"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"transparent"},"contained"===n.variant&&"horizontal"===n.orientation&&{borderRight:`1px solid ${e.palette.grey[400]}`,[`&.${E.disabled}`]:{borderRight:`1px solid ${e.palette.action.disabled}`}},"contained"===n.variant&&"vertical"===n.orientation&&{borderBottom:`1px solid ${e.palette.grey[400]}`,[`&.${E.disabled}`]:{borderBottom:`1px solid ${e.palette.action.disabled}`}},"contained"===n.variant&&"inherit"!==n.color&&{borderColor:e.palette[n.color].dark},{"&:hover":(0,P.Z)({},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"currentColor"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,P.Z)({},"contained"===n.variant&&{boxShadow:"none"})},"contained"===n.variant&&{boxShadow:"none"})})));var _=o.forwardRef((function(e,n){const i=(0,z.Z)({props:e,name:"MuiButtonGroup"}),{children:t,className:c,color:l="primary",component:s="div",disabled:a=!1,disableElevation:d=!1,disableFocusRipple:h=!1,disableRipple:x=!1,fullWidth:u=!1,orientation:j="horizontal",size:Z="medium",variant:v="outlined"}=i,g=(0,S.Z)(i,W),f=(0,P.Z)({},i,{color:l,component:s,disabled:a,disableElevation:d,disableFocusRipple:h,disableRipple:x,fullWidth:u,orientation:j,size:Z,variant:v}),m=(e=>{const{classes:n,color:i,disabled:r,disableElevation:o,fullWidth:t,orientation:c,variant:l}=e,s={root:["root",l,"vertical"===c&&"vertical",t&&"fullWidth",o&&"disableElevation"],grouped:["grouped",`grouped${(0,k.Z)(c)}`,`grouped${(0,k.Z)(l)}`,`grouped${(0,k.Z)(l)}${(0,k.Z)(c)}`,`grouped${(0,k.Z)(l)}${(0,k.Z)(i)}`,r&&"disabled"]};return(0,$.Z)(s,B,n)})(f),p=o.useMemo((()=>({className:m.grouped,color:l,disabled:a,disableElevation:d,disableFocusRipple:h,disableRipple:x,fullWidth:u,size:Z,variant:v})),[l,a,d,h,x,u,Z,v,m.grouped]);return(0,r.jsx)(Y,(0,P.Z)({as:s,role:"group",className:(0,C.Z)(m.root,c),ref:n,ownerState:f},g,{children:(0,r.jsx)(L.Z.Provider,{value:p,children:t})}))})),M={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function D(){return(0,r.jsxs)(g.ZP,{columns:2,spacing:3,children:[(0,r.jsxs)(p.g,{title:"Base",sx:M,children:[(0,r.jsxs)(_,{color:"inherit",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"contained",color:"inherit",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"text",color:"inherit",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"contained",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"text",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{disabled:!0,children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{disabled:!0,variant:"contained",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{disabled:!0,variant:"text",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]})]}),(0,r.jsxs)(p.g,{title:"Adding Colors",sx:M,children:[(0,r.jsxs)(_,{variant:"contained",color:"inherit",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"contained",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"contained",color:"secondary",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"contained",color:"info",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"contained",color:"success",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"contained",color:"warning",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"contained",color:"error",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"outlined",color:"inherit",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"outlined",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"outlined",color:"secondary",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"outlined",color:"info",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"outlined",color:"success",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"outlined",color:"warning",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"outlined",color:"error",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"text",color:"inherit",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"text",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"text",color:"secondary",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"text",color:"info",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"text",color:"success",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"text",color:"warning",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"text",color:"error",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]})]}),(0,r.jsxs)(p.g,{title:"Size",sx:M,children:[(0,r.jsxs)(_,{size:"small",variant:"contained",color:"info",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{variant:"contained",color:"info",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{size:"large",variant:"contained",color:"info",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]})]}),(0,r.jsxs)(p.g,{title:"Orientation",sx:M,children:[(0,r.jsxs)(_,{orientation:"vertical",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{orientation:"vertical",variant:"contained",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]}),(0,r.jsxs)(_,{orientation:"vertical",variant:"text",children:[(0,r.jsx)(v.Z,{children:"One"}),(0,r.jsx)(v.Z,{children:"Two"}),(0,r.jsx)(v.Z,{children:"Three"})]})]})]})}var N=i(33454),q=i(96420),F={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"},"& svg":{width:24,height:24}};function A(){var e=(0,o.useState)("left"),n=e[0],i=e[1],t=(0,o.useState)((function(){return["bold","italic"]})),c=t[0],l=t[1],s=(0,o.useState)("list"),a=s[0],d=s[1],h=(0,o.useState)(!1),x=h[0],u=h[1],j=function(e,n){i(n)},Z=function(e,n){d(n)};return(0,r.jsxs)(g.ZP,{columns:3,spacing:3,children:[(0,r.jsx)(p.g,{title:"Exclusive selection",sx:F,children:(0,r.jsxs)(N.Z,{value:n,exclusive:!0,onChange:j,children:[(0,r.jsx)(q.Z,{value:"left",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-left"})}),(0,r.jsx)(q.Z,{value:"center",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-center"})}),(0,r.jsx)(q.Z,{value:"right",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-right"})}),(0,r.jsx)(q.Z,{value:"justify",disabled:!0,children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-justify"})})]})}),(0,r.jsx)(p.g,{title:"Multiple selection",sx:F,children:(0,r.jsxs)(N.Z,{value:c,onChange:function(e,n){l(n)},children:[(0,r.jsx)(q.Z,{value:"bold",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-bold"})}),(0,r.jsx)(q.Z,{value:"italic",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-italic"})}),(0,r.jsx)(q.Z,{value:"underlined",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-underlined"})}),(0,r.jsxs)(q.Z,{value:"color",disabled:!0,children:[(0,r.jsx)(m.Z,{icon:"ic:baseline-format-color-fill"}),(0,r.jsx)(m.Z,{icon:"ic:baseline-arrow-drop-down"})]})]})}),(0,r.jsxs)(p.g,{title:"Size",sx:F,children:[(0,r.jsxs)(N.Z,{size:"small",value:n,exclusive:!0,onChange:j,children:[(0,r.jsx)(q.Z,{value:"left",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-left"})}),(0,r.jsx)(q.Z,{value:"center",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-center"})}),(0,r.jsx)(q.Z,{value:"right",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-right"})}),(0,r.jsx)(q.Z,{value:"justify",disabled:!0,children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-justify"})})]}),(0,r.jsxs)(N.Z,{size:"medium",value:n,exclusive:!0,onChange:j,children:[(0,r.jsx)(q.Z,{value:"left",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-left"})}),(0,r.jsx)(q.Z,{value:"center",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-center"})}),(0,r.jsx)(q.Z,{value:"right",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-right"})}),(0,r.jsx)(q.Z,{value:"justify",disabled:!0,children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-justify"})})]}),(0,r.jsxs)(N.Z,{size:"large",value:n,exclusive:!0,onChange:j,children:[(0,r.jsx)(q.Z,{value:"left",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-left"})}),(0,r.jsx)(q.Z,{value:"center",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-center"})}),(0,r.jsx)(q.Z,{value:"right",children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-right"})}),(0,r.jsx)(q.Z,{value:"justify",disabled:!0,children:(0,r.jsx)(m.Z,{icon:"ic:round-format-align-justify"})})]})]}),(0,r.jsxs)(p.g,{title:"Vertical & Standalone buttons",sx:F,children:[(0,r.jsxs)(N.Z,{orientation:"vertical",value:a,exclusive:!0,onChange:Z,children:[(0,r.jsx)(q.Z,{value:"list",children:(0,r.jsx)(m.Z,{icon:"ic:round-view-list"})}),(0,r.jsx)(q.Z,{value:"module",children:(0,r.jsx)(m.Z,{icon:"ic:round-view-module"})}),(0,r.jsx)(q.Z,{value:"quilt",children:(0,r.jsx)(m.Z,{icon:"ic:round-view-quilt"})})]}),(0,r.jsx)(q.Z,{value:"check",selected:x,onChange:function(){u(!x)},children:(0,r.jsx)(m.Z,{icon:"eva:checkmark-fill"})})]}),(0,r.jsxs)(p.g,{title:"Colors",sx:F,children:[(0,r.jsxs)(N.Z,{color:"primary",orientation:"vertical",value:a,exclusive:!0,onChange:Z,children:[(0,r.jsx)(q.Z,{value:"list",children:(0,r.jsx)(m.Z,{icon:"ic:round-view-list"})}),(0,r.jsx)(q.Z,{value:"module",children:(0,r.jsx)(m.Z,{icon:"ic:round-view-module"})}),(0,r.jsx)(q.Z,{value:"quilt",children:(0,r.jsx)(m.Z,{icon:"ic:round-view-quilt"})})]}),(0,r.jsxs)(N.Z,{orientation:"vertical",color:"info",value:a,exclusive:!0,onChange:Z,children:[(0,r.jsx)(q.Z,{value:"list",children:(0,r.jsx)(m.Z,{icon:"ic:round-view-list"})}),(0,r.jsx)(q.Z,{value:"module",children:(0,r.jsx)(m.Z,{icon:"ic:round-view-module"})}),(0,r.jsx)(q.Z,{value:"quilt",children:(0,r.jsx)(m.Z,{icon:"ic:round-view-quilt"})})]}),(0,r.jsx)(q.Z,{color:"primary",value:"check",selected:x,onChange:function(){u(!x)},children:(0,r.jsx)(m.Z,{icon:"eva:checkmark-fill"})}),(0,r.jsx)(q.Z,{color:"info",value:"check",selected:x,onChange:function(){u(!x)},children:(0,r.jsx)(m.Z,{icon:"eva:checkmark-fill"})})]})]})}var H={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function G(){return(0,r.jsxs)(g.ZP,{columns:2,spacing:3,children:[(0,r.jsxs)(p.g,{title:"Base",sx:H,children:[(0,r.jsx)(v.Z,{variant:"outlined",color:"inherit",children:"Default"}),(0,r.jsx)(v.Z,{variant:"outlined",children:"Primary"}),(0,r.jsx)(v.Z,{variant:"outlined",color:"secondary",children:"Secondary"}),(0,r.jsx)(v.Z,{variant:"outlined",disabled:!0,children:"Disabled"}),(0,r.jsx)(v.Z,{variant:"outlined",children:"Link"})]}),(0,r.jsxs)(p.g,{title:"Adding Colors",sx:H,children:[(0,r.jsx)(v.Z,{variant:"outlined",color:"inherit",children:"Default"}),(0,r.jsx)(v.Z,{variant:"outlined",children:"Primary"}),(0,r.jsx)(v.Z,{variant:"outlined",color:"secondary",children:"Secondary"}),(0,r.jsx)(v.Z,{variant:"outlined",color:"info",children:"Info"}),(0,r.jsx)(v.Z,{variant:"outlined",color:"success",children:"Success"}),(0,r.jsx)(v.Z,{variant:"outlined",color:"warning",children:"Warning"}),(0,r.jsx)(v.Z,{variant:"outlined",color:"error",children:"Error"})]}),(0,r.jsxs)(p.g,{title:"With Icon & Loading",sx:H,children:[(0,r.jsx)(v.Z,{variant:"outlined",color:"error",startIcon:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"}),children:"Icon Left"}),(0,r.jsx)(v.Z,{variant:"outlined",color:"error",endIcon:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"}),children:"Icon Right"}),(0,r.jsx)(f.Z,{loading:!0,variant:"outlined",children:"Submit"}),(0,r.jsx)(f.Z,{loading:!0,loadingIndicator:"Loading...",variant:"outlined",children:"Fetch data"}),(0,r.jsx)(f.Z,{loading:!0,loadingPosition:"start",startIcon:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"}),variant:"outlined",children:"Save"})]}),(0,r.jsxs)(p.g,{title:"Size",sx:H,children:[(0,r.jsx)(v.Z,{variant:"outlined",color:"info",size:"small",children:"Small"}),(0,r.jsx)(v.Z,{variant:"outlined",color:"info",children:"Medium"}),(0,r.jsx)(v.Z,{variant:"outlined",color:"info",size:"large",children:"Large"})]})]})}var V={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function Q(){return(0,r.jsxs)(g.ZP,{columns:2,spacing:3,children:[(0,r.jsxs)(p.g,{title:"Base",sx:V,children:[(0,r.jsx)(v.Z,{variant:"contained",color:"inherit",children:"Default"}),(0,r.jsx)(v.Z,{variant:"contained",children:"Primary"}),(0,r.jsx)(v.Z,{variant:"contained",color:"secondary",children:"Secondary"}),(0,r.jsx)(v.Z,{variant:"contained",disabled:!0,children:"Disabled"}),(0,r.jsx)(v.Z,{variant:"contained",children:"Link"})]}),(0,r.jsxs)(p.g,{title:"Adding Colors",sx:V,children:[(0,r.jsx)(v.Z,{variant:"contained",color:"inherit",children:"Default"}),(0,r.jsx)(v.Z,{variant:"contained",children:"Primary"}),(0,r.jsx)(v.Z,{variant:"contained",color:"secondary",children:"Secondary"}),(0,r.jsx)(v.Z,{variant:"contained",color:"info",children:"Info"}),(0,r.jsx)(v.Z,{variant:"contained",color:"success",children:"Success"}),(0,r.jsx)(v.Z,{variant:"contained",color:"warning",children:"Warning"}),(0,r.jsx)(v.Z,{variant:"contained",color:"error",children:"Error"})]}),(0,r.jsxs)(p.g,{title:"With Icon & Loading",sx:V,children:[(0,r.jsx)(v.Z,{variant:"contained",color:"error",startIcon:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"}),children:"Icon Left"}),(0,r.jsx)(v.Z,{variant:"contained",color:"error",endIcon:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"}),children:"Icon Right"}),(0,r.jsx)(f.Z,{loading:!0,variant:"contained",children:"Submit"}),(0,r.jsx)(f.Z,{loading:!0,loadingIndicator:"Loading...",variant:"contained",children:"Fetch data"}),(0,r.jsx)(f.Z,{loading:!0,loadingPosition:"start",startIcon:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm"}),variant:"contained",children:"Save"})]}),(0,r.jsxs)(p.g,{title:"Size",sx:V,children:[(0,r.jsx)(v.Z,{variant:"contained",color:"info",size:"small",children:"Small"}),(0,r.jsx)(v.Z,{variant:"contained",color:"info",children:"Medium"}),(0,r.jsx)(v.Z,{variant:"contained",color:"info",size:"large",children:"Large"})]})]})}var U=i(58032),X=i(52500),J={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function K(){return(0,r.jsxs)(g.ZP,{columns:2,spacing:3,children:[(0,r.jsxs)(p.g,{title:"Base",sx:J,children:[(0,r.jsx)(U.Z,{color:"default",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(U.Z,{children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(U.Z,{color:"secondary",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(U.Z,{disabled:!0,children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsxs)(U.Z,{color:"default",variant:"extended",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Default"]}),(0,r.jsxs)(U.Z,{variant:"extended",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Primary"]}),(0,r.jsxs)(U.Z,{disabled:!0,variant:"extended",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Disabled"]})]}),(0,r.jsxs)(p.g,{title:"Adding Colors",sx:J,children:[(0,r.jsx)(X.Y$,{color:"default",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(X.Y$,{children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(X.Y$,{color:"secondary",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(X.Y$,{color:"info",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(X.Y$,{color:"success",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(X.Y$,{color:"warning",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(X.Y$,{color:"error",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsxs)(X.Y$,{variant:"extended",color:"default",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Default"]}),(0,r.jsxs)(X.Y$,{variant:"extended",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Primary"]}),(0,r.jsxs)(X.Y$,{variant:"extended",color:"secondary",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Secondary"]}),(0,r.jsxs)(X.Y$,{variant:"extended",color:"info",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Info"]}),(0,r.jsxs)(X.Y$,{variant:"extended",color:"success",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Success"]}),(0,r.jsxs)(X.Y$,{variant:"extended",color:"warning",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Warning"]}),(0,r.jsxs)(X.Y$,{variant:"extended",color:"error",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Error"]})]}),(0,r.jsxs)(p.g,{title:"Size",sx:J,children:[(0,r.jsx)(X.Y$,{color:"info",size:"small",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(X.Y$,{color:"info",size:"medium",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsx)(X.Y$,{color:"info",children:(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24})}),(0,r.jsxs)(X.Y$,{variant:"extended",size:"small",color:"info",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Small"]}),(0,r.jsxs)(X.Y$,{variant:"extended",size:"medium",color:"info",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Medium"]}),(0,r.jsxs)(X.Y$,{variant:"extended",color:"info",children:[(0,r.jsx)(m.Z,{icon:"ic:round-access-alarm",width:24,height:24}),"Large"]})]})]})}var ee=[{name:"Contained Buttons",component:(0,r.jsx)(Q,{})},{name:"Outlined Buttons",component:(0,r.jsx)(G,{})},{name:"TextButtons",component:(0,r.jsx)(w,{})},{name:"Icon Buttons",component:(0,r.jsx)(O,{})},{name:"Floating Action Button",component:(0,r.jsx)(K,{})},{name:"Button Groups",component:(0,r.jsx)(D,{})},{name:"Toggle Buttons",component:(0,r.jsx)(A,{})}],ne=(0,t.ZP)("div")((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));function ie(){var e=(0,o.useState)("1"),n=e[0],i=e[1];return(0,r.jsx)(j.Z,{title:"Components: Buttons",children:(0,r.jsxs)(ne,{children:[(0,r.jsx)(c.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(Z.Z,{heading:"Buttons",links:[{name:"Components",href:x.ko.components},{name:"Buttons"}],moreLink:["https://mui.com/components/buttons","https://mui.com/components/button-group","https://mui.com/components/floating-action-button","https://mui.com/components/toggle-button"]})})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(a.ZP,{value:n,children:[(0,r.jsx)(d.Z,{onChange:function(e,n){i(n)},children:ee.map((function(e,n){return(0,r.jsx)(s.Z,{disableRipple:!0,label:e.name,value:String(n+1)},e.name)}))}),ee.map((function(e,n){return(0,r.jsx)(h.Z,{value:String(n+1),sx:{mt:5},children:e.component},e.name)}))]})})]})})}ie.getLayout=function(e){return(0,r.jsx)(u.Z,{variant:"main",children:e})}},63552:function(e,n,i){"use strict";i.d(n,{g:function(){return u},_:function(){return j}});var r=i(85893),o=i(45697),t=i.n(o),c=i(41796),l=i(55113),s=i(78445),a=i(87357),d=i(15861);function h(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function x(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(n){h(e,n,i[n])}))}return e}function u(e){var n=e.title,i=e.sx,o=e.children;return(0,r.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,c.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,r.jsx)(s.Z,{title:n}),(0,r.jsx)(a.Z,{sx:x({p:5,minHeight:180},i),children:o})]})}function j(e){var n=e.title;return(0,r.jsx)(d.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}u.propTypes={children:t().any.isRequired,sx:t().object,title:t().string},j.propTypes={title:t().string.isRequired}}},function(e){e.O(0,[5434,3350,4525,285,9737,2392,7325,9774,2888,179],(function(){return n=97082,e(e.s=n);var n}));var n=e.O();_N_E=n}]);