(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{133:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(86),c=n(310),r=n(158),i=n.n(r),s=(n(145),i.a.create({baseURL:"http://".concat("cursos.fcpn.edu.bo","/api/"),timeout:5e3,headers:{"Content-Type":"application/json"},mode:"cors"})),o=function(e,t,n){n(!0),s.get("/".concat(e)).then((function(e){console.log("res.data",e.data),t(e.data.data)})).catch((function(e){console.log("err",e),t(null),a.a.error({message:"No se pudo obtener la lista de alumnos",description:"Hubo un error al obtener la lista de alumnos "+e,className:"notifications"})})).finally((function(){return n(!1)}))},l=function(e,t,n,a){n(!0),s.post("/".concat(e),t).then((function(){c.a.success({title:"Registrado con exito",content:"Se registro su usuario satisfactoriamente"}),a&&a()})).catch((function(e){c.a.error({title:"Error al registrar",content:"No se pudo registrar: "+JSON.parse(e.request.response).message})})).finally((function(){return n(!1)}))},d=function(e){s.delete("/upload/".concat(e)).then((function(e){console.log("res.data",e.data)})).catch((function(e){return console.log("err",e)}))}},145:function(e,t,n){},289:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var a=n(124),c=n(0),r=n(189),i=n(299),s=n(300),o=n(123),l=n(133),d=n(303),u=n(127),j=n(309),h=n(314),b=n(14),O=function(e,t){var n=Object(c.useState)({}),r=Object(a.a)(n,2),i=r[0],s=r[1],l=Object(c.useState)({}),d=Object(a.a)(l,2),O=(d[0],d[1]),m=Object(c.useRef)(null),p=Object(c.useState)(""),f=Object(a.a)(p,2),x=(f[0],f[1]),g=Object(c.useState)(""),v=Object(a.a)(g,2),y=(v[0],v[1]),N=function(e,t,n){t(),x(e[0]),y(n)},C=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,a=t.selectedKeys,c=t.confirm,r=t.clearFilters;return Object(b.jsxs)("div",{style:{padding:8},children:[Object(b.jsx)(j.a,{ref:m,placeholder:"Search ".concat(e),value:a[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return N(a,c,e)},style:{marginBottom:8,display:"block"}}),Object(b.jsxs)(h.b,{children:[Object(b.jsx)(o.a,{type:"primary",onClick:function(){return N(a,c,e)},icon:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",height:12,width:12,children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),size:"small",style:{width:90},children:"Buscar"}),Object(b.jsx)(o.a,{onClick:function(){return function(e){e(),x("")}(r)},size:"small",style:{width:90},children:"Limpiar"}),Object(b.jsx)(o.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),x(a[0]),y(e)},children:"Filtrar"})]})]})},filterIcon:function(e){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:e?"#1890ff":"#c0c0c0",height:18,width:18,children:Object(b.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&m&&window.setTimeout((function(){return m.focus}),100)}}};return{columns:[{title:"N\xb0",dataIndex:"n",key:"n",width:50,render:function(e,t,n){return n+1}},Object(u.a)({title:"Nombre",dataIndex:"name",key:"name",onFilter:function(e,t){return t.name.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"name"===i.columnKey&&i.order,ellipsis:!0},C("name")),Object(u.a)({title:"Primer apellido",dataIndex:"firstLastName",key:"firstLastName",onFilter:function(e,t){return t.firstLastName.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"firstLastName"===i.columnKey&&i.order,responsive:["md"]},C("firstLastName")),Object(u.a)({title:"Segundo apellido",dataIndex:"secondLastName",key:"secondLastName",onFilter:function(e,t){return t.secondLastName.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"secondLastName"===i.columnKey&&i.order,responsive:["md"]},C("secondLastName")),Object(u.a)({title:"C.I.",dataIndex:"ci",key:"ci",onFilter:function(e,t){return t.ci.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},responsive:["md"]},C("ci")),Object(u.a)({title:"Ciudad",dataIndex:"city",key:"city",onFilter:function(e,t){return t.city.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"city"===i.columnKey&&i.order,responsive:["md"]},C("city")),{title:"Opciones",dataIndex:"options",key:"options",render:function(n,a){return Object(b.jsx)(h.b,{size:"middle",children:Object(b.jsx)(o.a,{type:"primary",onClick:function(){t(!0),e(a)},children:"Ver Detalles"})})}}],handleChange:function(e,t,n){O(t),s(n)}}},m=n(313),p=n(301),f=n(310);function x(e){var t=e.studentData,n=e.isVisible,r=e.setIsVisible,i=Object(c.useState)(!1),s=Object(a.a)(i,2),l=s[0],d=s[1],u=window.window.screen.width;return Object(b.jsxs)(m.a,{title:"Datos del formulario de registro del estudiante",placement:"right",width:u>=640?"30%":"70%",destroyOnClose:!0,onClose:function(){return r(!1)},visible:n,children:[Object(b.jsx)("h2",{children:"Datos personales"}),Object(b.jsx)("h3",{children:"Nombre: "}),Object(b.jsx)("p",{children:t.name}),Object(b.jsx)("h3",{children:"Primer apellido: "}),Object(b.jsx)("p",{children:t.fistLastName}),Object(b.jsx)("h3",{children:"Segundo apellido: "}),Object(b.jsx)("p",{children:t.secondLastName}),Object(b.jsx)("h3",{children:"Ciudad: "}),Object(b.jsx)("p",{children:t.city}),Object(b.jsx)("h3",{children:"Carnet de identidad: "}),Object(b.jsx)("p",{children:t.ci}),Object(b.jsx)("h3",{children:"Email: "}),Object(b.jsx)("p",{children:t.email}),Object(b.jsx)("h3",{children:"Telefono: "}),Object(b.jsx)("p",{children:t.tellphone}),Object(b.jsx)("h3",{children:"Celular: "}),Object(b.jsx)("p",{children:t.cellphone}),Object(b.jsx)(p.a,{}),Object(b.jsx)("h2",{children:"Datos para la factura"}),Object(b.jsx)("h3",{children:"Nombre de la factura: "}),Object(b.jsx)("p",{children:t.invoice&&t.invoice.name}),Object(b.jsx)("h3",{children:"NIT: "}),Object(b.jsx)("p",{children:t.invoice&&t.invoice.nit}),Object(b.jsx)(p.a,{}),Object(b.jsx)("h2",{children:"Datos para la factura"}),Object(b.jsx)("h3",{children:"Fecha de pago: "}),Object(b.jsx)("p",{children:t.payment&&t.payment.dateOfPay}),Object(b.jsx)("h3",{children:"Boleta de pago: "}),Object(b.jsx)(o.a,{type:"primary",onClick:function(){return d(!0)},children:"Ver boleta de pago"}),Object(b.jsx)(f.a,{width:750,title:"Boleta de pago",visible:l,destroyOnClose:!0,onCancel:function(){return d(!1)},children:Object(b.jsx)("embed",{src:t.payment&&"http://cursos.fcpn.edu.bo"+t.payment.urlFile,width:"100%",height:"400px"})}),Object(b.jsx)(p.a,{})]})}function g(e){var t=e.data,n=e.isLoading,r=Object(c.useState)({}),i=Object(a.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(!1),u=Object(a.a)(l,2),j=u[0],h=u[1],m=O(o,h),p=m.columns,f=m.handleChange;return console.log("data",t),Object(b.jsxs)("div",{className:"table",children:[Object(b.jsx)(d.a,{dataSource:t,columns:p,loading:n,onChange:f,scroll:{x:400}}),Object(b.jsx)(x,{studentData:s,isVisible:j,setIsVisible:h})]})}var v=n(288);n(289);var y=r.a.Option;function N(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],d=t[1],j=Object(c.useState)(!1),h=Object(a.a)(j,2),O=h[0],m=h[1],p=Object(c.useState)(),f=Object(a.a)(p,2),x=f[0],N=f[1],C=function(e){var t={};t.fileName="Lista De Alumno "+(new Date).toLocaleDateString("es-ES"),t.datas=[{sheetData:e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{invoiceName:e.invoice.name,invoiceNit:e.invoice.nit,paymentDateOfPay:e.payment.dateOfPay,paymentUrlFile:"http://cursos.fcpn.edu.bo:"+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HOST_API:"cursos.fcpn.edu.bo"}).REACT_APP_HOST_PORT+e.payment.urlFile})})),sheetFilter:["name","firstLastName","secondLastNameLastName","ci","tellphone","cellphone","email","city","invoiceName","invoiceNit","paymentDateOfPay","paymentUrlFile"],sheetHeader:["Nombres","Primer apellido","Segundo apellido","C.I.","Telefono","Celular","Email","Ciudad","Nombre de la factura","Nit de la factura","Fecha de pago","Url de la boleta de pago"]}],new v(t).saveExcel()};return Object(c.useEffect)((function(){Object(l.c)("students",d,m)}),[]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h1",{children:"Lista de insctitos"})}),Object(b.jsxs)(i.a,{className:"action__buttons",gutter:24,align:"middle",justify:"center",children:[Object(b.jsx)(s.a,{xs:{span:24},md:{span:6},children:Object(b.jsx)(o.a,{type:"primary",className:"button__excel",onClick:function(){return C(n)},children:"Exportar excel"})}),Object(b.jsx)(s.a,{xs:{span:24},md:{span:9},children:Object(b.jsxs)("p",{className:"text__headers",children:["Total de inscritos: ",Object(b.jsx)("span",{children:n?n.length:0})," "]})}),Object(b.jsx)(s.a,{xs:{span:24},md:{span:9},children:Object(b.jsxs)("p",{className:"text__headers",children:["Total en la ciudad de"," ",Object(b.jsxs)(r.a,{showSearch:!0,placeholder:"Departamento",optionFilterProp:"children",filterOption:function(e,t){return t.value.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:N,children:[Object(b.jsx)(y,{value:"La Paz",children:"La Paz"}),Object(b.jsx)(y,{value:"Cochabamba",children:"Cochabamba"}),Object(b.jsx)(y,{value:"Santa Cruz",children:"Santa Cruz"}),Object(b.jsx)(y,{value:"Sucre",children:"Sucre"}),Object(b.jsx)(y,{value:"Oruro",children:"Oruro"}),Object(b.jsx)(y,{value:"Potos\xed",children:"Potos\xed"}),Object(b.jsx)(y,{value:"Tarija",children:"Tarija"}),Object(b.jsx)(y,{value:"Beni",children:"Beni"}),Object(b.jsx)(y,{value:"Pando",children:"Pando"})]}),": ",Object(b.jsx)("span",{children:n?n.filter((function(e){return e.city===x})).length:0})]})})]}),Object(b.jsx)(g,{data:n,isLoading:O})]})}}}]);
//# sourceMappingURL=7.921a6981.chunk.js.map