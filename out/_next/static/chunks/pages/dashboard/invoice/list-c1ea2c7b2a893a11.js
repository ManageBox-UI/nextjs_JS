(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7661],{73303:function(e,t,n){var r=n(67206),i=n(67762);e.exports=function(e,t){return e&&e.length?i(e,r(t,2)):0}},39417:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/invoice/list",function(){return n(20107)}])},66723:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(85893),i=n(45697),o=n.n(i),l=n(41664),a=n(15861),c=n(12963),s=n(87357),u=n(50122);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h(e){var t=e.links,n=e.activeLast,i=void 0!==n&&n,o=f(e,["links","activeLast"]),l=t[t.length-1].name,u=t.map((function(e){return(0,r.jsx)(x,{link:e},e.name)})),h=t.map((function(e){return(0,r.jsx)("div",{children:e.name!==l?(0,r.jsx)(x,{link:e}):(0,r.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return(0,r.jsx)(c.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({separator:(0,r.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o,{children:i?u:h}))}function x(e){var t=e.link,n=t.href,i=void 0===n?"":n,o=t.name,a=t.icon;return(0,r.jsx)(l.default,{href:i,passHref:!0,children:(0,r.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,r.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),o]},o)})}h.propTypes={activeLast:o().bool,links:o().array.isRequired},x.propTypes={link:o().shape({href:o().string,icon:o().any,name:o().string})}},28729:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(85893),i=n(45697),o=n.n(i),l=n(87357),a=n(15861),c=n(50122),s=n(66723);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h(e){var t=e.links,n=e.action,i=e.heading,o=e.moreLink,u=void 0===o?[]:o,h=e.sx,x=f(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(l.Z,{sx:d({mb:5},h),children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,r.jsx)(s.Z,d({links:t},x))]}),n&&(0,r.jsx)(l.Z,{sx:{flexShrink:0},children:n})]}),(0,r.jsx)(l.Z,{sx:{mt:2},children:"string"===typeof u?(0,r.jsx)(c.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return(0,r.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}h.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},45390:function(e,t,n){"use strict";n.d(t,{ZP:function(){return i},sQ:function(){return l},fQ:function(){return a}});var r=n(67294);function i(e){var t=(0,r.useState)((null===e||void 0===e?void 0:e.defaultDense)||!1),n=t[0],i=t[1],o=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),l=o[0],a=o[1],c=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),s=c[0],u=c[1],d=(0,r.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),f=d[0],h=d[1],x=(0,r.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),p=x[0],v=x[1],g=(0,r.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),j=g[0],m=g[1];return{dense:n,order:s,page:f,setPage:h,orderBy:l,rowsPerPage:p,selected:j,setSelected:m,onSelectRow:function(e){console.log(e);var t=j.indexOf(e),n=[];-1===t?n=n.concat(j,e):0===t?n=n.concat(j.slice(1)):t===j.length-1?n=n.concat(j.slice(0,-1)):t>0&&(n=n.concat(j.slice(0,t),j.slice(t+1))),m(n)},onSelectAllRows:function(e,t){m(e?t:[])},onSort:function(e){""!==e&&(u(l===e&&"asc"===s?"desc":"asc"),a(e))},onChangePage:function(e,t){h(t)},onChangeDense:function(e){i(e.target.checked)},onChangeRowsPerPage:function(e){v(parseInt(e.target.value,10)),h(0)}}}function o(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function l(e,t){return"desc"===e?function(e,n){return o(e,n,t)}:function(e,n){return-o(e,n,t)}}function a(e,t,n){return e>0?Math.max(0,(1+e)*t-n):0}},11300:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67294);function i(e){var t=(0,r.useState)(e||""),n=t[0],i=t[1];return{currentTab:n,onChangeTab:function(e,t){i(t)},setCurrentTab:i}}},20107:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ae}});var r=n(85893),i=n(73303),o=n.n(i),l=n(67294),a=n(41664),c=n(11163),s=n(2734),u=n(27948),d=n(11057),f=n(66242),h=n(26447),x=n(67720),p=n(37023),v=n(40044),g=n(72882),j=n(34386),m=n(93946),b=n(7906),Z=n(295),y=n(87357),w=n(36125),S=n(50480),O=n(72852),P=n(58260),k=n(11300),D=n(73264),C=n(45390),R=n(63298),T=n(31896),E=n(78545),N=n(81772),I=n(21238),_=n(96559),L=n(28729),W=n(2643),F=n(45697),B=n.n(F),M=n(98456),z=n(15861),A=n(52281);function V(e){var t=e.title,n=e.total,i=e.icon,o=e.color,l=e.percent,a=e.price;return(0,r.jsxs)(h.Z,{direction:"row",alignItems:"center",justifyContent:"center",sx:{width:1,minWidth:200},children:[(0,r.jsxs)(h.Z,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[(0,r.jsx)(I.Z,{icon:i,sx:{color:o,width:24,height:24,position:"absolute"}}),(0,r.jsx)(M.Z,{variant:"determinate",value:l,size:56,thickness:4,sx:{color:o,opacity:.48}}),(0,r.jsx)(M.Z,{variant:"determinate",value:100,size:56,thickness:4,sx:{color:"grey.50016",position:"absolute",top:0,left:0,opacity:.48}})]}),(0,r.jsxs)(h.Z,{spacing:.5,sx:{ml:2},children:[(0,r.jsx)(z.Z,{variant:"h6",children:t}),(0,r.jsxs)(z.Z,{variant:"subtitle2",children:[(0,A.v1)(n)," ",(0,r.jsx)(y.Z,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"invoice"})]}),(0,r.jsx)(z.Z,{variant:"subtitle2",sx:{color:o},children:(0,A.e_)(a)})]})]})}V.propTypes={title:B().string,color:B().string,icon:B().string,percent:B().number,price:B().number,total:B().number};var H=n(68509),Q=n(53252),q=n(69368),U=n(50122),X=n(18972),G=n(77071),K=n(63304),$=n(68012);function J(e){var t=e.row,n=e.selected,i=e.onSelectRow,o=e.onViewRow,a=e.onEditRow,c=e.onDeleteRow,u=(0,s.Z)(),d=t.sent,f=t.invoiceNumber,x=t.createDate,p=t.dueDate,v=t.status,g=t.invoiceTo,j=t.totalPrice,m=(0,l.useState)(null),b=m[0],Z=m[1],y=function(){Z(null)};return(0,r.jsxs)(H.Z,{hover:!0,selected:n,children:[(0,r.jsx)(Q.Z,{padding:"checkbox",children:(0,r.jsx)(q.Z,{checked:n,onClick:i})}),(0,r.jsxs)(Q.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)($.Z,{alt:g.name,color:(0,K.Z)(g.name).color,sx:{mr:2},children:(0,K.Z)(g.name).name}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(z.Z,{variant:"subtitle2",noWrap:!0,children:g.name}),(0,r.jsx)(U.Z,{noWrap:!0,variant:"body2",onClick:o,sx:{color:"text.disabled",cursor:"pointer"},children:"INV-".concat(f)})]})]}),(0,r.jsx)(Q.Z,{align:"left",children:(0,G.Mu)(x)}),(0,r.jsx)(Q.Z,{align:"left",children:(0,G.Mu)(p)}),(0,r.jsx)(Q.Z,{align:"center",children:(0,A.e_)(j)}),(0,r.jsx)(Q.Z,{align:"center",sx:{textTransform:"capitalize"},children:d}),(0,r.jsx)(Q.Z,{align:"left",children:(0,r.jsx)(N.Z,{variant:"light"===u.palette.mode?"ghost":"filled",color:("paid"===v?"success":"unpaid"===v&&"warning")||"overdue"===v&&"error"||"default",sx:{textTransform:"capitalize"},children:v})}),(0,r.jsx)(Q.Z,{align:"right",children:(0,r.jsx)(W.V7,{open:b,onOpen:function(e){Z(e.currentTarget)},onClose:y,actions:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(X.Z,{onClick:function(){c(),y()},sx:{color:"error.main"},children:[(0,r.jsx)(I.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,r.jsxs)(X.Z,{onClick:function(){o(),y()},children:[(0,r.jsx)(I.Z,{icon:"eva:eye-fill"}),"View"]}),(0,r.jsxs)(X.Z,{onClick:function(){a(),y()},children:[(0,r.jsx)(I.Z,{icon:"eva:edit-fill"}),"Edit"]})]})})})]})}J.propTypes={row:B().object.isRequired,selected:B().bool,onSelectRow:B().func,onViewRow:B().func,onEditRow:B().func,onDeleteRow:B().func};var Y=n(50135),ee=n(87109),te=n(52377);function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ne(e,t,n[t])}))}return e}function ie(e){var t=e.optionsService,n=e.filterStartDate,i=e.filterEndDate,o=e.filterName,l=e.filterService,a=e.onFilterName,c=e.onFilterService,s=e.onFilterStartDate,u=e.onFilterEndDate;return(0,r.jsxs)(h.Z,{spacing:2,direction:{xs:"column",md:"row"},sx:{py:2.5,px:3},children:[(0,r.jsx)(Y.Z,{fullWidth:!0,select:!0,label:"Service type",value:l,onChange:c,SelectProps:{MenuProps:{sx:{"& .MuiPaper-root":{maxHeight:260}}}},sx:{maxWidth:{md:160},textTransform:"capitalize"},children:t.map((function(e){return(0,r.jsx)(X.Z,{value:e,sx:{mx:1,my:.5,borderRadius:.75,typography:"body2",textTransform:"capitalize"},children:e},e)}))}),(0,r.jsx)(te.M,{label:"Start date",value:n,onChange:s,renderInput:function(e){return(0,r.jsx)(Y.Z,re({},e,{fullWidth:!0,sx:{maxWidth:{md:160}}}))}}),(0,r.jsx)(te.M,{label:"End date",value:i,onChange:u,renderInput:function(e){return(0,r.jsx)(Y.Z,re({},e,{fullWidth:!0,sx:{maxWidth:{md:160}}}))}}),(0,r.jsx)(Y.Z,{fullWidth:!0,value:o,onChange:function(e){return a(e.target.value)},placeholder:"Search client or invoice number...",InputProps:{startAdornment:(0,r.jsx)(ee.Z,{position:"start",children:(0,r.jsx)(I.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}})]})}ie.propTypes={filterName:B().string,filterService:B().string,filterEndDate:B().instanceOf(Date),filterStartDate:B().instanceOf(Date),onFilterName:B().func,onFilterEndDate:B().func,onFilterService:B().func,onFilterStartDate:B().func,optionsService:B().arrayOf(B().string)};var oe=["all","full stack development","backend development","ui design","ui/ux design","front end development"],le=[{id:"invoiceNumber",label:"Client",align:"left"},{id:"createDate",label:"Create",align:"left"},{id:"dueDate",label:"Due",align:"left"},{id:"price",label:"Amount",align:"center",width:140},{id:"sent",label:"Sent",align:"center",width:140},{id:"status",label:"Status",align:"left"},{id:""}];function ae(){var e=(0,s.Z)(),t=(0,D.Z)().themeStretch,n=(0,c.useRouter)().push,i=(0,C.ZP)({defaultOrderBy:"createDate"}),T=i.dense,F=i.page,B=i.order,M=i.orderBy,z=i.rowsPerPage,A=i.setPage,H=i.selected,Q=i.setSelected,q=i.onSelectRow,U=i.onSelectAllRows,X=i.onSort,G=i.onChangeDense,K=i.onChangePage,$=i.onChangeRowsPerPage,Y=(0,l.useState)(R.Ot),ee=Y[0],te=Y[1],ne=(0,l.useState)(""),re=ne[0],ae=ne[1],ce=(0,l.useState)("all"),se=ce[0],ue=ce[1],de=(0,l.useState)(null),fe=de[0],he=de[1],xe=(0,l.useState)(null),pe=xe[0],ve=xe[1],ge=(0,k.Z)("all"),je=ge.currentTab,me=ge.onChangeTab,be=function(e){var t=e.tableData,n=e.comparator,r=e.filterName,i=e.filterStatus,o=e.filterService,l=e.filterStartDate,a=e.filterEndDate,c=t.map((function(e,t){return[e,t]}));c.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t=c.map((function(e){return e[0]})),r&&(t=t.filter((function(e){return-1!==e.invoiceNumber.toLowerCase().indexOf(r.toLowerCase())||-1!==e.invoiceTo.name.toLowerCase().indexOf(r.toLowerCase())})));"all"!==i&&(t=t.filter((function(e){return e.status===i})));"all"!==o&&(t=t.filter((function(e){return e.items.some((function(e){return e.service===o}))})));l&&a&&(t=t.filter((function(e){return e.createDate.getTime()>=l.getTime()&&e.createDate.getTime()<=a.getTime()})));return t}({tableData:ee,comparator:(0,C.sQ)(B,M),filterName:re,filterService:se,filterStatus:je,filterStartDate:fe,filterEndDate:pe}),Ze=T?56:76,ye=!be.length&&!!re||!be.length&&!!je||!be.length&&!!se||!be.length&&!!pe||!be.length&&!!fe,we=function(e){return ee.filter((function(t){return t.status===e})).length},Se=function(e){return o()(ee.filter((function(t){return t.status===e})),"totalPrice")},Oe=function(e){return we(e)/ee.length*100},Pe=[{value:"all",label:"All",color:"info",count:ee.length},{value:"paid",label:"Paid",color:"success",count:we("paid")},{value:"unpaid",label:"Unpaid",color:"warning",count:we("unpaid")},{value:"overdue",label:"Overdue",color:"error",count:we("overdue")},{value:"draft",label:"Draft",color:"default",count:we("draft")}];return(0,r.jsx)(E.Z,{title:"Invoice: List",children:(0,r.jsxs)(u.Z,{maxWidth:!t&&"lg",children:[(0,r.jsx)(L.Z,{heading:"Invoice List",links:[{name:"Dashboard",href:P.vB.root},{name:"Invoices",href:P.vB.invoice.root},{name:"List"}],action:(0,r.jsx)(a.default,{href:P.vB.invoice.new,passHref:!0,children:(0,r.jsx)(d.Z,{variant:"contained",startIcon:(0,r.jsx)(I.Z,{icon:"eva:plus-fill"}),children:"New Invoice"})})}),(0,r.jsx)(f.Z,{sx:{mb:5},children:(0,r.jsx)(_.Z,{children:(0,r.jsxs)(h.Z,{direction:"row",divider:(0,r.jsx)(x.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[(0,r.jsx)(V,{title:"Total",total:ee.length,percent:100,price:o()(ee,"totalPrice"),icon:"ic:round-receipt",color:e.palette.info.main}),(0,r.jsx)(V,{title:"Paid",total:we("paid"),percent:Oe("paid"),price:Se("paid"),icon:"eva:checkmark-circle-2-fill",color:e.palette.success.main}),(0,r.jsx)(V,{title:"Unpaid",total:we("unpaid"),percent:Oe("unpaid"),price:Se("unpaid"),icon:"eva:clock-fill",color:e.palette.warning.main}),(0,r.jsx)(V,{title:"Overdue",total:we("overdue"),percent:Oe("overdue"),price:Se("overdue"),icon:"eva:bell-fill",color:e.palette.error.main}),(0,r.jsx)(V,{title:"Draft",total:we("draft"),percent:Oe("draft"),price:Se("draft"),icon:"eva:file-fill",color:e.palette.text.secondary})]})})}),(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(p.Z,{allowScrollButtonsMobile:!0,variant:"scrollable",scrollButtons:"auto",value:je,onChange:me,sx:{px:2,bgcolor:"background.neutral"},children:Pe.map((function(e){return(0,r.jsx)(v.Z,{disableRipple:!0,value:e.value,icon:(0,r.jsxs)(N.Z,{color:e.color,children:[" ",e.count," "]}),label:e.label},e.value)}))}),(0,r.jsx)(x.Z,{}),(0,r.jsx)(ie,{filterName:re,filterService:se,filterStartDate:fe,filterEndDate:pe,onFilterName:function(e){ae(e),A(0)},onFilterService:function(e){ue(e.target.value)},onFilterStartDate:function(e){he(e)},onFilterEndDate:function(e){ve(e)},optionsService:oe}),(0,r.jsx)(_.Z,{children:(0,r.jsxs)(g.Z,{sx:{minWidth:800,position:"relative"},children:[H.length>0&&(0,r.jsx)(W.Nl,{dense:T,numSelected:H.length,rowCount:ee.length,onSelectAllRows:function(e){return U(e,ee.map((function(e){return e.id})))},actions:(0,r.jsxs)(h.Z,{spacing:1,direction:"row",children:[(0,r.jsx)(j.Z,{title:"Sent",children:(0,r.jsx)(m.Z,{color:"primary",children:(0,r.jsx)(I.Z,{icon:"ic:round-send"})})}),(0,r.jsx)(j.Z,{title:"Download",children:(0,r.jsx)(m.Z,{color:"primary",children:(0,r.jsx)(I.Z,{icon:"eva:download-outline"})})}),(0,r.jsx)(j.Z,{title:"Print",children:(0,r.jsx)(m.Z,{color:"primary",children:(0,r.jsx)(I.Z,{icon:"eva:printer-fill"})})}),(0,r.jsx)(j.Z,{title:"Delete",children:(0,r.jsx)(m.Z,{color:"primary",onClick:function(){return function(e){var t=ee.filter((function(t){return!e.includes(t.id)}));Q([]),te(t)}(H)},children:(0,r.jsx)(I.Z,{icon:"eva:trash-2-outline"})})})]})}),(0,r.jsxs)(b.Z,{size:T?"small":"medium",children:[(0,r.jsx)(W.K,{order:B,orderBy:M,headLabel:le,rowCount:ee.length,numSelected:H.length,onSort:X,onSelectAllRows:function(e){return U(e,ee.map((function(e){return e.id})))}}),(0,r.jsxs)(Z.Z,{children:[be.slice(F*z,F*z+z).map((function(e){return(0,r.jsx)(J,{row:e,selected:H.includes(e.id),onSelectRow:function(){return q(e.id)},onViewRow:function(){return t=e.id,void n(P.vB.invoice.view(t));var t},onEditRow:function(){return t=e.id,void n(P.vB.invoice.edit(t));var t},onDeleteRow:function(){return function(e){var t=ee.filter((function(t){return t.id!==e}));Q([]),te(t)}(e.id)}},e.id)})),(0,r.jsx)(W.$W,{height:Ze,emptyRows:(0,C.fQ)(F,z,ee.length)}),(0,r.jsx)(W.et,{isNotFound:ye})]})]})]})}),(0,r.jsxs)(y.Z,{sx:{position:"relative"},children:[(0,r.jsx)(w.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:be.length,rowsPerPage:z,page:F,onPageChange:K,onRowsPerPageChange:$}),(0,r.jsx)(S.Z,{control:(0,r.jsx)(O.Z,{checked:T,onChange:G}),label:"Dense",sx:{px:3,py:1.5,top:0,position:{md:"absolute"}}})]})]})]})})}ae.getLayout=function(e){return(0,r.jsx)(T.Z,{children:e})}}},function(e){e.O(0,[3843,8607,285,659,1570,65,2377,2392,1896,2643,9774,2888,179],(function(){return t=39417,e(e.s=t);var t}));var t=e.O();_N_E=t}]);