(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[0],{33:function(e,t,n){e.exports=n(44)},38:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(14),c=n.n(a),i=n(8),l=(n(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function u(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=n(6),f=n(11),h=n(24),g=n(25),m={isAuth:!1,user:{}};var d=Object(f.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"GET_USER_REQUEST":return{isAuth:!!t.payload,user:t.payload};case"LOGIN_REQUEST":case"LOGIN_SUCCESS":return{isAuth:!0,user:t.payload};case"LOGIN_ERROR":case"LOGOUT":return{};default:return e}}}),p=Object(g.createLogger)(),E=Object(f.d)(d,Object(f.a)(h.a,p)),v=n(10),b=n(26),O=n(27),w=n(31),j=n(28),y=n(32);var S=function(e){return console.log(e),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/secret"},"Secret")),!e.isAuth&&r.a.createElement("li",null,r.a.createElement(i.b,{to:"/login"},"Login"))))},k=Object(s.b)((function(e,t){return e.login}))(S),A=n(16),L=n(30),T=n(12),U=function(e){console.log("login",e);var t=Object(o.useState)({email:"",password:""}),n=Object(T.a)(t,2),a=n[0],c=n[1],i=function(e){var t=e.target,n=t.value,o=t.name;c(Object(L.a)({},a,Object(A.a)({},o,n)))};return r.a.createElement(r.a.Fragment,null,e.user&&e.isAuth&&r.a.createElement(v.a,{to:"/"}),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.logginAction(a)}},r.a.createElement("h1",null,"Login Below!"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter email",value:a.email,onChange:i,required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password",value:a.password,onChange:i,required:!0}),r.a.createElement("input",{type:"submit",value:"Submit"})))},C=function(){return function(e){return fetch("/api/check/token").then((function(e){return e.json()})).then((function(t){e({type:"LOGIN_REQUEST",payload:t})}))}},R=Object(s.b)((function(e,t){return e.login}),(function(e){return{logginAction:function(t){return e(function(e){return function(t){return fetch("/api/auth/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){t(C())})).catch((function(e){console.error(e),alert("Error logging in please try again")}))}}(t))}}}))(U),G=function(){var e=Object(o.useState)(""),t=Object(T.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){fetch("/api/home").then((function(e){return e.text()})).then((function(e){return a(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("p",null,n))},N=function(e){var t=Object(o.useState)(""),n=Object(T.a)(t,2),a=n[0],c=n[1];Object(o.useEffect)((function(){fetch("/api/secret").then((function(e){return e.text()})).then((function(e){return c(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Private"),r.a.createElement("p",null,a),r.a.createElement("button",{onClick:function(){e.logoutAction()}},"Logout"))},_=Object(s.b)((function(e,t){return e.login}),(function(e){return{logoutAction:function(){return e((function(e){return fetch("/api/auth/logout").then((function(t){e({type:"LOGOUT"})}))}))}}}))(N),x=function(e){return console.log(e),Object(o.useEffect)((function(){e.getUserAction()}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,e.user&&e.user.email),r.a.createElement(k,null),r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/",exact:!0,component:G}),r.a.createElement(v.b,{path:"/secret",component:(t=_,function(e){function n(){var e;return Object(b.a)(this,n),(e=Object(w.a)(this,Object(j.a)(n).call(this))).state={loading:!0,redirect:!1},e}return Object(y.a)(n,e),Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/check/token").then((function(t){if(200!==t.status)throw new Error(t.error);e.setState({loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1,redirect:!0})}))}},{key:"render",value:function(){var e=this.state,n=e.loading,o=e.redirect;return n?null:o?r.a.createElement(v.a,{to:"/login"}):r.a.createElement(t,this.props)}}]),n}(o.Component))}),r.a.createElement(v.b,{path:"/login",component:R})));var t},I=Object(s.b)((function(e,t){return e.login}),(function(e){return{getUserAction:function(){return e(C())}}}))(x);c.a.render(r.a.createElement(i.a,null,r.a.createElement(s.a,{store:E},r.a.createElement(I,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");l?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):u(e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.6d0de459.chunk.js.map