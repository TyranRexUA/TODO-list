(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{1:function(e,t,a){e.exports={Task:"Task_Task__FR7rg",Task__text:"Task_Task__text__SWHGT",Task__btnGroup:"Task_Task__btnGroup__1hCJ9",btn:"Task_btn__2oHy3",checkBtn:"Task_checkBtn__3Sh_m",deleteBtn:"Task_deleteBtn__3-0U4",Task_done:"Task_Task_done__15rr9"}},17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(5),r=a.n(o),c=(a(22),a(16)),l=a(7),i=a(8),u={tasks:[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Todo/GET_TASKS":var a=function(){for(var e=[],t=0,a=Object.keys(localStorage);t<a.length;t++){var n=a[t];"lastIndex"!==n&&e.push(Object(i.a)({id:n},JSON.parse(localStorage.getItem(n))))}return e.sort((function(e,t){return e.id-t.id}))};return Object(i.a)(Object(i.a)({},e),{},{tasks:a()});default:return e}},_=function(){return{type:"Todo/GET_TASKS"}},m=a(4),k=a.n(m),T=function(e){var t=e.handleSubmit,a=e.handleReset,o=(e.formRef,Object(n.useRef)(null));return Object(n.useEffect)((function(){o.current.focus()}),[]),s.a.createElement("div",{className:k.a.CreateModeWindow},s.a.createElement("form",{onSubmit:t,onReset:a},s.a.createElement("textarea",{name:"text",cols:"30",rows:"20",ref:o}),s.a.createElement("div",{className:k.a.btnGroup},s.a.createElement("button",{className:k.a.submitBtn,type:"submit"}),s.a.createElement("button",{className:k.a.closeBtn,type:"reset"}))))},f=a(6),b=a(1),g=a.n(b),E=a(9),S=a.n(E),p=Object(n.memo)((function(e){var t=e.done,a=e.id,n=e.text,o=e.deleteTask,r=e.changeTask;return s.a.createElement("div",{className:S()(g.a.Task,Object(f.a)({},g.a.Task_done,t))},s.a.createElement("div",{className:g.a.Task__text,suppressContentEditableWarning:!0,contentEditable:!t,onBlur:function(e){return r(a,e.target.innerHTML,t)},dangerouslySetInnerHTML:{__html:n}}),s.a.createElement("div",{className:g.a.Task__btnGroup},s.a.createElement("label",{className:S()(g.a.checkBtn,g.a.btn)},s.a.createElement("input",{type:"checkbox",onChange:function(e){return r(a,n,e.target.checked)}})),s.a.createElement("div",{className:S()(g.a.deleteBtn,g.a.btn),onClick:function(){return o(a)}})))})),h=a(3),v=a.n(h),O=Object(l.b)((function(e){return{tasks:e.tasks}}),{getTasks:_,createTask:function(e){return function(t){localStorage.lastIndex||localStorage.setItem("lastIndex",0),++localStorage.lastIndex,localStorage.setItem(localStorage.getItem("lastIndex").toString(),JSON.stringify({text:e,done:!1})),t({type:"Todo/GET_TASKS"})}},deleteTask:function(e){return function(t){localStorage.removeItem(e),t({type:"Todo/GET_TASKS"})}},changeTask:function(e,t,a){return function(n){localStorage[e]=JSON.stringify({text:t,done:a}),n({type:"Todo/GET_TASKS"})}}})(Object(n.memo)((function(e){var t=e.tasks,a=e.getTasks,o=e.createTask,r=e.deleteTask,l=e.changeTask,i=Object(n.useState)(!1),u=Object(c.a)(i,2),d=u[0],_=u[1];Object(n.useEffect)((function(){a()}),[]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:v.a.TasksList},s.a.createElement("div",{className:v.a.TasksList__container},t&&t.map((function(e){return s.a.createElement(p,{key:e.id,id:e.id,text:e.text,done:e.done,deleteTask:r,changeTask:l})}))),s.a.createElement("div",{className:v.a.TasksList__btnGroup},s.a.createElement("div",{className:v.a.addTask,onClick:function(){_(!0),document.body.classList.add("lock")}}),s.a.createElement("div",{className:v.a.clearLocalStorage,onClick:function(){localStorage.clear(),a()}}))),d&&s.a.createElement(T,{handleSubmit:function(e){e.preventDefault(),o(e.target.elements.text.value),e.target.reset()},handleReset:function(e){document.body.classList.remove("lock"),_(!1)}}))}))),L=function(){return s.a.createElement(O,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(2),y=a(15),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.c,N=Object(x.d)(d,w(Object(x.a)(y.a)));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(l.a,{store:N},s.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){e.exports={TasksList:"TasksList_TasksList__2jWvK",TasksList__container:"TasksList_TasksList__container__3ESUR",TasksList__btnGroup:"TasksList_TasksList__btnGroup__2ci7o",addTask:"TasksList_addTask__9mCGK",clearLocalStorage:"TasksList_clearLocalStorage__24JtS"}},4:function(e,t,a){e.exports={CreateModeWindow:"CreateModeWindow_CreateModeWindow__EtPyY",btnGroup:"CreateModeWindow_btnGroup__3iJCp",closeBtn:"CreateModeWindow_closeBtn__20V2y",submitBtn:"CreateModeWindow_submitBtn__3ToAG"}}},[[17,1,2]]]);
//# sourceMappingURL=main.1f6c398d.chunk.js.map