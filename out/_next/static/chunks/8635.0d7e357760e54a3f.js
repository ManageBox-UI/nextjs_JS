"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8635],{18635:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(85893),o=r(66412),i=r(67294),a=r(12786),l=r(66388),u=r(41323);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=p({},l,{sources:p({},l.sources),layers:l.layers.slice()});function h(e){var t=c({},e),r=(0,i.useState)({latitude:37.78,longitude:-122.4,zoom:11,bearing:0,pitch:0}),l=r[0],s=r[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.ZP,p({},l,{mapStyle:d,onViewportChange:s,onClick:function(e){var t,r=null===(t=e.features)||void 0===t?void 0:t[0];if(r){var n=y((0,o.Z)(r),4),i=n[0],u=n[1],f=n[2],c=n[3],p=new a.DW(l).fitBounds([[i,u],[f,c]],{padding:40}),d=p.longitude,h=p.latitude,b=p.zoom;s({longitude:d,latitude:h,zoom:b,transitionInterpolator:new a.$3({around:[e.offsetCenter.x,e.offsetCenter.y]}),transitionDuration:1e3})}},interactiveLayerIds:["sf-neighborhoods-fill"]},t,{children:[(0,n.jsx)(u.jW,{}),(0,n.jsx)(u.Vv,{}),(0,n.jsx)(u.q1,{}),(0,n.jsx)(u.H8,{})]}))})}d.sources["sf-neighborhoods"]={type:"geojson",data:"https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/feature-example-sf.json"},d.layers.push({id:"sf-neighborhoods-fill",source:"sf-neighborhoods",type:"fill",paint:{"fill-outline-color":"#0040c8","fill-color":"#fff","fill-opacity":0}},{id:"sf-neighborhoods-outline",source:"sf-neighborhoods",type:"line",paint:{"line-width":2,"line-color":"#0080ef"}})}}]);