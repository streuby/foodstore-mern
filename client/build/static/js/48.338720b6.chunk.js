(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[48],{100:function(e,t,n){"use strict";n(0);var r=n(84),a=n(127),c=n(118),s=n(1);t.a=function(e){var t=e.children;return Object(s.jsx)(r.a,{children:Object(s.jsx)(a.a,{className:"justify-content-md-center",children:Object(s.jsx)(c.a,{xs:12,md:6,children:t})})})}},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return l}));var r=n(5),a=n(15),c=n(93),s=n.n(c),o=n(17),u=function(e,t,n,c){return function(){var u=Object(a.a)(Object(r.a)().mark((function a(u,i){var p,d,l;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u({type:o.b}),p=i(),d=p.userLogIn.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.token)}},r.next=6,s.a.post("/api/currency",{shortname:e,isocode:t,name:n,symbol:c},l);case 6:u({type:o.c}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),u({type:o.a,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),a,null,[[0,9]])})));return function(e,t){return u.apply(this,arguments)}}()},i=function(){return function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n,a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:o.l}),n={headers:{"Content-Type":"application/json"}},e.next=5,s.a.get("/api/currency",n);case 5:a=e.sent,c=a.data,t({type:o.m,payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:o.k,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(a.a)(Object(r.a)().mark((function t(n,a){var c,u,i;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.e}),c=a(),u=c.userLogIn.userInfo,i={headers:{Authorization:"Bearer ".concat(u.token)}},t.next=6,s.a.delete("/api/currency/".concat(e),i);case 6:n({type:o.f}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:o.d,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){var a,c,u;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.h}),a={headers:{"Content-Type":"application/json"}},t.next=5,s.a.get("/api/currency/".concat(e),a);case 5:c=t.sent,u=c.data,n({type:o.j,payload:u}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:o.g,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e,t,n,c,u){return function(){var i=Object(a.a)(Object(r.a)().mark((function a(i,p){var d,l,j;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i({type:o.o}),d=p(),l=d.userLogIn.userInfo,j={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},r.next=6,s.a.put("/api/currency/".concat(u),{shortname:e,isocode:t,name:n,symbol:c},j);case 6:i({type:o.q}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),i({type:o.n,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),a,null,[[0,9]])})));return function(e,t){return i.apply(this,arguments)}}()}},581:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(0),c=n(100),s=n(4),o=n(51),u=n(111),i=n(164),p=n(92),d=n(88),l=n(50),j=n(181),b=n(17),f=n(1);t.default=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],h=t[1],m=Object(a.useState)(""),y=Object(r.a)(m,2),O=y[0],v=y[1],x=Object(a.useState)(""),g=Object(r.a)(x,2),C=g[0],k=g[1],I=Object(a.useState)(""),w=Object(r.a)(I,2),N=w[0],L=w[1],S=Object(l.b)(),z=Object(s.D)(),A=Object(s.I)().id,E=Object(l.c)((function(e){return e.userLogIn})).userInfo,G=Object(l.c)((function(e){return e.currencyDetails})),B=G.currencyData,D=G.loading,T=G.error,q=Object(l.c)((function(e){return e.currencyUpdate})),F=q.success,U=q.loading,J=q.error;Object(a.useEffect)((function(){E&&"admin"!==E.role&&z("/"),F?(S({type:b.p}),S({type:b.i}),z("/admin/currency")):B.name&&B._id===A?(h(B.name),k(B.isocode),v(B.shortname),L(B.symbol)):S(Object(j.c)(A))}),[S,F,E,z,B.name,B._id,B.isocode,B.shortname,B.symbol,A]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.Link,{to:"/admin/attribute",className:"btn btn-dark my-3",children:"Go Back"}),Object(f.jsxs)(c.a,{children:[F&&Object(f.jsx)(d.a,{variant:"success",children:"Attribute Updated"}),J&&Object(f.jsx)(d.a,{variant:"danger",children:J}),T&&Object(f.jsx)(d.a,{variant:"danger",children:T}),Object(f.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),S(Object(j.e)(O,C,n,N,A))},className:"my-5",children:[Object(f.jsxs)(u.a.Group,{controlId:"name",children:[Object(f.jsx)(u.a.Label,{children:"Create Currency"}),Object(f.jsx)(u.a.Control,{type:"text",placeholder:"Name (EX: NIGERIA NAIRA)",value:n,onChange:function(e){return h(e.target.value)}})]}),Object(f.jsxs)(u.a.Group,{controlId:"isocode",children:[Object(f.jsx)(u.a.Label,{children:"ISO Code"}),Object(f.jsx)(u.a.Control,{type:"text",placeholder:"Enter Currency ISO Code",value:C,required:!0,onChange:function(e){return k(e.target.value)}})]}),Object(f.jsxs)(u.a.Group,{controlId:"shortname",children:[Object(f.jsx)(u.a.Label,{children:"Numeric Code"}),Object(f.jsx)(u.a.Control,{type:"text",placeholder:"Enter Numeric Code",value:O,required:!0,onChange:function(e){return v(e.target.value)}})]}),Object(f.jsxs)(u.a.Group,{controlId:"symbol",children:[Object(f.jsx)(u.a.Label,{children:"Currency Symbol"}),Object(f.jsx)(u.a.Control,{type:"text",placeholder:"Enter Currency Symbol",value:N,onChange:function(e){return L(e.target.value)}})]}),Object(f.jsxs)(i.a,{type:"submit",variant:"primary",className:"my-3",disabled:D,children:["Update ",U&&Object(f.jsx)(p.a,{size:"size-sm"})]})]})]})]})}},88:function(e,t,n){"use strict";n(0);var r=n(134),a=n(1);t.a=function(e){var t=e.children,n=e.variant;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.a,{variant:n,children:t})})}},92:function(e,t,n){"use strict";n(0);var r=n(131),a=n(1),c=function(e){var t=e.size;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.a,{animation:"grow",variant:"dark",className:t})})};c.defaultProps={size:"size-md"},t.a=c}}]);
//# sourceMappingURL=48.338720b6.chunk.js.map