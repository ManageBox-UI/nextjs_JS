(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8252],{85553:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment",function(){return r(35794)}])},35794:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return H}});var i=r(85893),t=r(11496),s=r(27948),a=r(87357),l=r(15861),c=r(86886),o=r(56687),d=r(31896),u=r(78545),x=r(67294),h=r(55113),p=r(68061),j=r(26447),m=r(50480),f=r(49033),Z=r(57922),b=r(50135),v=r(11057),g=r(84575),y=r(21238),w=r(45697),C=r.n(w),P=r(87109),S=r(93946),k=r(14564);function _(e){var n=e.onCancel,r=(0,x.useState)(null),t=r[0],s=r[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{sx:{p:2.5,mb:2.5,bgcolor:"background.neutral"},children:(0,i.jsxs)(j.Z,{spacing:2,children:[(0,i.jsx)(l.Z,{variant:"subtitle1",children:"Add new card"}),(0,i.jsx)(b.Z,{fullWidth:!0,size:"small",label:"Name on card"}),(0,i.jsx)(b.Z,{fullWidth:!0,size:"small",label:"Card number"}),(0,i.jsxs)(j.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,i.jsx)(b.Z,{size:"small",label:"MM/YY"}),(0,i.jsx)(b.Z,{size:"small",label:"CVV",InputProps:{endAdornment:(0,i.jsx)(P.Z,{position:"end",children:(0,i.jsx)(S.Z,{size:"small",edge:"end",onClick:function(e){return s(e.currentTarget)},children:(0,i.jsx)(y.Z,{icon:"eva:info-fill"})})})}})]}),(0,i.jsxs)(j.Z,{direction:"row",spacing:2,children:[(0,i.jsx)(v.Z,{fullWidth:!0,onClick:n,children:"Cancel"}),(0,i.jsx)(v.Z,{fullWidth:!0,variant:"contained",onClick:n,children:"Create"})]})]})}),(0,i.jsx)(k.ZP,{open:Boolean(t),anchorEl:t,onClose:function(){return s(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},PaperProps:{sx:{p:1,maxWidth:200}},children:(0,i.jsx)(l.Z,{variant:"body2",align:"center",children:"Three-digit number on the back of your VISA card"})})]})}function O(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function W(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){O(e,n,r[n])}))}return e}_.propTypes={onCancel:C().func};var z=[{value:"paypal",title:"Pay with Paypal",icons:["https://minimal-assets-api-dev.vercel.app/assets/icons/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",icons:["https://minimal-assets-api-dev.vercel.app/assets/icons/ic_mastercard.svg","https://minimal-assets-api-dev.vercel.app/assets/icons/ic_visa.svg"]}],I=[{value:"visa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"visa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"mastercard",label:"**** **** **** 4545 - Cole Armstrong"}],E=(0,t.ZP)(h.Z)((function(e){var n=e.theme;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:n.spacing(2.5),paddingRight:n.spacing(2),transition:n.transitions.create("all"),border:"solid 1px ".concat(n.palette.divider),borderRadius:1.5*Number(n.shape.borderRadius)}}));function T(){var e=(0,x.useState)(!1),n=e[0],r=e[1],t=(0,x.useState)("paypal"),s=t[0],a=t[1],c=function(){"paypal"!==s&&r(!n)},o=function(){r(!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{variant:"subtitle1",sx:{mb:5},children:"Payment Method"}),(0,i.jsx)(p.Z,{value:s,onChange:function(e){"paypal"===s&&r(!1),a(e.target.value)},children:(0,i.jsx)(j.Z,{spacing:3,children:z.map((function(e){var r=e.value,t=e.title,a=e.icons,d="credit_card"===r,u=s===r;return(0,i.jsxs)(E,{sx:W({},u&&{boxShadow:function(e){return e.customShadows.z20}},d&&{flexWrap:"wrap"}),children:[(0,i.jsx)(m.Z,{value:r,control:(0,i.jsx)(f.Z,{checkedIcon:(0,i.jsx)(y.Z,{icon:"eva:checkmark-circle-2-fill"})}),label:(0,i.jsx)(l.Z,{variant:"subtitle2",sx:{ml:1},children:t}),sx:{py:3,mx:0}}),(0,i.jsx)(j.Z,{spacing:1,direction:"row",alignItems:"center",sx:{position:"absolute",right:20,top:32},children:a.map((function(e){return(0,i.jsx)(g.Z,{alt:"logo card",src:e},e)}))}),d&&(0,i.jsxs)(Z.Z,{in:"credit_card"===s,sx:{width:1},children:[(0,i.jsx)(b.Z,{select:!0,fullWidth:!0,label:"Card",SelectProps:{native:!0},children:I.map((function(e){return(0,i.jsx)("option",{value:e.value,children:e.label},e.value)}))}),(0,i.jsx)(v.Z,{size:"small",startIcon:(0,i.jsx)(y.Z,{icon:"eva:plus-fill",width:20,height:20}),onClick:c,sx:{my:3},children:"Add new card"}),(0,i.jsx)(Z.Z,{in:n,children:(0,i.jsx)(_,{onCancel:o})})]})]},t)}))})})]})}var A=r(72852),N=r(67720),M=r(31812),R=r(81772),B=(0,t.ZP)("div")((function(e){var n=e.theme;return{padding:n.spacing(5),backgroundColor:n.palette.background.neutral,borderRadius:2*Number(n.shape.borderRadius)}}));function L(){return(0,i.jsxs)(B,{children:[(0,i.jsx)(l.Z,{variant:"subtitle1",sx:{mb:5},children:"Summary"}),(0,i.jsxs)(j.Z,{spacing:2.5,children:[(0,i.jsxs)(j.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(l.Z,{variant:"subtitle2",component:"p",sx:{color:"text.secondary"},children:"Subscription"}),(0,i.jsx)(R.Z,{color:"error",variant:"filled",children:"PREMIUM"})]}),(0,i.jsxs)(j.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(l.Z,{component:"p",variant:"subtitle2",sx:{color:"text.secondary"},children:"Billed Monthly"}),(0,i.jsx)(A.Z,{defaultChecked:!0})]}),(0,i.jsxs)(j.Z,{direction:"row",justifyContent:"flex-end",children:[(0,i.jsx)(l.Z,{sx:{color:"text.secondary"},children:"$"}),(0,i.jsx)(l.Z,{variant:"h2",sx:{mx:1},children:"9.99"}),(0,i.jsx)(l.Z,{component:"span",variant:"body2",sx:{mb:1,alignSelf:"flex-end",color:"text.secondary"},children:"/mo"})]}),(0,i.jsx)(N.Z,{sx:{borderStyle:"dashed"}}),(0,i.jsxs)(j.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,i.jsx)(l.Z,{variant:"h6",component:"p",children:"Total Billed"}),(0,i.jsx)(l.Z,{variant:"h6",component:"p",children:"$9.99*"})]}),(0,i.jsx)(N.Z,{sx:{borderStyle:"dashed",mb:1}})]}),(0,i.jsx)(l.Z,{variant:"caption",sx:{color:"text.secondary",mt:1},children:"* Plus applicable taxes"}),(0,i.jsx)(M.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mt:5,mb:3},children:"Upgrade My Plan"}),(0,i.jsxs)(j.Z,{alignItems:"center",spacing:1,children:[(0,i.jsxs)(j.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[(0,i.jsx)(y.Z,{icon:"eva:shield-fill",sx:{width:20,height:20,color:"primary.main"}}),(0,i.jsx)(l.Z,{variant:"subtitle2",children:"Secure credit card payment"})]}),(0,i.jsx)(l.Z,{variant:"caption",sx:{color:"text.secondary",textAlign:"center"},children:"This is a secure 128-bit SSL encrypted payment"})]})]})}function V(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{variant:"subtitle1",children:"Billing Address"}),(0,i.jsxs)(j.Z,{spacing:3,mt:5,children:[(0,i.jsx)(b.Z,{fullWidth:!0,label:"Person name"}),(0,i.jsx)(b.Z,{fullWidth:!0,label:"Phone number"}),(0,i.jsx)(b.Z,{fullWidth:!0,label:"Email"}),(0,i.jsx)(b.Z,{fullWidth:!0,label:"Address"})]})]})}var D=(0,t.ZP)("div")((function(e){var n=e.theme;return{minHeight:"100%",paddingTop:n.spacing(15),paddingBottom:n.spacing(10)}}));function H(){var e=(0,o.Z)("up","md");return(0,i.jsx)(u.Z,{title:"Payment",children:(0,i.jsx)(D,{children:(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(a.Z,{sx:{mb:5},children:[(0,i.jsx)(l.Z,{variant:"h3",align:"center",paragraph:!0,children:"Let's finish powering you up!"}),(0,i.jsx)(l.Z,{align:"center",sx:{color:"text.secondary"},children:"Professional plan is right for you."})]}),(0,i.jsxs)(c.ZP,{container:!0,spacing:e?3:5,children:[(0,i.jsx)(c.ZP,{item:!0,xs:12,md:8,children:(0,i.jsxs)(a.Z,{sx:{display:"grid",gap:5,p:{md:5},borderRadius:2,border:function(e){return{md:"dashed 1px ".concat(e.palette.divider)}},gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[(0,i.jsx)(V,{}),(0,i.jsx)(T,{})]})}),(0,i.jsx)(c.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)(L,{})})]})]})})})}H.getLayout=function(e){return(0,i.jsx)(d.Z,{variant:"logoOnly",children:e})}}},function(e){e.O(0,[3843,8607,2392,1896,9774,2888,179],(function(){return n=85553,e(e.s=n);var n}));var n=e.O();_N_E=n}]);