(this.webpackJsonpdomashka=this.webpackJsonpdomashka||[]).push([[0],{16:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),s=n(10),o=n(2),u=n(3),l=n(5),d=n(4),b=n(17),h=n(0),j=function(t){var e=t.searchInputId,n=t.value,a=t.onChange;return e=Object(b.a)(),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{}),"Search",Object(h.jsx)("label",{}),Object(h.jsx)("input",{id:e,type:"text",value:n,onChange:a})]})},m=n(9),p={type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0},O={type:"tel",name:"number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0},f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target;t.setState(Object(m.a)({},n.name,n.value))},t.onSubmit=function(e){e.preventDefault(),(0,t.props.onSubmit)(t.state),t.resetForm()},t.nameInputId=Object(b.a)(),t.phoneInputId=Object(b.a)(),t}return Object(u.a)(n,[{key:"resetForm",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.onSubmit,e=this.handleChange;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{action:"submit",onSubmit:t,children:[Object(h.jsx)("label",{htmlFor:this.nameInputId,children:"Name "}),Object(h.jsx)("input",{onChange:e,id:this.nameInputId,type:p.type,name:p.name,value:this.state.name,pattern:p.pattern,title:p.title,required:p.required}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:this.phoneInputId,children:"Number"}),Object(h.jsx)("input",{onChange:e,id:this.phoneInputId,type:O.type,value:this.state.number,name:O.name,pattern:O.pattern,title:O.title,required:O.required}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"submit",children:"Add Contact"})]})})}}]),n}(a.Component),v=function(t){var e=t.contacts,n=t.onDelete;return e.map((function(t,e){var a=t.name,r=t.number;return Object(h.jsxs)("li",{children:[a,": ",r,Object(h.jsx)("button",{onClick:function(){return n(e)},children:"x"})]},Object(b.a)())}))},x=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeFilter=function(e){var n=e.target;t.setState({filter:n.value})},t.addContact=function(e){t.setState((function(t){var n=t.contacts;if(n.find((function(t){return t.name===e.name})))return alert("".concat(e.name," are already in list")),{contacts:n};var a=Object(s.a)(n);return e.id=Object(b.a)(),a.push(e),{contacts:a}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t,n){return n!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);this.setState((function(t){t.contacts;return{contacts:e}}))}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.addContact,e=this.deleteContact,n=this.changeFilter,a=this.state.filter.toLowerCase(),r=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{onSubmit:t}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(j,{onChange:n,value:this.state.filter}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:this.state.contacts.length?Object(h.jsx)(v,{contacts:r,onDelete:e}):Object(h.jsx)("p",{children:"There is no contact here"})})})]})}}]),n}(a.Component);var g=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(x,{})})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.20d2d7c8.chunk.js.map