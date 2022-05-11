(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1920],{83257:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/user/list",function(){return t(91330)}])},91330:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return A}});var r=t(85893),l=t(34539),o=t(67294),i=t(41664),a=t(11163),s=t(27948),u=t(11057),c=t(66242),d=t(37023),f=t(40044),h=t(67720),g=t(72882),x=t(34386),p=t(93946),m=t(7906),j=t(295),v=t(87357),w=t(36125),Z=t(50480),b=t(72852),R=t(58260),S=t(11300),C=t(73264),P=t(45390),N=t(63298),_=t(57325),k=t(78545),y=t(21238),B=t(96559),D=t(28729),L=t(2643),E=t(67336),O=["all","active","banned"],T=["all","ux designer","full stack designer","backend developer","project manager","leader","ui designer","ui/ux designer","front end developer","full stack developer"],U=[{id:"name",label:"Name",align:"left"},{id:"company",label:"Company",align:"left"},{id:"role",label:"Role",align:"left"},{id:"isVerified",label:"Verified",align:"center"},{id:"status",label:"Status",align:"left"},{id:""}];function A(){var e=(0,P.ZP)(),n=e.dense,t=e.page,_=e.order,A=e.orderBy,F=e.rowsPerPage,W=e.setPage,X=e.selected,z=e.setSelected,Q=e.onSelectRow,V=e.onSelectAllRows,H=e.onSort,I=e.onChangeDense,K=e.onChangePage,M=e.onChangeRowsPerPage,$=(0,C.Z)().themeStretch,q=(0,a.useRouter)().push,G=(0,o.useState)(N.Xz),J=G[0],Y=G[1],ee=(0,o.useState)(""),ne=ee[0],te=ee[1],re=(0,o.useState)("all"),le=re[0],oe=re[1],ie=(0,S.Z)("all"),ae=ie.currentTab,se=ie.onChangeTab,ue=function(e){var n=e.tableData,t=e.comparator,r=e.filterName,l=e.filterStatus,o=e.filterRole,i=n.map((function(e,n){return[e,n]}));i.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n=i.map((function(e){return e[0]})),r&&(n=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())})));"all"!==l&&(n=n.filter((function(e){return e.status===l})));"all"!==o&&(n=n.filter((function(e){return e.role===o})));return n}({tableData:J,comparator:(0,P.sQ)(_,A),filterName:ne,filterRole:le,filterStatus:ae}),ce=n?52:72,de=!ue.length&&!!ne||!ue.length&&!!le||!ue.length&&!!ae;return(0,r.jsx)(k.Z,{title:"User: List",children:(0,r.jsxs)(s.Z,{maxWidth:!$&&"lg",children:[(0,r.jsx)(D.Z,{heading:"User List",links:[{name:"Dashboard",href:R.vB.root},{name:"User",href:R.vB.user.root},{name:"List"}],action:(0,r.jsx)(i.default,{href:R.vB.user.new,passHref:!0,children:(0,r.jsx)(u.Z,{variant:"contained",startIcon:(0,r.jsx)(y.Z,{icon:"eva:plus-fill"}),children:"New User"})})}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{allowScrollButtonsMobile:!0,variant:"scrollable",scrollButtons:"auto",value:ae,onChange:se,sx:{px:2,bgcolor:"background.neutral"},children:O.map((function(e){return(0,r.jsx)(f.Z,{disableRipple:!0,label:e,value:e},e)}))}),(0,r.jsx)(h.Z,{}),(0,r.jsx)(E.N,{filterName:ne,filterRole:le,onFilterName:function(e){te(e),W(0)},onFilterRole:function(e){oe(e.target.value)},optionsRole:T}),(0,r.jsx)(B.Z,{children:(0,r.jsxs)(g.Z,{sx:{minWidth:800,position:"relative"},children:[X.length>0&&(0,r.jsx)(L.Nl,{dense:n,numSelected:X.length,rowCount:J.length,onSelectAllRows:function(e){return V(e,J.map((function(e){return e.id})))},actions:(0,r.jsx)(x.Z,{title:"Delete",children:(0,r.jsx)(p.Z,{color:"primary",onClick:function(){return function(e){var n=J.filter((function(n){return!e.includes(n.id)}));z([]),Y(n)}(X)},children:(0,r.jsx)(y.Z,{icon:"eva:trash-2-outline"})})})}),(0,r.jsxs)(m.Z,{size:n?"small":"medium",children:[(0,r.jsx)(L.K,{order:_,orderBy:A,headLabel:U,rowCount:J.length,numSelected:X.length,onSort:H,onSelectAllRows:function(e){return V(e,J.map((function(e){return e.id})))}}),(0,r.jsxs)(j.Z,{children:[ue.slice(t*F,t*F+F).map((function(e){return(0,r.jsx)(E.Z,{row:e,selected:X.includes(e.id),onSelectRow:function(){return Q(e.id)},onDeleteRow:function(){return function(e){var n=J.filter((function(n){return n.id!==e}));z([]),Y(n)}(e.id)},onEditRow:function(){return n=e.name,void q(R.vB.user.edit((0,l.o)(n)));var n}},e.id)})),(0,r.jsx)(L.$W,{height:ce,emptyRows:(0,P.fQ)(t,F,J.length)}),(0,r.jsx)(L.et,{isNotFound:de})]})]})]})}),(0,r.jsxs)(v.Z,{sx:{position:"relative"},children:[(0,r.jsx)(w.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ue.length,rowsPerPage:F,page:t,onPageChange:K,onRowsPerPageChange:M}),(0,r.jsx)(Z.Z,{control:(0,r.jsx)(b.Z,{checked:n,onChange:I}),label:"Dense",sx:{px:3,py:1.5,top:0,position:{md:"absolute"}}})]})]})]})})}A.getLayout=function(e){return(0,r.jsx)(_.Z,{children:e})}}},function(e){e.O(0,[5434,2381,285,659,65,2392,7325,2643,9963,9774,2888,179],(function(){return n=83257,e(e.s=n);var n}));var n=e.O();_N_E=n}]);