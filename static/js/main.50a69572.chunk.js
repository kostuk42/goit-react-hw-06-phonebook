(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,t,n){e.exports={form:"ContactForm_form__1fuOn"}},18:function(e,t,n){e.exports={list:"ContactList_list__2T7aG"}},19:function(e,t,n){e.exports={label:"Filter_label__3DcZT"}},20:function(e,t,n){e.exports={container:"App_container__16xz_"}},35:function(e,t,n){"use strict";n.r(t);n(0);var r=n(7),c=n.n(r),a=n(4),i=n(15),o=n(6),u=n(37),s=Object(o.b)({name:"contacts",initialState:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],reducers:{addContact:{reducer:function(e,t){e.push(t.payload)},prepare:function(e){return{payload:{name:e.name,number:e.number,id:Object(u.a)()}}}},deleteContact:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),l=s.actions,b=l.addContact,d=l.deleteContact,j=s.reducer,m=Object(o.b)({name:"filter",initialState:"",reducers:{updateFilter:function(e,t){return t.payload}}}),f=m.actions.updateFilter,p=m.reducer,O=n(16),h=n.n(O),x=n(5),v=n(3),C={key:"root1",storage:h.a,whiteList:["contacts"]},g=Object(v.b)({filter:p,contacts:j}),y=Object(x.g)(C,g),_=Object(o.a)({reducer:y,middleware:function(e){return e({serializableCheck:{ignoredActions:[x.a,x.f,x.b,x.c,x.d,x.e]}})}}),w=Object(x.h)(_),k=n(17),L=n.n(k),N=function(e){return e.contacts},F=function(e){return e.filter},A=n(1),S=function(){var e=Object(a.c)(N),t=Object(a.b)();return Object(A.jsxs)("form",{className:L.a.form,onSubmit:function(n){n.preventDefault();var r=n.target[0].value,c=n.target[1].value;e.find((function(e){return e.name.toLowerCase()===r.toLowerCase()}))?alert("".concat(r," is already in contacts.")):(t(b({name:r,number:c})),n.target[0].value="",n.target[1].value="")},children:[Object(A.jsxs)("label",{children:["Name:",Object(A.jsx)("input",{type:"text",name:"name",required:!0})]}),Object(A.jsxs)("label",{children:["Number:",Object(A.jsx)("input",{type:"tel",name:"number",required:!0})]}),Object(A.jsx)("button",{type:"submit",children:"Add contact"})]})},D=n(18),q=n.n(D),z=function(){var e=Object(a.c)(N),t=Object(a.c)(F),n=Object(a.b)(),r=function(e,t){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}(t,e);return Object(A.jsx)("ul",{className:q.a.list,children:r.map((function(e){return Object(A.jsxs)("li",{children:[e.name,": ",e.number,Object(A.jsx)("button",{type:"button",onClick:function(){return n(d(e.id))},children:"Delete"})]},e.id)}))})},E=n(19),J=n.n(E),T=function(){var e=Object(a.b)(),t=Object(a.c)(F);return Object(A.jsxs)("label",{className:J.a.label,children:["Find contacts by name:",Object(A.jsx)("input",{type:"text",value:t,onChange:function(t){return n=t.target.value,void e(f(n));var n}})]})},B=n(20),G=n.n(B),H=function(){return Object(A.jsxs)("div",{className:G.a.container,children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(S,{}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(T,{}),Object(A.jsx)(z,{})]})};c.a.render(Object(A.jsx)(i.a,{loading:null,persistor:w,children:Object(A.jsx)(a.a,{store:_,children:Object(A.jsx)(H,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.50a69572.chunk.js.map