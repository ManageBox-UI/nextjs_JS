(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8409],{67070:function(e,n,t){"use strict";t(67294);var r=t(82066),i=t(85893);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},56686:function(e,n,t){"use strict";t(67294);var r=t(82066),i=t(85893);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},16636:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/e-commerce/list",function(){return t(15893)}])},66723:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(85893),i=t(45697),o=t.n(i),c=t(41664),a=t(15861),l=t(12963),s=t(87357),u=t(50122);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function h(e){var n=e.links,t=e.activeLast,i=void 0!==t&&t,o=f(e,["links","activeLast"]),c=n[n.length-1].name,u=n.map((function(e){return(0,r.jsx)(p,{link:e},e.name)})),h=n.map((function(e){return(0,r.jsx)("div",{children:e.name!==c?(0,r.jsx)(p,{link:e}):(0,r.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,r.jsx)(l.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}({separator:(0,r.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o,{children:i?u:h}))}function p(e){var n=e.link,t=n.href,i=void 0===t?"":t,o=n.name,a=n.icon;return(0,r.jsx)(c.default,{href:i,passHref:!0,children:(0,r.jsxs)(u.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,r.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),o]},o)})}h.propTypes={activeLast:o().bool,links:o().array.isRequired},p.propTypes={link:o().shape({href:o().string,icon:o().any,name:o().string})}},28729:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(85893),i=t(45697),o=t.n(i),c=t(87357),a=t(15861),l=t(50122),s=t(66723);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function f(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function h(e){var n=e.links,t=e.action,i=e.heading,o=e.moreLink,u=void 0===o?[]:o,h=e.sx,p=f(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(c.Z,{sx:d({mb:5},h),children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(c.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,r.jsx)(s.Z,d({links:n},p))]}),t&&(0,r.jsx)(c.Z,{sx:{flexShrink:0},children:t})]}),(0,r.jsx)(c.Z,{sx:{mt:2},children:"string"===typeof u?(0,r.jsx)(l.Z,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return(0,r.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}h.propTypes={links:o().array,action:o().node,heading:o().string.isRequired,moreLink:o().oneOfType([o().string,o().array]),sx:o().object}},45390:function(e,n,t){"use strict";t.d(n,{ZP:function(){return i},sQ:function(){return c},fQ:function(){return a}});var r=t(67294);function i(e){var n=(0,r.useState)((null===e||void 0===e?void 0:e.defaultDense)||!1),t=n[0],i=n[1],o=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),c=o[0],a=o[1],l=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),s=l[0],u=l[1],d=(0,r.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),f=d[0],h=d[1],p=(0,r.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),x=p[0],g=p[1],m=(0,r.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),v=m[0],j=m[1];return{dense:t,order:s,page:f,setPage:h,orderBy:c,rowsPerPage:x,selected:v,setSelected:j,onSelectRow:function(e){var n=v.indexOf(e),t=[];-1===n?t=t.concat(v,e):0===n?t=t.concat(v.slice(1)):n===v.length-1?t=t.concat(v.slice(0,-1)):n>0&&(t=t.concat(v.slice(0,n),v.slice(n+1))),j(t)},onSelectAllRows:function(e,n){j(e?n:[])},onSort:function(e){""!==e&&(u(c===e&&"asc"===s?"desc":"asc"),a(e))},onChangePage:function(e,n){h(n)},onChangeDense:function(e){i(e.target.checked)},onChangeRowsPerPage:function(e){g(parseInt(e.target.value,10)),h(0)}}}function o(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function c(e,n){return"desc"===e?function(e,t){return o(e,t,n)}:function(e,t){return-o(e,t,n)}}function a(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}},15893:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return J}});var r=t(85893),i=t(34539),o=t(67294),c=t(41664),a=t(11163),l=t(27948),s=t(11057),u=t(66242),d=t(72882),f=t(34386),h=t(93946),p=t(7906),x=t(295),g=t(87357),m=t(36125),v=t(50480),j=t(72852),y=t(96242),b=t(16669),w=t(58260),Z=t(73264),O=t(45390),P=t(57325),S=t(78545),k=t(21238),C=t(96559),R=t(28729),E=t(2643),A=t(45697),L=t.n(A),_=t(49933),N=t(2734),D=t(68509),I=t(53252),T=t(69368),B=t(15861),F=t(18972),M=t(77071),W=t(52281),z=t(81772),Q=t(84575);function G(e){var n=e.row,t=e.selected,i=e.onEditRow,c=e.onSelectRow,a=e.onDeleteRow,l=(0,N.Z)(),s=n.name,u=n.cover,d=n.createdAt,f=n.inventoryType,h=n.price,p=(0,o.useState)(null),x=p[0],g=p[1],m=function(){g(null)};return(0,r.jsxs)(D.Z,{hover:!0,selected:t,children:[(0,r.jsx)(I.Z,{padding:"checkbox",children:(0,r.jsx)(T.Z,{checked:t,onClick:c})}),(0,r.jsxs)(I.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(Q.Z,{disabledEffect:!0,alt:s,src:u,sx:{borderRadius:1.5,width:48,height:48,mr:2}}),(0,r.jsx)(B.Z,{variant:"subtitle2",noWrap:!0,children:s})]}),(0,r.jsx)(I.Z,{children:(0,M.Mu)(d)}),(0,r.jsx)(I.Z,{align:"center",children:(0,r.jsx)(z.Z,{variant:"light"===l.palette.mode?"ghost":"filled",color:("out_of_stock"===f?"error":"low_stock"===f&&"warning")||"success",sx:{textTransform:"capitalize"},children:f?(0,_.G)(f):""})}),(0,r.jsx)(I.Z,{align:"right",children:(0,W.e_)(h)}),(0,r.jsx)(I.Z,{align:"right",children:(0,r.jsx)(E.V7,{open:x,onOpen:function(e){g(e.currentTarget)},onClose:m,actions:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(F.Z,{onClick:function(){a(),m()},sx:{color:"error.main"},children:[(0,r.jsx)(k.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,r.jsxs)(F.Z,{onClick:function(){i(),m()},children:[(0,r.jsx)(k.Z,{icon:"eva:edit-fill"}),"Edit"]})]})})})]})}G.propTypes={row:L().object,selected:L().bool,onEditRow:L().func,onSelectRow:L().func,onDeleteRow:L().func};var H=t(26447),K=t(50135),X=t(87109);function q(e){var n=e.filterName,t=e.onFilterName;return(0,r.jsxs)(H.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2.5,px:3},children:[(0,r.jsx)(K.Z,{value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search product...",InputProps:{startAdornment:(0,r.jsx)(X.Z,{position:"start",children:(0,r.jsx)(k.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}}),(0,r.jsx)(f.Z,{title:"Filter list",children:(0,r.jsx)(h.Z,{children:(0,r.jsx)(k.Z,{icon:"ic:round-filter-list"})})})]})}function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function U(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return $(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}q.propTypes={filterName:L().string,onFilterName:L().func};var V=[{id:"name",label:"Product",align:"left"},{id:"createdAt",label:"Create at",align:"left"},{id:"inventoryType",label:"Status",align:"center",width:180},{id:"price",label:"Price",align:"right"},{id:""}];function J(){var e=(0,O.ZP)({defaultOrderBy:"createdAt"}),n=e.dense,t=e.page,P=e.order,A=e.orderBy,L=e.rowsPerPage,_=e.setPage,N=e.selected,D=e.setSelected,I=e.onSelectRow,T=e.onSelectAllRows,B=e.onSort,F=e.onChangeDense,M=e.onChangePage,W=e.onChangeRowsPerPage,z=(0,Z.Z)().themeStretch,Q=(0,a.useRouter)().push,H=(0,y.I0)(),K=(0,y.v9)((function(e){return e.product})),X=K.products,$=K.isLoading,J=(0,o.useState)([]),Y=J[0],ee=J[1],ne=(0,o.useState)(""),te=ne[0],re=ne[1];(0,o.useEffect)((function(){H((0,b.Xp)())}),[H]),(0,o.useEffect)((function(){X.length&&ee(X)}),[X]);var ie=function(e){var n=e.tableData,t=e.comparator,r=e.filterName,i=n.map((function(e,n){return[e,n]}));i.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n=i.map((function(e){return e[0]})),r&&(n=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())})));return n}({tableData:Y,comparator:(0,O.sQ)(P,A),filterName:te}),oe=n?60:80,ce=!ie.length&&!!te||!$&&!ie.length;return(0,r.jsx)(S.Z,{title:"Ecommerce: Product List",children:(0,r.jsxs)(l.Z,{maxWidth:!z&&"lg",children:[(0,r.jsx)(R.Z,{heading:"Product List",links:[{name:"Dashboard",href:w.vB.root},{name:"E-Commerce",href:w.vB.eCommerce.root},{name:"Product List"}],action:(0,r.jsx)(c.default,{href:w.vB.eCommerce.new,passHref:!0,children:(0,r.jsx)(s.Z,{variant:"contained",startIcon:(0,r.jsx)(k.Z,{icon:"eva:plus-fill"}),children:"New Product"})})}),(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(q,{filterName:te,onFilterName:function(e){re(e),_(0)}}),(0,r.jsx)(C.Z,{children:(0,r.jsxs)(d.Z,{sx:{minWidth:960,position:"relative"},children:[N.length>0&&(0,r.jsx)(E.Nl,{dense:n,numSelected:N.length,rowCount:Y.length,onSelectAllRows:function(e){return T(e,Y.map((function(e){return e.id})))},actions:(0,r.jsx)(f.Z,{title:"Delete",children:(0,r.jsx)(h.Z,{color:"primary",onClick:function(){return function(e){var n=Y.filter((function(n){return!e.includes(n.id)}));D([]),ee(n)}(N)},children:(0,r.jsx)(k.Z,{icon:"eva:trash-2-outline"})})})}),(0,r.jsxs)(p.Z,{size:n?"small":"medium",children:[(0,r.jsx)(E.K,{order:P,orderBy:A,headLabel:V,rowCount:Y.length,numSelected:N.length,onSort:B,onSelectAllRows:function(e){return T(e,Y.map((function(e){return e.id})))}}),(0,r.jsxs)(x.Z,{children:[($?U(Array(L)):ie).slice(t*L,t*L+L).map((function(e,n){return e?(0,r.jsx)(G,{row:e,selected:N.includes(e.id),onSelectRow:function(){return I(e.id)},onDeleteRow:function(){return function(e){var n=Y.filter((function(n){return n.id!==e}));D([]),ee(n)}(e.id)},onEditRow:function(){return n=e.name,void Q(w.vB.eCommerce.edit((0,i.o)(n)));var n}},e.id):!ce&&(0,r.jsx)(E.hM,{sx:{height:oe}},n)})),(0,r.jsx)(E.$W,{height:oe,emptyRows:(0,O.fQ)(t,L,Y.length)}),(0,r.jsx)(E.et,{isNotFound:ce})]})]})]})}),(0,r.jsxs)(g.Z,{sx:{position:"relative"},children:[(0,r.jsx)(m.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ie.length,rowsPerPage:L,page:t,onPageChange:M,onRowsPerPageChange:W}),(0,r.jsx)(v.Z,{control:(0,r.jsx)(j.Z,{checked:n,onChange:F}),label:"Dense",sx:{px:3,py:1.5,top:0,position:{md:"absolute"}}})]})]})]})})}J.getLayout=function(e){return(0,r.jsx)(P.Z,{children:e})}},34539:function(e,n,t){"use strict";t.d(n,{o:function(){return o}});var r=t(70655),i=t(1902);function o(e,n){return void 0===n&&(n={}),function(e,n){return void 0===n&&(n={}),(0,i.B)(e,(0,r.pi)({delimiter:"."},n))}(e,(0,r.pi)({delimiter:"-"},n))}},49933:function(e,n,t){"use strict";t.d(n,{G:function(){return a}});var r=t(70655),i=t(1902),o=t(38366);function c(e,n){var t=e.toLowerCase();return 0===n?(0,o.l)(t):t}function a(e,n){return void 0===n&&(n={}),(0,i.B)(e,(0,r.pi)({delimiter:" ",transform:c},n))}}},function(e){e.O(0,[5434,2381,659,65,2392,7325,2643,9774,2888,179],(function(){return n=16636,e(e.s=n);var n}));var n=e.O();_N_E=n}]);