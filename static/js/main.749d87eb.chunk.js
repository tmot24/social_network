(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),s=n.n(c),i=(n(79),n(80),n(36)),o=n.n(i),u=n(20),l=n(122),d=n(124),p=n(125),f=n(2),j=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(l.a,{component:"nav",className:o.a.nav,disablePadding:!0,children:[Object(f.jsx)(u.b,{to:"/profile",className:o.a.link,children:Object(f.jsx)(d.a,{button:!0,divider:!0,children:Object(f.jsx)(p.a,{primary:"Profile"})})}),Object(f.jsx)(u.b,{to:"/dialogs",className:o.a.link,children:Object(f.jsx)(d.a,{button:!0,divider:!0,children:Object(f.jsx)(p.a,{primary:"Dialogs"})})}),Object(f.jsx)(u.b,{to:"/users",className:o.a.link,children:Object(f.jsx)(d.a,{button:!0,divider:!0,children:Object(f.jsx)(p.a,{primary:"Users"})})}),Object(f.jsx)(u.b,{to:"/login",className:o.a.link,children:Object(f.jsx)(d.a,{button:!0,divider:!0,children:Object(f.jsx)(p.a,{primary:"Login"})})})]})})},b=n(8),h=n(43),O=n.n(h),g=n.p+"static/media/Cloud,_blue_background.48bab0ba.svg",m=n(123),v=function(e){var t=e.isAuth,n=e.login,r=e.logout;return Object(f.jsxs)("header",{className:O.a.header,children:[Object(f.jsx)("img",{src:g,alt:"cloud"}),Object(f.jsx)("div",{children:t?Object(f.jsxs)("div",{className:O.a.login,children:[Object(f.jsx)("div",{children:Object(f.jsx)("h3",{children:n})}),Object(f.jsx)(m.a,{variant:"contained",onClick:r,children:"Log out"})]}):Object(f.jsx)(m.a,{variant:"contained",onClick:r,children:Object(f.jsx)(u.b,{className:O.a.navLink,to:"/login",children:"Login"})})})]})},x=n(25),w=n(3),_=n.n(w),y=n(6),S=n(4),k=n(13),C="auth/SET_USER_DATA",E="auth/SET_ERROR_LOGIN",P="auth/GET_CAPTCHA_URL_SUCCESS",U={id:null,email:null,login:null,isAuth:!1,errorMessage:null,captchaUrl:null},L=function(e){return{type:P,payload:{captchaUrl:e}}},A=function(e){return{type:E,errorMessage:e}},I=function(e,t,n,r){return{type:C,payload:{userId:e,email:t,login:n,isAuth:r}}},T=function(){return function(){var e=Object(y.a)(_.a.mark((function e(t){var n,r,a,c,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(I(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(y.a)(_.a.mark((function e(t){var n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(L(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M={logout:function(){return function(){var e=Object(y.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.logout();case 2:0===e.sent.data.resultCode&&t(I(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},F=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),M)((function(e){var t=e.isAuth,n=e.login,r=e.logout;return Object(f.jsx)(v,{isAuth:t,login:n,logout:r})})),R=n(49),D=n(37),z=n.n(D),G=function(e){var t=e.errorMessage,n=e.login,r=e.captchaUrl,a=Object(R.a)(),c=a.register,s=a.handleSubmit,i=a.formState.errors,o={required:"Field is required",minLength:{value:2,message:"Less than 2"}},u=function(e){return i[e]&&Object(f.jsx)("span",{children:i[e].message})};return Object(f.jsxs)("form",{onSubmit:s((function(e){n(e.email,e.password,e.rememberMe,e.captcha)})),children:[Object(f.jsx)("div",{children:"Use email: free@samuraijs.com"}),Object(f.jsx)("div",{children:"Use password: free"}),Object(f.jsxs)("div",{className:z.a.formControl,children:[Object(f.jsx)("div",{children:Object(f.jsx)("input",Object(S.a)({className:i.email?z.a.error:"",type:"text",placeholder:"Email"},c("email",o)))}),u("email"),Object(f.jsx)("div",{children:Object(f.jsx)("input",Object(S.a)({className:i.password?z.a.error:"",type:"password",placeholder:"Password"},c("password",o)))}),u("password"),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",Object(S.a)({type:"checkbox"},c("rememberMe")))," remember me"]}),Object(f.jsx)("div",{children:t&&Object(f.jsx)("span",{children:t})}),r&&Object(f.jsx)("img",{src:r,alt:"captcha"}),r&&Object(f.jsx)("div",{children:Object(f.jsx)("input",Object(S.a)({className:i.captcha?z.a.error:"",type:"text",placeholder:"Captcha"},c("captcha",{required:"Field is required"})))}),Object(f.jsx)("div",{children:Object(f.jsx)("input",{type:"submit",value:"Login"})})]})]})},B={login:function(e,t,n,r){return function(){var a=Object(y.a)(_.a.mark((function a(c){var s;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(T()):(10===s.data.resultCode&&c(N()),c(A(s.data.messages[0])));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setErrorLogin:A},q=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,errorMessage:e.auth.errorMessage,captchaUrl:e.auth.captchaUrl}}),B)((function(e){var t=e.isAuth,n=e.login,r=e.errorMessage,a=e.captchaUrl;return t?Object(f.jsx)(b.a,{to:"profile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)(G,{errorMessage:r,login:n,captchaUrl:a})]})})),H="INITIALIZED_SUCCESS",V={initialized:!1},W=n(48),J=n.p+"static/media/welcome-home-welcome-home-de.842af542.jpg",Y=n(68),K=n.n(Y),X=function(){return Object(f.jsx)("div",{className:K.a.welcome,children:Object(f.jsx)("img",{src:J,alt:"welcome"})})},Z=function(){return Object(f.jsx)("div",{children:"Not Found"})},Q=n(33),$=n(34),ee=n(71),te=n(70),ne=function(e){Object(ee.a)(n,e);var t=Object(te.a)(n);function n(){var e;Object(Q.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object($.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0}),console.log(t)}},{key:"render",value:function(){return this.state.error?Object(f.jsx)("img",{src:"https://miro.medium.com/max/700/1*v4dLIlWpJkCiSDKv7xguLA.png",alt:"error"}):this.props.children}}]),n}(a.a.Component),re=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,136))})),ae=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,137))})),ce=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,138))})),se={initializeApp:function(){return function(e){e(T()).then((function(){e({type:H})}))}}},ie=Object(x.b)((function(e){return{initialized:e.app.initialized}}),se)((function(e){var t=e.initialized,n=e.initializeApp;Object(r.useEffect)((function(){n()}),[n]);var a=Object(f.jsx)("div",{className:"app-wrapper",children:Object(f.jsx)(W.a,{})});return t?Object(f.jsx)("div",{className:"app-wrapper",children:Object(f.jsxs)(ne,{children:[Object(f.jsx)(F,{}),Object(f.jsx)(j,{}),Object(f.jsx)("div",{className:"app-wrapper-content",children:Object(f.jsx)(r.Suspense,{fallback:a,children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(b.b,{path:"/",exact:!0,component:X}),Object(f.jsx)(b.b,{path:"/profile/:userId?",component:re}),Object(f.jsx)(b.b,{path:"/dialogs",component:ce}),Object(f.jsx)(b.b,{path:"/users",component:ae}),Object(f.jsx)(b.b,{path:"/login",component:q}),Object(f.jsx)(b.b,{component:Z})]})})})]})}):a})),oe=n(27),ue=n(50),le=n(60),de=n(61),pe=n(69),fe=Object(oe.c)({profilePage:ue.d,dialogsPage:le.a,usersPage:de.e,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:case P:return Object(S.a)(Object(S.a)({},e),t.payload);case E:return Object(S.a)(Object(S.a)({},e),{},{errorMessage:t.errorMessage});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}}}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.d,be=Object(oe.e)(fe,je(Object(oe.a)(pe.a)));s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(u.a,{basename:"/social_network",children:Object(f.jsx)(x.a,{store:be,children:Object(f.jsx)(ie,{})})})}),document.getElementById("root"))},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(67),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b45f20e6-c418-486d-bf45-21bf8191b135"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},28:function(e,t,n){"use strict";t.a=n.p+"static/media/default_avatar.f2be6b87.jpg"},36:function(e,t,n){e.exports={nav:"navBar_nav__sOiFi",link:"navBar_link__JBSfV",activeLink:"navBar_activeLink__2Daph"}},37:function(e,t,n){e.exports={formControl:"addMessageForm_formControl__2AMq-",error:"addMessageForm_error__mgWRR"}},43:function(e,t,n){e.exports={header:"header_header__3xkjA",login:"header_login__1BPng",navLink:"header_navLink__26qAj"}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n.p+"static/media/Spinner-1s-300px.eadce372.svg",a=n(2),c=function(){return Object(a.jsx)("img",{src:r,alt:"loading"})}},50:function(e,t,n){"use strict";n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(3),a=n.n(r),c=n(6),s=n(9),i=n(4),o=n(13),u="profile/ADD_POST",l="profile/SET_USER_PROFILE",d="profile/SET_STATUS",p="profile/DELETE_POST",f="profile/SAVE_PHOTO_SUCCESS",j={posts:[{id:1,message:"Hi, how are you?",likesCount:11},{id:2,message:"It's my first post",likesCount:22}],profile:null,status:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case p:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case f:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}},h=function(e){return{type:u,newPostText:e}},O=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:f,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,o.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(g(c)),t.next=9;break;case 8:return t.abrupt("return",Promise.reject(s.data.messages));case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(9),a=n(4),c=n(28),s="SEND_MESSAGE",i={dataDialog:[{id:1,name:"Dimych",img:c.a},{id:2,name:"Andrey",img:c.a},{id:3,name:"Sveta",img:c.a},{id:4,name:"Sasha",img:c.a},{id:5,name:"Victor",img:c.a},{id:6,name:"Valera",img:c.a}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}},u=function(e){return{type:s,newMessageBody:e}}},61:function(e,t,n){"use strict";n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return _})),n.d(t,"a",(function(){return S})),n.d(t,"d",(function(){return k}));var r=n(3),a=n.n(r),c=n(6),s=n(9),i=n(4),o=n(13),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l="FOLLOW",d="UNFOLLOW",p="SET_USERS",f="SET_CURRENT_PAGE",j="SET_TOTAL_USERS_COUNT",b="TOGGLE_IS_FETCHING",h="TOGGLE_IS_FOLLOWING_PROGRESS",O={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case p:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case f:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case j:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case b:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},m=function(e){return{type:l,userId:e}},v=function(e){return{type:d,userId:e}},x=function(e){return{type:b,isFetching:e}},w=function(e,t){return{type:h,isFetching:e,userId:t}},_=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r({type:f,currentPage:e}),n.next=4,o.d.getUsers(e,t);case 4:c=n.sent,r(x(!1)),r((s=c.items,{type:p,users:s})),r((a=c.totalCount,{type:j,totalUsersCount:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n,e,o.d.follow,m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n,e,o.d.unfollow,v);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},68:function(e,t,n){e.exports={welcome:"welcome_welcome__2l93p"}},79:function(e,t,n){},80:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.749d87eb.chunk.js.map