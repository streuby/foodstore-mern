(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[40],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));var n=a(123);a(124),a(126);n.a.apps.length||n.a.initializeApp({apiKey:"AIzaSyANZIOG7dJhdLtvqQizX1njIBTS9YOgX1Q",authDomain:"foody-b958c.firebaseapp.com",projectId:"foody-b958c",storageBucket:"foody-b958c.appspot.com",messagingSenderId:"371213369183",appId:"1:371213369183:web:e1559b79d1d074c3f9c0ea",measurementId:"G-22ZPZ95BMK"});var r=n.a.auth(),c=new n.a.auth.GoogleAuthProvider},127:function(e,t,a){"use strict";var n=a(2),r=a(38),c=a(39),s=a.n(c),i=a(0),o=a(40),u=a(1),p=["bsPrefix","className","as"],d=i.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.as,d=void 0===i?"div":i,l=Object(r.a)(e,p),b=Object(o.c)(a,"row"),j=Object(o.a)(),f=Object(o.b)(),h="".concat(b,"-cols"),O=[];return j.forEach((function(e){var t,a=l[e];delete l[e],t=null!=a&&"object"===typeof a?a.cols:a;var n=e!==f?"-".concat(e):"";null!=t&&O.push("".concat(h).concat(n,"-").concat(t))})),Object(u.jsx)(d,Object(n.a)(Object(n.a)({ref:t},l),{},{className:s.a.apply(void 0,[c,b].concat(O))}))}));d.displayName="Row",t.a=d},131:function(e,t,a){"use strict";var n=a(2),r=a(38),c=a(39),s=a.n(c),i=a(0),o=a(40),u=a(1),p=["bsPrefix","variant","animation","size","as","className"],d=i.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,i=e.animation,d=void 0===i?"border":i,l=e.size,b=e.as,j=void 0===b?"div":b,f=e.className,h=Object(r.a)(e,p);a=Object(o.c)(a,"spinner");var O="".concat(a,"-").concat(d);return Object(u.jsx)(j,Object(n.a)(Object(n.a)({ref:t},h),{},{className:s()(f,O,l&&"".concat(O,"-").concat(l),c&&"text-".concat(c))}))}));d.displayName="Spinner",t.a=d},134:function(e,t,a){"use strict";var n=a(2),r=a(38),c=a(39),s=a.n(c),i=a(0),o=a(101),u=a(91),p=a(117),d=a(40),l=a(109),b=a(119),j=a(113),f=a(90),h=a(1),O=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],v=Object(j.a)("h4");v.displayName="DivStyledAsH4";var m=Object(f.a)("alert-heading",{Component:v}),x=Object(f.a)("alert-link",{Component:p.a}),y=i.forwardRef((function(e,t){var a=Object(o.a)(e,{show:"onClose"}),c=a.bsPrefix,i=a.show,p=void 0===i||i,j=a.closeLabel,f=void 0===j?"Close alert":j,v=a.closeVariant,m=a.className,x=a.children,y=a.variant,g=void 0===y?"primary":y,w=a.onClose,k=a.dismissible,N=a.transition,I=void 0===N?l.a:N,z=Object(r.a)(a,O),A=Object(d.c)(c,"alert"),L=Object(u.a)((function(e){w&&w(!1,e)})),B=!0===I?l.a:I,C=Object(h.jsxs)("div",Object(n.a)(Object(n.a)({role:"alert"},B?void 0:z),{},{ref:t,className:s()(m,A,g&&"".concat(A,"-").concat(g),k&&"".concat(A,"-dismissible")),children:[k&&Object(h.jsx)(b.a,{onClick:L,"aria-label":f,variant:v}),x]}));return B?Object(h.jsx)(B,Object(n.a)(Object(n.a)({unmountOnExit:!0},z),{},{ref:void 0,in:p,children:C})):p?C:null}));y.displayName="Alert",t.a=Object.assign(y,{Link:x,Heading:m})},136:function(e,t,a){"use strict";a.d(t,"f",(function(){return d})),a.d(t,"b",(function(){return l})),a.d(t,"g",(function(){return b})),a.d(t,"d",(function(){return j})),a.d(t,"i",(function(){return f})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return O})),a.d(t,"h",(function(){return v})),a.d(t,"e",(function(){return m}));var n=a(5),r=a(15),c=a(93),s=a.n(c),i=a(9),o=a(12),u=a(7),p=a(107),d=function(e){return function(){var t=Object(r.a)(Object(n.a)().mark((function t(a){var r,c,i,o,p,d,l,b,j,f;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.z}),t.next=4,e.getIdTokenResult();case 4:return r=t.sent,c=r.token,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}},t.next=9,s.a.post("/api/auth/create-or-update-user",{},i);case 9:o=t.sent,p=o.data,d=p.email,l=p.name,b=p._id,j=p.role,f=p.shipping,a({type:u.A,payload:{_id:b,name:l,email:d,token:c,role:j,shipping:f}}),localStorage.setItem("userInfo",JSON.stringify({_id:b,name:l,email:d,role:j,token:c,shipping:f})),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),a({type:u.y,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e){return t.apply(this,arguments)}}()},l=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){var a,r,c,i,o,u,p,d;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},e.next=3,s.a.post("/api/auth/current-user",{},a);case 3:return r=e.sent,c=r.data,i=c.email,o=c.name,u=c._id,p=c.role,d=c.shipping,localStorage.setItem("userInfo",JSON.stringify({_id:u,name:o,email:i,role:p,token:t,shipping:d})),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){return function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.signOut();case 2:return e.next=4,t({type:u.B});case 4:return e.next=6,t({type:u.w});case 6:return e.next=8,t({type:i.r});case 8:return e.next=10,t({type:o.w});case 10:return e.next=12,t({type:o.c});case 12:localStorage.removeItem("userInfo");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(r.a)(Object(n.a)().mark((function e(t,a){var r,c,i,o,p;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:u.v}),r=a(),c=r.userLogIn.userInfo,i={headers:{Authorization:"Bearer ".concat(c.token)}},e.next=6,s.a.get("/api/users",i);case 6:o=e.sent,p=o.data,t({type:u.x,payload:p}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:u.u,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(r.a)(Object(n.a)().mark((function t(a,r){var c,i,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.f}),c=r(),i=c.userLogIn.userInfo,o={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},t.next=6,s.a.post("/api/users",{shipping:e},o);case 6:a({type:u.h}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:u.e,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(r.a)(Object(n.a)().mark((function t(a,r){var c,i,o,p,d;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.r}),c=r(),i=c.userLogIn.userInfo,o={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},t.next=6,s.a.get("/api/admin/usersDetails/".concat(e),o);case 6:p=t.sent,d=p.data,a({type:u.t,payload:d}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:u.q,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(r.a)(Object(n.a)().mark((function t(a,r){var c,i,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.b}),c=r(),i=c.userLogIn.userInfo,o={headers:{Authorization:"Bearer ".concat(i.token)}},t.next=6,s.a.post("/api/wishlist/".concat(e),{},o);case 6:a({type:u.d}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:u.a,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(r.a)(Object(n.a)().mark((function t(a,r){var c,i,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.n}),c=r(),i=c.userLogIn.userInfo,o={headers:{Authorization:"Bearer ".concat(i.token)}},t.next=6,s.a.put("/api/wishlist/".concat(e),{},o);case 6:a({type:u.p}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:u.m,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(r.a)(Object(n.a)().mark((function e(t,a){var r,c,i,o,p;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:u.j}),r=a(),c=r.userLogIn.userInfo,i={headers:{Authorization:"Bearer ".concat(c.token)}},e.next=6,s.a.get("/api/wishlist",i);case 6:o=e.sent,p=o.data,t({type:u.l,payload:p.wishlist}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:u.i,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}()}},164:function(e,t,a){"use strict";var n=a(2),r=a(10),c=a(38),s=a(39),i=a.n(s),o=a(0),u=a(122),p=a(40),d=a(1),l=["as","bsPrefix","variant","size","active","disabled","className"],b=o.forwardRef((function(e,t){var a=e.as,s=e.bsPrefix,o=e.variant,b=void 0===o?"primary":o,j=e.size,f=e.active,h=void 0!==f&&f,O=e.disabled,v=void 0!==O&&O,m=e.className,x=Object(c.a)(e,l),y=Object(p.c)(s,"btn"),g=Object(u.b)(Object(n.a)({tagName:a,disabled:v},x)),w=Object(r.a)(g,2),k=w[0],N=w[1].tagName;return Object(d.jsx)(N,Object(n.a)(Object(n.a)(Object(n.a)({},k),x),{},{ref:t,disabled:v,className:i()(m,y,h&&"active",b&&"".concat(y,"-").concat(b),j&&"".concat(y,"-").concat(j),x.href&&v&&"disabled")}))}));b.displayName="Button",t.a=b},169:function(e,t,a){"use strict";var n=a(2),r=a(38),c=a(39),s=a.n(c),i=a(0),o=a(40),u=a(1),p=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=i.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.striped,d=e.bordered,l=e.borderless,b=e.hover,j=e.size,f=e.variant,h=e.responsive,O=Object(r.a)(e,p),v=Object(o.c)(a,"table"),m=s()(c,v,f&&"".concat(v,"-").concat(f),j&&"".concat(v,"-").concat(j),i&&"".concat(v,"-").concat("string"===typeof i?"striped-".concat(i):"striped"),d&&"".concat(v,"-bordered"),l&&"".concat(v,"-borderless"),b&&"".concat(v,"-hover")),x=Object(u.jsx)("table",Object(n.a)(Object(n.a)({},O),{},{className:m,ref:t}));if(h){var y="".concat(v,"-responsive");return"string"===typeof h&&(y="".concat(y,"-").concat(h)),Object(u.jsx)("div",{className:y,children:x})}return x}));t.a=d},569:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(127),c=a(118),s=a(169),i=a(164),o=a(50),u=a(136),p=a(92),d=a(88),l=a(4),b=a(1);t.default=function(){var e=Object(o.c)((function(e){return e.userLogIn})).userInfo,t=Object(o.b)(),a=Object(l.D)();Object(n.useEffect)((function(){e&&"admin"!==e.role?a("/"):t(Object(u.d)())}),[t,e,a]);var j=Object(o.c)((function(e){return e.userList})),f=j.loading,h=j.users,O=j.error;return f?Object(b.jsx)(p.a,{}):O?Object(b.jsx)(d.a,{variant:"danger",children:O}):Object(b.jsx)(r.a,{children:Object(b.jsx)(c.a,{children:Object(b.jsxs)(s.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm",variant:"dark",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"SL"}),Object(b.jsx)("th",{children:"NAME"}),Object(b.jsx)("th",{children:"EMAIL"}),Object(b.jsx)("th",{children:"JOINED ON"}),Object(b.jsx)("th",{children:"ROLE"}),Object(b.jsx)("th",{children:"ORDERS"}),Object(b.jsx)("th",{children:"ACTION"})]})}),Object(b.jsx)("tbody",{children:h.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t+1}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:new Date(e.createdAt).toLocaleDateString()}),Object(b.jsx)("td",{children:e.role}),Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:Object(b.jsx)(i.a,{variant:"dark",onClick:function(){return a("/admin/user/".concat(e._id))},children:"Details"})})]},e._id)}))})]})})})}},88:function(e,t,a){"use strict";a(0);var n=a(134),r=a(1);t.a=function(e){var t=e.children,a=e.variant;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(n.a,{variant:a,children:t})})}},92:function(e,t,a){"use strict";a(0);var n=a(131),r=a(1),c=function(e){var t=e.size;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(n.a,{animation:"grow",variant:"dark",className:t})})};c.defaultProps={size:"size-md"},t.a=c}}]);
//# sourceMappingURL=40.f33b3c7b.chunk.js.map