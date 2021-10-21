(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{133:function(e,a,t){"use strict";t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return u}));var n=t(86),r=t(309),s=t(158),i=t.n(s),c=(t(145),i.a.create({baseURL:"http://".concat("cursos.fcpn.edu.bo",":").concat("4000","/api/"),timeout:5e3,headers:{"Content-Type":"application/json"},mode:"cors"})),o=function(e,a,t){t(!0),c.get("/".concat(e)).then((function(e){console.log("res.data",e.data),a(e.data.data)})).catch((function(e){console.log("err",e),a(null),n.a.error({message:"No se pudo obtener la lista de alumnos",description:"Hubo un error al obtener la lista de alumnos "+e,className:"notifications"})})).finally((function(){return t(!1)}))},l=function(e,a,t,n){t(!0),c.post("/".concat(e),a).then((function(){r.a.success({title:"Registrado con exito",content:"Se registro su usuario satisfactoriamente"}),n&&n()})).catch((function(e){r.a.error({title:"Error al registrar",content:"No se pudo registrar: "+JSON.parse(e.request.response).message})})).finally((function(){return t(!1)}))},u=function(e){c.delete("/upload/".concat(e)).then((function(e){console.log("res.data",e.data)})).catch((function(e){return console.log("err",e)}))}},145:function(e,a,t){},282:function(e,a,t){},310:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t(124),r=t(305),s=t(298),i=t(299),c=t(309),o=t(0),l=t(133),u=t(14),d=c.a.confirm;var j=t(127),m=t(189),b=t(306),h=t(308),p=t(123),O={labelCol:{xs:{span:0},md:{span:6},wrapperCol:{xs:{span:24},md:{span:16}}}},f={wrapperCol:{xs:{span:24},md:{offset:6,span:16}}},x=m.a.Option;function g(e){var a=e.initialValue,t=e.handlerFormData,n=e.onFinish;return Object(u.jsxs)(b.a,Object(j.a)(Object(j.a)({name:"inscriptions"},O),{},{onFinish:n,initialValues:a,autoComplete:"off",onChange:function(e){var a=e.target;t({name:a.id.split("_")[1],value:a.value})},children:[Object(u.jsx)("h1",{children:"Datos personales"}),Object(u.jsx)(b.a.Item,{label:"Nombres",name:"name",rules:[{required:!0,message:"Debe ingresar sus nombres"}],children:Object(u.jsx)(h.a,{placeholder:"Ingrese sus nombres"})}),Object(u.jsx)(b.a.Item,{label:"Primer apellido",name:"firstLastName",rules:[{required:!0,message:"Debe ingresar sus nombres"}],children:Object(u.jsx)(h.a,{placeholder:"Ingrese su primer apellido"})}),Object(u.jsx)(b.a.Item,{label:"Segundo apellido",name:"secondLastName",children:Object(u.jsx)(h.a,{placeholder:"Ingrese su segundo apellido"})}),Object(u.jsx)(b.a.Item,{label:"Carnet de identidad",name:"ci",rules:[{required:!0,message:"Debe ingresar su n\xfamero de carnet"}],children:Object(u.jsx)(h.a,{placeholder:"Ingrese su n\xfamero de carnet"})}),Object(u.jsx)(b.a.Item,{label:"Tel\xe9fono",name:"tellphone",rules:[{max:8,message:"Ingrese un n\xfamero v\xe1lido"}],children:Object(u.jsx)(h.a,{type:"number",placeholder:"Ingrese su n\xfamero de tel\xe9fono"})}),Object(u.jsx)(b.a.Item,{label:"Celular",name:"cellphone",rules:[{max:8,message:"Ingrese un n\xfamero v\xe1lido"}],children:Object(u.jsx)(h.a,{type:"number",placeholder:"Ingrese su n\xfamero de celular"})}),Object(u.jsx)(b.a.Item,{label:"Correo elect\xf3nico",name:"email",rules:[{required:!0,message:"Debe ingresar su n\xfamero de carnet"}],children:Object(u.jsx)(h.a,{type:"email",placeholder:"Ingrese su correo electr\xf3nico"})}),Object(u.jsx)(b.a.Item,{label:"Departamento",name:"city",rules:[{required:!0,message:"Debe seleccionar su departamento"}],children:Object(u.jsxs)(m.a,{showSearch:!0,placeholder:"Departamento de residencia",optionFilterProp:"children",filterOption:function(e,a){return a.value.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(e){return t({name:"city",value:e})},children:[Object(u.jsx)(x,{value:"La Paz",children:"La Paz"}),Object(u.jsx)(x,{value:"Cochabamba",children:"Cochabamba"}),Object(u.jsx)(x,{value:"Santa Cruz",children:"Santa Cruz"}),Object(u.jsx)(x,{value:"Sucre",children:"Sucre"}),Object(u.jsx)(x,{value:"Oruro",children:"Oruro"}),Object(u.jsx)(x,{value:"Potos\xed",children:"Potos\xed"}),Object(u.jsx)(x,{value:"Tarija",children:"Tarija"}),Object(u.jsx)(x,{value:"Beni",children:"Beni"}),Object(u.jsx)(x,{value:"Pando",children:"Pando"})]})}),Object(u.jsx)(b.a.Item,Object(j.a)(Object(j.a)({},f),{},{children:Object(u.jsx)(p.a,{type:"primary",htmlType:"submit",block:!0,children:"Siguiente"})}))]}))}t(282);var v=t(303);function D(e){var a=e.initialValue,t=e.handlerFormData,n=e.onFinish;return Object(u.jsxs)(b.a,Object(j.a)(Object(j.a)({name:"inscriptions"},O),{},{initialValues:a,onFinish:n,autoComplete:"off",onChange:function(e){var a=e.target;t({name:a.id.split("_")[1],value:a.value})},children:[Object(u.jsx)("h1",{children:"Datos de la factura"}),Object(u.jsx)(b.a.Item,{label:"Nombre de la factura",name:"invoiceName",rules:[{required:!0,message:"Debe ingresar el nombre de la factura"}],children:Object(u.jsx)(h.a,{placeholder:"Ingrese el nombre de la factura"})}),Object(u.jsx)(b.a.Item,{label:"NIT",name:"invoiceNit",rules:[{required:!0,message:"Debe ingresar el nit"}],children:Object(u.jsx)(h.a,{placeholder:"Ingrese el NIT"})}),Object(u.jsx)(b.a.Item,{label:"Fecha de pago",name:"paymentDateOfPay",rules:[{required:!0,message:"Debe ingresar la fecha de pago"}],children:Object(u.jsx)(v.a,{onChange:function(e){return t({name:"paymentDateOfPay",value:e})},style:{width:"100%"}})}),Object(u.jsx)(b.a.Item,Object(j.a)(Object(j.a)({},f),{},{children:Object(u.jsx)(p.a,{type:"primary",htmlType:"submit",block:!0,children:"Siguiente"})}))]}))}var N=t(307),y=t(304);function I(e){var a=e.initialValue,t=e.formData,r=e.onFinish,s=Object(o.useState)(!1),i=Object(n.a)(s,2),c=i[0],d=i[1];return Object(u.jsxs)(b.a,Object(j.a)(Object(j.a)({name:"inscriptions"},O),{},{initialValues:a,onFinish:function(e){return r(Object(j.a)(Object(j.a)({},e),t),d)},autoComplete:"off",children:[Object(u.jsx)("h1",{children:"Registro de pago"}),Object(u.jsx)(b.a.Item,{label:"Boleta de pago",children:Object(u.jsx)(b.a.Item,{name:"file",noStyle:!0,rules:[{required:!0,message:"Debe subir su boleta de pago"}],children:Object(u.jsxs)(y.a.Dragger,{name:"file",supportServerRender:!1,action:"http://localhost:4000/api/upload",maxCount:1,onRemove:function(e){Object(l.b)(e.response.data.fileName)},children:[Object(u.jsx)("p",{className:"ant-upload-drag-icon",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:24,height:24,children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"})})}),Object(u.jsx)("p",{className:"ant-upload-text",children:"Click o arrastre el archivo a esta \xe1rea para subirlo"}),Object(u.jsx)("p",{className:"ant-upload-hint",children:"Solo puede subir una imagen o un pdf"})]})})}),Object(u.jsx)(b.a.Item,Object(j.a)(Object(j.a)({},f),{},{children:Object(u.jsx)(p.a,{type:"primary",htmlType:"submit",block:!0,loading:c,children:"Registrar"})}))]}))}var C=t.p+"static/media/logo.1273f5a3.png",w=t(169);var F=r.a.Step;function k(){var e=Object(o.useState)(0),a=Object(n.a)(e,2),t=a[0],c=a[1],m=function(e){var a=Object(o.useState)(e||{}),t=Object(n.a)(a,2),r=t[0],s=t[1],i=Object(o.useCallback)((function(e){var a=e.name,t=e.value;s(Object(j.a)(Object(j.a)({},r),{},Object(w.a)({},a,t)))}),[r]);return{formData:r,handlerFormData:i,cleanFormData:function(){return s({})}}}(),b=m.formData,h=m.handlerFormData,p=function(e,a){return Object(o.useCallback)((function(t,n){d({title:"Verifique que sus datos para la factura son correctos",icon:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"#F4D03F",width:32,height:32,children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}),content:Object(u.jsxs)("div",{children:[Object(u.jsx)("strong",{children:"Nombre:"})," ",t.invoiceName,Object(u.jsx)("br",{}),Object(u.jsx)("strong",{children:"NIT: "}),t.invoiceNit]}),onOk:function(){t.invoice={},t.invoice.name=t.invoiceName,t.invoice.nit=t.invoiceNit,t.payment={},t.payment.urlFile=t.file.file.response.data.url,t.payment.dateOfPay=t.paymentDateOfPay.toDate(),delete t.invoceName,delete t.invoceNit,delete t.paymentDateOfPay,delete t.file,Object(l.a)("students",t,n,(function(){e(),a(0)}))}})}),[])}(m.cleanFormData,c),O=function(){c(t+1)};return Object(u.jsx)("div",{className:"register__container",children:Object(u.jsxs)(s.a,{gutter:24,className:"register",children:[Object(u.jsxs)(i.a,{xs:{span:24},md:{span:12},className:"register__forms",children:[Object(u.jsx)(N.a,{in:0===t,unmountOnExit:!0,timeout:200,classNames:"alert",children:Object(u.jsx)(g,{initialValue:b,onFinish:O,handlerFormData:h})}),Object(u.jsx)(N.a,{in:1===t,unmountOnExit:!0,timeout:200,classNames:"alert",children:Object(u.jsx)(D,{initialValue:b,onFinish:O,handlerFormData:h})}),Object(u.jsx)(N.a,{in:2===t,unmountOnExit:!0,timeout:200,classNames:"alert",children:Object(u.jsx)(I,{formData:b,initialValue:b,onFinish:p,handlerFormData:h})})]}),Object(u.jsx)(i.a,{xs:{span:24},md:{span:12},className:"steps__container",children:Object(u.jsxs)("div",{className:"steps",children:[Object(u.jsxs)(r.a,{type:"navigation",current:t,onChange:c,direction:"vertical",children:[Object(u.jsx)(F,{status:t>0?"finish":"process",title:"Datos personales"}),Object(u.jsx)(F,{status:t>1?"finish":1===t?"process":"wait",title:"Datos de la factura"}),Object(u.jsx)(F,{status:t>2?"finish":2===t?"process":"wait",title:"Boleta de pago"})]}),Object(u.jsx)("img",{src:C,alt:"logo",className:"logo"})]})})]})})}}}]);
//# sourceMappingURL=6.fce9ef47.chunk.js.map