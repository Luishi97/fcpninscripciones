(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{190:function(e,t,n){},262:function(e,t,n){},275:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var a=n(130),c=n(0),i=n(171),r=n(119),s=n(79),o=n(274),l=n(172),d=n.n(l),u=(n(190),d.a.create({baseURL:"http://".concat("cursos.fcpn.edu.bo","/api/"),timeout:5e3,headers:{"Content-Type":"application/json"},mode:"cors"})),j=n(272),h=n(169),b=n(273),O=n(277),m=n(13),p=function(e,t){var n=Object(c.useState)({}),i=Object(a.a)(n,2),s=i[0],o=i[1],l=Object(c.useState)({}),d=Object(a.a)(l,2),u=(d[0],d[1]),j=Object(c.useRef)(null),p=Object(c.useState)(""),f=Object(a.a)(p,2),x=(f[0],f[1]),g=Object(c.useState)(""),v=Object(a.a)(g,2),y=(v[0],v[1]),N=function(e,t,n){t(),x(e[0]),y(n)},S=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,a=t.selectedKeys,c=t.confirm,i=t.clearFilters;return Object(m.jsxs)("div",{style:{padding:8},children:[Object(m.jsx)(b.a,{ref:j,placeholder:"Search ".concat(e),value:a[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return N(a,c,e)},style:{marginBottom:8,display:"block"}}),Object(m.jsxs)(O.b,{children:[Object(m.jsx)(r.a,{type:"primary",onClick:function(){return N(a,c,e)},icon:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",height:12,width:12,children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),size:"small",style:{width:90},children:"Buscar"}),Object(m.jsx)(r.a,{onClick:function(){return function(e){e(),x("")}(i)},size:"small",style:{width:90},children:"Limpiar"}),Object(m.jsx)(r.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),x(a[0]),y(e)},children:"Filtrar"})]})]})},filterIcon:function(e){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:e?"#1890ff":"#c0c0c0",height:18,width:18,children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&j&&window.setTimeout((function(){return j.focus}),100)}}};return{columns:[Object(h.a)({title:"Nombre",dataIndex:"name",key:"name",onFilter:function(e,t){return t.name.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"name"===s.columnKey&&s.order,ellipsis:!0},S("name")),Object(h.a)({title:"Primer apellido",dataIndex:"firstLastName",key:"firstLastName",onFilter:function(e,t){return t.firstLastName.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"firstLastName"===s.columnKey&&s.order,responsive:["md"]},S("firstLastName")),Object(h.a)({title:"Segundo apellido",dataIndex:"secondLastName",key:"secondLastName",onFilter:function(e,t){return t.secondLastName.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"secondLastName"===s.columnKey&&s.order,responsive:["md"]},S("secondLastName")),Object(h.a)({title:"C.I.",dataIndex:"ci",key:"ci",onFilter:function(e,t){return t.ci.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},responsive:["md"]},S("ci")),{title:"Opciones",dataIndex:"options",key:"options",render:function(n,a){return Object(m.jsx)(O.b,{size:"middle",children:Object(m.jsx)(r.a,{type:"primary",onClick:function(){t(!0),e(a)},children:"Ver Detalles"})})}}],handleChange:function(e,t,n){u(t),o(n)}}},f=n(276),x=n(270);function g(e){var t=e.studentData,n=e.isVisible,i=e.setIsVisible,s=Object(c.useState)(!1),l=Object(a.a)(s,2),d=l[0],u=l[1],j=window.window.screen.width;return Object(m.jsxs)(f.a,{title:"Datos del formulario de registro del estudiante",placement:"right",width:j>=640?"30%":"70%",destroyOnClose:!0,onClose:function(){return i(!1)},visible:n,children:[Object(m.jsx)("h2",{children:"Datos personales"}),Object(m.jsx)("h3",{children:"Nombre: "}),Object(m.jsx)("p",{children:t.name}),Object(m.jsx)("h3",{children:"Primer apellido: "}),Object(m.jsx)("p",{children:t.fistLastName}),Object(m.jsx)("h3",{children:"Segundo apellido: "}),Object(m.jsx)("p",{children:t.secondLastName}),Object(m.jsx)("h3",{children:"Ciudad: "}),Object(m.jsx)("p",{children:t.city}),Object(m.jsx)("h3",{children:"Carnet de identidad: "}),Object(m.jsx)("p",{children:t.ci}),Object(m.jsx)("h3",{children:"Email: "}),Object(m.jsx)("p",{children:t.email}),Object(m.jsx)("h3",{children:"Telefono: "}),Object(m.jsx)("p",{children:t.tellphone}),Object(m.jsx)("h3",{children:"Celular: "}),Object(m.jsx)("p",{children:t.cellphone}),Object(m.jsx)(x.a,{}),Object(m.jsx)("h2",{children:"Datos para la factura"}),Object(m.jsx)("h3",{children:"Nombre de la factura: "}),Object(m.jsx)("p",{children:t.invoice&&t.invoice.name}),Object(m.jsx)("h3",{children:"NIT: "}),Object(m.jsx)("p",{children:t.invoice&&t.invoice.nit}),Object(m.jsx)(x.a,{}),Object(m.jsx)("h2",{children:"Datos para la factura"}),Object(m.jsx)("h3",{children:"Fecha de pago: "}),Object(m.jsx)("p",{children:t.payment&&t.payment.dateOfPay}),Object(m.jsx)("h3",{children:"Boleta de pago: "}),Object(m.jsx)(r.a,{type:"primary",onClick:function(){return u(!0)},children:"Ver boleta de pago"}),Object(m.jsx)(o.a,{width:750,title:"Boleta de pago",visible:d,destroyOnClose:!0,onCancel:function(){return u(!1)},children:Object(m.jsx)("embed",{src:t.payment&&"http://cursos.fcpn.edu.bo:"+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HOST_API:"cursos.fcpn.edu.bo"}).REACT_APP_HOST_PORT+t.payment.urlFile,width:"100%",height:"400px"})}),Object(m.jsx)(x.a,{})]})}function v(e){var t=e.data,n=e.isLoading,i=Object(c.useState)({}),r=Object(a.a)(i,2),s=r[0],o=r[1],l=Object(c.useState)(!1),d=Object(a.a)(l,2),u=d[0],h=d[1],b=p(o,h),O=b.columns,f=b.handleChange;return Object(m.jsxs)("div",{className:"table",children:[Object(m.jsx)(j.a,{dataSource:t,columns:O,loading:n,onChange:f}),Object(m.jsx)(g,{studentData:s,isVisible:u,setIsVisible:h})]})}var y=n(261);n(262);function N(){var e=Object(i.useState)(),t=Object(a.a)(e,2),n=t[0],o=t[1],l=Object(i.useState)(!1),d=Object(a.a)(l,2),j=d[0],b=d[1],O=function(e){var t={};t.fileName="Lista De Alumno "+(new Date).toLocaleDateString("es-ES"),t.datas=[{sheetData:e.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{invoiceName:e.invoice.name,invoiceNit:e.invoice.nit,paymentDateOfPay:e.payment.dateOfPay,paymentUrlFile:"http://cursos.fcpn.edu.bo:"+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HOST_API:"cursos.fcpn.edu.bo"}).REACT_APP_HOST_PORT+e.payment.urlFile})})),sheetFilter:["name","firstLastName","secondLastNameLastName","ci","tellphone","cellphone","email","city","invoiceName","invoiceNit","paymentDateOfPay","paymentUrlFile"],sheetHeader:["Nombres","Primer apellido","Segundo apellido","C.I.","Telefono","Celular","Email","Ciudad","Nombre de la factura","Nit de la factura","Fecha de pago","Url de la boleta de pago"]}],new y(t).saveExcel()};return Object(c.useEffect)((function(){!function(e,t,n){n(!0),u.get("/".concat(e)).then((function(e){console.log("res.data",e.data),t(e.data.data)})).catch((function(e){console.log("err",e),t(null),s.a.error({message:"No se pudo obtener la lista de alumnos",description:"Hubo un error al obtener la lista de alumnos "+e,className:"notifications"})})).finally((function(){return n(!1)}))}("students",o,b)}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("h1",{children:"Lista de insctitos"})}),Object(m.jsx)("div",{className:"action__buttons",children:Object(m.jsx)(r.a,{type:"primary",className:"button__excel",onClick:function(){return O(n)},children:"Exportar excel"})}),Object(m.jsx)(v,{data:n,isLoading:j})]})}}}]);
//# sourceMappingURL=4.63504d47.chunk.js.map