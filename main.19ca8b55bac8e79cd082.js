(()=>{var e,r,t,n,a={6954:(e,r,t)=>{Promise.all([t.e(963),t.e(929),t.e(870),t.e(966),t.e(584)]).then(t.bind(t,2584))},7096:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof deviceconfig)return e();t.l("https://satheeshkumar-kannan-infovision.github.io/mfe/device-config/latest/remoteEntry.js",(t=>{if("undefined"!=typeof deviceconfig)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"deviceconfig")})).then((()=>deviceconfig))},3975:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof scconfig)return e();t.l("https://satheeshkumar-kannan-infovision.github.io/mfe/scconfig-app/latest/remoteEntry.js",(t=>{if("undefined"!=typeof scconfig)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"scconfig")})).then((()=>scconfig))}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return a[e](t,t.exports,i),t.exports}i.m=a,i.c=o,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"."+{82:"59b9678b4700a29c887f",291:"0e2bd510d4d1b8013e69",540:"b83a1d930ef692699c7c",584:"a142114d70caac0c75b0",870:"55aeb51867a1d8c7f8c8",912:"bc68817447b75cdbcd3c",924:"912aefff95c724d30c9b",929:"b358a86a27c168a4747e",932:"4db68eb00d410d4a57fe",961:"6a61678316b87533cc8f",963:"46af2a76bc42ad753566",966:"ed7f0ada66344d862a56"}[e]+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="container:",i.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var f,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){f=d;break}}f||(u=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",r+a),f.src=t),e[t]=[n];var l=(r,n)=>{f.onerror=f.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),u&&document.head.appendChild(f)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={912:[8763],932:[3119]},n={3119:["default","./DeviceConfigApp",7096],8763:["default","./ScconfigApp",3975]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var a=n[e];if(!(t.indexOf(a)>=0)){if(t.push(a),a.p)return r.push(a.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),i.m[e]=()=>{throw r},a.p=0},f=(e,t,n,i,f,u)=>{try{var s=e(t,n);if(!s||!s.then)return f(s,i,u);var c=s.then((e=>f(e,i)),o);if(!u)return c;r.push(a.p=c)}catch(e){o(e)}},u=(e,r,n)=>f(r.get,a[1],t,0,s,n),s=r=>{a.p=1,i.m[e]=e=>{e.exports=r()}};f(i,a[2],0,0,((e,r,t)=>e?f(i.I,a[0],0,e,u,t):o()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],f="container",u=(e,r,t,n)=>{var a=o[e]=o[e]||{},i=a[r];(!i||!i.loaded&&(!n!=!i.eager?n:f>i.from))&&(a[r]={get:t,from:f,eager:!!n})},s=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var a=i(e);if(!a)return;var o=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return c.push(a.then(o,r));var f=o(a);if(f&&f.then)return c.push(f.catch(r))}catch(e){r(e)}},c=[];return"default"===t&&(u("@material-ui/core","4.12.4",(()=>Promise.all([i.e(82),i.e(963),i.e(870),i.e(966)]).then((()=>()=>i(2082))))),u("react-dom","17.0.2",(()=>Promise.all([i.e(961),i.e(870)]).then((()=>()=>i(961))))),u("react-router-dom","5.3.4",(()=>Promise.all([i.e(924),i.e(929),i.e(870),i.e(291)]).then((()=>()=>i(3924))))),u("react","17.0.2",(()=>i.e(540).then((()=>()=>i(6540))))),s(3975),s(7096)),c.length?e[t]=Promise.all(c).then((()=>e[t]=1)):e[t]=1}}})(),i.p="/mfe/container/latest/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var a=t[0],o=a<0;o&&(a=-a-1);for(var i=0,f=1,u=!0;;f++,i++){var s,c,d=f<t.length?(typeof t[f])[0]:"";if(i>=n.length||"o"==(c=(typeof(s=n[i]))[0]))return!u||("u"==d?f>a&&!o:""==d!=o);if("u"==c){if(!u||"u"!=d)return!1}else if(u)if(d==c)if(f<=a){if(s!=t[f])return!1}else{if(o?s>t[f]:s<t[f])return!1;s!=t[f]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||f<=a)return!1;u=!1,f--}else{if(f<=a||c<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,f--)}}var l=[],p=l.pop.bind(l);for(i=1;i<t.length;i++){var h=t[i];l.push(1==h?p()|p():2==h?p()&p():h?r(h,n):!p())}return!!p()},t=(t,n,a)=>{var o=t[n];return(n=Object.keys(o).reduce(((t,n)=>!r(a,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(t,n)?t:n),0))&&o[n]},n=(e=>function(r,t,n,a){var o=i.I(r);return o&&o.then?o.then(e.bind(e,r,i.S[r],t,n,a)):e(r,i.S[r],t,n,a)})(((e,r,n,a,o)=>{var f=r&&i.o(r,n)&&t(r,n,a);return f?(e=>(e.loaded=1,e.get()))(f):o()})),a={},o={3870:()=>n("default","react",[1,17,0,1],(()=>i.e(540).then((()=>()=>i(6540))))),9966:()=>n("default","react-dom",[1,17,0,1],(()=>i.e(961).then((()=>()=>i(961))))),4628:()=>n("default","react-router-dom",[1,5,2,0],(()=>i.e(924).then((()=>()=>i(3924))))),5867:()=>n("default","@material-ui/core",[1,4,11,0],(()=>i.e(82).then((()=>()=>i(2082)))))},f={584:[4628,5867],870:[3870],966:[9966]},u={};i.f.consumes=(e,r)=>{i.o(f,e)&&f[e].forEach((e=>{if(i.o(a,e))return r.push(a[e]);if(!u[e]){var t=r=>{a[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}};u[e]=!0;var n=r=>{delete a[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var f=o[e]();f.then?r.push(a[e]=f.then(t).catch(n)):t(f)}catch(e){n(e)}}}))}})(),(()=>{var e={792:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(870|966)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=i.p+i.u(r),f=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,f,u]=t,s=0;if(o.some((r=>0!==e[r]))){for(n in f)i.o(f,n)&&(i.m[n]=f[n]);u&&u(i)}for(r&&r(t);s<o.length;s++)a=o[s],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkcontainer=self.webpackChunkcontainer||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i(6954)})();