(this["webpackJsonpto-do-trial"]=this["webpackJsonpto-do-trial"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(24),s=c(10),r=c.n(s),i=c(8),l=(c(38),c(9)),j=(c(39),c(25)),o=c(6),u=c(26),d={cartItems:[]},b="ADD_ITEM",O="REMOVE_ITEM",m="TOGGLE_STATUS",h="EDIT_ITEM",p=function(e){return{type:b,payload:e}},f=Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(o.a)(Object(o.a)({},e),{},{cartItems:[].concat(Object(j.a)(e.cartItems),[Object(o.a)(Object(o.a)({},t.payload),{},{status:"pending "+String.fromCodePoint(parseInt(2716,16))})])});case O:return Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.task!==t.payload.task}))});case m:return Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.task===t.payload.task?Object(o.a)(Object(o.a)({},e),{},{status:"completed  "+String.fromCodePoint(parseInt(2714,16))}):e}))});case h:return console.log(t.payload.task),console.log(t.payload.id),Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.id===t.payload.id?Object(o.a)(Object(o.a)({},e),{},{task:t.payload.task}):e}))});default:return e}})),x=(c(40),c(1));var v=Object(i.b)((function(e){return{cartItems:e.cartItems}}),(function(e){return{addItems:function(t){return e(p(t))},editItem:function(t){return e(function(e){return{type:h,payload:e}}(t))}}}))((function(e){var t=e.items,c=e.toggle,n=e.editItem,s=Object(a.useState)(""),r=Object(l.a)(s,2),i=r[0],j=r[1],o=Object(a.useState)(t.resp),u=Object(l.a)(o,2),d=u[0],b=(u[1],Object(a.useState)(t.id)),O=Object(l.a)(b,2),m=O[0];return O[1],Object(x.jsx)("div",{className:"modals",children:Object(x.jsxs)("div",{className:"modals_content",children:[Object(x.jsx)("span",{className:"close",onClick:function(){return c()},children:"\xd7"}),Object(x.jsx)("br",{}),Object(x.jsx)("form",{children:Object(x.jsxs)("label",{children:["Task:",Object(x.jsx)("input",{type:"text",name:"task",value:i,onChange:function(e){return j(e.target.value)}})]})}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{onClick:function(){var e={task:i,resp:d,id:m};n(e),console.log(e),j(""),c()},children:"Save"})]})})}));var k=Object(i.b)(null,(function(e){return{removeItem:function(t){return e(function(e){return{type:O,payload:e}}(t))},toggleStatus:function(t){return e(function(e){return{type:m,payload:e}}(t))}}}))((function(e){var t=e.removeItem,c=e.toggleStatus,n=e.items,s=Object(a.useState)(!1),r=Object(l.a)(s,2),i=r[0],j=r[1];function o(){j((function(e){return!e}))}return Object(x.jsxs)("div",{className:"checkout-item",children:[Object(x.jsxs)("div",{className:"name",children:[Object(x.jsx)("div",{className:"btn",onClick:o,children:Object(x.jsx)("button",{children:"\u2710"})}),i?Object(x.jsx)(v,{toggle:o,items:n}):null]}),Object(x.jsx)("span",{className:"name",children:n.task}),Object(x.jsx)("span",{className:"name",children:n.resp}),Object(x.jsx)("span",{className:"status",onClick:function(){return c(n)},children:n.status}),Object(x.jsx)("div",{className:"remove-button",onClick:function(){return t(n)},children:"\u267a"})]})})),g=Object(i.b)((function(e){return{cartItems:e.cartItems}}))((function(e){var t=e.cartItems;return Object(x.jsxs)("div",{className:"checkout-page",children:[Object(x.jsxs)("div",{className:"checkout-header",children:[Object(x.jsx)("div",{className:"header-block",children:Object(x.jsx)("span",{})}),Object(x.jsx)("div",{className:"header-block",children:Object(x.jsx)("span",{children:"Task"})}),Object(x.jsx)("div",{className:"header-block",children:Object(x.jsx)("span",{children:"Resp"})}),Object(x.jsx)("div",{className:"header-block",children:Object(x.jsx)("span",{children:"Status"})}),Object(x.jsx)("div",{className:"header-block",children:Object(x.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(x.jsx)(k,{items:e})}))]})})),I=(c(42),c(43),c(44),c(53));var N=Object(i.b)(null,(function(e){return{addItem:function(t){return e(p(t))}}}))((function(e){var t=e.addItem,c=Object(a.useState)(""),n=Object(l.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(""),j=Object(l.a)(i,2),o=j[0],u=j[1],d=Object(a.useState)(0),b=Object(l.a)(d,2),O=b[0],m=b[1];return Object(x.jsxs)("div",{className:"sign-in",children:[Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{className:"group",children:[Object(x.jsx)("input",{className:"form-input",name:"task",type:"task",onChange:function(e){return r(e.target.value)},value:s,label:"task",required:!0}),Object(x.jsx)("label",{className:"form-input-label",children:"task"})]}),Object(x.jsxs)("div",{className:"group",children:[Object(x.jsx)("input",{className:"form-input",name:"resp",type:"resp",onChange:function(e){return u(e.target.value)},value:o,label:"resp",required:!0}),Object(x.jsx)("label",{className:"form-input-label",children:"resp"})]})]}),Object(x.jsx)("div",{className:"buttons",children:Object(x.jsx)(I.a,{variant:"success",onClick:function(){var e={task:s,resp:o,id:O};""!==e.task&""!==e.resp?(t(e),r(""),u(""),m((function(e){return e+1})),console.log(O)):alert("please fill out both fields")},children:"ADD to-do List"})})]})})),y=c(52),S=c(51),C=function(e){var t=e.children;return Object(x.jsx)("div",{className:"checkout-header",children:Object(x.jsx)(y.a,{bg:"dark",expand:"sm",variant:"dark",children:Object(x.jsx)(S.a,{children:Object(x.jsx)(y.a.Brand,{href:"#home",children:t})})})})};var T=function(){return Object(x.jsx)("div",{class:"homepage",children:Object(x.jsxs)("div",{class:"directory-menu",children:[Object(x.jsx)(C,{children:"To-do-list APP"}),Object(x.jsx)(N,{}),Object(x.jsx)(g,{})]})})};r.a.render(Object(x.jsx)(i.a,{store:f,children:Object(x.jsx)(n.a,{children:Object(x.jsx)(T,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.1d7420dc.chunk.js.map