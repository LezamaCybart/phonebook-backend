(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var c=t(16),o=t.n(c),s=t(4),r=t(7),a=t(2),u=t(3),i=t.n(u),l=t(0),d=function(e){var n=e.addPerson,t=e.newName,c=e.handlePersonChange,o=e.newNumber,s=e.handleNumberChange;return console.log("personform"),Object(l.jsxs)("form",{onSubmit:n,children:[Object(l.jsxs)("div",{children:["name: ",Object(l.jsx)("input",{value:t,onChange:c})]}),Object(l.jsxs)("div",{children:["number: ",Object(l.jsx)("input",{value:o,onChange:s})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var n=e.newFilter,t=e.handleFilterChange;return Object(l.jsxs)("div",{children:["filter shown with:",Object(l.jsx)("input",{value:n,onChange:t})]})},b="/api/persons",h=function(e){return i.a.post(b,e).then((function(e){return e.data}))},f=function(e,n){return i.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},m=function(e){return i.a.delete("".concat(b,"/").concat(e)).then((function(e){return console.log(e),e.data}))},g=function(e){var n=e.personsToShow,t=e.deletePersonFromState;return Object(l.jsx)("ul",{children:n.map((function(e){return Object(l.jsxs)("li",{children:[e.name," ",e.number,Object(l.jsx)("button",{onClick:function(){return n=e.id,m(n).then((function(e){t(n),console.log(n+"deleted")})),void console.log(n+"to deleted");var n},children:"erase"})]},e.id)}))})},O=function(e){var n=e.message,t=e.success;console.log("notification"+n+t);var c={color:"green",background:"lightgrey",fontSize:"20px",boderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},o=Object(r.a)(Object(r.a)({},c),{},{color:"red"});return null===n?null:t?Object(l.jsx)("div",{style:c,children:n}):Object(l.jsx)("div",{style:o,children:n})},p=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),r=Object(s.a)(o,2),u=r[0],b=r[1],m=Object(a.useState)(""),p=Object(s.a)(m,2),v=p[0],x=p[1],w=Object(a.useState)(""),S=Object(s.a)(w,2),C=S[0],k=S[1],y=Object(a.useState)({message:null,success:!0}),N=Object(s.a)(y,2),P=N[0],F=N[1];Object(a.useEffect)((function(){console.log("useEffect"),i.a.get("/api/persons").then((function(e){c(e.data)}))}),[]),console.log("render",t.length,"persons");var T=t.filter((function(e){return e.name.includes(C)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(O,{message:P.message,success:P.success}),Object(l.jsx)(j,{newFilter:C,handleFilterChange:function(e){k(e.target.value)}}),Object(l.jsx)("h2",{children:"add a new"}),Object(l.jsx)(d,{addPerson:function(e){e.preventDefault();var n=t.map((function(e){return e.name})),o={name:u,number:v};if(n.includes(o.name)){if(window.confirm("Change number of existing contact?")){var s=t.filter((function(e){return e.name===o.name})),r=t.map((function(e){return e.name===s[0].name?o:e}));console.log(r),f(s[0].id,o).then((function(e){F({message:"Updated ".concat(o.name," information"),success:!0}),c(r),b(""),x(""),setTimeout((function(){F({message:null,success:!0})}),5e3)})).catch((function(e){F({message:"".concat(o.name," was already deleted from server"),success:!1}),b(""),x(""),c(t.filter((function(e){return e.name!==o.name})))}))}}else h(o).then((function(e){F({message:"Added ".concat(o.name),success:!0}),c(t.concat(e)),b(""),x(""),setTimeout((function(){F({message:null,success:""})}),5e3)}))},newName:u,handlePersonChange:function(e){b(e.target.value)},newNumber:v,handleNumberChange:function(e){console.log(e.target.value),x(e.target.value)},hand:!0}),Object(l.jsx)("h2",{children:"Numbers"}),Object(l.jsx)(g,{personsToShow:T,deletePersonFromState:function(e){c(t.filter((function(n){return n.id!==e})))}})]})};o.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.68e23355.chunk.js.map