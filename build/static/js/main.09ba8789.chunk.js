(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{20:function(e,t,n){e.exports={contactform:"ContactForm_contactform__gQmFF"}},38:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),i=n(11),o=n.n(i),s=n(13),u=n(17),l=n(10),b=n(3),d=n(18),j=n.n(d),p=n(19),m=n.n(p),h=n(4),f=n(9),O=n(2),v=n(12),C={addContact:Object(b.b)("app/addContact",(function(e){return{payload:{id:Object(v.uuid)(),name:e.name,number:e.number}}})),deleteContact:Object(b.b)("app/deleteContact"),filterSet:Object(b.b)("app/setFilterArr")},x=Object(b.c)([].concat([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),(r={},Object(f.a)(r,C.addContact,(function(e,t){t.type;var n=t.payload;return e.map((function(e){return e.name})).includes(n.name)?(alert(" \u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0454 \u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456!!!"),e):[].concat(Object(l.a)(e),[n])})),Object(f.a)(r,C.deleteContact,(function(e,t){t.types;var n=t.payload,r=e.filter((function(e){return e.id!==n}));return Object(l.a)(r)})),r)),y=Object(b.c)("",Object(f.a)({},C.filterSet,(function(e,t){return t.payload}))),g=Object(O.b)({contacts:x,filter:y});console.log(Object(b.d)());var S=[].concat(Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),[j.a]),A={key:"app",storage:m.a,blacklist:["filter"]},k=Object(b.a)({reducer:{app:Object(h.g)(A,g)},middleware:S,devTools:!1}),w={store:k,persistor:Object(h.h)(k)},F=n(5),D=n(6),z=n(8),T=n(7),N=n(20),H=n.n(N),I=n(1),J=function(e){Object(z.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,r=n.name,a=n.value;e.setState(Object(f.a)({},r,a))},e.handleSubmit=function(t){t.preventDefault();var n={name:e.state.name,number:e.state.number};e.props.onSubmitData(n),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(D.a)(n,[{key:"render",value:function(){return Object(I.jsx)("div",{className:H.a.contactform,children:Object(I.jsxs)("form",{type:"submit",onSubmit:this.handleSubmit,children:[Object(I.jsxs)("label",{children:["Name",Object(I.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(I.jsxs)("label",{children:["Number",Object(I.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(I.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),Z=function(e){Object(z.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).deleteId=function(t){e.props.del(t)},e.createList=function(){return e.props.contacts.map((function(t){return Object(I.jsxs)("li",{id:t.id,children:["".concat(t.name,": ").concat(t.number),Object(I.jsx)("button",{"data-id":t.id,onClick:function(){return e.deleteId(t.id)},children:"Delete"})]},Object(v.uuid)())}))},e}return Object(D.a)(n,[{key:"render",value:function(){return Object(I.jsx)("ul",{children:this.createList()})}}]),n}(a.Component);Z.defaultProps={contacts:[]};var _=Z,q=function(e){Object(z.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).setFilterValue=function(t){var n=t.currentTarget.value.toUpperCase();e.props.setFilterToState(n)},e}return Object(D.a)(n,[{key:"render",value:function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)("h4",{children:"Find contacts by name"}),Object(I.jsx)("input",{onChange:this.setFilterValue})]})}}]),n}(a.Component),B=function(e){Object(z.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).filterArr=function(t){return t.filter((function(t){return t.name.toUpperCase().includes(e.props.filter)}))},e}return Object(D.a)(n,[{key:"render",value:function(){return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)("h1",{children:"Phonebook"}),Object(I.jsx)(J,{onSubmitData:this.props.formSubmitHandler}),Object(I.jsx)("h1",{children:"Contacts"}),Object(I.jsx)(q,{setFilterToState:this.props.filterSet}),Object(I.jsx)(_,{contacts:this.filterArr(this.props.contacts),del:this.props.contactDelete})]})}}]),n}(a.Component),E=Object(s.b)((function(e){return{contacts:e.app.contacts,filter:e.app.filter}}),(function(e){return{formSubmitHandler:function(t){return e(C.addContact(t))},contactDelete:function(t){return e(C.deleteContact(t))},filterSet:function(t){return e(C.filterSet(t))}}}))(B);o.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(s.a,{store:w.store,children:Object(I.jsx)(u.a,{loading:null,persistor:w.persistor,children:Object(I.jsx)(E,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.09ba8789.chunk.js.map