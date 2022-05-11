"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2950],{41323:function(e,t,r){r.d(t,{q1:function(){return k},H8:function(){return P},Ay:function(){return j},Vv:function(){return E},x3:function(){return s},jW:function(){return h}});var n=r(85893),o=r(45697),a=r.n(o),i=r(12786),c=r(11496);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=(0,c.ZP)(i.GI)((function(e){var t=e.theme,r="rtl"===t.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:t.spacing(1),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:t.palette.common.white,right:r&&"0",left:r&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:t.palette.grey[800]}}}));function s(e){var t=e.onClose,r=e.sx,o=e.children,a=l(e,["onClose","sx","children"]);return(0,n.jsx)(p,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}({tipSize:8,anchor:"bottom",onClose:t,closeButton:!0,closeOnClick:!1,sx:r},a,{children:o}))}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function g(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}s.propTypes={children:a().node,onClose:a().func,sx:a().object};var m=(0,c.ZP)("div")((function(e){var t=e.theme;return{zIndex:99,position:"absolute",left:t.spacing(1.5),bottom:t.spacing(3.5),boxShadow:t.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:t.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function h(e){var t=e.sx,r=g(e,["sx"]);return(0,n.jsx)(m,{sx:t,children:(0,n.jsx)(i.jf,b({maxWidth:100,unit:"imperial"},r))})}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}h.propTypes={sx:a().object};var O=(0,c.ZP)("svg")((function(e){return{height:20,stroke:"none",cursor:"pointer",fill:e.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function j(e){var t=e.onClick,r=d(e,["onClick"]);return(0,n.jsx)(i.Jx,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}({},r,{children:(0,n.jsx)(O,{viewBox:"0 0 24 24",onClick:t,children:(0,n.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}j.propTypes={onClick:a().func};var w=(0,c.ZP)(i.$j)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8}}));function P(e){var t=x({},e);return(0,n.jsx)(w,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){v(e,t,r[t])}))}return e}({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},t))}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=(0,c.ZP)(i.ot)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(1.5),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function k(e){return(0,n.jsx)(C,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){S(e,t,r[t])}))}return e}({},e))}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}var T=(0,c.ZP)(i.Pv)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(t.palette.divider)}}}));function E(e){var t=z({},e);return(0,n.jsx)(T,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){D(e,t,r[t])}))}return e}({},t))}},12950:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n=r(85893),o=r(12786),a=r(67294),i=r(41323),c=r(45697),u=r.n(c),l=r(11496),p=r(87357),s=r(15861),f=r(72852),b=r(64986),g=r(77071),m=r(71264);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=(0,l.ZP)("div")((function(e){var t=e.theme;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}({},(0,m.Z)().bgBlur({color:t.palette.grey[900]}),{zIndex:9,minWidth:240,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),borderRadius:t.shape.borderRadius})}));function d(e){var t=e.startTime,r=e.endTime,o=e.allDays,a=e.selectedTime,i=e.onChangeTime,c=e.onChangeAllDays,u=864e5,l=Math.round((r-t)/u),m=Math.round((a-t)/u);return(0,n.jsxs)(y,{children:[(0,n.jsxs)(p.Z,{sx:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,n.jsx)(s.Z,{variant:"subtitle2",sx:{color:"common.white"},children:"All Days"}),(0,n.jsx)(f.Z,{size:"small",checked:o,onChange:function(e){return c(e.target.checked)}})]}),(0,n.jsx)("br",{}),(0,n.jsxs)(s.Z,{gutterBottom:!0,variant:"body2",sx:{color:o?"text.disabled":"common.white"},children:["Each Day: ",(0,g.Mu)(a)]}),(0,n.jsx)(b.ZP,{min:1,step:1,max:l,disabled:o,value:m,onChange:function(e,r){"number"===typeof r&&function(e){i(t+e*u)}(r)}})]})}d.propTypes={startTime:u().number,endTime:u().number,allDays:u().bool,selectedTime:u().number,onChangeTime:u().func,onChangeAllDays:u().func};var O=(0,a.memo)(d);function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){j(e,t,r[t])}))}return e}var w={maxzoom:9,type:"heatmap",paint:{"heatmap-weight":["interpolate",["linear"],["get","mag"],0,0,6,1],"heatmap-intensity":["interpolate",["linear"],["zoom"],0,1,9,3],"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",.9,"rgb(255,201,101)"],"heatmap-radius":["interpolate",["linear"],["zoom"],0,2,9,20],"heatmap-opacity":["interpolate",["linear"],["zoom"],7,1,9,0]}};function P(e){var t=v({},e),r=(0,a.useState)(!0),c=r[0],u=r[1],l=(0,a.useState)([0,0]),p=l[0],s=l[1],f=(0,a.useState)(0),b=f[0],g=f[1],m=(0,a.useState)(),h=m[0],y=m[1],d=(0,a.useState)({latitude:40,longitude:-100,zoom:3,bearing:0,pitch:0}),j=d[0],P=d[1];(0,a.useEffect)((function(){fetch("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson").then((function(e){return e.json()})).then((function(e){var t=e.features,r=t[0].properties.time,n=t[t.length-1].properties.time;s([n,r]),y(e),g(r)}))}),[]);var S=(0,a.useMemo)((function(){return c?h:function(e,t){var r=new Date(t),n=r.getFullYear(),o=r.getMonth(),a=r.getDate();return{type:"FeatureCollection",features:null===e||void 0===e?void 0:e.features.filter((function(e){var t=new Date(e.properties.time);return t.getFullYear()===n&&t.getMonth()===o&&t.getDate()===a}))}}(h,b)}),[h,c,b]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.ZP,x({},j,{onViewportChange:P},t,{children:[(0,n.jsx)(i.jW,{}),(0,n.jsx)(i.Vv,{}),(0,n.jsx)(i.q1,{}),(0,n.jsx)(i.H8,{}),S&&(0,n.jsx)(o.Hw,{type:"geojson",data:S,children:(0,n.jsx)(o.mh,x({},w))})]})),(0,n.jsx)(O,{startTime:p[0],endTime:p[1],allDays:c,selectedTime:b,onChangeTime:g,onChangeAllDays:u})]})}}}]);