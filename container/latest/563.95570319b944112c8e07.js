"use strict";(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[563],{4563:(e,n,t)=>{t.r(n);var a=t(7271),r=t.n(a),o=t(7650),i=t.n(o),l=t(334),c=t(8577),p=t(2195),s=t(4688);const u=function(){var e=(0,a.useRef)(null),n=(0,l.useHistory)();return(0,a.useEffect)((function(){var t=(0,s.mount)(e.current,{onNavigate:function(e){var t=e.pathname;n.location.pathname!==t&&n.push(t)}}).onParentNavigate;n.listen(t)}),[]),r().createElement("div",{ref:e})};var g=t(4942),m=t(8568),d=t(3530),f=t(8358),v=t(2318),E=(0,t(1120).Z)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"},a:{textDecoration:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap",justifyContent:"space-between"},link:{margin:e.spacing(1,1.5)},heroContent:{padding:e.spacing(8,0,6)},cardHeader:{backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[700]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},footer:(0,g.Z)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}));function b(e){var n=e.signedIn,t=e.onSignOut,a=E();return r().createElement(r().Fragment,null,r().createElement(m.Z,{position:"static",color:"default",elevation:0,className:a.appBar},r().createElement(f.Z,{className:a.toolbar},r().createElement(v.Z,{variant:"h6",color:"inherit",noWrap:!0,component:l.Link,to:"/"},"App"),r().createElement(d.Z,{color:"primary",variant:"outlined",className:a.link,component:l.Link,to:n?"/":"/auth/signin",onClick:function(){n&&t&&t()}},n?"Logout":"Login"))))}var h=(0,c.Z)({productionPrefix:"co"});const k=function(){return r().createElement(l.BrowserRouter,null,r().createElement(p.ZP,{generateClassName:h},r().createElement("div",null,r().createElement(b,null),r().createElement(u,null))))};i().render(r().createElement(k,null),document.querySelector("#root"))}}]);