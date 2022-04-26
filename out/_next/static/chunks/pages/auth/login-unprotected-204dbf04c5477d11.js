(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2437],{21372:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login-unprotected",function(){return n(40163)}])},40163:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(85893),i=n(48389),s=n(41664),a=n(11496),o=n(66242),c=n(15861),l=n(50122),u=n(27948),d=n(26447),f=n(87357),m=n(34386),h=n(46901),p=n(58260),x=n(17288),j=n(56687),b=n(78545),g=n(71305),v=n(84575),Z=n(16882);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=(0,a.ZP)("div")((function(e){return w({},e.theme.breakpoints.up("md"),{display:"flex"})})),P=(0,a.ZP)("header")((function(e){var t=e.theme;return w({top:0,zIndex:9,lineHeight:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",padding:t.spacing(3),justifyContent:"space-between"},t.breakpoints.up("md"),{alignItems:"flex-start",padding:t.spacing(7,5,0,7)})})),E=(0,a.ZP)(o.Z)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),_=(0,a.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",minHeight:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",padding:e.theme.spacing(12,0)}}));function k(){var e=(0,x.Z)().method,t=(0,j.Z)("up","sm"),n=(0,j.Z)("up","md");return(0,r.jsx)(b.Z,{title:"Login",children:(0,r.jsxs)(y,{children:[(0,r.jsxs)(P,{children:[(0,r.jsx)(g.Z,{}),t&&(0,r.jsxs)(c.Z,{variant:"body2",sx:{mt:{md:-2}},children:["Don\u2019t have an account? ","",(0,r.jsx)(s.default,{href:p.EE.register,passHref:!0,children:(0,r.jsx)(l.Z,{variant:"subtitle2",children:"Get started"})})]})]}),n&&(0,r.jsxs)(E,{children:[(0,r.jsx)(c.Z,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Hi, Welcome Back"}),(0,r.jsx)(v.Z,{visibleByDefault:!0,disabledEffect:!0,src:"/assets/illustrations/illustration_login.png",alt:"login"})]}),(0,r.jsx)(u.Z,{maxWidth:"sm",children:(0,r.jsxs)(_,{children:[(0,r.jsxs)(d.Z,{direction:"row",alignItems:"center",sx:{mb:5},children:[(0,r.jsxs)(f.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:"Sign in to Minimal"}),(0,r.jsx)(c.Z,{sx:{color:"text.secondary"},children:"Enter your details below."})]}),(0,r.jsx)(m.Z,{title:(0,i.I)(e),placement:"right",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(v.Z,{disabledEffect:!0,alt:e,src:"https://minimal-assets-api-dev.vercel.app/assets/icons/auth/ic_".concat(e,".png"),sx:{width:32,height:32}})})})]}),(0,r.jsxs)(h.Z,{severity:"info",sx:{mb:3},children:["Use email : ",(0,r.jsx)("strong",{children:"demo@minimals.cc"})," / password :",(0,r.jsx)("strong",{children:" demo1234"})]}),(0,r.jsx)(Z.U,{}),!t&&(0,r.jsxs)(c.Z,{variant:"body2",align:"center",sx:{mt:3},children:["Don\u2019t have an account?"," ",(0,r.jsx)(s.default,{href:p.EE.register,passHref:!0,children:(0,r.jsx)(l.Z,{variant:"subtitle2",children:"Get started"})})]})]})})]})})}},16882:function(e,t,n){"use strict";n.d(t,{U:function(){return E}});var r=n(34051),i=n.n(r),s=n(85893),a=n(74231),o=n(67294),c=n(41664),l=n(87536),u=n(95496),d=n(26447),f=n(46901),m=n(87109),h=n(93946),p=n(50122),x=n(31812),j=n(58260),b=n(17288),g=n(3367),v=n(21238),Z=n(38897);function w(e,t,n,r,i,s,a){try{var o=e[s](a),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,i)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}function E(){var e=(0,b.Z)().login,t=(0,g.Z)(),n=(0,o.useState)(!1),r=n[0],y=n[1],E=a.Ry().shape({userName:a.Z_().required("Username is required"),password:a.Z_().required("Password is required")}),_=(0,l.cI)({resolver:(0,u.X)(E),defaultValues:{userName:"",password:"",remember:!0}}),k=_.reset,O=_.setError,S=_.handleSubmit,N=_.formState,I=N.errors,C=N.isSubmitting,D=function(){var n,r=(n=i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e(r.userName,r.password);case 3:n.next=10;break;case 5:n.prev=5,n.t0=n.catch(0),console.error(n.t0),k(),t.current&&O("afterSubmit",P({},n.t0,{message:n.t0.message}));case 10:case"end":return n.stop()}}),n,null,[[0,5]])})),function(){var e=this,t=arguments;return new Promise((function(r,i){var s=n.apply(e,t);function a(e){w(s,r,i,a,o,"next",e)}function o(e){w(s,r,i,a,o,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,s.jsxs)(Z.RV,{methods:_,onSubmit:S(D),children:[(0,s.jsxs)(d.Z,{spacing:3,children:[!!I.afterSubmit&&(0,s.jsx)(f.Z,{severity:"error",children:I.afterSubmit.message}),(0,s.jsx)(Z.au,{name:"userName",label:"Username"}),(0,s.jsx)(Z.au,{name:"password",label:"Password",type:r?"text":"password",InputProps:{endAdornment:(0,s.jsx)(m.Z,{position:"end",children:(0,s.jsx)(h.Z,{onClick:function(){return y(!r)},edge:"end",children:(0,s.jsx)(v.Z,{icon:r?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),(0,s.jsxs)(d.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{my:2},children:[(0,s.jsx)(Z.jb,{name:"remember",label:"Remember me"}),(0,s.jsx)(c.default,{href:j.EE.resetPassword,passHref:!0,children:(0,s.jsx)(p.Z,{variant:"subtitle2",children:"Forgot password?"})})]}),(0,s.jsx)(x.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:C,children:"Login"})]})}}},function(e){e.O(0,[5434,2392,9774,2888,179],(function(){return t=21372,e(e.s=t);var t}));var t=e.O();_N_E=t}]);