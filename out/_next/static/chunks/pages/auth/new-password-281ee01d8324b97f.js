(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7810],{30389:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/new-password",function(){return n(58692)}])},58692:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return D}});var t=n(85893),o=n(11496),i=n(27948),c=n(15861),s=n(87357),a=n(50122),d=n(57325),u=n(78545),l=n(34051),f=n.n(l),m=n(74231),p=n(73400),h=n(67294),x=n(11163),v=n(87536),w=n(95496),g=n(26447),j=n(57709),y=n(56815),b=n(87109),Z=n(93946),q=n(31812),P=n(58260),_=n(21238),C=n(38897);function S(e,r,n,t,o,i,c){try{var s=e[i](c),a=s.value}catch(d){return void n(d)}s.done?r(a):Promise.resolve(a).then(t,o)}function E(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function O(){var e=(0,x.useRouter)().push,r=(0,p.Ds)().enqueueSnackbar,n=(0,h.useState)(!1),o=n[0],i=n[1],c=sessionStorage.getItem("email-recovery"),s=m.Ry().shape({code1:m.Z_().required("Code is required"),code2:m.Z_().required("Code is required"),code3:m.Z_().required("Code is required"),code4:m.Z_().required("Code is required"),code5:m.Z_().required("Code is required"),code6:m.Z_().required("Code is required"),email:m.Z_().email("Email must be a valid email address").required("Email is required"),password:m.Z_().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:m.Z_().required("Confirm password is required").oneOf([m.iH("password"),null],"Passwords must match")}),a={code1:"",code2:"",code3:"",code4:"",code5:"",code6:"",email:c||"",password:"",confirmPassword:""},d=(0,v.cI)({mode:"all",resolver:(0,w.X)(s),defaultValues:a}),u=d.control,l=d.setValue,O=d.handleSubmit,k=d.formState,N=k.isSubmitting,D=k.errors;(0,h.useEffect)((function(){var e=document.querySelector("input.field-code");return null===e||void 0===e||e.addEventListener("paste",A),function(){null===e||void 0===e||e.removeEventListener("paste",A)}}),[]);var A=function(e){var r=e.clipboardData.getData("text");r=r.split(""),[].forEach.call(document.querySelectorAll(".field-code"),(function(e,n){e.value=r[n];var t="code".concat(n+1);l(t,r[n])})),e.preventDefault()},I=function(){var n,t=(n=f().mark((function n(t){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.log("data:",{email:t.email,code:"".concat(t.code1).concat(t.code2).concat(t.code3).concat(t.code4).concat(t.code5).concat(t.code6),password:t.password}),sessionStorage.removeItem("email-recovery"),r("Change password success!"),e(P.vB.root),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})),function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function c(e){S(i,t,o,c,s,"next",e)}function s(e){S(i,t,o,c,s,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,t.jsx)(C.RV,{methods:d,onSubmit:O(I),children:(0,t.jsxs)(g.Z,{spacing:3,children:[(0,t.jsx)(C.au,{name:"email",label:"Email",disabled:!!c}),(0,t.jsx)(g.Z,{direction:"row",spacing:2,justifyContent:"center",children:["code1","code2","code3","code4","code5","code6"].map((function(e,r){return(0,t.jsx)(v.Qr,{name:"code".concat(r+1),control:u,render:function(e){var n=e.field,o=e.fieldState.error;return(0,t.jsx)(j.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){E(e,r,n[r])}))}return e}({},n,{error:!!o,autoFocus:0===r,placeholder:"-",onChange:function(e){return function(e,r){var n=e.target,t=n.maxLength,o=n.value,i=n.name.replace("code",""),c=Number(i);if(o.length>=t&&c<6){var s=document.querySelector("input[name=code".concat(c+1,"]"));null!==s&&s.focus()}r(e)}(e,n.onChange)},inputProps:{className:"field-code",maxLength:1,sx:{p:0,textAlign:"center",width:{xs:36,sm:56},height:{xs:36,sm:56}}}}))}},e)}))}),(!!D.code1||!!D.code2||!!D.code3||!!D.code4||!!D.code5||!!D.code6)&&(0,t.jsx)(y.Z,{error:!0,sx:{px:2},children:"Code is required"}),(0,t.jsx)(C.au,{name:"password",label:"Password",type:o?"text":"password",InputProps:{endAdornment:(0,t.jsx)(b.Z,{position:"end",children:(0,t.jsx)(Z.Z,{onClick:function(){return i(!o)},edge:"end",children:(0,t.jsx)(_.Z,{icon:o?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,t.jsx)(C.au,{name:"confirmPassword",label:"Confirm New Password",type:o?"text":"password",InputProps:{endAdornment:(0,t.jsx)(b.Z,{position:"end",children:(0,t.jsx)(Z.Z,{onClick:function(){return i(!o)},edge:"end",children:(0,t.jsx)(_.Z,{icon:o?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,t.jsx)(q.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:N,sx:{mt:3},children:"Change password"})]})})}var k=n(99854),N=(0,o.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",minHeight:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",padding:e.theme.spacing(12,0)}}));function D(){return(0,t.jsx)(u.Z,{title:"New Password",children:(0,t.jsx)(i.Z,{children:(0,t.jsxs)(N,{sx:{textAlign:"center"},children:[(0,t.jsx)(k.Jg,{sx:{mb:5,mx:"auto",height:120}}),(0,t.jsx)(c.Z,{variant:"h3",gutterBottom:!0,children:"Request sent successfully!"}),(0,t.jsxs)(c.Z,{sx:{color:"text.secondary"},children:["We've sent a 6-digit confirmation email to your email.",(0,t.jsx)("br",{}),"Please enter the code in below box to verify your email."]}),(0,t.jsx)(s.Z,{sx:{mt:5,mb:3},children:(0,t.jsx)(O,{})}),(0,t.jsxs)(c.Z,{variant:"body2",children:["Don\u2019t have a code? \xa0",(0,t.jsx)(a.Z,{variant:"subtitle2",onClick:function(){},children:"Resend code"})]})]})})})}D.getLayout=function(e){return(0,t.jsx)(d.Z,{variant:"logoOnly",children:e})}}},function(e){e.O(0,[5434,2847,2392,7325,9774,2888,179],(function(){return r=30389,e(e.s=r);var r}));var r=e.O();_N_E=r}]);