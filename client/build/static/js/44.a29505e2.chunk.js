(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[44],{100:function(e,t,r){"use strict";r(0);var n=r(84),c=r(127),a=r(118),s=r(1);t.a=function(e){var t=e.children;return Object(s.jsx)(n.a,{children:Object(s.jsx)(c.a,{className:"justify-content-md-center",children:Object(s.jsx)(a.a,{xs:12,md:6,children:t})})})}},106:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));var n=function(e,t,r,n){var c=new Intl.NumberFormat(n,{style:"currency",currency:t}),a=c.formatToParts(0).find((function(e){return"currency"===e.type})).value;return c.format(e).replace(a,r)},c=navigator.language||navigator.userLanguage},110:function(e,t,r){"use strict";r(0);var n=r(132),c=r(1),a=function(e){var t=e.title;return Object(c.jsx)(n.a,{children:Object(c.jsx)("title",{children:t})})};a.defaultProps={title:"Welcome To Foody"},t.a=a},143:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return d})),r.d(t,"e",(function(){return j})),r.d(t,"f",(function(){return p}));var n=r(5),c=r(15),a=r(93),s=r.n(a),o=r(12),i=function(e,t){return function(){var r=Object(c.a)(Object(n.a)().mark((function r(c,a){var i,u,l,d,j;return Object(n.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:o.f}),i=a(),u=i.userLogIn.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u.token)}},r.next=6,s.a.post("/api/order",{paymentIntent:e,paymentMethod:t},l);case 6:d=r.sent,j=d.data,c({type:o.h,payload:j}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),c({type:o.e,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(c.a)(Object(n.a)().mark((function t(r,c){var a,i,u,l,d;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:o.j}),a=c(),i=a.userLogIn.userInfo,u={headers:{Authorization:"Bearer ".concat(i.token)}},t.next=6,s.a.get("/api/order/".concat(e),u);case 6:l=t.sent,d=l.data,r({type:o.l,payload:d}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:o.i,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},l=function(){return function(){var e=Object(c.a)(Object(n.a)().mark((function e(t,r){var c,a,i,u,l;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:o.v}),c=r(),a=c.userLogIn.userInfo,i={headers:{Authorization:"Bearer ".concat(a.token)}},e.next=6,s.a.get("/api/order",i);case 6:u=e.sent,l=u.data,t({type:o.x,payload:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:o.u,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}()},d=function(){return function(){var e=Object(c.a)(Object(n.a)().mark((function e(t,r){var c,a,i,u,l;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:o.b}),c=r(),a=c.userLogIn.userInfo,i={headers:{Authorization:"Bearer ".concat(a.token)}},e.next=6,s.a.get("/api/admin/orderlist",i);case 6:u=e.sent,l=u.data,t({type:o.d,payload:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:o.a,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}()},j=function(e,t){return function(){var r=Object(c.a)(Object(n.a)().mark((function r(c,a){var i,u,l;return Object(n.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:o.n}),i=a(),u=i.userLogIn.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u.token)}},r.next=6,s.a.put("/api/admin/orderStatus/".concat(e),{status:t},l);case 6:c({type:o.p}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),c({type:o.m,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e,t){return r.apply(this,arguments)}}()},p=function(e,t){return function(){var r=Object(c.a)(Object(n.a)().mark((function r(c,a){var i,u,l;return Object(n.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:o.r}),i=a(),u=i.userLogIn.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u.token)}},r.next=6,s.a.put("/api/admin/paymentStatus/".concat(e),{status:t},l);case 6:c({type:o.t}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),c({type:o.q,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e,t){return r.apply(this,arguments)}}()}},144:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u})),r.d(t,"h",(function(){return l})),r.d(t,"i",(function(){return d})),r.d(t,"f",(function(){return j})),r.d(t,"g",(function(){return p})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return O})),r.d(t,"j",(function(){return y}));var n=r(5),c=r(15),a=r(93),s=r.n(a),o=r(9),i=function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return function(){var u=Object(c.a)(Object(n.a)().mark((function c(u,l){var d,j;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e||r||a||i)){n.next=6;break}return n.next=3,s.a.get("/api/product/".concat(e));case 3:d=n.sent,j=d.data,u({type:o.i,payload:{product:j._id,slug:j.slug,title:j.title,image:j.image.url,qty:r,variableData:a,addonData:i,price:t}});case 6:localStorage.setItem("cartItems",JSON.stringify(l().cart.cartItems));case 7:case"end":return n.stop()}}),c)})));return function(e,t){return u.apply(this,arguments)}}()},u=function(e){return function(t,r){t({type:o.j,payload:e}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems))}},l=function(e){return function(t,r){t({type:o.t,payload:e}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems))}},d=function(e){return function(t,r){t({type:o.u,payload:e}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems))}},j=function(e,t,r){return function(){var a=Object(c.a)(Object(n.a)().mark((function c(a,i){var u,l,d;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:o.m}),u=i(),l=u.userLogIn.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},n.next=6,s.a.post("/api/cart",{cartItems:e,totalPrice:t,currency:r},d);case 6:a({type:o.o}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),a({type:o.l,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 12:case"end":return n.stop()}}),c,null,[[0,9]])})));return function(e,t){return a.apply(this,arguments)}}()},p=function(){return function(){var e=Object(c.a)(Object(n.a)().mark((function e(t,r){var c,a,i,u,l;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:o.q}),c=r(),a=c.userLogIn.userInfo,i={headers:{Authorization:"Bearer ".concat(a.token)}},e.next=6,s.a.get("/api/cart",i);case 6:u=e.sent,l=u.data,t({type:o.s,payload:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:o.p,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(Object(n.a)().mark((function e(t,r){var c,a,i;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:o.w}),c=r(),a=c.userLogIn.userInfo,i={headers:{Authorization:"Bearer ".concat(a.token)}},e.next=6,s.a.delete("/api/cart",i);case 6:t({type:o.y}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:o.v,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(Object(n.a)().mark((function t(r,c){var a,i,u;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:o.b}),a=c(),i=a.userLogIn.userInfo,u={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},t.next=6,s.a.post("/api/cart/coupon",{coupon:e},u);case 6:r({type:o.d}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:o.a,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,r){return t.apply(this,arguments)}}()},O=function(){return function(){var e=Object(c.a)(Object(n.a)().mark((function e(t,r){var c,a,i;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:o.f}),c=r(),a=c.userLogIn.userInfo,i={headers:{Authorization:"Bearer ".concat(a.token)}},e.next=6,s.a.post("/api/cart/coupon-cancel",{},i);case 6:t({type:o.h}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:o.e,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(c.a)(Object(n.a)().mark((function e(t,r){var c,a,o;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=r(),a=c.userLogIn.userInfo,o={headers:{Authorization:"Bearer ".concat(a.token)}},e.next=5,s.a.delete("/api/cart/delete-user-cart",o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}()}},595:function(e,t,r){"use strict";r.r(t);var n=r(5),c=r(15),a=r(10),s=r(0),o=r(342),i=r(458),u=r(93),l=r.n(u),d=r(100),j=r(51),p=r(50),b=r(386),f=r(196),O=r(127),y=r(118),h=r(272),m=r(143),x=r(88),v=r(9),g=r(144),S=r(42),k=r(106),w=r(1),I=function(e){var t,r=e.cartItems,i=e.userInfo,u=e.orderId,I=Object(S.d)(),N=Object(s.useState)(!1),C=Object(a.a)(N,2),A=C[0],D=C[1],P=Object(s.useState)(null),T=Object(a.a)(P,2),F=T[0],L=T[1],z=Object(s.useState)(""),_=Object(a.a)(z,2),E=_[0],B=_[1],q=Object(s.useState)(!0),W=Object(a.a)(q,2),J=W[0],K=W[1],X=Object(p.b)(),G=Object(p.c)((function(e){return e.orderCreate})),M=G.success,Q=G.loading,Z=G.error;Object(s.useEffect)((function(){M&&(X({type:v.r}),X(Object(g.j)()),I.success("Order Placed "))}),[M,history]);var H=Object(o.useStripe)(),U=Object(o.useElements)(),V=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){var c,a,s,d;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),B(!0),c={headers:{Authorization:"Bearer ".concat(i.token)}},"undefined"!==typeof u){e.next=9;break}return e.next=6,l.a.post("/api/create-payment-intent",{},c);case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,l.a.post("/api/create-payment-intent/".concat(u),{},c);case 11:e.t0=e.sent;case 12:return a=e.t0,s=a.data,e.next=16,H.confirmCardPayment(s.clientSecret,{payment_method:{card:U.getElement(o.CardElement),billing_details:{name:i.name,email:i.email}}});case 16:(d=e.sent).error?(L("Payment failed ".concat(d.error.message)),B(!1)):u&&"succeeded"===d.paymentIntent.status?(L(null),B(!1),D(!0),X(Object(m.f)(u,"succeeded"))):"succeeded"!==d.paymentIntent.status||u||(X(Object(m.a)(d.paymentIntent,"Stripe",r.currency)),L(null),B(!1),D(!0));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K(t.empty),L(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(d.a,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"Order Summary:"}),Object(w.jsxs)(b.a,{children:[Z&&Object(w.jsx)(x.a,{variant:"danger",children:Z}),Object(w.jsx)(f.a,{children:(null===r||void 0===r?void 0:r.length)>0&&(null===(t=r.products)||void 0===t?void 0:t.map((function(e,t){return Object(w.jsx)(f.a.Item,{children:Object(w.jsxs)(O.a,{className:"d-flex flex-column",children:[Object(w.jsx)(y.a,{children:Object(w.jsxs)(O.a,{className:"d-flex flex-row",children:[Object(w.jsxs)(y.a,{md:9,children:[Object(w.jsxs)("span",{style:{fontWeight:"900"},children:[t+1,")"," "]}),Object(w.jsxs)("span",{style:{fontWeight:"600"},children:[e.product.title," x ",e.qty]})]}),Object(w.jsx)(y.a,{md:3,children:Object(w.jsxs)("span",{style:{fontWeight:"600"},children:["=",Object(k.a)(e.qty*e.price.price,e.price.currency,e.price.currencySymbol,k.b)]})})]})}),e.variableData&&Object(w.jsxs)(y.a,{children:[Object(w.jsx)("span",{style:{fontSize:"14px"},children:"Type:"})," ",Object(w.jsx)(h.a,{style:{backgroundColor:"#b33939",marginLeft:"2px"},children:e.variableData.name})]}),e.addonData.length>0&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(y.a,{children:[Object(w.jsx)("span",{style:{fontSize:"14px"},children:"Addons:"})," ",e.addonData.map((function(e){return Object(w.jsx)(h.a,{style:{backgroundColor:"#FFC107",marginLeft:"2px"},children:e.name},e.value)}))]}),Object(w.jsxs)(y.a,{children:["Total Addon:"," ",Object(k.a)(e.addonData.reduce((function(e,t){return e+t.prices.reduce((function(e,t){return e+t.price}),0)}),0)*e.qty,e.price.currency,e.price.currencySymbol,k.b)]})]})]})},e._id)})))}),Object(w.jsx)(f.a,{children:Object(w.jsx)(f.a.Item,{children:r&&!1===r.couponApplied?Object(w.jsxs)(O.a,{children:[Object(w.jsx)(y.a,{children:Object(w.jsxs)("h6",{className:"fw-bold",children:["Total:"," ",r&&r.currency&&Object(k.a)(r.cartTotal,r.currency.currency,r.currency.currencySymbol,k.b)]})}),Object(w.jsx)(y.a,{style:{padding:"8px 5px",backgroundColor:"#dff9fb"},children:Object(w.jsxs)("h6",{className:"fw-bold",children:["Total Payable:"," ",r&&r.currency&&Object(k.a)(r.cartTotal,r.currency.currency,r.currency.currencySymbol,k.b)]})})]}):Object(w.jsxs)(O.a,{className:"d-flex flex-column",children:[Object(w.jsx)(y.a,{style:{backgroundColor:"#273c75",padding:"8px 5px"},children:Object(w.jsxs)("h6",{className:"fw-800 m-0 text-white",children:["Price After Discount:"," ",r&&r.currency&&Object(k.a)(r.totalAfterDiscount,r.currency.currency,r.currency.currencySymbol,k.b)]})}),Object(w.jsx)(y.a,{style:{padding:"8px 5px",backgroundColor:"#dff9fb"},children:Object(w.jsxs)("h6",{className:"fw-bold m-0",children:["Total Payable:"," ",r&&r.currency&&Object(k.a)(r.totalAfterDiscount,r.currency.currency,r.currency.currencySymbol,k.b)]})})]})})})]})]}),r&&Object(w.jsxs)("form",{id:"payment-form",className:"stripe-form my-4",onSubmit:V,children:[Object(w.jsx)(o.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:Y}),Object(w.jsx)("button",{className:"stripe-button",disabled:E||J||A||Q,children:Object(w.jsx)("span",{id:"button-text",children:E?Object(w.jsx)("div",{className:"spinner",id:"spinner"}):"Pay"})}),Object(w.jsx)("br",{}),F&&Object(w.jsx)("div",{className:"card-error",role:"alert",children:F}),Object(w.jsxs)("p",{className:A?"result-message":"result-message hidden",children:["Payment Successful."," ",Object(w.jsx)(j.Link,{to:"/user/orderhistory",children:"See it in your purchase history."})]})]})]})},N=r(2),C=r(460),A=function(e){var t=e.cartItems,r=e.userInfo,o=e.error,i=e.intentSuccess,u=e.intent,I=e.orderId,A=Object(S.d)(),D=Object(s.useState)(!1),P=Object(a.a)(D,2),T=P[0],F=P[1],L=Object(s.useState)(""),z=Object(a.a)(L,2),_=z[0],E=z[1],B=Object(s.useState)(!0),q=Object(a.a)(B,2),W=q[0],J=q[1],K=Object(s.useState)(""),X=Object(a.a)(K,2),G=X[0],M=X[1],Q=Object(s.useState)(!1),Z=Object(a.a)(Q,2),H=Z[0],U=Z[1],V=Object(p.b)(),Y=Object(p.c)((function(e){return e.orderCreate})),R=Y.success,$=Y.loading,ee=Y.error;Object(s.useEffect)((function(){var e=!1,t=function(){var e=Object(c.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/api/paystack/paystack");case 2:t=e.sent,(r=t.data)&&(J(!1),M(r));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e||t(),function(){return e=!0}}),[]),Object(s.useEffect)((function(){R&&(V({type:v.r}),V(Object(g.j)()),A.success("Order Placed "))}),[R,history]);var te=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),E(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re={reference:(new Date).getTime().toString(),email:r.email,amount:100*u.amount,publicKey:G},ne=Object(N.a)(Object(N.a)({},re),{},{text:"Pay",onSuccess:function(e){return function(e){I&&"success"===e.status?(U(!0),F(!0),V(Object(m.f)(I,"succeeded"))):"success"!==e.status||I||(U(!0),F(!0),V(Object(m.a)({id:e.trxref,amount:u.amount,status:"succeeded"},"Paystack",u.currency))),E(!1)}(e)},onClose:function(){}});return Object(w.jsxs)(d.a,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"Order Summary:"}),Object(w.jsxs)(b.a,{children:[ee&&Object(w.jsx)(x.a,{variant:"danger",children:ee}),Object(w.jsx)(f.a,{children:(null===t||void 0===t?void 0:t.length)>0&&t.products.map((function(e,t){return Object(w.jsx)(f.a.Item,{children:Object(w.jsxs)(O.a,{className:"d-flex flex-column",children:[Object(w.jsx)(y.a,{children:Object(w.jsxs)(O.a,{className:"d-flex flex-row",children:[Object(w.jsxs)(y.a,{md:9,children:[Object(w.jsxs)("span",{style:{fontWeight:"900"},children:[t+1,")"," "]}),Object(w.jsxs)("span",{style:{fontWeight:"600"},children:[e.product.title," x ",e.qty]})]}),Object(w.jsx)(y.a,{md:3,children:Object(w.jsxs)("span",{style:{fontWeight:"600"},children:["=",Object(k.a)(e.qty*e.price.price,e.price.currency,e.price.currencySymbol,k.b)]})})]})}),e.variableData&&Object(w.jsxs)(y.a,{children:[Object(w.jsx)("span",{style:{fontSize:"14px"},children:"Type:"})," ",Object(w.jsx)(h.a,{style:{backgroundColor:"#b33939",marginLeft:"2px"},children:e.variableData.name})]}),e.addonData.length>0&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(y.a,{children:[Object(w.jsx)("span",{style:{fontSize:"14px"},children:"Addons:"})," ",e.addonData.map((function(e){return Object(w.jsx)(h.a,{style:{backgroundColor:"#FFC107",marginLeft:"2px"},children:e.name},e.value)}))]}),Object(w.jsxs)(y.a,{children:["Total Addon:"," ",Object(k.a)(e.addonData.reduce((function(e,t){return e+t.prices.reduce((function(e,t){return e+t.price}),0)}),0)*e.qty,e.price.currency,e.price.currencySymbol,k.b)]})]})]})},e._id)}))}),Object(w.jsx)(f.a,{children:Object(w.jsx)(f.a.Item,{children:t&&!1===t.couponApplied?Object(w.jsxs)(O.a,{children:[Object(w.jsx)(y.a,{children:Object(w.jsxs)("h6",{className:"fw-bold",children:["Total:"," ",t&&t.currency&&Object(k.a)(t.cartTotal,t.currency.currency,t.currency.currencySymbol,k.b)]})}),Object(w.jsx)(y.a,{style:{padding:"8px 5px",backgroundColor:"#dff9fb"},children:Object(w.jsxs)("h6",{className:"fw-bold",children:["Total Payable:"," ",t&&t.currency&&Object(k.a)(t.cartTotal,t.currency.currency,t.currency.currencySymbol,k.b)]})})]}):Object(w.jsxs)(O.a,{className:"d-flex flex-column",children:[Object(w.jsx)(y.a,{style:{backgroundColor:"#273c75",padding:"8px 5px"},children:Object(w.jsxs)("h6",{className:"fw-800 m-0 text-white",children:["Price After Discount:"," ",t&&t.currency&&Object(k.a)(t.totalAfterDiscount,t.currency.currency,t.currency.currencySymbol,k.b)]})}),Object(w.jsx)(y.a,{style:{padding:"8px 5px",backgroundColor:"#dff9fb"},children:Object(w.jsxs)("h6",{className:"fw-bold m-0",children:["Total Payable:"," ",t&&t.currency&&Object(k.a)(t.totalAfterDiscount,t.currency.currency,t.currency.currencySymbol,k.b)]})})]})})})]})]}),t&&Object(w.jsxs)("form",{id:"payment-form",className:"stripe-form my-4",onSubmit:te,children:[Object(w.jsx)("div",{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},children:"Pay with Paystack"}),Object(w.jsx)("button",{className:"stripe-button",disabled:_||W||T||$||!i||H,children:Object(w.jsx)("span",{id:"button-text",children:i?Object(w.jsx)(C.a,Object(N.a)({},ne)):Object(w.jsx)("div",{className:"spinner",id:"spinner"})})}),Object(w.jsx)("br",{}),o&&Object(w.jsx)("div",{className:"card-error",role:"alert",children:o}),Object(w.jsxs)("p",{className:H?"result-message":"result-message hidden",children:["Payment Successful."," ",Object(w.jsx)(j.Link,{to:"/user/orderhistory",children:"See it in your purchase history."})]})]})]})},D=r(461),P=function(e){var t=e.cartItems,r=e.userInfo,o=e.error,i=e.intentSuccess,u=e.intent,I=e.orderId,N=Object(S.d)(),C=Object(s.useState)({}),A=Object(a.a)(C,2),P=A[0],T=A[1],F=Object(s.useState)(!1),L=Object(a.a)(F,2),z=L[0],_=(L[1],Object(s.useState)("")),E=Object(a.a)(_,2),B=E[0],q=E[1],W=Object(s.useState)(!0),J=Object(a.a)(W,2),K=J[0],X=J[1],G=Object(s.useState)(""),M=Object(a.a)(G,2),Q=M[0],Z=M[1],H=Object(s.useState)(!1),U=Object(a.a)(H,2),V=U[0],Y=U[1],R=Object(s.useState)(""),$=Object(a.a)(R,2),ee=$[0],te=($[1],Object(p.b)()),re=Object(p.c)((function(e){return e.orderCreate})),ne=re.success,ce=re.loading,ae=re.error;Object(s.useEffect)((function(){var e=!1,t=function(){var e=Object(c.a)(Object(n.a)().mark((function e(){var t,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/api/flutterwave/flutterwave");case 2:t=e.sent,(r=t.data)&&(X(!1),Z(r));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e||t(),function(){return e=!0}}),[]),Object(s.useEffect)((function(){ne&&(te({type:v.r}),te(Object(g.j)()),N.success("Order Placed "))}),[ne]),Object(s.useEffect)((function(){var e,n,c=!1;c||T({public_key:Q,tx_ref:null===t||void 0===t?void 0:t._id,amount:u.amount,currency:null===(e=u.currency)||void 0===e?void 0:e.currency,payment_options:"USD"===(null===(n=u.currency)||void 0===n?void 0:n.currency)?"card":"card,mobilemoney,ussd,banktransfer",customer:{email:r.email,phone_number:r.phone,name:r.name},customizations:{title:"Foody",description:"Foody by SarbTech Ltd.",logo:ee}});return function(){return c=!0}}),[te,ee,t,Q,u.amount,u.currency,r.email,r.phone,r.name]);var se=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),q(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=Object(D.b)(P);return Object(w.jsxs)(d.a,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"Order Summary:"}),Object(w.jsxs)(b.a,{children:[ae&&Object(w.jsx)(x.a,{variant:"danger",children:ae}),Object(w.jsx)(f.a,{children:t.length>0&&t.products.map((function(e,t){return Object(w.jsx)(f.a.Item,{children:Object(w.jsxs)(O.a,{className:"d-flex flex-column",children:[Object(w.jsx)(y.a,{children:Object(w.jsxs)(O.a,{className:"d-flex flex-row",children:[Object(w.jsxs)(y.a,{md:9,children:[Object(w.jsxs)("span",{style:{fontWeight:"900"},children:[t+1,")"," "]}),Object(w.jsxs)("span",{style:{fontWeight:"600"},children:[e.product.title," x ",e.qty]})]}),Object(w.jsx)(y.a,{md:3,children:Object(w.jsxs)("span",{style:{fontWeight:"600"},children:["=",Object(k.a)(e.qty*e.price.price,e.price.currency,e.price.currencySymbol,k.b)]})})]})}),e.variableData&&Object(w.jsxs)(y.a,{children:[Object(w.jsx)("span",{style:{fontSize:"14px"},children:"Type:"})," ",Object(w.jsx)(h.a,{style:{backgroundColor:"#b33939",marginLeft:"2px"},children:e.variableData.name})]}),e.addonData.length>0&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(y.a,{children:[Object(w.jsx)("span",{style:{fontSize:"14px"},children:"Addons:"})," ",e.addonData.map((function(e){return Object(w.jsx)(h.a,{style:{backgroundColor:"#FFC107",marginLeft:"2px"},children:e.name},e.value)}))]}),Object(w.jsxs)(y.a,{children:["Total Addon:"," ",Object(k.a)(e.addonData.reduce((function(e,t){return e+t.prices.reduce((function(e,t){return e+t.price}),0)}),0)*e.qty,e.price.currency,e.price.currencySymbol,k.b)]})]})]})},e._id)}))}),Object(w.jsx)(f.a,{children:Object(w.jsx)(f.a.Item,{children:t&&!1===t.couponApplied?Object(w.jsxs)(O.a,{children:[Object(w.jsx)(y.a,{children:Object(w.jsxs)("h6",{className:"fw-bold",children:["Total:"," ",t&&t.currency&&Object(k.a)(t.cartTotal,t.currency.currency,t.currency.currencySymbol,k.b)]})}),Object(w.jsx)(y.a,{style:{padding:"8px 5px",backgroundColor:"#dff9fb"},children:Object(w.jsxs)("h6",{className:"fw-bold",children:["Total Payable:"," ",t&&t.currency&&Object(k.a)(t.cartTotal,t.currency.currency,t.currency.currencySymbol,k.b)]})})]}):Object(w.jsxs)(O.a,{className:"d-flex flex-column",children:[Object(w.jsx)(y.a,{style:{backgroundColor:"#273c75",padding:"8px 5px"},children:Object(w.jsxs)("h6",{className:"fw-800 m-0 text-white",children:["Price After Discount:"," ",t&&t.currency&&Object(k.a)(t.totalAfterDiscount,t.currency.currency,t.currency.currencySymbol,k.b)]})}),Object(w.jsx)(y.a,{style:{padding:"8px 5px",backgroundColor:"#dff9fb"},children:Object(w.jsxs)("h6",{className:"fw-bold m-0",children:["Total Payable:"," ",t&&t.currency&&Object(k.a)(t.totalAfterDiscount,t.currency.currency,t.currency.currencySymbol,k.b)]})})]})})})]})]}),t&&Object(w.jsxs)("form",{id:"payment-form",className:"stripe-form my-4",onSubmit:se,children:[Object(w.jsx)("div",{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},children:"Pay with Flutterwave"}),Object(w.jsx)("button",{className:"stripe-button",disabled:B||K||z||ce||!i||V,children:Object(w.jsx)("span",{id:"button-text",children:i?Object(w.jsx)("button",{onClick:function(){oe({callback:function(e){try{"00"===e.charge_response_code&&(e.gateway="flutterwave","completed"!==(t=e).status||"Approved Successful"!==t.charge_response_message||"00"!==t.charge_response_code||I?"completed"===t.status&&"Approved Successful"===t.charge_response_message&&"00"===t.charge_response_code&&I&&(Y(!0),te(Object(m.f)(I,"succeeded"))):(Y(!0),te(Object(m.a)({id:t.flw_ref,amount:u.amount,status:"succeeded"},"Paystack",u.currency))),q(!1))}catch(o){throw new Error("Error: ",o)}var t;Object(D.a)()},onClose:function(){}})},children:"Pay"}):Object(w.jsx)("div",{className:"spinner",id:"spinner"})})}),Object(w.jsx)("br",{}),o&&Object(w.jsx)("div",{className:"card-error",role:"alert",children:o}),Object(w.jsxs)("p",{className:V?"result-message":"result-message hidden",children:["Payment Successful."," ",Object(w.jsx)(j.Link,{to:"/user/orderhistory",children:"See it in your purchase history."})]})]})]})},T=r(4),F=r(110);t.default=function(){var e=Object(s.useState)(null),t=Object(a.a)(e,2),r=t[0],u=t[1],d=Object(s.useState)({}),j=Object(a.a)(d,2),b=j[0],f=j[1],O=Object(s.useState)({}),y=Object(a.a)(O,2),h=y[0],x=y[1],v=Object(s.useState)(null),g=Object(a.a)(v,2),S=g[0],k=g[1],N=Object(s.useState)(!1),C=Object(a.a)(N,2),D=C[0],L=C[1],z=Object(T.D)(),_=Object(p.b)(),E=Object(T.I)(),B=E.gateway,q=E.orderId,W=Object(p.c)((function(e){return e.userLogIn})).userInfo,J=Object(p.c)((function(e){return e.cartList})).cartItems,K=Object(p.c)((function(e){return e.orderDetails})),X=(K.loading,K.order);K.error;return Object(s.useEffect)((function(){if("Stripe"===B){var e=Object(i.loadStripe)("pk_test_51LEwqCCDBkvVQMjppv94igdIYkdiZaB8H03NStX96JWpLzrvKTosgS2l38swBwLCTiGKefX17QJluJ7KZvgzSFXd00TtnFc23g");u(e)}}),[B]),Object(s.useEffect)((function(){q&&_(Object(m.b)(q))}),[_,q]),Object(s.useEffect)((function(){W||z("/login"),null!==J||q||z("/")}),[W,J,z,q]),Object(s.useEffect)((function(){var e=function(){var e=Object(c.a)(Object(n.a)().mark((function e(){var t,r,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"Bearer ".concat(W.token)}},e.next=3,l.a.post("/api/paystack-intent",{},t);case 3:r=e.sent,(c=r.data).error?c.error&&k("Paystack Error: ".concat(c.error.message)):(f(c),L(!0));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(c.a)(Object(n.a)().mark((function e(){var t,r,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"Bearer ".concat(W.token)}},e.next=3,l.a.post("/api/flutterwave-intent",{},t);case 3:r=e.sent,(c=r.data).error?c.error&&k("Flutterwave Error: ".concat(c.error.message)):(f(c),L(!0));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if("Paystack"!==B||q)if("Flutterwave"!==B||q){if(0!==Object.keys(X).length){var r=X?X.paymentIntent:{};r.currency=X?X.currency:{},f(r),L(!0),x(X)}}else t();else e()}),[B,X,q,W.token]),"Stripe"===B?Object(w.jsxs)(o.Elements,{stripe:r,children:[Object(w.jsx)(F.a,{title:"Food Store | Place Order"}),Object(w.jsx)(I,{userInfo:W,cartItems:q?h:J,orderId:q})]}):"Paystack"===B?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(F.a,{title:"Food Store | Place Order"}),Object(w.jsx)(A,{userInfo:W,cartItems:q?h:J,intent:b,intentSuccess:D,error:S,orderId:q})]}):"Flutterwave"===B?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(F.a,{title:"Food Store | Place Order"}),Object(w.jsx)(P,{userInfo:W,cartItems:q?h:J,intent:b,intentSuccess:D,error:S,orderId:q})]}):Object(w.jsx)("text",{children:"No Gateway Selected"})}},88:function(e,t,r){"use strict";r(0);var n=r(134),c=r(1);t.a=function(e){var t=e.children,r=e.variant;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(n.a,{variant:r,children:t})})}}}]);
//# sourceMappingURL=44.a29505e2.chunk.js.map