(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8835],{44267:function(t,e,r){"use strict";r.d(e,{Z:function(){return p}});var a=r(87462),n=r(63366),i=r(67294),l=r(86010),d=r(27192),o=r(11496),s=r(33616),c=r(28979);function u(t){return(0,c.Z)("MuiCardContent",t)}(0,r(76087).Z)("MuiCardContent",["root"]);var h=r(85893);const f=["className","component"],x=(0,o.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var p=i.forwardRef((function(t,e){const r=(0,s.Z)({props:t,name:"MuiCardContent"}),{className:i,component:o="div"}=r,c=(0,n.Z)(r,f),p=(0,a.Z)({},r,{component:o}),m=(t=>{const{classes:e}=t;return(0,d.Z)({root:["root"]},u,e)})(p);return(0,h.jsx)(x,(0,a.Z)({as:o,className:(0,l.Z)(m.root,i),ownerState:p,ref:e},c))}))},89881:function(t,e,r){var a=r(47816),n=r(99291)(a);t.exports=n},69199:function(t,e,r){var a=r(89881),n=r(98612);t.exports=function(t,e){var r=-1,i=n(t)?Array(t.length):[];return a(t,(function(t,a,n){i[++r]=e(t,a,n)})),i}},82689:function(t,e,r){var a=r(29932),n=r(97786),i=r(67206),l=r(69199),d=r(71131),o=r(7518),s=r(85022),c=r(6557),u=r(1469);t.exports=function(t,e,r){e=e.length?a(e,(function(t){return u(t)?function(e){return n(e,1===t.length?t[0]:t)}:t})):[c];var h=-1;e=a(e,o(i));var f=l(t,(function(t,r,n){return{criteria:a(e,(function(e){return e(t)})),index:++h,value:t}}));return d(f,(function(t,e){return s(t,e,r)}))}},71131:function(t){t.exports=function(t,e){var r=t.length;for(t.sort(e);r--;)t[r]=t[r].value;return t}},26393:function(t,e,r){var a=r(33448);t.exports=function(t,e){if(t!==e){var r=void 0!==t,n=null===t,i=t===t,l=a(t),d=void 0!==e,o=null===e,s=e===e,c=a(e);if(!o&&!c&&!l&&t>e||l&&d&&s&&!o&&!c||n&&d&&s||!r&&s||!i)return 1;if(!n&&!l&&!c&&t<e||c&&r&&i&&!n&&!l||o&&r&&i||!d&&i||!s)return-1}return 0}},85022:function(t,e,r){var a=r(26393);t.exports=function(t,e,r){for(var n=-1,i=t.criteria,l=e.criteria,d=i.length,o=r.length;++n<d;){var s=a(i[n],l[n]);if(s)return n>=o?s:s*("desc"==r[n]?-1:1)}return t.index-e.index}},99291:function(t,e,r){var a=r(98612);t.exports=function(t,e){return function(r,n){if(null==r)return r;if(!a(r))return t(r,n);for(var i=r.length,l=e?i:-1,d=Object(r);(e?l--:++l<i)&&!1!==n(d[l],l,d););return r}}},75472:function(t,e,r){var a=r(82689),n=r(1469);t.exports=function(t,e,r,i){return null==t?[]:(n(e)||(e=null==e?[]:[e]),n(r=i?void 0:r)||(r=null==r?[]:[r]),a(t,e,r))}},6859:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/app",function(){return r(79617)}])},79617:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Z}});var a=r(85893),n=r(2734),i=r(27948),l=r(86886),d=r(17288),o=r(73264),s=r(57325),c=r(63298),u=r(78545),h=r(13693),f=r(48636),x=r(42482),p=(r(99854),r(9669)),m=r.n(p),v=r(67294),g=r(8100);function Z(){(0,d.Z)().user;var t=(0,n.Z)(),e=(0,o.Z)().themeStretch,r=function(t){return m().get(t,{header:{Authontication:"Bearer"+localStorage.getItem("accessToken")}}).then((function(t){return t.data}))},s=(0,g.ZP)("".concat("https://13.79.156.47:8002","/services/GetWidgetContent?WidgetId=ToplamAtm"),r),p=s.data,Z=(s.error,(0,g.ZP)("https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=IzlenenAtm",r)),C=Z.data,b=(Z.error,(0,g.ZP)("https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=CevrimiciAtm",r)),P=b.data,j=(b.error,(0,g.ZP)("https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=AlarmCount",r)),W=j.data,I=(j.error,(0,g.ZP)("https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=Ayd%C4%B1nlatmaBarGraph",r)),_=I.data,D=(I.error,(0,g.ZP)("https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=Ayd%C4%B1nlatmaDurumuPieChart",r)),G=D.data,A=(D.error,(0,g.ZP)("https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=HarcananEnerjiLineChart",r)),w=A.data,y=(A.error,(0,g.ZP)("https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=UpsDurumuProgress",r)),N=y.data,E=(y.error,(0,g.ZP)("https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=Ayd%C4%B1nlatmaDurumuProgress",r)),M=E.data,B=(E.error,(0,g.ZP)("https://13.79.156.47:8002/services/GetWidgetContent?WidgetId=KlimaDurumuProgress",r)),k=B.data,X=B.error;return(0,v.useEffect)((function(){console.log(k),console.log(X)}),[k,X]),(0,a.jsx)(u.Z,{title:"General: App",children:(0,a.jsx)(i.Z,{maxWidth:!e&&"xl",children:(0,a.jsxs)(l.ZP,{container:!0,spacing:3,children:[p?(0,a.jsx)(l.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(h.xq,{title:p.label||"",total:p.data.field,chartColor:t.palette.chart.red[0],chartData:[8,9,31,8,16,37,8,33,46,31],subheader:p.data.desc})}):null,C?(0,a.jsx)(l.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(h.xq,{title:C.label,total:C.data.field,chartColor:t.palette.chart.red[0],chartData:[8,9,31,8,16,37,8,33,46,31],subheader:C.data.desc})}):null,P?(0,a.jsx)(l.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(h.xq,{title:P.label,total:P.data.field,chartColor:t.palette.chart.red[0],chartData:[8,9,31,8,16,37,8,33,46,31],subheader:P.data.desc})}):null,W?(0,a.jsx)(l.ZP,{item:!0,xs:12,md:3,children:(0,a.jsx)(h.xq,{title:W.label,total:W.data.field,chartColor:t.palette.chart.red[0],chartData:[8,9,31,8,16,37,8,33,46,31],subheader:W.data.desc})}):null,_?(0,a.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(f._A,{title:_.label,data:_.data})}):null,w?(0,a.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(f.dr,{title:w.label,total:w.data.title,percent:w.data.percent,chartData:[111,136,76,108,74,54,57,84],subheader:w.data.period})}):null,G?(0,a.jsx)(l.ZP,{item:!0,xs:12,md:4,lg:4,children:(0,a.jsx)(x.Zv,{title:G.label,chartData:G.data,chartColors:[t.palette.primary.main,t.palette.chart.blue[0],t.palette.chart.violet[0],t.palette.chart.yellow[0]]})}):null,N?(0,a.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(f.XM,{title:N.label,data:N.data,subheader:N.desc})}):null,M?(0,a.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(f.XM,{title:M.label,data:M.data,subheader:M.desc})}):null,k?(0,a.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(f.XM,{title:k.label,data:k.data,subheader:k.desc})}):null,(0,a.jsx)(l.ZP,{item:!0,xs:12,lg:14,children:(0,a.jsx)(h.H$,{title:"New Invoice",tableData:c.fY,tableLabels:[{id:"id",label:"Invoice ID"},{id:"category",label:"Category"},{id:"price",label:"Price"},{id:"status",label:"Status"},{id:""}]})})]})})})}Z.getLayout=function(t){return(0,a.jsx)(s.Z,{children:t})}}},function(t){t.O(0,[5434,6886,1033,659,6066,1440,6060,8119,7773,2392,7325,2643,3693,8636,2482,9774,2888,179],(function(){return e=6859,t(t.s=e);var e}));var e=t.O();_N_E=e}]);