(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7913],{78445:function(r,e,t){"use strict";t.d(e,{Z:function(){return g}});var n=t(63366),a=t(87462),o=t(67294),i=t(86010),s=t(27192),l=t(15861),c=t(33616),u=t(11496),d=t(28979);function f(r){return(0,d.Z)("MuiCardHeader",r)}var v=(0,t(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=t(85893);const b=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],p=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(r,e)=>(0,a.Z)({[`& .${v.title}`]:e.title,[`& .${v.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),m=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(r,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),h=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(r,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(r,e)=>e.content})({flex:"1 1 auto"});var g=o.forwardRef((function(r,e){const t=(0,c.Z)({props:r,name:"MuiCardHeader"}),{action:o,avatar:u,className:d,component:v="div",disableTypography:g=!1,subheader:Z,subheaderTypographyProps:y,title:w,titleTypographyProps:P}=t,O=(0,n.Z)(t,b),k=(0,a.Z)({},t,{component:v,disableTypography:g}),C=(r=>{const{classes:e}=r;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},f,e)})(k);let S=w;null==S||S.type===l.Z||g||(S=(0,x.jsx)(l.Z,(0,a.Z)({variant:u?"body2":"h5",className:C.title,component:"span",display:"block"},P,{children:S})));let B=Z;return null==B||B.type===l.Z||g||(B=(0,x.jsx)(l.Z,(0,a.Z)({variant:u?"body2":"body1",className:C.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:B}))),(0,x.jsxs)(p,(0,a.Z)({className:(0,i.Z)(C.root,d),as:v,ref:e,ownerState:k},O,{children:[u&&(0,x.jsx)(m,{className:C.avatar,ownerState:k,children:u}),(0,x.jsxs)(j,{className:C.content,ownerState:k,children:[S,B]}),o&&(0,x.jsx)(h,{className:C.action,ownerState:k,children:o})]}))}))},81458:function(r,e,t){"use strict";t.d(e,{Z:function(){return I}});var n=t(63366),a=t(87462),o=t(67294),i=t(86010),s=t(27192),l=t(70917),c=t(41796),u=t(98216),d=t(2734),f=t(11496),v=t(33616),x=t(28979);function b(r){return(0,x.Z)("MuiLinearProgress",r)}(0,t(76087).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var p=t(85893);const m=["className","color","value","valueBuffer","variant"];let h,j,g,Z,y,w,P=r=>r;const O=(0,l.F4)(h||(h=P`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),k=(0,l.F4)(j||(j=P`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),C=(0,l.F4)(g||(g=P`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),S=(r,e)=>"inherit"===e?"currentColor":"light"===r.palette.mode?(0,c.$n)(r.palette[e].main,.62):(0,c._j)(r.palette[e].main,.5),B=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,u.Z)(t.color)}`],e[t.variant]]}})((({ownerState:r,theme:e})=>(0,a.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:S(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),R=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,u.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>{const t=S(e,r.color);return(0,a.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(Z||(Z=P`
    animation: ${0} 3s infinite linear;
  `),C)),_=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((({ownerState:r,theme:e})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":e.palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(y||(y=P`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),O))),q=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((({ownerState:r,theme:e})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":e.palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:S(e,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(w||(w=P`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),k)));var I=o.forwardRef((function(r,e){const t=(0,v.Z)({props:r,name:"MuiLinearProgress"}),{className:o,color:l="primary",value:c,valueBuffer:f,variant:x="indeterminate"}=t,h=(0,n.Z)(t,m),j=(0,a.Z)({},t,{color:l,variant:x}),g=(r=>{const{classes:e,variant:t,color:n}=r,a={root:["root",`color${(0,u.Z)(n)}`,t],dashed:["dashed",`dashedColor${(0,u.Z)(n)}`],bar1:["bar",`barColor${(0,u.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,u.Z)(n)}`,"buffer"===t&&`color${(0,u.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(a,b,e)})(j),Z=(0,d.Z)(),y={},w={bar1:{},bar2:{}};if("determinate"===x||"buffer"===x)if(void 0!==c){y["aria-valuenow"]=Math.round(c),y["aria-valuemin"]=0,y["aria-valuemax"]=100;let r=c-100;"rtl"===Z.direction&&(r=-r),w.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===x)if(void 0!==f){let r=(f||0)-100;"rtl"===Z.direction&&(r=-r),w.bar2.transform=`translateX(${r}%)`}else 0;return(0,p.jsxs)(B,(0,a.Z)({className:(0,i.Z)(g.root,o),ownerState:j,role:"progressbar"},y,{ref:e},h,{children:["buffer"===x?(0,p.jsx)(R,{className:g.dashed,ownerState:j}):null,(0,p.jsx)(_,{className:g.bar1,ownerState:j,style:w.bar1}),"determinate"===x?null:(0,p.jsx)(q,{className:g.bar2,ownerState:j,style:w.bar2})]}))}))},76271:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/progress",function(){return t(47814)}])},66723:function(r,e,t){"use strict";t.d(e,{Z:function(){return v}});var n=t(85893),a=t(45697),o=t.n(a),i=t(41664),s=t(15861),l=t(12963),c=t(87357),u=t(50122);function d(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function f(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}function v(r){var e=r.links,t=r.activeLast,a=void 0!==t&&t,o=f(r,["links","activeLast"]),i=e[e.length-1].name,u=e.map((function(r){return(0,n.jsx)(x,{link:r},r.name)})),v=e.map((function(r){return(0,n.jsx)("div",{children:r.name!==i?(0,n.jsx)(x,{link:r}):(0,n.jsx)(s.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:i})},r.name)}));return(0,n.jsx)(l.Z,function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})))),n.forEach((function(e){d(r,e,t[e])}))}return r}({separator:(0,n.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o,{children:a?u:v}))}function x(r){var e=r.link,t=e.href,a=void 0===t?"":t,o=e.name,s=e.icon;return(0,n.jsx)(i.default,{href:a,passHref:!0,children:(0,n.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,n.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),o]},o)})}v.propTypes={activeLast:o().bool,links:o().array.isRequired},x.propTypes={link:o().shape({href:o().string,icon:o().any,name:o().string})}},28729:function(r,e,t){"use strict";t.d(e,{Z:function(){return v}});var n=t(85893),a=t(45697),o=t.n(a),i=t(87357),s=t(15861),l=t(50122),c=t(66723);function u(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function d(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})))),n.forEach((function(e){u(r,e,t[e])}))}return r}function f(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}function v(r){var e=r.links,t=r.action,a=r.heading,o=r.moreLink,u=void 0===o?[]:o,v=r.sx,x=f(r,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:d({mb:5},v),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:a}),(0,n.jsx)(c.Z,d({links:e},x))]}),t&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:"string"===typeof u?(0,n.jsx)(l.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(r){return(0,n.jsx)(l.Z,{noWrap:!0,href:r,variant:"body2",target:"_blank",sx:{display:"table"},children:r},r)}))})]})}v.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},47814:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return O}});var n=t(85893),a=t(67294),o=t(11496),i=t(87357),s=t(27948),l=t(26447),c=t(58260),u=t(31896),d=t(78545),f=t(28729),v=t(45697),x=t.n(v),b=t(55113),p=t(81458),m=t(78672),h=t(63552),j={p:2,minHeight:160,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center","& > *":{m:1}};function g(r){var e=r.progress,t=r.buffer;return(0,n.jsxs)(m.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(h._,{title:"Linears Indeterminate"}),(0,n.jsx)(b.Z,{variant:"outlined",sx:j,children:(0,n.jsxs)(i.Z,{sx:{width:"100%"},children:[(0,n.jsx)(p.Z,{color:"inherit"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{})," ",(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{color:"secondary"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{color:"info"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{color:"success"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{color:"warning"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{color:"error"})]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(h._,{title:"Linears Determinate"}),(0,n.jsx)(b.Z,{variant:"outlined",sx:j,children:(0,n.jsxs)(i.Z,{sx:{width:"100%"},children:[(0,n.jsx)(p.Z,{variant:"determinate",value:e,color:"inherit"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"determinate",value:e}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"determinate",value:e,color:"secondary"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"determinate",value:e,color:"info"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"determinate",value:e,color:"success"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"determinate",value:e,color:"warning"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"determinate",value:e,color:"error"})]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(h._,{title:"Linears Buffer"}),(0,n.jsx)(b.Z,{variant:"outlined",sx:j,children:(0,n.jsxs)(i.Z,{sx:{width:"100%"},children:[(0,n.jsx)(p.Z,{variant:"buffer",value:e,valueBuffer:t,color:"inherit"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"buffer",value:e,valueBuffer:t}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"buffer",value:e,valueBuffer:t,color:"secondary"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"buffer",value:e,valueBuffer:t,color:"info"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"buffer",value:e,valueBuffer:t,color:"success"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"buffer",value:e,valueBuffer:t,color:"warning"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"buffer",value:e,valueBuffer:t,color:"error"})]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(h._,{title:"Linears Query"}),(0,n.jsx)(b.Z,{variant:"outlined",sx:j,children:(0,n.jsxs)(i.Z,{sx:{width:"100%"},children:[(0,n.jsx)(p.Z,{variant:"query",value:e,valueBuffer:t,color:"inherit"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"query",value:e,valueBuffer:t}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"query",value:e,valueBuffer:t,color:"secondary"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"query",value:e,valueBuffer:t,color:"info"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"query",value:e,valueBuffer:t,color:"success"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"query",value:e,valueBuffer:t,color:"warning"}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{variant:"query",value:e,valueBuffer:t,color:"error"})]})})]})]})}g.propTypes={buffer:x().number.isRequired,progress:x().number.isRequired};var Z=t(98456),y={minHeight:160,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center","& > *":{m:1}};function w(r){var e=r.progress;return(0,n.jsxs)(m.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(h._,{title:"Circular Indeterminate"}),(0,n.jsxs)(b.Z,{variant:"outlined",sx:y,children:[(0,n.jsx)(Z.Z,{color:"inherit"}),(0,n.jsx)(Z.Z,{}),(0,n.jsx)(Z.Z,{color:"secondary"}),(0,n.jsx)(Z.Z,{color:"info"}),(0,n.jsx)(Z.Z,{color:"success"}),(0,n.jsx)(Z.Z,{color:"warning"}),(0,n.jsx)(Z.Z,{color:"error"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(h._,{title:"Circular determinate"}),(0,n.jsxs)(b.Z,{variant:"outlined",sx:y,children:[(0,n.jsx)(Z.Z,{color:"info"}),(0,n.jsx)(Z.Z,{color:"info",variant:"determinate",value:25}),(0,n.jsx)(Z.Z,{color:"info",variant:"determinate",value:50}),(0,n.jsx)(Z.Z,{color:"info",variant:"determinate",value:75}),(0,n.jsx)(Z.Z,{color:"info",variant:"determinate",value:100}),(0,n.jsx)(Z.Z,{color:"info",variant:"determinate",value:e})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(h._,{title:"Circular Size"}),(0,n.jsxs)(b.Z,{variant:"outlined",sx:y,children:[(0,n.jsx)(Z.Z,{size:48,color:"info"}),(0,n.jsx)(Z.Z,{color:"info"}),(0,n.jsx)(Z.Z,{size:32,color:"info"}),(0,n.jsx)(Z.Z,{size:24,color:"info"})]})]})]})}w.propTypes={progress:x().number};var P=(0,o.ZP)("div")((function(r){var e=r.theme;return{paddingTop:e.spacing(11),paddingBottom:e.spacing(15)}}));function O(){var r=(0,a.useState)(0),e=r[0],t=r[1],o=(0,a.useState)(10),u=o[0],v=o[1];(0,a.useEffect)((function(){var r=setInterval((function(){t((function(r){if(100===r)return 0;var e=10*Math.random();return Math.min(r+e,100)}))}),500);return function(){clearInterval(r)}}),[]);var x=(0,a.useRef)((function(){}));return(0,a.useEffect)((function(){x.current=function(){if(e>100)t(0),v(10);else{var r=10*Math.random(),n=10*Math.random();t(e+r),v(e+r+n)}}})),(0,a.useEffect)((function(){var r=setInterval((function(){x.current()}),500);return function(){clearInterval(r)}}),[]),(0,n.jsx)(d.Z,{title:"Components: Progress",children:(0,n.jsxs)(P,{children:[(0,n.jsx)(i.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(r){return"light"===r.palette.mode?"grey.200":"grey.800"}},children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(f.Z,{heading:"Progress",links:[{name:"Components",href:c.ko.components},{name:"Progress"}],moreLink:"https://mui.com/components/progress"})})}),(0,n.jsx)(s.Z,{children:(0,n.jsxs)(l.Z,{spacing:5,children:[(0,n.jsx)(h.g,{title:"Circular",children:(0,n.jsx)(w,{progress:e})}),(0,n.jsx)(h.g,{title:"Linear",children:(0,n.jsx)(g,{progress:e,buffer:u})})]})})]})})}O.getLayout=function(r){return(0,n.jsx)(u.Z,{variant:"main",children:r})}},63552:function(r,e,t){"use strict";t.d(e,{g:function(){return v},_:function(){return x}});var n=t(85893),a=t(45697),o=t.n(a),i=t(41796),s=t(55113),l=t(78445),c=t(87357),u=t(15861);function d(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function f(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})))),n.forEach((function(e){d(r,e,t[e])}))}return r}function v(r){var e=r.title,t=r.sx,a=r.children;return(0,n.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(r){return(0,i.Fq)(r.palette.grey[500],.04)}},children:[e&&(0,n.jsx)(l.Z,{title:e}),(0,n.jsx)(c.Z,{sx:f({p:5,minHeight:180},t),children:a})]})}function x(r){var e=r.title;return(0,n.jsx)(u.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}v.propTypes={children:o().any.isRequired,sx:o().object,title:o().string},x.propTypes={title:o().string.isRequired}}},function(r){r.O(0,[3843,8607,4525,2392,1896,9774,2888,179],(function(){return e=76271,r(r.s=e);var e}));var e=r.O();_N_E=e}]);