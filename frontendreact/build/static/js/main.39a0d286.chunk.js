(this.webpackJsonpfrontendreact=this.webpackJsonpfrontendreact||[]).push([[0],{31:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(15),r=c.n(n),s=c(22),a=c(20),o=function(){var e=Object(a.a)(r.a.mark((function e(t,c,n){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={method:c,headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(s.a)({},n))},e.t0=c.toLowerCase(),e.next="get"===e.t0?4:"delete"===e.t0?7:10;break;case 4:case 7:return delete a.headers,delete a.body,e.abrupt("break",10);case 10:return e.prev=10,e.next=13,fetch(t,a);case 13:return o=e.sent,e.abrupt("return",o.json());case 17:return e.prev=17,e.t1=e.catch(10),console.log(e.t1),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(t,c,n){return e.apply(this,arguments)}}()},57:function(e,t,c){},58:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(49),a=c.n(s),o=(c(57),c(58),c(0));var i=function(){return Object(o.jsx)("header",{className:"content",children:Object(o.jsx)("h1",{children:"Coderhouse"})})},l=c(21),j=c(2),d=c(15),b=c.n(d),u=c(20),h=c(30),O=c(31),x=c(50),p=c.n(x)()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL,{path:"/socket.io"});var m=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),a=Object(h.a)(s,2),i=a[0],l=a[1];return p.on("connect",(function(e){var t=p.id;console.log("Sesion: ".concat(t))}),[c]),Object(n.useEffect)(Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)("/api/productos","get",{});case 2:(t=e.sent).error?l(t):r(t);case 4:case"end":return e.stop()}}),e)}))),[]),p.on("mensaje",(function(e){e,r(e),l(!1)})),Object(o.jsx)("main",{className:"content",children:Object(o.jsx)("div",{className:"",children:i?Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"error",children:i.error})}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Vista de productos"}),Object(o.jsxs)("table",{className:"table table-dark table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"ID"}),Object(o.jsx)("th",{scope:"col",children:"Nombre"}),Object(o.jsx)("th",{scope:"col",children:"Precio"}),Object(o.jsx)("th",{scope:"col",children:"Foto"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{scope:"row",children:e.id}),Object(o.jsx)("td",{children:e.title}),Object(o.jsx)("td",{children:e.price}),Object(o.jsx)("td",{children:Object(o.jsx)("img",{className:"image",src:e.tumbnails,alt:e.title})})]})}))})]})]})})})},f=c(22);var v=function(e){var t=e.id,c=e.label,n=e.type,r=e.placeholder;return Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("label",{htmlFor:t,className:"form-label",children:c}),Object(o.jsx)("input",{id:t,className:"form-control",type:n,placeholder:r,name:t})]})};var N=function(){return Object(n.useEffect)((function(){c.e(3).then(c.bind(null,97)).then((function(e){e.myForm}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Ingrese Producto"}),Object(o.jsxs)("form",{className:"row g-3",id:"myForm",children:[Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Acci\xf3n"}),Object(o.jsxs)("select",{name:"metodo",className:"form-control",id:"select",children:[Object(o.jsx)("option",{value:"post",children:"Crear"}),Object(o.jsx)("option",{value:"put",children:"Actualizar"}),Object(o.jsx)("option",{value:"delete",children:"Eliminar"})]})]}),[{id:"id",label:"ID",type:"text",placeholder:"0"},{id:"title",label:"Nombre",type:"text",placeholder:"Calculadora"},{id:"price",label:"Precio",type:"number",placeholder:"123456"},{id:"tumbnails",label:"Foto URL",type:"text",placeholder:"https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png"}].map((function(e){return Object(o.jsx)(v,Object(f.a)({},e),e.id)})),Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Enviar"})})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(m,{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(l.b,{className:"btn btn-warning",to:"/productos",children:"Ver Productos"})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})};var g=function(){return Object(o.jsx)("main",{className:"content",children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:N}),Object(o.jsx)(j.a,{exact:!0,path:"/productos",component:m})]})})};var y=function(){return Object(o.jsx)("footer",{className:"content",children:"2021"})};var S=function(){return Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsx)(i,{}),Object(o.jsx)(g,{}),Object(o.jsx)(y,{})]})},E=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,96)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),E()}},[[95,1,2]]]);