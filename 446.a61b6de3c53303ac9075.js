/*! For license information please see 446.a61b6de3c53303ac9075.js.LICENSE.txt */
(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[446],{9613:(e,t,r)=>{"use strict";var n=r(4994),o=r(6305);t.A=void 0;var a=o(r(3870)),i=(0,n(r(6447)).default)(a.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.A=i},6447:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(1305)},8446:(e,t,r)=>{"use strict";r.r(t);var n=r(3870),o=r.n(n),a=r(9966),i=r.n(a),c=r(5544),l=r(4628),u=r(1233),s=r(9117),f=r(7929),p=r(2096),m=r(4505),h=r(2314),d=(0,p.A)((function(e){return(0,m.A)({bar:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}})}));const g=function(){var e=d();return o().createElement("div",{className:e.bar},o().createElement(h.A,null))};var v=r(4467),y=r(1434),E=r(6746),b=r(5376),w=r(4392),x=(0,p.A)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"},a:{textDecoration:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap",justifyContent:"space-between"},link:{margin:e.spacing(1,1.5)},heroContent:{padding:e.spacing(8,0,6)},cardHeader:{backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[700]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},footer:(0,v.A)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}));function A(e){var t=e.isSignedIn,r=e.onSignOut,a=JSON.parse(sessionStorage.getItem("userData")),i=x(),u=(window.location.href,(0,l.useLocation)()),s=(0,n.useState)(""),f=(0,c.A)(s,2),p=f[0],m=f[1];(0,n.useEffect)((function(){u.pathname.includes("/scconfig")?m("SCConfig"):u.pathname.includes("/dlm")?m("DLM"):m("")}),[u.pathname]);var h=function(){t&&r&&(sessionStorage.removeItem("userData"),r())};return o().createElement(o().Fragment,null,o().createElement(y.A,{position:"static",color:"default",elevation:0,className:i.appBar},o().createElement(b.A,{className:i.toolbar},o().createElement(w.A,{variant:"h6",color:"inherit",noWrap:!0,component:l.Link,to:"/apps"},o().createElement("img",{src:"/mfe/static/images/vizio.png",alt:"vizio-logo",style:{width:"120px"}})),o().createElement(w.A,{variant:"h6",color:"inherit",noWrap:!0},"Vizio Distribution Portal ",""!==p?" - ".concat(p):""),t?o().createElement("span",null,o().createElement("span",null,"Username: ",o().createElement("b",null,a.username)),o().createElement("a",{id:"logout-link",href:"#",onClick:h,title:"logout",style:{paddingLeft:10,top:3,position:"relative"}},o().createElement("img",{src:"/mfe/static/images/logout-dark.svg",className:"mr-2"}))):o().createElement(E.A,{color:"primary",variant:"outlined",className:i.link,component:l.Link,to:"/mfe/",onClick:h},"Login"))))}function L(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var S=r(4756),k=r.n(S),_=r(1004),O=r(2572),j=r(5776),C=r(9371),N=r(6957),P=r(9613),M=r(9984),I=r(1415),R=r.n(I),D=r(3182);function T(){return o().createElement(w.A,{variant:"body2",color:"textSecondary",align:"center"},"Copyright © ",o().createElement(l.Link,{color:"inherit",to:"/"},"Your Website")," ",(new Date).getFullYear(),".")}var W=(0,p.A)((function(e){return{"@global":{a:{textDecoration:"none"}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function z(e){var t=e.onSignIn,r=W(),a=(0,n.useState)(""),i=(0,c.A)(a,2),u=(i[0],i[1]),s=(0,n.useState)(!1),f=(0,c.A)(s,2),p=f[0],m=f[1],h=(0,n.useState)(!1),d=(0,c.A)(h,2),g=d[0],v=d[1];return(0,n.useEffect)((function(){sessionStorage.getItem("userData")?(t(),m(!0)):v(!1);var e=function(){var e,r=(e=k().mark((function e(){var r,n,o;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new URLSearchParams(window.location.search),!(n=r.get("code"))){e.next=20;break}return e.prev=3,v(!0),e.next=7,R().get("https://api.test.canary.vzolab.com/test/oauth/callback?code=".concat(n));case 7:o=e.sent,console.log(o),u(o.data),sessionStorage.setItem("userData",JSON.stringify(o.data)),o.data&&(t(),m(!0)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error("Error exchanging code for token:",e.t0);case 17:return e.prev=17,v(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[3,14,17,20]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){L(a,n,o,i,c,"next",e)}function c(e){L(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();e()}),[]),g?o().createElement("div",{className:r.paper},o().createElement(D.A,null)):p?o().createElement(l.Redirect,{to:"/mfe/apps"}):o().createElement(M.A,{component:"main",maxWidth:"xs"},o().createElement("div",{className:r.paper},o().createElement(_.A,{className:r.avatar},o().createElement(P.A,null)),o().createElement(w.A,{component:"h1",variant:"h5"},"Sign in"),o().createElement("form",{onSubmit:function(e){return e.preventDefault()},className:r.form,noValidate:!0},o().createElement(O.A,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),o().createElement(O.A,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),o().createElement(j.A,{control:o().createElement(C.A,{value:"remember",color:"primary"}),label:"Remember me"}),o().createElement(E.A,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:r.submit,onClick:t},"Sign In"),o().createElement(E.A,{onClick:function(){v(!0),window.location.href="https://api.test.canary.vzolab.com/test/oauth"},fullWidth:!0,variant:"contained",color:"primary",className:r.submit},"Login with GitHub"))),o().createElement(N.A,{mt:8},o().createElement(T,null)))}var F=r(426),G=r(6272),B=r(2092),V=r(5867);function H(e){return n.createElement(F.A,{sx:{maxWidth:345}},n.createElement(V.CardActionArea,null,n.createElement(B.A,{component:"img",height:e.height||140,image:e.image,alt:""}),n.createElement(G.A,null,n.createElement(w.A,{gutterBottom:!0,variant:"h5",component:"div"},e.title||""),n.createElement(w.A,{variant:"body2",color:"textSecondary"},e.description||""))))}var Y={container:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}};function q(){return n.createElement("div",{style:Y.container},n.createElement(l.Link,{to:"/scconfig",style:{marginRight:"20px"}},n.createElement(H,{height:140,image:"/mfe/static/images/sc-config.webp",title:"SCConfig",description:"Click to configure scconfig canary"})),n.createElement(l.Link,{to:"/dlmconfig"},n.createElement(H,{height:140,image:"/mfe/static/images/deviceConfig.png",title:"DLM",description:"Click to configure DLM"})))}var J=(0,n.lazy)((function(){return r.e(912).then(r.bind(r,3912))})),U=(0,n.lazy)((function(){return r.e(923).then(r.bind(r,1923))})),K=(0,u.A)({productionPrefix:"co"}),Q=(0,f.zR)();const X=function(){var e=(0,n.useState)(!1),t=(0,c.A)(e,2),r=t[0],a=t[1];return(0,n.useEffect)((function(){r&&Q.push("/mfe/apps")}),[r]),o().createElement(l.Router,{history:Q},o().createElement(s.Ay,{generateClassName:K},o().createElement("div",null,o().createElement(A,{onSignOut:function(){return a(!1)},isSignedIn:r}),o().createElement(n.Suspense,{fallback:o().createElement(g,null)},o().createElement(l.Switch,null,o().createElement(l.Route,{path:"/mfe/apps"},!r&&o().createElement(l.Redirect,{to:"/mfe/"}),o().createElement(q,null)),o().createElement(l.Route,{path:"/mfe/scconfig"},!r&&o().createElement(l.Redirect,{to:"/mfe/"}),o().createElement(J,null)),o().createElement(l.Route,{path:"/mfe/dlmconfig"},!r&&o().createElement(l.Redirect,{to:"/mfe/"}),o().createElement(U,null)),o().createElement(l.Route,{path:"/"},o().createElement(z,{onSignIn:function(){return a(!0)}})))))))};i().render(o().createElement(X,null),document.querySelector("#root"))},4994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},6305:(e,t,r)=>{var n=r(3738).default;function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var l=i?Object.getOwnPropertyDescriptor(e,c):null;l&&(l.get||l.set)?Object.defineProperty(a,c,l):a[c]=e[c]}return a.default=e,r&&r.set(e,a),a},e.exports.__esModule=!0,e.exports.default=e.exports},4633:(e,t,r)=>{var n=r(3738).default;function o(){"use strict";e.exports=o=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},a=Object.prototype,i=a.hasOwnProperty,c=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",f=l.toStringTag||"@@toStringTag";function p(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(t){p=function(e,t,r){return e[t]=r}}function m(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),i=new M(n||[]);return c(a,"_invoke",{value:j(e,r,i)}),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=m;var d="suspendedStart",g="suspendedYield",v="executing",y="completed",E={};function b(){}function w(){}function x(){}var A={};p(A,u,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(I([])));S&&S!==a&&i.call(S,u)&&(A=S);var k=x.prototype=b.prototype=Object.create(A);function _(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,a,c,l){var u=h(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==n(f)&&i.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,l)}))}l(u.arg)}var o;c(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}})}function j(e,r,n){var o=d;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=C(c,n);if(l){if(l===E)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?y:g,u.arg===E)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),E;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,E;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,E):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,E)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return w.prototype=x,c(k,"constructor",{value:x,configurable:!0}),c(x,"constructor",{value:w,configurable:!0}),w.displayName=p(x,f,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,p(e,f,"GeneratorFunction")),e.prototype=Object.create(k),e},r.awrap=function(e){return{__await:e}},_(O.prototype),p(O.prototype,s,(function(){return this})),r.AsyncIterator=O,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var i=new O(m(e,t,n,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(k),p(k,f,"Generator"),p(k,u,(function(){return this})),p(k,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=I,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,E):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),E},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),E}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),E}},r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},3738:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4756:(e,t,r)=>{var n=r(4633)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);