(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},162:function(e,t,n){},167:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(28),c=n.n(r),s=(n(132),n(133),n(8)),i=(n(134),n(20)),o=n(11),l=n(280),j=n(281),u=n(120),d=n(1),p=function(){return Object(d.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(d.jsx)(l.a,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(u.a,{className:"text-center py-3",children:"Copyright \xa9 Whisk"})})})})},b=n(286),h=n(287),O=n(285),x=n(123),f=n(284),g=n(7),m=n(9),v=n.n(m),y=n(22),E="USER_LOGIN_REQUEST",S="USER_LOGIN_SUCCESS",C="USER_LOGIN_FAIL",I="USER_LOGOUT",w="USER_REGISTER_REQUEST",R="USER_REGISTER_SUCCESS",L="USER_REGISTER_FAIL",N="USER_UPDATE_REQUEST",_="USER_UPDATE_SUCCESS",P="USER_UPDATE_FAIL",k="USER_VERIFY_REQUEST",U="USER_VERIFY_SUCCESS",T="USER_VERIFY_FAIL",F=n(26),D=n.n(F);var A=function(e){var t=e.setSearch,n=Object(g.b)(),r=Object(g.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){}),[r]),Object(d.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b.a.Brand,{href:"/",children:"Whisk"}),Object(d.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsx)(h.a,{className:"m-auto",children:r&&Object(d.jsx)(O.a,{inline:!0,children:Object(d.jsx)(x.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){return t(e.target.value)}})})}),Object(d.jsx)(h.a,{children:r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h.a.Link,{href:"/myrecipes",children:"My Recipes"}),Object(d.jsxs)(f.a,{title:"".concat(r.name),id:"collasible-nav-dropdown",children:[Object(d.jsx)(f.a.Item,{href:"/profile",children:"My Profile"}),Object(d.jsx)(f.a.Divider,{}),Object(d.jsx)(f.a.Item,{onClick:function(){n(function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:I});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]})]}):Object(d.jsx)(h.a.Link,{href:"/login",children:"Login"})})]})]})})},G=n(125);n(162);var B=function(e){var t=e.history,n=Object(g.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){n&&t.push("/myrecipes")}),[t,n]),Object(d.jsx)("div",{className:"main",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"intro-text",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"title",children:"Welcome to Whisk"}),Object(d.jsx)("p",{className:"subtitle",children:"Where all your recipes are ready in a whisk!"})]}),Object(d.jsxs)("div",{className:"buttonContainer",children:[Object(d.jsx)(i.b,{to:"/login",children:Object(d.jsx)(G.a,{size:"lg",className:"landingbutton",children:"Login"})}),Object(d.jsx)(i.b,{to:"/register",children:Object(d.jsx)(G.a,{variant:"outline-primary",size:"lg",className:"landingbutton",children:"Signup"})})]})]})})})})},z=n(288),H=n(290),Q=n(283);n(167);var J=function(e){var t=e.children,n=e.title;return Object(d.jsx)("div",{className:"mainback",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"page",children:[n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"heading",children:n}),Object(d.jsx)("hr",{})]}),t]})})})})},V=n(37),W=n.n(V),q="RECIPES_LIST_REQUEST",M="RECIPES_LIST_SUCCESS",Y="RECIPES_LIST_FAIL",K="RECIPES_CREATE_REQUEST",X="RECIPES_CREATE_SUCCESS",Z="RECIPES_CREATE_FAIL",$="RECIPES_UPDATE_REQUEST",ee="RECIPES_UPDATE_SUCCESS",te="RECIPES_UPDATE_FAIL",ne="RECIPES_DELETE_REQUEST",ae="RECIPES_DELETE_SUCCESS",re="RECIPES_DELETE_FAIL",ce=function(e,t,n,a){return function(){var r=Object(y.a)(v.a.mark((function r(c,s){var i,o,l,j,u,d;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:K}),i=s(),o=i.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},r.next=6,D.a.post("/api/recipes/create",{title:e,content:t,instructions:n,category:a},l);case 6:j=r.sent,u=j.data,c({type:X,payload:u}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),d=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:Z,payload:d});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()},se=function(e){return function(){var t=Object(y.a)(v.a.mark((function t(n,a){var r,c,s,i,o,l;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:ne}),r=a(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,D.a.delete("/api/recipes/".concat(e),s);case 6:i=t.sent,o=i.data,n({type:ae,payload:o}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:re,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},ie=n(282);var oe=function(e){var t=e.size,n=void 0===t?100:t;return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(d.jsx)(ie.a,{style:{width:n,height:n},animation:"border"})})},le=n(289),je=function(e){var t=e.variant,n=void 0===t?"info":t,a=e.children;return Object(d.jsx)(le.a,{variant:n,style:{fontSize:20},children:Object(d.jsx)("strong",{children:a})})};var ue=function(e){var t=e.history,n=e.search,r=Object(g.b)(),c=Object(g.c)((function(e){return e.recipeList})),s=c.loading,o=c.error,l=c.recipes,j=Object(g.c)((function(e){return e.userLogin})).userInfo,u=Object(g.c)((function(e){return e.recipeDelete})),p=u.loading,b=u.error,h=u.success,O=Object(g.c)((function(e){return e.recipeCreate})).success,x=Object(g.c)((function(e){return e.recipeUpdate})).success;return Object(a.useEffect)((function(){r(function(){var e=Object(y.a)(v.a.mark((function e(t,n){var a,r,c,s,i,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:q}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,D.a.get("/api/recipes",c);case 6:s=e.sent,i=s.data,t({type:M,payload:i}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),o=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:Y,payload:o});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),j||t.push("/")}),[r,t,j,h,O,x]),Object(d.jsxs)(J,{title:"Welcome Back ".concat(j&&j.name,"!"),children:[console.log(l),Object(d.jsx)(i.b,{to:"/createrecipe",children:Object(d.jsx)(G.a,{style:{marginLeft:10,marginBottom:6},size:"lg",children:"Create new Recipe"})}),Object(d.jsx)(i.b,{to:"/fetchrecipe",children:Object(d.jsx)(G.a,{style:{marginLeft:10,marginBottom:6},size:"lg",children:"Fetch new Recipe"})}),o&&Object(d.jsx)(je,{variant:"danger",children:o}),b&&Object(d.jsx)(je,{variant:"danger",children:b}),s&&Object(d.jsx)(oe,{}),p&&Object(d.jsx)(oe,{}),l&&l.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).reverse().map((function(e){return Object(d.jsx)(z.a,{children:Object(d.jsxs)(H.a,{style:{margin:10},children:[Object(d.jsxs)(H.a.Header,{style:{display:"flex"},children:[Object(d.jsx)("span",{style:{color:"black",textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center",fontSize:18},children:Object(d.jsx)(z.a.Toggle,{as:H.a.Text,variant:"link",eventKey:"0",children:e.title})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(G.a,{href:"/recipe/".concat(e._id),children:"Edit"}),Object(d.jsx)(G.a,{variant:"danger",className:"mx-2",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&r(se(t)));var t},children:"Delete"})]})]}),Object(d.jsx)(z.a.Collapse,{eventKey:"0",children:Object(d.jsxs)(H.a.Body,{children:[Object(d.jsx)("h4",{children:Object(d.jsxs)(Q.a,{variant:"success",children:["Category - ",e.category]})}),Object(d.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(d.jsx)(W.a,{children:e.content}),Object(d.jsxs)("footer",{className:"blockquote-footer",children:["Created on"," ",Object(d.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})]})})]},e._id)})}))]})};var de=function(e){var t=e.match,n=e.history,r=Object(a.useState)(),c=Object(s.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(),j=Object(s.a)(l,2),u=j[0],p=j[1],b=Object(a.useState)(),h=Object(s.a)(b,2),x=h[0],f=h[1],m=Object(a.useState)(),E=Object(s.a)(m,2),S=E[0],C=E[1],I=Object(a.useState)(""),w=Object(s.a)(I,2),R=w[0],L=w[1],N=Object(g.b)(),_=Object(g.c)((function(e){return e.recipeUpdate})),P=_.loading,k=_.error,U=Object(g.c)((function(e){return e.recipeDelete})),T=U.loading,F=U.error;return Object(a.useEffect)((function(){(function(){var e=Object(y.a)(v.a.mark((function e(){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/recipes/".concat(t.params.id));case 2:n=e.sent,a=n.data,o(a.title),p(a.content),C(a.instructions),f(a.category),L(a.updatedAt);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id,R]),Object(d.jsx)(J,{title:"Edit Recipe",children:Object(d.jsxs)(H.a,{children:[Object(d.jsx)(H.a.Header,{children:"Edit your Recipe"}),Object(d.jsx)(H.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),N(function(e,t,n,a,r){return function(){var c=Object(y.a)(v.a.mark((function c(s,i){var o,l,j,u,d,p;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,s({type:$}),o=i(),l=o.userLogin.userInfo,j={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},c.next=6,D.a.put("/api/recipes/".concat(e),{title:t,content:n,instructions:a,category:r},j);case 6:u=c.sent,d=u.data,s({type:ee,payload:d}),c.next=15;break;case 11:c.prev=11,c.t0=c.catch(0),p=c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message,s({type:te,payload:p});case 15:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e,t){return c.apply(this,arguments)}}()}(t.params.id,i,u,S,x)),i&&u&&S&&x&&(o(""),f(""),p(""),C(""),n.push("/myrecipes"))},children:[T&&Object(d.jsx)(oe,{}),k&&Object(d.jsx)(je,{variant:"danger",children:k}),F&&Object(d.jsx)(je,{variant:"danger",children:F}),Object(d.jsxs)(O.a.Group,{controlId:"title",children:[Object(d.jsx)(O.a.Label,{children:"Recipe Name"}),Object(d.jsx)(O.a.Control,{type:"title",placeholder:"Enter the title",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Ingredients"}),Object(d.jsx)(O.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:u,onChange:function(e){return p(e.target.value)}})]}),u&&Object(d.jsxs)(H.a,{children:[Object(d.jsx)(H.a.Header,{children:"Ingredients Preview"}),Object(d.jsx)(H.a.Body,{children:Object(d.jsx)(W.a,{children:u})})]}),Object(d.jsxs)(O.a.Group,{controlId:"instructions",children:[Object(d.jsx)(O.a.Label,{children:"Instructions"}),Object(d.jsx)(O.a.Control,{as:"textarea",placeholder:"Enter the instructions",rows:4,value:S,onChange:function(e){return C(e.target.value)}})]}),u&&Object(d.jsxs)(H.a,{children:[Object(d.jsx)(H.a.Header,{children:"Instructions Preview"}),Object(d.jsx)(H.a.Body,{children:Object(d.jsx)(W.a,{children:S})})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Category"}),Object(d.jsx)(O.a.Control,{type:"content",placeholder:"Enter the Category",value:x,onChange:function(e){return f(e.target.value)}})]}),P&&Object(d.jsx)(oe,{size:50}),Object(d.jsx)(G.a,{variant:"primary",type:"submit",children:"Update Recipe"}),Object(d.jsx)(G.a,{className:"mx-2",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&N(se(e)),void n.push("/myrecipes");var e},children:"Delete Recipe"})]})}),Object(d.jsxs)(H.a.Footer,{className:"text-muted",children:["Updated on - ",R.substring(0,10)]})]})})},pe=(n(270),n(271),function(e){return Object(d.jsx)("div",{className:"popup-box",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("span",{className:"close-icon",onClick:e.handleClose,children:"x"}),e.content]})})});var be=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],l=Object(a.useState)(""),p=Object(s.a)(l,2),b=p[0],h=p[1],x=Object(a.useState)(!1),f=Object(s.a)(x,2),m=f[0],I=f[1],w=Object(g.b)(),R=Object(g.c)((function(e){return e.userLogin})),L=R.loading,N=R.error,_=R.userInfo;Object(a.useEffect)((function(){_&&t.push("/myrecipes")}),[t,_]);var P=function(){I(!m)};return Object(d.jsxs)("div",{children:[m&&Object(d.jsx)(pe,{content:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("b",{children:"Please enter your email"}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault()},children:[Object(d.jsx)(O.a.Group,{controlId:"resetEmail",children:Object(d.jsx)(O.a.Control,{placeholder:"Enter email"})}),Object(d.jsx)(G.a,{variant:"primary",type:"submit",children:"Reset Password"})]})]}),handleClose:P}),Object(d.jsxs)("div",{className:"Container",children:[Object(d.jsx)("div",{className:"loginDiv",children:Object(d.jsx)("div",{className:"loginForm",children:Object(d.jsx)(J,{title:"LOGIN",children:Object(d.jsxs)("div",{className:"loginContainer",children:[N&&Object(d.jsx)(je,{variant:"danger",children:N}),L&&Object(d.jsx)(oe,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),w(function(e,t){return function(){var n=Object(y.a)(v.a.mark((function n(a){var r,c,s;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:E}),r={headers:{"Content-type":"application/json"}},n.next=5,D.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:S,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:C,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(c,b))},children:[Object(d.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:b,placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)("div",{className:"button_password_container",children:[Object(d.jsx)("div",{className:"button_container",children:Object(d.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})}),Object(d.jsx)("div",{className:"forgot_password",children:Object(d.jsx)(i.b,{onClick:P,children:"Forgot Password?"})})]})]}),Object(d.jsx)(j.a,{className:"py-3",children:Object(d.jsxs)(u.a,{children:["New Customer ? ",Object(d.jsx)(i.b,{to:"/register",children:"Register Here"})]})})]})})})}),Object(d.jsx)("div",{className:"foodPic",children:Object(d.jsx)("div",{className:"fPic"})})]})]})};n(272);var he=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],l=Object(a.useState)(""),p=Object(s.a)(l,2),b=p[0],h=p[1],x=Object(a.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),f=Object(s.a)(x,2),m=f[0],E=f[1],S=Object(a.useState)(""),C=Object(s.a)(S,2),I=C[0],N=C[1],_=Object(a.useState)(""),P=Object(s.a)(_,2),k=P[0],U=P[1],T=Object(a.useState)(null),F=Object(s.a)(T,2),A=F[0],B=F[1],z=Object(a.useState)(null),H=Object(s.a)(z,2),Q=(H[0],H[1]),V=Object(a.useState)(null),W=Object(s.a)(V,2),q=W[0],M=W[1],Y=Object(g.b)(),K=Object(g.c)((function(e){return e.userRegister})),X=K.loading,Z=K.error,$=K.userInfo;return Object(a.useEffect)((function(){$&&Q("Verification email has been sent to "+$.email+". Please follow the instructions to activate your account.")}),[t,$]),Object(d.jsxs)("div",{className:"Container",children:[Object(d.jsx)("div",{className:"regPic",children:Object(d.jsx)("div",{className:"rfoodPic"})}),Object(d.jsx)("div",{className:"regDiv",children:Object(d.jsx)("div",{className:"registerForm",children:Object(d.jsx)(J,{title:"REGISTER",children:Object(d.jsxs)("div",{className:"loginContainer",children:[Z&&Object(d.jsx)(je,{variant:"danger",children:Z}),A&&Object(d.jsx)(je,{variant:"danger",children:A}),X&&Object(d.jsx)(oe,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),I!==k?B("Passwords do not match"):Y(function(e,t,n,a){return function(){var r=Object(y.a)(v.a.mark((function r(c){var s,i,o;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:w}),s={headers:{"Content-type":"application/json"}},r.next=5,D.a.post("/api/users",{name:e,pic:a,email:t,password:n},s);case 5:i=r.sent,o=i.data,c({type:R,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),c({type:L,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}(b,c,I,m))},children:[Object(d.jsxs)(O.a.Group,{controlId:"name",children:[Object(d.jsx)(O.a.Label,{children:"Name"}),Object(d.jsx)(O.a.Control,{type:"name",value:b,placeholder:"Enter name",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:I,placeholder:"Password",onChange:function(e){return N(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:k,placeholder:"Confirm Password",onChange:function(e){return U(e.target.value)}})]}),q&&Object(d.jsx)(je,{variant:"danger",children:q}),Object(d.jsxs)(O.a.Group,{controlId:"pic",children:[Object(d.jsx)(O.a.Label,{children:"Profile Picture"}),Object(d.jsx)(O.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return M("Please Select an Image");if(M(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return M("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","recipezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){E(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(d.jsx)(G.a,{variant:"primary",type:"submit",children:"Register"})]}),Object(d.jsx)(j.a,{className:"py-3",children:Object(d.jsxs)(u.a,{children:["Have an Account ? ",Object(d.jsx)(i.b,{to:"/login",children:"Login"})]})})]})})})})]})};var Oe=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),j=l[0],u=l[1],p=Object(a.useState)(""),b=Object(s.a)(p,2),h=b[0],x=b[1],f=Object(a.useState)(""),m=Object(s.a)(f,2),v=m[0],y=m[1],E=Object(g.b)(),S=Object(g.c)((function(e){return e.recipeCreate})),C=S.loading,I=S.error,w=S.recipe;console.log(w);var R=function(){i(""),x(""),u(""),y("")};return Object(a.useEffect)((function(){}),[]),Object(d.jsx)(J,{title:"Create a Recipe",children:Object(d.jsxs)(H.a,{children:[Object(d.jsx)(H.a.Header,{children:"Create a new Recipe"}),Object(d.jsx)(H.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),E(ce(c,j,v,h)),c&&j&&v&&h&&(R(),t.push("/myrecipes"))},children:[I&&Object(d.jsx)(je,{variant:"danger",children:I}),Object(d.jsxs)(O.a.Group,{controlId:"title",children:[Object(d.jsx)(O.a.Label,{children:"Recipe Name"}),Object(d.jsx)(O.a.Control,{type:"title",value:c,placeholder:"Enter the title",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Ingredients"}),Object(d.jsx)(O.a.Control,{as:"textarea",value:j,placeholder:"Enter the content",rows:4,onChange:function(e){return u(e.target.value)}})]}),j&&Object(d.jsxs)(H.a,{children:[Object(d.jsx)(H.a.Header,{children:"Recipe Preview"}),Object(d.jsx)(H.a.Body,{children:Object(d.jsx)(W.a,{children:j})})]}),Object(d.jsxs)(O.a.Group,{controlId:"instructions",children:[Object(d.jsx)(O.a.Label,{children:"Instructions"}),Object(d.jsx)(O.a.Control,{as:"textarea",placeholder:"Enter the content",value:v,rows:4,onChange:function(e){return y(e.target.value)}})]}),j&&Object(d.jsxs)(H.a,{children:[Object(d.jsx)(H.a.Header,{children:"Instructions Preview"}),Object(d.jsx)(H.a.Body,{children:Object(d.jsx)(W.a,{children:v})})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Category"}),Object(d.jsx)(O.a.Control,{type:"content",value:h,placeholder:"Enter the Category",onChange:function(e){return x(e.target.value)}})]}),C&&Object(d.jsx)(oe,{size:50}),Object(d.jsx)(G.a,{type:"submit",variant:"primary",children:"Create Recipe"}),Object(d.jsx)(G.a,{className:"mx-2",onClick:R,variant:"danger",children:"Reset Fields"})]})}),Object(d.jsxs)(H.a.Footer,{className:"text-muted",children:["Creating on - ",(new Date).toLocaleDateString()]})]})})};var xe=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(g.b)(),l=Object(g.c)((function(e){return e.recipeCreate})),j=l.loading,u=l.error,p=l.recipe;console.log(p);var b=function(){i("")};return Object(a.useEffect)((function(){}),[]),Object(d.jsx)(J,{title:"Fetch a Recipe",children:Object(d.jsxs)(H.a,{children:[Object(d.jsx)(H.a.Header,{children:"Fetch a new Recipe"}),Object(d.jsx)(H.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),o(ce(c)),c&&(b(),t.push("/myrecipes"))},children:[u&&Object(d.jsx)(je,{variant:"danger",children:u}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Recipe Link"}),Object(d.jsx)(O.a.Control,{type:"content",value:c,placeholder:"Enter the Link",onChange:function(e){return i(e.target.value)}})]}),j&&Object(d.jsx)(oe,{size:50}),Object(d.jsx)(G.a,{type:"submit",variant:"primary",children:"Fetch Recipe"}),Object(d.jsx)(G.a,{className:"mx-2",onClick:b,variant:"danger",children:"Reset Fields"})]})}),Object(d.jsxs)(H.a.Footer,{className:"text-muted",children:["Fetching on - ",(new Date).toLocaleDateString()]})]})})},fe=(n(273),function(e){e.location;var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),p=l[0],b=l[1],h=Object(a.useState)(),x=Object(s.a)(h,2),f=x[0],m=x[1],E=Object(a.useState)(""),C=Object(s.a)(E,2),I=C[0],w=C[1],R=Object(a.useState)(""),L=Object(s.a)(R,2),k=L[0],U=L[1],T=Object(a.useState)(),F=Object(s.a)(T,2),A=F[0],B=F[1],z=Object(g.b)(),H=Object(g.c)((function(e){return e.userLogin})).userInfo,Q=Object(g.c)((function(e){return e.userUpdate})),V=Q.loading,W=Q.error,q=Q.success;Object(a.useEffect)((function(){H?(i(H.name),b(H.email),m(H.pic)):t.push("/")}),[t,H]);return Object(d.jsx)(J,{title:"EDIT PROFILE",children:Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{className:"profileContainer",children:[Object(d.jsx)(u.a,{md:6,children:Object(d.jsxs)(O.a,{onSubmit:function(e){var t;e.preventDefault(),z((t={name:c,email:p,password:I,pic:f},function(){var e=Object(y.a)(v.a.mark((function e(n,a){var r,c,s,i,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:N}),r=a(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,D.a.post("/api/users/profile",t,s);case 6:i=e.sent,o=i.data,n({type:_,payload:o}),n({type:S,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:P,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[V&&Object(d.jsx)(oe,{}),q&&Object(d.jsx)(je,{variant:"success",children:"Updated Successfully"}),W&&Object(d.jsx)(je,{variant:"danger",children:W}),Object(d.jsxs)(O.a.Group,{controlId:"name",children:[Object(d.jsx)(O.a.Label,{children:"Name"}),Object(d.jsx)(O.a.Control,{type:"text",placeholder:"Enter Name",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"email",children:[Object(d.jsx)(O.a.Label,{children:"Email Address"}),Object(d.jsx)(O.a.Control,{type:"email",placeholder:"Enter Email",value:p,onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"password",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Enter Password",value:I,onChange:function(e){return w(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Confirm Password",value:k,onChange:function(e){return U(e.target.value)}})]})," ",A&&Object(d.jsx)(je,{variant:"danger",children:A}),Object(d.jsxs)(O.a.Group,{controlId:"pic",children:[Object(d.jsx)(O.a.Label,{children:"Change Profile Picture"}),Object(d.jsx)(O.a.File,{onChange:function(e){return function(e){if(B(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return B("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){m(e.url.toString()),console.log(f)})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(d.jsx)(G.a,{type:"submit",varient:"primary",children:"Update"})]})}),Object(d.jsx)(u.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsx)("img",{src:f,alt:c,className:"profilePic"})})]})})})});n(274);var ge=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(g.b)(),l=Object(g.c)((function(e){return e.userVerify})),j=l.loading,u=l.error,p=l.userInfo;return Object(a.useEffect)((function(){p&&t.push("/login")}),[t,p]),Object(d.jsx)(J,{title:"Account Verification",children:Object(d.jsxs)("div",{className:"verifyContainer",children:[u&&Object(d.jsx)(je,{variant:"danger",children:u}),j&&Object(d.jsx)(oe,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),o(function(e){return function(){var t=Object(y.a)(v.a.mark((function t(n){var a,r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:k}),a={headers:{"Content-type":"application/json"}},t.next=5,D.a.put("/api/users/verify/".concat(e),a);case 5:r=t.sent,c=r.data,n({type:U,payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:T,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(c))},children:[Object(d.jsxs)(O.a.Group,{controlId:"formBasicTemporarytoken",children:[Object(d.jsx)(O.a.Label,{children:"Activation token"}),Object(d.jsx)(O.a.Control,{type:"temporarytoken",value:c,placeholder:"Enter activation token",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsx)("div",{className:"buttonContainer",children:Object(d.jsx)(G.a,{variant:"primary",type:"submit",size:"lg",className:"activatebutton",children:"Activate"})})]})]})})};var me=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(A,{setSearch:function(e){return r(e)}}),Object(d.jsxs)("main",{className:"App",children:[Object(d.jsx)(o.a,{path:"/",component:B,exact:!0}),Object(d.jsx)(o.a,{path:"/login",component:be}),Object(d.jsx)(o.a,{path:"/register",component:he}),Object(d.jsx)(o.a,{path:"/verification",component:ge}),Object(d.jsx)(o.a,{path:"/myrecipes",component:function(e){var t=e.history;return Object(d.jsx)(ue,{search:n,history:t})}}),Object(d.jsx)(o.a,{path:"/recipe/:id",component:de}),Object(d.jsx)(o.a,{path:"/createrecipe",component:Oe}),";",Object(d.jsx)(o.a,{path:"/fetchrecipe",component:xe}),";",Object(d.jsx)(o.a,{path:"/profile",component:fe})]}),Object(d.jsx)(p,{})]})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,291)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},ye=n(52),Ee=n(126),Se=n(127),Ce=Object(ye.combineReducers)({recipeList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{recipes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{loading:!0};case M:return{loading:!1,recipes:t.payload};case Y:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{loading:!0};case S:return{loading:!1,userInfo:t.payload};case C:return{loading:!1,error:t.payload};case I:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case R:return{loading:!1,userInfo:t.payload};case L:return{loading:!1,error:t.payload};default:return e}},recipeCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return{loading:!0};case X:return{loading:!1,success:!0};case Z:return{loading:!1,error:t.payload};default:return e}},recipeDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return{loading:!0};case ae:return{loading:!1,success:!0};case re:return{loading:!1,error:t.payload,success:!1};default:return e}},recipeUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return{loading:!0};case ee:return{loading:!1,success:!0};case te:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case _:return{loading:!1,userInfo:t.payload,success:!0};case P:return{loading:!1,error:t.payload,success:!1};default:return e}},userVerify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loading:!0};case U:return{loading:!1,userInfo:t.payload,success:!0};case T:return{loading:!1,error:t.payload,success:!1};default:return e}}}),Ie={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},we=[Ee.a],Re=Object(ye.createStore)(Ce,Ie,Object(Se.composeWithDevTools)(ye.applyMiddleware.apply(void 0,we)));c.a.render(Object(d.jsx)(g.a,{store:Re,children:Object(d.jsx)(me,{})}),document.getElementById("root")),ve()}},[[275,1,2]]]);
//# sourceMappingURL=main.0517cc5b.chunk.js.map