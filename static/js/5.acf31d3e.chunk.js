(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[5],{131:function(e,n,t){e.exports={paginator:"paginator_paginator__3rETt",selectedPage:"paginator_selectedPage__3hMHp"}},132:function(e,n,t){e.exports={userPhoto:"users_userPhoto__2Iaez",selectedPage:"users_selectedPage__1u_af"}},137:function(e,n,t){"use strict";t.r(n);var r=t(25),o=t(61),s=t(0),l=t(24),i=t(131),u=t.n(i),c=t(2),a=function(e){var n=e.totalItemsCount,t=e.pageSize,r=e.currentPage,o=e.onPageChanged,i=e.portionSize,a=void 0===i?10:i,g=Object(s.useState)(1),f=Object(l.a)(g,2),d=f[0],j=f[1],h=Math.ceil(n/t),p=Array.from({length:h},(function(e,n){return n+1})),b=Math.ceil(h/a),P=(d-1)*a+1,v=d*a;return Object(c.jsxs)("div",{className:u.a.paginator,children:[d>1&&Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){j(1)},children:"First"}),Object(c.jsx)("button",{onClick:function(){j(d-1)},children:"Prev"})]}),p.filter((function(e){return e>=P&&e<=v})).map((function(e){return Object(c.jsx)("button",{className:r===e?u.a.selectedPage:null,onClick:function(){return o(e)},children:e},e)})),b>d&&Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){j(d+1)},children:"Next"}),Object(c.jsx)("button",{onClick:function(){j(b)},children:"Last"})]})]})},g=t(20),f=t(28),d=t(132),j=t.n(d),h=function(e){var n=e.user,t=e.followingInProgress,r=e.follow,o=e.unfollow;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)(g.b,{to:"/profile/".concat(n.id),children:Object(c.jsx)("img",{src:n.photos.small?n.photos.small:f.a,className:j.a.userPhoto,alt:"img"})})}),Object(c.jsx)("div",{children:n.followed?Object(c.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){return o(n.id)},children:"Unfollow"}):Object(c.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){return r(n.id)},children:"Follow"})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:n.name}),Object(c.jsx)("div",{children:n.status})]})]})},p=function(e){var n=e.totalUsersCount,t=e.pageSize,r=e.currentPage,o=e.onPageChanged,s=e.follow,l=e.unfollow,i=e.users,u=e.followingInProgress;return Object(c.jsxs)("div",{children:[Object(c.jsx)(a,{totalItemsCount:n,pageSize:t,currentPage:r,onPageChanged:o}),i.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(h,{user:e,followingInProgress:u,follow:s,unfollow:l})},e.id)}))]})},b=t(48);function P(e,n){return e===n}function v(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}function w(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var x=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var s=0,l=r.pop(),i=w(r),u=e.apply(void 0,[function(){return s++,l.apply(null,arguments)}].concat(t)),c=e((function(){for(var e=[],n=i.length,t=0;t<n;t++)e.push(i[t].apply(null,arguments));return u.apply(null,e)}));return c.resultFunc=l,c.dependencies=i,c.recomputations=function(){return s},c.resetRecomputations=function(){return s=0},c}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P,t=null,r=null;return function(){return v(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var O=x((function(e){return e.usersPage.users}),(function(e){return e})),C={follow:o.a,unfollow:o.d,toggleFollowingProgress:o.c,getUsersThunkCreator:o.b};n.default=Object(r.b)((function(e){return{users:O(e),pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),C)((function(e){var n=e.follow,t=e.unfollow,r=e.users,o=e.pageSize,l=e.totalUsersCount,i=e.currentPage,u=e.isFetching,a=e.toggleFollowingProgress,g=e.followingInProgress,f=e.getUsersThunkCreator;Object(s.useEffect)((function(){f(i,o)}),[i,f,o]);return Object(c.jsxs)(c.Fragment,{children:[u?Object(c.jsx)(b.a,{}):null,Object(c.jsx)(p,{totalUsersCount:l,pageSize:o,currentPage:i,onPageChanged:function(e){f(e,o)},follow:n,unfollow:t,users:r,toggleFollowingProgress:a,followingInProgress:g})]})}))}}]);
//# sourceMappingURL=5.acf31d3e.chunk.js.map