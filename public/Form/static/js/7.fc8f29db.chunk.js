(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{133:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var c=n(86),i=n(308),r=n(158),a=n.n(r),s=(n(145),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HOST_API:"cursos.fcpn.edu.bo"}).REACT_APP_HOST_PORT),o=a.a.create({baseURL:"http://".concat("cursos.fcpn.edu.bo",":").concat(s,"/api/"),timeout:5e3,headers:{"Content-Type":"application/json"},mode:"cors"}),l=function(e,t,n){n(!0),o.get("/".concat(e)).then((function(e){console.log("res.data",e.data),t(e.data.data)})).catch((function(e){console.log("err",e),t(null),c.a.error({message:"No se pudo obtener la lista de alumnos",description:"Hubo un error al obtener la lista de alumnos "+e,className:"notifications"})})).finally((function(){return n(!1)}))},d=function(e,t,n,c){n(!0),o.post("/".concat(e),t).then((function(){i.a.success({title:"Registrado con exito",content:"Se registro su usuario satisfactoriamente"}),c&&c()})).catch((function(e){i.a.error({title:"Error al registrar",content:"No se pudo registrar: "+JSON.parse(e.request.response).message})})).finally((function(){return n(!1)}))},u=function(e){o.delete("/upload/".concat(e)).then((function(e){console.log("res.data",e.data)})).catch((function(e){return console.log("err",e)}))}},145:function(e,t,n){},288:function(e,t,n){},311:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var c=n(124),i=n(0),r=n(284),a=n(133),s=n(301),o=n(130),l=n(307),d=n(312),u=n(123),j=n(14),h=function(e,t){var n=Object(i.useState)({}),r=Object(c.a)(n,2),a=r[0],s=r[1],h=Object(i.useState)({}),b=Object(c.a)(h,2),O=(b[0],b[1]),f=Object(i.useRef)(null),p=Object(i.useState)(""),m=Object(c.a)(p,2),x=(m[0],m[1]),g=Object(i.useState)(""),S=Object(c.a)(g,2),v=(S[0],S[1]),C=function(e,t,n){t(),x(e[0]),v(n)},w=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,c=t.selectedKeys,i=t.confirm,r=t.clearFilters;return Object(j.jsxs)("div",{style:{padding:8},children:[Object(j.jsx)(l.a,{ref:f,placeholder:"Search ".concat(e),value:c[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return C(c,i,e)},style:{marginBottom:8,display:"block"}}),Object(j.jsxs)(d.b,{children:[Object(j.jsx)(u.a,{type:"primary",onClick:function(){return C(c,i,e)},icon:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",height:12,width:12,children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),size:"small",style:{width:90},children:"Buscar"}),Object(j.jsx)(u.a,{onClick:function(){return function(e){e(),x("")}(r)},size:"small",style:{width:90},children:"Limpiar"}),Object(j.jsx)(u.a,{type:"link",size:"small",onClick:function(){i({closeDropdown:!1}),x(c[0]),v(e)},children:"Filtrar"})]})]})},filterIcon:function(e){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:e?"#1890ff":"#c0c0c0",height:18,width:18,children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&f&&window.setTimeout((function(){return f.focus}),100)}}};return{columns:[Object(o.a)({title:"Nombre",dataIndex:"name",key:"name",onFilter:function(e,t){return t.name.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"name"===a.columnKey&&a.order,ellipsis:!0},w("name")),Object(o.a)({title:"Primer apellido",dataIndex:"firstLastName",key:"firstLastName",onFilter:function(e,t){return t.firstLastName.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"firstLastName"===a.columnKey&&a.order,responsive:["md"]},w("firstLastName")),Object(o.a)({title:"Segundo apellido",dataIndex:"secondLastName",key:"secondLastName",onFilter:function(e,t){return t.secondLastName.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},sortOrder:"secondLastName"===a.columnKey&&a.order,responsive:["md"]},w("secondLastName")),Object(o.a)({title:"C.I.",dataIndex:"ci",key:"ci",onFilter:function(e,t){return t.ci.includes(e)},sorter:function(e,t){return e.name.length-t.name.length},responsive:["md"]},w("ci")),{title:"Opciones",dataIndex:"options",key:"options",render:function(n,c){return Object(j.jsx)(d.b,{size:"middle",children:Object(j.jsx)(u.a,{type:"primary",onClick:function(){t(!0),e(c)},children:"Ver Detalles"})})}}],handleChange:function(e,t,n){O(t),s(n)}}},b=n(310),O=n(299),f=n(308);function p(e){var t=e.studentData,n=e.isVisible,r=e.setIsVisible,a=Object(i.useState)(!1),s=Object(c.a)(a,2),o=s[0],l=s[1],d=window.window.screen.width;return Object(j.jsxs)(b.a,{title:"Datos del formulario de registro del estudiante",placement:"right",width:d>=640?"30%":"70%",destroyOnClose:!0,onClose:function(){return r(!1)},visible:n,children:[Object(j.jsx)("h2",{children:"Datos personales"}),Object(j.jsx)("h3",{children:"Nombre: "}),Object(j.jsx)("p",{children:t.name}),Object(j.jsx)("h3",{children:"Primer apellido: "}),Object(j.jsx)("p",{children:t.fistLastName}),Object(j.jsx)("h3",{children:"Segundo apellido: "}),Object(j.jsx)("p",{children:t.secondLastName}),Object(j.jsx)("h3",{children:"Ciudad: "}),Object(j.jsx)("p",{children:t.city}),Object(j.jsx)("h3",{children:"Carnet de identidad: "}),Object(j.jsx)("p",{children:t.ci}),Object(j.jsx)("h3",{children:"Email: "}),Object(j.jsx)("p",{children:t.email}),Object(j.jsx)("h3",{children:"Telefono: "}),Object(j.jsx)("p",{children:t.tellphone}),Object(j.jsx)("h3",{children:"Celular: "}),Object(j.jsx)("p",{children:t.cellphone}),Object(j.jsx)(O.a,{}),Object(j.jsx)("h2",{children:"Datos para la factura"}),Object(j.jsx)("h3",{children:"Nombre de la factura: "}),Object(j.jsx)("p",{children:t.invoice&&t.invoice.name}),Object(j.jsx)("h3",{children:"NIT: "}),Object(j.jsx)("p",{children:t.invoice&&t.invoice.nit}),Object(j.jsx)(O.a,{}),Object(j.jsx)("h2",{children:"Datos para la factura"}),Object(j.jsx)("h3",{children:"Fecha de pago: "}),Object(j.jsx)("p",{children:t.payment&&t.payment.dateOfPay}),Object(j.jsx)("h3",{children:"Boleta de pago: "}),Object(j.jsx)(u.a,{type:"primary",onClick:function(){return l(!0)},children:"Ver boleta de pago"}),Object(j.jsx)(f.a,{width:750,title:"Boleta de pago",visible:o,destroyOnClose:!0,onCancel:function(){return l(!1)},children:Object(j.jsx)("embed",{src:t.payment&&"http://cursos.fcpn.edu.bo:"+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HOST_API:"cursos.fcpn.edu.bo"}).REACT_APP_HOST_PORT+t.payment.urlFile,width:"100%",height:"400px"})}),Object(j.jsx)(O.a,{})]})}function m(e){var t=e.data,n=e.isLoading,r=Object(i.useState)({}),a=Object(c.a)(r,2),o=a[0],l=a[1],d=Object(i.useState)(!1),u=Object(c.a)(d,2),b=u[0],O=u[1],f=h(l,O),m=f.columns,x=f.handleChange;return Object(j.jsxs)("div",{className:"table",children:[Object(j.jsx)(s.a,{dataSource:t,columns:m,loading:n,onChange:x}),Object(j.jsx)(p,{studentData:o,isVisible:b,setIsVisible:O})]})}n(288);function x(){var e=Object(r.useState)(),t=Object(c.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(!1),l=Object(c.a)(o,2),d=l[0],u=l[1];return Object(i.useEffect)((function(){Object(a.c)("students",s,u)}),[]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"Lista de insctitos"})}),Object(j.jsx)("div",{className:"action__buttons"}),Object(j.jsx)(m,{data:n,isLoading:d})]})}}}]);
//# sourceMappingURL=7.fc8f29db.chunk.js.map