(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},162:function(e,t,n){},167:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(28),c=n.n(r),s=(n(132),n(133),n(8)),o=(n(134),n(22)),i=n(10),l=n(278),u=n(279),j=n(120),d=n(1),p=function(){return Object(d.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(d.jsx)(l.a,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(j.a,{className:"text-center py-3",children:"Copyright \xa9 Note Zipper"})})})})},b=n(285),h=n(286),O=n(283),f=n(123),x=n(282),g=n(7),m=n(11),v=n.n(m),y=n(24),S="USER_LOGIN_REQUEST",E="USER_LOGIN_SUCCESS",C="USER_LOGIN_FAIL",I="USER_LOGOUT",w="USER_REGISTER_REQUEST",N="USER_REGISTER_SUCCESS",L="USER_REGISTER_FAIL",T="USER_UPDATE_REQUEST",_="USER_UPDATE_SUCCESS",U="USER_UPDATE_FAIL",P=n(27),k=n.n(P);var R=function(e){var t=e.setSearch,n=Object(g.b)(),r=Object(g.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){}),[r]),Object(d.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b.a.Brand,{href:"/",children:"Note Zipper"}),Object(d.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsx)(h.a,{className:"m-auto",children:r&&Object(d.jsx)(O.a,{inline:!0,children:Object(d.jsx)(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){return t(e.target.value)}})})}),Object(d.jsx)(h.a,{children:r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h.a.Link,{href:"/mynotes",children:"My Notes"}),Object(d.jsxs)(x.a,{title:"".concat(r.name),id:"collasible-nav-dropdown",children:[Object(d.jsx)(x.a.Item,{href:"/profile",children:"My Profile"}),Object(d.jsx)(x.a.Divider,{}),Object(d.jsx)(x.a.Item,{onClick:function(){n(function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:I});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]})]}):Object(d.jsx)(h.a.Link,{href:"/login",children:"Login"})})]})]})})},A=n(125);n(162);var D=function(e){var t=e.history,n=Object(g.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){n&&t.push("/mynotes")}),[t,n]),Object(d.jsx)("div",{className:"main",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"intro-text",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"title",children:"Welcome to Note Zipper"}),Object(d.jsx)("p",{className:"subtitle",children:"One Safe place for all your notes."})]}),Object(d.jsxs)("div",{className:"buttonContainer",children:[Object(d.jsx)(o.b,{to:"/login",children:Object(d.jsx)(A.a,{size:"lg",className:"landingbutton",children:"Login"})}),Object(d.jsx)(o.b,{to:"/register",children:Object(d.jsx)(A.a,{variant:"outline-primary",size:"lg",className:"landingbutton",children:"Signup"})})]})]})})})})},G=n(284),F=n(288),B=n(281);n(167);var z=function(e){var t=e.children,n=e.title;return Object(d.jsx)("div",{className:"mainback",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"page",children:[n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"heading",children:n}),Object(d.jsx)("hr",{})]}),t]})})})})},H=n(45),Q=n.n(H),J="NOTES_LIST_REQUEST",q="NOTES_LIST_SUCCESS",M="NOTES_LIST_FAIL",W="NOTES_CREATE_REQUEST",Z="NOTES_CREATE_SUCCESS",K="NOTES_CREATE_FAIL",V="NOTES_UPDATE_REQUEST",X="NOTES_UPDATE_SUCCESS",Y="NOTES_UPDATE_FAIL",$="NOTES_DELETE_REQUEST",ee="NOTES_DELETE_SUCCESS",te="NOTES_DELETE_FAIL",ne=function(e){return function(){var t=Object(y.a)(v.a.mark((function t(n,a){var r,c,s,o,i,l;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:$}),r=a(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,k.a.delete("/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:ee,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:te,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},ae=n(280);var re=function(e){var t=e.size,n=void 0===t?100:t;return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(d.jsx)(ae.a,{style:{width:n,height:n},animation:"border"})})},ce=n(287),se=function(e){var t=e.variant,n=void 0===t?"info":t,a=e.children;return Object(d.jsx)(ce.a,{variant:n,style:{fontSize:20},children:Object(d.jsx)("strong",{children:a})})};var oe=function(e){var t=e.history,n=e.search,r=Object(g.b)(),c=Object(g.c)((function(e){return e.noteList})),s=c.loading,i=c.error,l=c.notes,u=Object(g.c)((function(e){return e.userLogin})).userInfo,j=Object(g.c)((function(e){return e.noteDelete})),p=j.loading,b=j.error,h=j.success,O=Object(g.c)((function(e){return e.noteCreate})).success,f=Object(g.c)((function(e){return e.noteUpdate})).success;return Object(a.useEffect)((function(){r(function(){var e=Object(y.a)(v.a.mark((function e(t,n){var a,r,c,s,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:J}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,k.a.get("/api/notes",c);case 6:s=e.sent,o=s.data,t({type:q,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:M,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),u||t.push("/")}),[r,t,u,h,O,f]),Object(d.jsxs)(z,{title:"Welcome Back ".concat(u&&u.name,".."),children:[console.log(l),Object(d.jsx)(o.b,{to:"/createnote",children:Object(d.jsx)(A.a,{style:{marginLeft:10,marginBottom:6},size:"lg",children:"Create new Note"})}),i&&Object(d.jsx)(se,{variant:"danger",children:i}),b&&Object(d.jsx)(se,{variant:"danger",children:b}),s&&Object(d.jsx)(re,{}),p&&Object(d.jsx)(re,{}),l&&l.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).reverse().map((function(e){return Object(d.jsx)(G.a,{children:Object(d.jsxs)(F.a,{style:{margin:10},children:[Object(d.jsxs)(F.a.Header,{style:{display:"flex"},children:[Object(d.jsx)("span",{style:{color:"black",textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center",fontSize:18},children:Object(d.jsx)(G.a.Toggle,{as:F.a.Text,variant:"link",eventKey:"0",children:e.title})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(A.a,{href:"/note/".concat(e._id),children:"Edit"}),Object(d.jsx)(A.a,{variant:"danger",className:"mx-2",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&r(ne(t)));var t},children:"Delete"})]})]}),Object(d.jsx)(G.a.Collapse,{eventKey:"0",children:Object(d.jsxs)(F.a.Body,{children:[Object(d.jsx)("h4",{children:Object(d.jsxs)(B.a,{variant:"success",children:["Category - ",e.category]})}),Object(d.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(d.jsx)(Q.a,{children:e.content}),Object(d.jsxs)("footer",{className:"blockquote-footer",children:["Created on"," ",Object(d.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})]})})]},e._id)})}))]})};var ie=function(e){var t=e.match,n=e.history,r=Object(a.useState)(),c=Object(s.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)(),u=Object(s.a)(l,2),j=u[0],p=u[1],b=Object(a.useState)(),h=Object(s.a)(b,2),f=h[0],x=h[1],m=Object(a.useState)(""),S=Object(s.a)(m,2),E=S[0],C=S[1],I=Object(g.b)(),w=Object(g.c)((function(e){return e.noteUpdate})),N=w.loading,L=w.error,T=Object(g.c)((function(e){return e.noteDelete})),_=T.loading,U=T.error;return Object(a.useEffect)((function(){(function(){var e=Object(y.a)(v.a.mark((function e(){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,a=n.data,i(a.title),p(a.content),x(a.category),C(a.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id,E]),Object(d.jsx)(z,{title:"Edit Note",children:Object(d.jsxs)(F.a,{children:[Object(d.jsx)(F.a.Header,{children:"Edit your Note"}),Object(d.jsx)(F.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),I(function(e,t,n,a){return function(){var r=Object(y.a)(v.a.mark((function r(c,s){var o,i,l,u,j,d;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:V}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,k.a.put("/api/notes/".concat(e),{title:t,content:n,category:a},l);case 6:u=r.sent,j=u.data,c({type:X,payload:j}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),d=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:Y,payload:d});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.params.id,o,j,f)),o&&j&&f&&(i(""),x(""),p(""),n.push("/mynotes"))},children:[_&&Object(d.jsx)(re,{}),L&&Object(d.jsx)(se,{variant:"danger",children:L}),U&&Object(d.jsx)(se,{variant:"danger",children:U}),Object(d.jsxs)(O.a.Group,{controlId:"title",children:[Object(d.jsx)(O.a.Label,{children:"Title"}),Object(d.jsx)(O.a.Control,{type:"title",placeholder:"Enter the title",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Content"}),Object(d.jsx)(O.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:j,onChange:function(e){return p(e.target.value)}})]}),j&&Object(d.jsxs)(F.a,{children:[Object(d.jsx)(F.a.Header,{children:"Note Preview"}),Object(d.jsx)(F.a.Body,{children:Object(d.jsx)(Q.a,{children:j})})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Category"}),Object(d.jsx)(O.a.Control,{type:"content",placeholder:"Enter the Category",value:f,onChange:function(e){return x(e.target.value)}})]}),N&&Object(d.jsx)(re,{size:50}),Object(d.jsx)(A.a,{variant:"primary",type:"submit",children:"Update Note"}),Object(d.jsx)(A.a,{className:"mx-2",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&I(ne(e)),void n.push("/mynotes");var e},children:"Delete Note"})]})}),Object(d.jsxs)(F.a.Footer,{className:"text-muted",children:["Updated on - ",E.substring(0,10)]})]})})};n(270);var le=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(""),p=Object(s.a)(l,2),b=p[0],h=p[1],f=Object(g.b)(),x=Object(g.c)((function(e){return e.userLogin})),m=x.loading,I=x.error,w=x.userInfo;return Object(a.useEffect)((function(){w&&t.push("/mynotes")}),[t,w]),Object(d.jsx)(z,{title:"LOGIN",children:Object(d.jsxs)("div",{className:"loginContainer",children:[I&&Object(d.jsx)(se,{variant:"danger",children:I}),m&&Object(d.jsx)(re,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),f(function(e,t){return function(){var n=Object(y.a)(v.a.mark((function n(a){var r,c,s;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:S}),r={headers:{"Content-type":"application/json"}},n.next=5,k.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:E,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:C,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(c,b))},children:[Object(d.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:b,placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(d.jsx)(u.a,{className:"py-3",children:Object(d.jsxs)(j.a,{children:["New Customer ? ",Object(d.jsx)(o.b,{to:"/register",children:"Register Here"})]})})]})})};n(271);var ue=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(""),p=Object(s.a)(l,2),b=p[0],h=p[1],f=Object(a.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),x=Object(s.a)(f,2),m=x[0],S=x[1],C=Object(a.useState)(""),I=Object(s.a)(C,2),T=I[0],_=I[1],U=Object(a.useState)(""),P=Object(s.a)(U,2),R=P[0],D=P[1],G=Object(a.useState)(null),F=Object(s.a)(G,2),B=F[0],H=F[1],Q=Object(a.useState)(null),J=Object(s.a)(Q,2),q=J[0],M=J[1],W=Object(g.b)(),Z=Object(g.c)((function(e){return e.userRegister})),K=Z.loading,V=Z.error,X=Z.userInfo;return Object(a.useEffect)((function(){X&&t.push("/")}),[t,X]),Object(d.jsx)(z,{title:"REGISTER",children:Object(d.jsxs)("div",{className:"loginContainer",children:[V&&Object(d.jsx)(se,{variant:"danger",children:V}),B&&Object(d.jsx)(se,{variant:"danger",children:B}),K&&Object(d.jsx)(re,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),T!==R?H("Passwords do not match"):W(function(e,t,n,a){return function(){var r=Object(y.a)(v.a.mark((function r(c){var s,o,i;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:w}),s={headers:{"Content-type":"application/json"}},r.next=5,k.a.post("/api/users",{name:e,pic:a,email:t,password:n},s);case 5:o=r.sent,i=o.data,c({type:N,payload:i}),c({type:E,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:L,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(b,c,T,m))},children:[Object(d.jsxs)(O.a.Group,{controlId:"name",children:[Object(d.jsx)(O.a.Label,{children:"Name"}),Object(d.jsx)(O.a.Control,{type:"name",value:b,placeholder:"Enter name",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:T,placeholder:"Password",onChange:function(e){return _(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:R,placeholder:"Confirm Password",onChange:function(e){return D(e.target.value)}})]}),q&&Object(d.jsx)(se,{variant:"danger",children:q}),Object(d.jsxs)(O.a.Group,{controlId:"pic",children:[Object(d.jsx)(O.a.Label,{children:"Profile Picture"}),Object(d.jsx)(O.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return M("Please Select an Image");if(M(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return M("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){S(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(d.jsx)(A.a,{variant:"primary",type:"submit",children:"Register"})]}),Object(d.jsx)(u.a,{className:"py-3",children:Object(d.jsxs)(j.a,{children:["Have an Account ? ",Object(d.jsx)(o.b,{to:"/login",children:"Login"})]})})]})})};var je=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1],p=Object(a.useState)(""),b=Object(s.a)(p,2),h=b[0],f=b[1],x=Object(g.b)(),m=Object(g.c)((function(e){return e.noteCreate})),S=m.loading,E=m.error,C=m.note;console.log(C);var I=function(){o(""),f(""),j("")};return Object(a.useEffect)((function(){}),[]),Object(d.jsx)(z,{title:"Create a Note",children:Object(d.jsxs)(F.a,{children:[Object(d.jsx)(F.a.Header,{children:"Create a new Note"}),Object(d.jsx)(F.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),x(function(e,t,n){return function(){var a=Object(y.a)(v.a.mark((function a(r,c){var s,o,i,l,u,j;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:W}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},a.next=6,k.a.post("/api/notes/create",{title:e,content:t,category:n},i);case 6:l=a.sent,u=l.data,r({type:Z,payload:u}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),j=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,r({type:K,payload:j});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(c,u,h)),c&&u&&h&&(I(),t.push("/mynotes"))},children:[E&&Object(d.jsx)(se,{variant:"danger",children:E}),Object(d.jsxs)(O.a.Group,{controlId:"title",children:[Object(d.jsx)(O.a.Label,{children:"Title"}),Object(d.jsx)(O.a.Control,{type:"title",value:c,placeholder:"Enter the title",onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Content"}),Object(d.jsx)(O.a.Control,{as:"textarea",value:u,placeholder:"Enter the content",rows:4,onChange:function(e){return j(e.target.value)}})]}),u&&Object(d.jsxs)(F.a,{children:[Object(d.jsx)(F.a.Header,{children:"Note Preview"}),Object(d.jsx)(F.a.Body,{children:Object(d.jsx)(Q.a,{children:u})})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Category"}),Object(d.jsx)(O.a.Control,{type:"content",value:h,placeholder:"Enter the Category",onChange:function(e){return f(e.target.value)}})]}),S&&Object(d.jsx)(re,{size:50}),Object(d.jsx)(A.a,{type:"submit",variant:"primary",children:"Create Note"}),Object(d.jsx)(A.a,{className:"mx-2",onClick:I,variant:"danger",children:"Reset Feilds"})]})}),Object(d.jsxs)(F.a.Footer,{className:"text-muted",children:["Creating on - ",(new Date).toLocaleDateString()]})]})})},de=(n(272),function(e){e.location;var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),p=l[0],b=l[1],h=Object(a.useState)(),f=Object(s.a)(h,2),x=f[0],m=f[1],S=Object(a.useState)(""),C=Object(s.a)(S,2),I=C[0],w=C[1],N=Object(a.useState)(""),L=Object(s.a)(N,2),P=L[0],R=L[1],D=Object(a.useState)(),G=Object(s.a)(D,2),F=G[0],B=G[1],H=Object(g.b)(),Q=Object(g.c)((function(e){return e.userLogin})).userInfo,J=Object(g.c)((function(e){return e.userUpdate})),q=J.loading,M=J.error,W=J.success;Object(a.useEffect)((function(){Q?(o(Q.name),b(Q.email),m(Q.pic)):t.push("/")}),[t,Q]);return Object(d.jsx)(z,{title:"EDIT PROFILE",children:Object(d.jsx)("div",{children:Object(d.jsxs)(u.a,{className:"profileContainer",children:[Object(d.jsx)(j.a,{md:6,children:Object(d.jsxs)(O.a,{onSubmit:function(e){var t;e.preventDefault(),H((t={name:c,email:p,password:I,pic:x},function(){var e=Object(y.a)(v.a.mark((function e(n,a){var r,c,s,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:T}),r=a(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,k.a.post("/api/users/profile",t,s);case 6:o=e.sent,i=o.data,n({type:_,payload:i}),n({type:E,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:U,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[q&&Object(d.jsx)(re,{}),W&&Object(d.jsx)(se,{variant:"success",children:"Updated Successfully"}),M&&Object(d.jsx)(se,{variant:"danger",children:M}),Object(d.jsxs)(O.a.Group,{controlId:"name",children:[Object(d.jsx)(O.a.Label,{children:"Name"}),Object(d.jsx)(O.a.Control,{type:"text",placeholder:"Enter Name",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"email",children:[Object(d.jsx)(O.a.Label,{children:"Email Address"}),Object(d.jsx)(O.a.Control,{type:"email",placeholder:"Enter Email",value:p,onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"password",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Enter Password",value:I,onChange:function(e){return w(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Confirm Password",value:P,onChange:function(e){return R(e.target.value)}})]})," ",F&&Object(d.jsx)(se,{variant:"danger",children:F}),Object(d.jsxs)(O.a.Group,{controlId:"pic",children:[Object(d.jsx)(O.a.Label,{children:"Change Profile Picture"}),Object(d.jsx)(O.a.File,{onChange:function(e){return function(e){if(B(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return B("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){m(e.url.toString()),console.log(x)})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(d.jsx)(A.a,{type:"submit",varient:"primary",children:"Update"})]})}),Object(d.jsx)(j.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsx)("img",{src:x,alt:c,className:"profilePic"})})]})})})});var pe=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(R,{setSearch:function(e){return r(e)}}),Object(d.jsxs)("main",{className:"App",children:[Object(d.jsx)(i.a,{path:"/",component:D,exact:!0}),Object(d.jsx)(i.a,{path:"/login",component:le}),Object(d.jsx)(i.a,{path:"/register",component:ue}),Object(d.jsx)(i.a,{path:"/mynotes",component:function(e){var t=e.history;return Object(d.jsx)(oe,{search:n,history:t})}}),Object(d.jsx)(i.a,{path:"/note/:id",component:ie}),Object(d.jsx)(i.a,{path:"/createnote",component:je}),";",Object(d.jsx)(i.a,{path:"/profile",component:de})]}),Object(d.jsx)(p,{})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},he=n(52),Oe=n(126),fe=n(127),xe=Object(he.combineReducers)({noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return{loading:!0};case q:return{loading:!1,notes:t.payload};case M:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case E:return{loading:!1,userInfo:t.payload};case C:return{loading:!1,error:t.payload};case I:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case N:return{loading:!1,userInfo:t.payload};case L:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return{loading:!0};case Z:return{loading:!1,success:!0};case K:return{loading:!1,error:t.payload};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return{loading:!0};case ee:return{loading:!1,success:!0};case te:return{loading:!1,error:t.payload,success:!1};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{loading:!0};case X:return{loading:!1,success:!0};case Y:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case _:return{loading:!1,userInfo:t.payload,success:!0};case U:return{loading:!1,error:t.payload,success:!1};default:return e}}}),ge={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},me=[Oe.a],ve=Object(he.createStore)(xe,ge,Object(fe.composeWithDevTools)(he.applyMiddleware.apply(void 0,me)));c.a.render(Object(d.jsx)(g.a,{store:ve,children:Object(d.jsx)(pe,{})}),document.getElementById("root")),be()}},[[273,1,2]]]);
//# sourceMappingURL=main.25845cb6.chunk.js.map