(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[32],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r=function(e,t,n,r){var c=new Intl.NumberFormat(r,{style:"currency",currency:t}),a=c.formatToParts(0).find((function(e){return"currency"===e.type})).value;return c.format(e).replace(a,n)},c=navigator.language||navigator.userLanguage},110:function(e,t,n){"use strict";n(0);var r=n(132),c=n(1),a=function(e){var t=e.title;return Object(c.jsx)(r.a,{children:Object(c.jsx)("title",{children:t})})};a.defaultProps={title:"Welcome To Foody"},t.a=a},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return j})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return b}));var r=n(5),c=n(15),a=n(93),s=n.n(a),i=n(12),o=function(e,t){return function(){var n=Object(c.a)(Object(r.a)().mark((function n(c,a){var o,d,l,j,u;return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c({type:i.f}),o=a(),d=o.userLogIn.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.token)}},n.next=6,s.a.post("/api/order",{paymentIntent:e,paymentMethod:t},l);case 6:j=n.sent,u=j.data,c({type:i.h,payload:u}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),c({type:i.e,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(Object(r.a)().mark((function t(n,c){var a,o,d,l,j;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.j}),a=c(),o=a.userLogIn.userInfo,d={headers:{Authorization:"Bearer ".concat(o.token)}},t.next=6,s.a.get("/api/order/".concat(e),d);case 6:l=t.sent,j=l.data,n({type:i.l,payload:j}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:i.i,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},l=function(){return function(){var e=Object(c.a)(Object(r.a)().mark((function e(t,n){var c,a,o,d,l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.v}),c=n(),a=c.userLogIn.userInfo,o={headers:{Authorization:"Bearer ".concat(a.token)}},e.next=6,s.a.get("/api/order",o);case 6:d=e.sent,l=d.data,t({type:i.x,payload:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:i.u,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(Object(r.a)().mark((function e(t,n){var c,a,o,d,l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.b}),c=n(),a=c.userLogIn.userInfo,o={headers:{Authorization:"Bearer ".concat(a.token)}},e.next=6,s.a.get("/api/admin/orderlist",o);case 6:d=e.sent,l=d.data,t({type:i.d,payload:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:i.a,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},u=function(e,t){return function(){var n=Object(c.a)(Object(r.a)().mark((function n(c,a){var o,d,l;return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c({type:i.n}),o=a(),d=o.userLogIn.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.token)}},n.next=6,s.a.put("/api/admin/orderStatus/".concat(e),{status:t},l);case 6:c({type:i.p}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),c({type:i.m,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(c.a)(Object(r.a)().mark((function n(c,a){var o,d,l;return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c({type:i.r}),o=a(),d=o.userLogIn.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.token)}},n.next=6,s.a.put("/api/admin/paymentStatus/".concat(e),{status:t},l);case 6:c({type:i.t}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),c({type:i.q,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}()}},313:function(e,t,n){"use strict";n(0);var r=n(214),c=n(380),a=n(1),s=r.StyleSheet.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:24,textAlign:"center"},author:{fontSize:12,textAlign:"center",marginBottom:40},subtitle:{fontSize:18,marginTop:8,marginRight:12,marginLeft:12,marginBottom:0},text:{margin:12,fontSize:14,textAlign:"justify"},image:{marginVertical:15,marginHorizontal:100},header:{fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},footer:{padding:"100px",fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},pageNumber:{position:"absolute",fontSize:12,bottom:30,left:0,right:0,textAlign:"center",color:"grey"}});t.a=function(e){var t,n=e.order;return Object(a.jsx)(r.Document,{children:Object(a.jsxs)(r.Page,{style:s.body,children:[Object(a.jsxs)(r.Text,{style:s.header,fixed:!0,children:["~ ",(new Date).toLocaleString()," ~"]}),Object(a.jsx)(r.Text,{style:s.title,children:"Order Invoice"}),Object(a.jsx)(r.Text,{style:s.author,children:"React Redux Ecommerce - FoodStore"}),Object(a.jsx)(r.Text,{style:s.subtitle,children:"Order Summary"}),Object(a.jsx)(c.Table,{children:Object(a.jsxs)(c.TableHeader,{children:[Object(a.jsx)(c.TableCell,{children:"Title"}),Object(a.jsx)(c.TableCell,{children:"Price"}),Object(a.jsx)(c.TableCell,{children:"Quantity"}),Object(a.jsx)(c.TableCell,{children:"Sub Total"})]})}),Object(a.jsx)(c.Table,{data:n.products,children:Object(a.jsxs)(c.TableBody,{children:[Object(a.jsx)(c.DataTableCell,{getContent:function(e){return e.product.title}}),Object(a.jsx)(c.DataTableCell,{getContent:function(e){return"$".concat(e.price)}}),Object(a.jsx)(c.DataTableCell,{getContent:function(e){return e.quantity}}),Object(a.jsx)(c.DataTableCell,{getContent:function(e){return"$".concat(e.price*e.quantity)}})]})}),Object(a.jsxs)(r.Text,{style:s.text,children:[Object(a.jsxs)(r.Text,{children:["Date: ","                                               ",new Date(n.createdAt).toLocaleString()]}),"\n",Object(a.jsxs)(r.Text,{children:["Order Id: ","                                         ",n._id]}),"\n",Object(a.jsxs)(r.Text,{children:["Order Status: ","                                  ",n.orderStatus]}),"\n",Object(a.jsxs)(r.Text,{children:["Payment Method: ","                           ",n.paymentMethod]}),"\n",Object(a.jsxs)(r.Text,{children:["Payment Status: ","                             ",null===(t=n.paymentIntent)||void 0===t?void 0:t.status]}),"\n",Object(a.jsxs)(r.Text,{children:["Discount Applied: ","                           ",n.couponApplied?"Yes":"No"]}),"\n",n.couponApplied?Object(a.jsxs)(r.Text,{children:["Total Paid On Discount: ","                  ","$",n.paymentIntent&&n.paymentIntent.amount/100]}):Object(a.jsxs)(r.Text,{children:["Total Paid: ","                                      ","$",n.paymentIntent&&n.paymentIntent.amount/100]})]}),Object(a.jsx)(r.Text,{style:s.footer,children:" ~ Thank you for shopping with us ~ "})]})})}},347:function(e,t){},348:function(e,t){},363:function(e,t){},366:function(e,t){},367:function(e,t){},587:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(50),a=n(143),s=n(12),i=n(127),o=n(118),d=n(196),l=n(83),j=n(272),u=n(111),b=n(214),p=n(88),h=n(92),x=n(4),O=n(51),m=n(313),y=n(110),f=n(106),g=n(1);t.default=function(){var e,t,n,v,T,S,I,k,C,D,w,P,A=Object(c.b)(),z=Object(x.D)(),B=Object(x.I)().id,L=Object(c.c)((function(e){return e.userLogIn})).userInfo,N=Object(c.c)((function(e){return e.orderDetails})),F=N.loading,M=N.order,_=N.error,q=Object(c.c)((function(e){return e.orderStatusUpdate})),E=q.loading,U=q.success,W=q.error,$=Object(c.c)((function(e){return e.paymentStatusUpdate})),H=$.loading,R=$.success,J=$.error;return Object(r.useEffect)((function(){L||z("/login"),(!M||M._id!==B||U||R)&&(A(Object(a.b)(B)),A({type:s.g}),A({type:s.o}),A({type:s.s}))}),[L,B,M,A,U,R,z]),F?Object(g.jsx)(h.a,{}):_?Object(g.jsx)(p.a,{variant:"danger",children:_}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(y.a,{title:"Food Store | Order Details"}),L&&"admin"!==L.role&&Object(g.jsx)(O.Link,{to:"/user/orderhistory",className:"btn btn-dark my-3",children:"Go Back"}),Object(g.jsxs)("h3",{children:["Order: ",M._id]}),Object(g.jsxs)(i.a,{className:"orderDetails",children:[Object(g.jsx)(o.a,{md:8,children:Object(g.jsxs)(d.a,{style:{backgroundColor:"#ced6e0"},children:[Object(g.jsx)(d.a.Item,{children:Object(g.jsxs)(i.a,{className:"d-flex flex-lg-row flex-md-row flex-sm-column flex-xs-column",children:[Object(g.jsxs)(o.a,{children:[Object(g.jsx)("h4",{children:"Shipping"}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Name: "})," ",null===(e=M.orderdBy)||void 0===e?void 0:e.name]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Email: "})," ",Object(g.jsx)("a",{href:"mailto:".concat(null===(t=M.orderdBy)||void 0===t?void 0:t.email),children:null===(n=M.orderdBy)||void 0===n?void 0:n.email})]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Address:"}),null===(v=M.orderdBy)||void 0===v?void 0:v.shipping.address,","," ",null===(T=M.orderdBy)||void 0===T?void 0:T.shipping.city," ",null===(S=M.orderdBy)||void 0===S?void 0:S.shipping.postcode,","," ",null===(I=M.orderdBy)||void 0===I?void 0:I.shipping.country]})]}),Object(g.jsx)(o.a,{className:"d-flex justify-content-md-end align-items-start justify-content-sm-start",children:Object(g.jsx)(b.PDFDownloadLink,{document:Object(g.jsx)(m.a,{order:M}),fileName:"invoice.pdf",className:"btn btn-sm btn-primary",children:"Download Invoice"})})]})}),Object(g.jsxs)(d.a.Item,{children:[Object(g.jsx)("h4",{children:"Order Status"}),M.orderStatus&&"Not Processed"===M.orderStatus?Object(g.jsx)(p.a,{variant:"dark",children:"Not Processed"}):"Processing"===M.orderStatus?Object(g.jsx)(p.a,{variant:"info",children:"Processing"}):"Dispatched"===M.orderStatus?Object(g.jsx)(p.a,{variant:"warning",children:"Dispatched"}):"Completed"===M.orderStatus?Object(g.jsx)(p.a,{variant:"success",children:"Completed"}):Object(g.jsx)(p.a,{variant:"danger",children:"Cancelled"})]}),Object(g.jsxs)(d.a.Item,{children:[Object(g.jsx)("h4",{children:"Payment Method"}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Method: "}),M.paymentMethod]}),M.paymentIntent&&"succeeded"===(null===(k=M.paymentIntent)||void 0===k?void 0:k.status)?Object(g.jsxs)(p.a,{variant:"success",children:["Paid on : ",new Date(M.createdAt).toLocaleDateString()]}):"pending"===(null===(C=M.paymentIntent)||void 0===C?void 0:C.status)?Object(g.jsx)(p.a,{variant:"dark",children:"Pending"}):Object(g.jsx)(p.a,{variant:"danger",children:"Error Payment, please contact site owner"})]}),Object(g.jsxs)(d.a.Item,{children:[Object(g.jsx)("h4",{children:"Order Items"}),0===(null===(D=M.products)||void 0===D?void 0:D.length)?Object(g.jsx)(p.a,{children:"Order is empty"}):Object(g.jsx)(d.a,{children:null===(w=M.products)||void 0===w?void 0:w.map((function(e,t){var n;return Object(g.jsx)(d.a.Item,{children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(o.a,{md:2,children:Object(g.jsx)(l.a,{src:e.product.image.url,alt:e.product.title,fluid:!0})}),Object(g.jsx)(o.a,{md:10,children:Object(g.jsxs)(i.a,{className:"d-flex flex-column",children:[Object(g.jsx)(o.a,{children:Object(g.jsxs)(i.a,{className:"d-flex flex-row",children:[Object(g.jsxs)(o.a,{md:9,children:[Object(g.jsxs)("span",{style:{fontWeight:"900"},children:[t+1,")"," "]}),Object(g.jsxs)("span",{style:{fontWeight:"600"},children:[Object(g.jsx)(O.Link,{to:"/product/".concat(e.product.slug),children:e.product.title})," ","x ",e.qty]})]}),Object(g.jsx)(o.a,{md:3,children:Object(g.jsxs)("span",{style:{fontWeight:"600"},children:["=",Object(f.a)(e.qty*e.price.price,e.price.currency,e.price.currencySymbol,f.b)]})})]})}),e.variableData&&Object(g.jsxs)(o.a,{children:[Object(g.jsx)("span",{style:{fontSize:"14px"},children:"Type:"})," ",Object(g.jsx)(j.a,{style:{backgroundColor:"#b33939",marginLeft:"2px"},children:e.variableData.name})]}),(null===(n=e.addonData)||void 0===n?void 0:n.length)>0&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(o.a,{children:[Object(g.jsx)("span",{style:{fontSize:"14px"},children:"Addons:"})," ",e.addonData.map((function(e){return Object(g.jsx)(j.a,{style:{backgroundColor:"#FFC107",marginLeft:"2px"},children:e.name.split("-")[0]},e._id)}))]}),Object(g.jsxs)(o.a,{children:["Total Addon:"," ",Object(f.a)(e.addonData.reduce((function(e,t){return e+t.prices.reduce((function(e,t){return e+t.price}),0)}),0),e.price.currency,e.price.currencySymbol,f.b)]})]})]})})]})},t)}))})]})]})}),Object(g.jsxs)(o.a,{md:4,children:[Object(g.jsxs)(d.a,{style:{backgroundColor:"#ced6e0"},children:[Object(g.jsx)(d.a.Item,{children:Object(g.jsx)("h4",{children:"Order Summary"})}),M.couponApplied?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a.Item,{children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(o.a,{children:Object(g.jsx)("b",{children:"Total: "})}),Object(g.jsx)(o.a,{children:Object(g.jsx)("del",{children:Object(f.a)(M.cartTotal,M.currency&&M.currency.currency,M.currency&&M.currency.currencySymbol,f.b)})})]})}),Object(g.jsx)(d.a.Item,{children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(o.a,{children:Object(g.jsx)("b",{children:"Total After Discount:"})}),Object(g.jsxs)(o.a,{children:[M.currency&&M.currency.currencySymbol,M.totalAfterDiscount]})]})}),Object(g.jsx)(d.a.Item,{children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(o.a,{children:Object(g.jsx)("b",{children:"Total Payable: "})}),Object(g.jsx)(o.a,{children:M.currency&&Object(f.a)(M.totalAfterDiscount,M.currency.currency,M.currency.currencySymbol,f.b)})]})})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a.Item,{children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(o.a,{children:Object(g.jsx)("b",{children:"Total: "})}),Object(g.jsx)(o.a,{children:M.currency&&Object(f.a)(M.cartTotal,M.currency.currency,M.currency.currencySymbol,f.b)})]})}),Object(g.jsx)(d.a.Item,{children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(o.a,{children:Object(g.jsx)("b",{children:"Total Payable: "})}),Object(g.jsx)(o.a,{children:M.currency&&Object(f.a)(M.cartTotal,M.currency.currency,M.currency.currencySymbol,f.b)})]})})]})]}),L&&"admin"===L.role&&Object(g.jsx)(d.a,{children:Object(g.jsxs)(d.a.Item,{children:[E&&Object(g.jsx)(h.a,{className:"size-sm"}),W&&Object(g.jsx)(p.a,{variant:"danger",children:W}),Object(g.jsx)(u.a.Label,{children:"Update Order Status: "}),Object(g.jsxs)(u.a.Control,{as:"select",onChange:function(e){return A(Object(a.e)(null===M||void 0===M?void 0:M._id,e.target.value))},value:null===M||void 0===M?void 0:M.orderStatus,style:{backgroundColor:"#d1d8e0",color:"#000"},children:[Object(g.jsx)("option",{value:"Not Processed",children:"Not Processed"}),Object(g.jsx)("option",{value:"Processing",children:"Processing"}),Object(g.jsx)("option",{value:"Dispatched",children:"Dispatched"}),Object(g.jsx)("option",{value:"Cancelled",children:"Cancelled"}),Object(g.jsx)("option",{value:"Completed",children:"Completed"})]})]})}),L&&"admin"===L.role&&"Cash On Delivery"===(null===M||void 0===M?void 0:M.paymentMethod)&&Object(g.jsx)(d.a,{children:Object(g.jsxs)(d.a.Item,{children:[H&&Object(g.jsx)(h.a,{className:"size-sm"}),J&&Object(g.jsx)(p.a,{variant:"danger",children:J}),Object(g.jsx)(u.a.Label,{children:"Update Payment Status: "}),Object(g.jsxs)(u.a.Control,{as:"select",onChange:function(e){return A(Object(a.f)(null===M||void 0===M?void 0:M._id,e.target.value))},value:null===M||void 0===M||null===(P=M.paymentIntent)||void 0===P?void 0:P.status,style:{backgroundColor:"#d1d8e0",color:"#000"},children:[Object(g.jsx)("option",{value:"pending",children:"Pending"}),Object(g.jsx)("option",{value:"succeeded",children:"Succeeded"})]})]})})]})]})]})}},88:function(e,t,n){"use strict";n(0);var r=n(134),c=n(1);t.a=function(e){var t=e.children,n=e.variant;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(r.a,{variant:n,children:t})})}},92:function(e,t,n){"use strict";n(0);var r=n(131),c=n(1),a=function(e){var t=e.size;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(r.a,{animation:"grow",variant:"dark",className:t})})};a.defaultProps={size:"size-md"},t.a=a}}]);
//# sourceMappingURL=32.3f844be8.chunk.js.map