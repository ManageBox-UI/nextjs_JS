"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2545],{72545:function(e,r,t){t.r(r),t.d(r,{default:function(){return z}});var n=t(85893),o=t(67294),i=t(12786),a=t(41323),l=t(45697),c=t.n(l),u=t(35369),s=t(11496),d=t(2734),p=t(87357),b=t(15861),g=t(72852),f=t(66388),y=t(71264);function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){h(e,r,t[r])}))}return e}var m=(0,u.d0)(f),w=["labels","roads","buildings","parks","water","background"],j={background:/background/,water:/water/,parks:/park/,buildings:/building/,roads:/bridge|road|tunnel/,labels:/label|place|poi/},k={line:"line-color",fill:"fill-color",background:"background-color",symbol:"text-color"},x=(0,s.ZP)("div")((function(e){var r=e.theme;return v({},(0,y.Z)().bgBlur({color:r.palette.grey[900]}),{zIndex:9,minWidth:200,position:"absolute",top:r.spacing(1),right:r.spacing(1),padding:r.spacing(2),borderRadius:r.shape.borderRadius})})),O=(0,s.ZP)("div")((function(e){var r=e.theme;return{width:20,height:20,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",marginRight:r.spacing(1),border:"solid 1px ".concat(r.palette.grey[500]),"& input":{width:12,height:12,border:"none",outline:"none",cursor:"pointer",WebkitAppearance:"none",backgroundColor:"transparent","&::-webkit-color-swatch-wrapper":{padding:0},"&::-moz-color-swatch":{border:"none",borderRadius:"50%"},"&::-webkit-color-swatch":{border:"none",borderRadius:"50%"}}}}));function P(e){var r=e.onChange,t=(0,d.Z)(),i=(0,o.useState)({water:!0,parks:!0,roads:!0,labels:!0,buildings:!0,background:!0}),a=i[0],l=i[1],c=(0,o.useState)({water:t.palette.grey[900],labels:t.palette.grey[800],parks:t.palette.primary.dark,buildings:t.palette.grey[900],background:t.palette.grey[700],roads:t.palette.warning.darker}),u=c[0],s=c[1];(0,o.useEffect)((function(){f({color:u,visibility:a})}),[u,a]);var f=function(e){var t=e.color,n=e.visibility,o=m.get("layers").filter((function(e){var r=e.get("id");return w.every((function(e){return n[e]||!j[e].test(r)}))})).map((function(e){var r=e.get("id"),n=e.get("type"),o=w.find((function(e){return j[e].test(r)}));return o&&k[n]?null===e||void 0===e?void 0:e.setIn(["paint",k[n]],t[o]):e}));r(m.set("layers",o))};return(0,n.jsx)(x,{children:w.map((function(e){return(0,n.jsxs)(p.Z,{sx:{py:1,display:"flex",alignItems:"center"},children:[(0,n.jsx)(O,{sx:v({},!a[e]&&{opacity:.48}),children:(0,n.jsx)("input",{type:"color",value:u[e],disabled:!a[e],onChange:function(r){return function(e,r){var t=v({},u,h({},e,r));s(t),f({color:t,visibility:a})}(e,r.target.value)}})}),(0,n.jsx)(b.Z,{variant:"body2",sx:{flexGrow:1,textTransform:"capitalize",color:a[e]?"common.white":"text.disabled"},children:e}),(0,n.jsx)(g.Z,{size:"small",checked:a[e],onChange:function(r){return function(e,r){var t=v({},a,h({},e,r));l(t),f({color:u,visibility:t})}(e,r.target.checked)}})]},e)}))})}P.propTypes={onChange:c().func};var C=(0,o.memo)(P);function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Z(){return Z=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Z.apply(this,arguments)}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){S(e,r,t[r])}))}return e}function z(e){var r=Z({},e),t=(0,o.useState)(""),l=t[0],c=t[1],u=(0,o.useState)({latitude:37.805,longitude:-122.447,zoom:15.5,bearing:0,pitch:0}),s=u[0],d=u[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.ZP,R({},s,{mapStyle:l,onViewportChange:d},r,{children:[(0,n.jsx)(a.jW,{}),(0,n.jsx)(a.Vv,{}),(0,n.jsx)(a.q1,{}),(0,n.jsx)(a.H8,{})]})),(0,n.jsx)(C,{onChange:c})]})}}}]);