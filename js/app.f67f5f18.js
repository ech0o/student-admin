(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-060731ef":"c7bfe1a9","chunk-061925e8":"fc99cf8d","chunk-2d2176c7":"e7b6c8e6","chunk-4a8d7989":"40019d09","chunk-9b3285fa":"3bcde208"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-060731ef":1,"chunk-4a8d7989":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-060731ef":"49bf66af","chunk-061925e8":"31d6cfe0","chunk-2d2176c7":"31d6cfe0","chunk-4a8d7989":"e4cbc090","chunk-9b3285fa":"31d6cfe0"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/StudentManage/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0a5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var r=n("a78e"),a=n.n(r),o="token";function c(){return a.a.get(o)}function i(){return a.a.set("token","")}function s(e){return a.a.set("token",e)}},"152c":function(e,t,n){},3872:function(e,t,n){"use strict";var r=n("9b61"),a=n.n(r);a.a},"3a7c":function(e,t,n){"use strict";var r=n("152c"),a=n.n(r);a.a},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=(n("b0c0"),n("d3b7"),n("0a5a")),c=n("4db3");function i(e){return Object(c["a"])({url:"api/auth/login",method:"post",params:e})}function s(e){return Object(c["a"])({url:"api/user/info",method:"post",params:e})}var u=n("a18c"),l={token:"",name:"",clazz:"",roles:[]},d={SET_TOKEN:function(e,t){e.token=t},SET_NAME:function(e,t){e.name=t},SET_ROLES:function(e,t){e.roles=t},SET_CLAZZ:function(e,t){e.clazz=t}},f={login:function(e,t){var n=e.commit;return new Promise((function(e,r){i(t).then((function(t){var r=t.data.obj;n("SET_TOKEN",r),Object(o["c"])(r),e()})).catch((function(e){r(e)}))}))},getInfo:function(e,t){var n=e.commit;return new Promise((function(e,r){s({token:t}).then((function(t){var a=t.data;a||r("verification fail");var o=a.name,c=a.roles,i=a.clazzId;(!c||c.length<0)&&r("roles must be a non-null array"),n("SET_NAME",o),n("SET_ROLES",c),n("SET_CLAZZ",i),e(a)})).catch((function(e){throw r(e),new Error(e)}))}))},logout:function(e){var t=e.commit;Object(o["b"])(),t("SET_TOKEN",""),t("SET_ROLES",[]),t("SET_NAME",""),t("SET_CLAZZ",""),Object(u["d"])()}},p={namespaced:!0,state:l,mutations:d,actions:f},m=n("982e"),h={classes:[]},b={SET_CLASSES:function(e,t){e.classes=t}},g={getClasses:function(e){var t=e.commit;return new Promise((function(e,n){Object(m["c"])().then((function(n){t("SET_CLASSES",n.data),e(n.data)})).catch((function(e){throw n(e),new Error(e)}))}))}},O={namespaced:!0,state:h,mutations:b,actions:g},v=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("caad"),n("45fc"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("159b"),n("ade3"));function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(v["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t){return!t.meta||!t.meta.roles||e.some((function(e){return t.meta.roles.includes(e.role_name)}))}function E(e,t){var n=[];return e.forEach((function(e){var r=y({},e);j(t,r)&&(r.children&&(r.children=E(r.children,t)),n.push(r))})),n}var S={routes:[],addRoutes:[]},_={SET_ROUTES:function(e,t){e.addRoutes=t,e.routes=u["b"].concat(t)}},k={generateRoutes:function(e,t){var n=e.commit;return new Promise((function(e){var r;r=t.includes("ROLE_ADMIN")?u["a"]||[]:E(u["a"],t),n("SET_ROUTES",r),e(r)})).catch((function(e){console.log(e)}))}},P={namespaced:!0,state:S,mutations:_,actions:k},C={isCollapse:!1},T={SET_SIDEBAR:function(e,t){e.isCollapse=t}},x={openSidebar:function(e){var t=e.commit;t("SET_SIDEBAR",!0)},closeSidebar:function(e){var t=e.commit;t("SET_SIDEBAR",!1)}},R={namespaced:!0,state:C,mutations:T,actions:x},A={token:function(e){return e.user.token},name:function(e){return e.user.name},roles:function(e){return e.user.roles},clazz:function(e){return e.user.clazz},permittedRoutes:function(e){return e.permission.routes},classes:function(e){return e.grade.classes},sidebar:function(e){return e.sidebar.isCollapse}},D=A;r["default"].use(a["a"]);var L={user:p,permission:P,grade:O,sidebar:R},z=new a["a"].Store({getters:D,modules:L});t["a"]=z},"4db3":function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("0a5a"),c=n("5c96"),i=a.a.create({baseURL:"https://mytest01.cname.anyhk.xyz"});i.interceptors.request.use((function(e){var t=Object(o["a"])();return t&&(e.headers["Authorization"]="Bearer "+t),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return 401===e.status?(Object(c["Message"])({message:"你无权访问！",type:"error"}),Promise.reject(new Error(e.data||"error"))):e})),t["a"]=i},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"App"},i=c,s=(n("034f"),n("2877")),u=Object(s["a"])(i,a,o,!1,null,null,null),l=u.exports,d=n("a18c"),f=n("5c96"),p=n.n(f),m=n("4360"),h=(n("0fae"),n("ce52"),n("b20f"),n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("ade3")),b=(n("96cf"),n("0a5a"));function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(h["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}d["c"].beforeEach((function(e,t,n){var r,a,o,c,i;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(document.title=e.meta.title+" - school admin"||!1,r=Object(b["a"])(),!r){t.next=30;break}if("/login"!==e.path){t.next=7;break}n("/"),t.next=28;break;case 7:if(a=m["a"].getters.roles&&m["a"].getters.roles.length>0,!a){t.next=12;break}n(),t.next=28;break;case 12:return t.prev=12,t.next=15,regeneratorRuntime.awrap(m["a"].dispatch("user/getInfo",Object(b["a"])()));case 15:return o=t.sent,c=o.roles,t.next=19,regeneratorRuntime.awrap(m["a"].dispatch("permission/generateRoutes",c));case 19:i=t.sent,d["c"].addRoutes(i),m["a"].dispatch("grade/getClasses"),n(O({},e,{replace:!0})),t.next=28;break;case 25:throw t.prev=25,t.t0=t["catch"](12),new Error(t.t0);case 28:t.next=31;break;case 30:"/login"===e.path?n():n("/login");case 31:case"end":return t.stop()}}),null,null,[[12,25]])}));var v=n("ecee"),w=n("c074"),y=n("f2d1"),j=n("ad3d");r["default"].use(p.a),v["c"].add(w["a"]),v["c"].add(y["a"]),r["default"].component("font-awesome-icon",j["a"]),r["default"].config.productionTip=!1,new r["default"]({router:d["c"],store:m["a"],render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},8713:function(e,t,n){},"982e":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n("4db3");function a(){return Object(r["a"])({url:"/api/grade/all",method:"get"})}function o(e,t){return Object(r["a"])({url:"/api/grade/page",params:{page:e,size:t}})}function c(e){return Object(r["a"])({url:"/api/grade/",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/api/grade/",method:"put",data:e})}function s(e){return Object(r["a"])({url:"/api/grade/"+e,method:"delete"})}},"9b61":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),a=n("8c4f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"main-container"},[n("side-bar"),n("el-container",{staticClass:"main-wrapper",attrs:{direction:"vertical"}},[n("page-header"),n("el-main",{attrs:{direction:"horizontal"}},[n("router-view")],1),n("el-footer",[n("span",[e._v("©"+e._s(e.date)+" ech0o ")]),n("span",[n("a",{attrs:{href:"https://github.com/ech0o"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}})],1)])])],1)],1)},c=[],i=(n("0d03"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-wrap"},[n("el-menu",{staticClass:"sidebar",attrs:{"default-active":e.activeMenu,router:"","background-color":"#304156","text-color":"hsla(0,0%,100%,.7)","active-text-color":"#409EFF",collapse:e.isCollapse}},e._l(e.permittedRoutes,(function(e){return n("menu-item",{key:e.path,attrs:{item:e}})})),1)],1)}),s=[],u=(n("a4d3"),n("4de4"),n("4160"),n("caad"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("159b"),n("ade3")),l=n("2f62"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item.hidden?e._e():n("div",{staticClass:"item-wrapper"},[e.item.children&&(1!==e.item.children.length||e.item.children.hidden||e.item.alwaysShow)?[n("el-submenu",{attrs:{index:e.getPath}},[n("template",{slot:"title"},[n("font-awesome-icon",{attrs:{icon:e.item.meta.icon,size:"lg","fixed-width":""}}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.item.meta.title))])],1),e.item.children&&!e.item.children.hidden?e._l(e.item.children,(function(t){return n("menu-item",{key:t.path,attrs:{item:t,basePath:e.item.path}})})):e._e()],2)]:[n("el-menu-item",{attrs:{index:e.getPath}},[e.item.meta.icon?n("font-awesome-icon",{attrs:{icon:e.item.meta.icon,size:"lg","fixed-width":""}}):e._e(),n("template",{slot:"title"},[e._v(e._s(e.item.meta.title))])],2)]],2)},f=[],p=(n("ac1f"),n("1276"),{name:"menuItem",props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},computed:{getPath:function(){return this.item.redirect?this.item.redirect:this.item.path.includes(":")?this.basePath+"/"+this.item.path.split(":")[0]:this.basePath+"/"+this.item.path}}}),m=p,h=n("2877"),b=Object(h["a"])(m,d,f,!1,null,null,null),g=b.exports;function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={name:"SideBar",components:{menuItem:g},computed:v({},Object(l["b"])(["permittedRoutes","sidebar"]),{activeMenu:function(){return this.$route.path.includes("class")?"/manage/class/":this.$route.path},isCollapse:function(){return this.sidebar}})},y=w,j=(n("3a7c"),Object(h["a"])(y,i,s,!1,null,"28876851",null)),E=j.exports,S=n("4360"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-header",[n("el-button",{staticClass:"sidebar-toggle",attrs:{size:"mini"},on:{click:e.changeCollapse}},[n("font-awesome-icon",{attrs:{icon:["fas","bars"],size:"lg"}},[e._v("test")])],1),n("el-dropdown",{on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.user)+" "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"a"}},[e._v(" 退出登录 ")])],1)],1)],1)},k=[],P={name:"pageHeader",data:function(){return{user:S["a"].getters.name,isCollapse:S["a"].getters.sidebar}},methods:{logout:function(){this.$store.dispatch("user/logout"),this.$router.push({path:"/login"})},handleCommand:function(e){"a"===e&&this.logout()},changeCollapse:function(){!0===S["a"].getters.sidebar?this.$store.dispatch("sidebar/closeSidebar"):this.$store.dispatch("sidebar/openSidebar")}}},C=P,T=(n("f1fc"),Object(h["a"])(C,_,k,!1,null,"4112a619",null)),x=T.exports,R={name:"Layout",components:{SideBar:E,pageHeader:x},computed:{date:function(){return(new Date).getFullYear()}},data:function(){return{title:this.$route.path,user:S["a"].getters.name,isCollapse:!1}},methods:{goBack:function(){this.$router.go(-1)}}},A=R,D=(n("3872"),Object(h["a"])(A,o,c,!1,null,"2e5bfed3",null)),L=D.exports;n.d(t,"b",(function(){return B})),n.d(t,"a",(function(){return U})),n.d(t,"d",(function(){return F}));var z=function(){return n.e("chunk-060731ef").then(n.bind(null,"6e78"))},M=function(){return n.e("chunk-4a8d7989").then(n.bind(null,"578a"))},N=function(){return n.e("chunk-9b3285fa").then(n.bind(null,"40da"))},I=function(){return n.e("chunk-061925e8").then(n.bind(null,"afa2"))},$=function(){return n.e("chunk-2d2176c7").then(n.bind(null,"c752"))};r["default"].use(a["a"]);var B=[{path:"/login",name:"Login",hidden:!0,component:M,meta:{title:"login"}},{path:"/",name:"index",redirect:"/dashboard",component:L,meta:{title:"主页",icon:["fas","home"]},children:[{path:"dashboard",name:"userIndex",component:z,hidden:!0,meta:{title:"dashboard"}}]}],U=[{path:"/manage",name:"manage",component:L,alwaysShow:!0,redirect:"/student",meta:{roles:["ROLE_ADMIN","ROLE_USER"],title:"管理",icon:["fas","tools"]},children:[{path:"class/:clazz?",name:"student",component:N,meta:{roles:["ROLE_ADMIN","ROLE_USER"],title:"学生管理",icon:["fas","user-graduate"]}},{path:"user",name:"user",component:I,meta:{title:"用户管理",roles:["ROLE_ADMIN"],icon:["fas","user"]}},{path:"grade",name:"class",component:$,meta:{title:"班级管理",roles:["ROLE_ADMIN"],icon:["fas","users"]}}]}],Z=function(){return new a["a"]({routes:B})},q=Z();function F(){var e=Z();q.matcher=e.matcher}t["c"]=q},b20f:function(e,t,n){},ce52:function(e,t,n){},f1fc:function(e,t,n){"use strict";var r=n("8713"),a=n.n(r);a.a}});
//# sourceMappingURL=app.f67f5f18.js.map