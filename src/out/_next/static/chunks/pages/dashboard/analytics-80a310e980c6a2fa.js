(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5041],{86556:function(e,t,n){var r=n(89465),i=n(77813);e.exports=function(e,t,n){(void 0!==n&&!i(e[t],n)||void 0===n&&!(t in e))&&r(e,t,n)}},42980:function(e,t,n){var r=n(46384),i=n(86556),a=n(28483),l=n(59783),o=n(13218),s=n(81704),c=n(36390);e.exports=function e(t,n,u,d,f){t!==n&&a(n,(function(a,s){if(f||(f=new r),o(a))l(t,n,s,u,e,d,f);else{var m=d?d(c(t,s),a,s+"",t,n,f):void 0;void 0===m&&(m=a),i(t,s,m)}}),s)}},59783:function(e,t,n){var r=n(86556),i=n(64626),a=n(77133),l=n(278),o=n(38517),s=n(35694),c=n(1469),u=n(29246),d=n(44144),f=n(23560),m=n(13218),h=n(68630),x=n(36719),v=n(36390),p=n(59881);e.exports=function(e,t,n,b,y,g,j){var S=v(e,n),Z=v(t,n),w=j.get(Z);if(w)r(e,n,w);else{var P=g?g(S,Z,n+"",e,t,j):void 0,_=void 0===P;if(_){var A=c(Z),C=!A&&d(Z),O=!A&&!C&&x(Z);P=Z,A||C||O?c(S)?P=S:u(S)?P=l(S):C?(_=!1,P=i(Z,!0)):O?(_=!1,P=a(Z,!0)):P=[]:h(Z)||s(Z)?(P=S,s(S)?P=p(S):m(S)&&!f(S)||(P=o(Z))):_=!1}_&&(j.set(Z,P),y(P,Z,b,g,j),j.delete(Z)),r(e,n,P)}}},5976:function(e,t,n){var r=n(6557),i=n(45357),a=n(30061);e.exports=function(e,t){return a(i(e,t,r),e+"")}},21463:function(e,t,n){var r=n(5976),i=n(16612);e.exports=function(e){return r((function(t,n){var r=-1,a=n.length,l=a>1?n[a-1]:void 0,o=a>2?n[2]:void 0;for(l=e.length>3&&"function"==typeof l?(a--,l):void 0,o&&i(n[0],n[1],o)&&(l=a<3?void 0:l,a=1),t=Object(t);++r<a;){var s=n[r];s&&e(t,s,r,l)}return t}))}},16612:function(e,t,n){var r=n(77813),i=n(98612),a=n(65776),l=n(13218);e.exports=function(e,t,n){if(!l(n))return!1;var o=typeof t;return!!("number"==o?i(n)&&a(t,n.length):"string"==o&&t in n)&&r(n[t],e)}},36390:function(e){e.exports=function(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}},29246:function(e,t,n){var r=n(98612),i=n(37005);e.exports=function(e){return i(e)&&r(e)}},82492:function(e,t,n){var r=n(42980),i=n(21463)((function(e,t,n){r(e,t,n)}));e.exports=i},59881:function(e,t,n){var r=n(98363),i=n(81704);e.exports=function(e){return r(e,i(e))}},5492:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/analytics",function(){return n(10189)}])},10189:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(85893),i=n(2734),a=n(27948),l=n(15861),o=n(86886),s=n(73264),c=n(57325),u=n(63298),d=n(78545),f=n(42482);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(){var e=(0,i.Z)(),t=(0,s.Z)().themeStretch;return(0,r.jsx)(d.Z,{title:"General: Analytics",children:(0,r.jsxs)(a.Z,{maxWidth:!t&&"xl",children:[(0,r.jsx)(l.Z,{variant:"h4",sx:{mb:5},children:"Hi, Welcome back"}),(0,r.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,r.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(f.Oz,{title:"Weekly Sales",total:714e3,icon:"ant-design:android-filled"})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(f.Oz,{title:"New Users",total:1352831,color:"info",icon:"ant-design:apple-filled"})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(f.Oz,{title:"Item Orders",total:1723315,color:"warning",icon:"ant-design:windows-filled"})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(f.Oz,{title:"Bug Reports",total:234,color:"error",icon:"ant-design:bug-filled"})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,r.jsx)(f.wG,{title:"Website Visits",subheader:"(+43%) than last year",chartLabels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],chartData:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,r.jsx)(f.Zv,{title:"Current Visits",chartData:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}],chartColors:[e.palette.primary.main,e.palette.chart.blue[0],e.palette.chart.violet[0],e.palette.chart.yellow[0]]})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,r.jsx)(f.lb,{title:"Conversion Rates",subheader:"(+43%) than last year",chartData:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,r.jsx)(f.hv,{title:"Current Subject",chartLabels:["English","History","Physics","Geography","Chinese","Math"],chartData:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}],chartColors:h(Array(6)).map((function(){return e.palette.text.secondary}))})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,r.jsx)(f.QJ,{title:"News Update",list:u.SH})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,r.jsx)(f.BP,{title:"Order Timeline",list:u.ZP})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,r.jsx)(f.BR,{title:"Traffic by Site",list:u.$O})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,r.jsx)(f.vS,{title:"Tasks",list:[{id:"1",label:"Create FireStone Logo"},{id:"2",label:"Add SCSS and JS files if required"},{id:"3",label:"Stakeholder Meeting"},{id:"4",label:"Scoping & Estimations"},{id:"5",label:"Sprint Showcase"}]})})]})]})})}x.getLayout=function(e){return(0,r.jsx)(c.Z,{children:e})}}},function(e){e.O(0,[5434,2381,3140,2392,7325,2482,9774,2888,179],(function(){return t=5492,e(e.s=t);var t}));var t=e.O();_N_E=t}]);