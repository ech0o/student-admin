(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3494ce80"],{"9f60":function(e,r,s){"use strict";var o=s("c0ae"),n=s.n(o);n.a},a55b:function(e,r,s){"use strict";s.r(r);var o=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("el-container",[s("div",{staticClass:"form-cover"},[s("el-form",{ref:"loginform",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.rules}},[s("div",{staticClass:"title"},[s("h3",[e._v("login")])]),s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{placeholder:"username"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"password"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.handleLogin}},[e._v("登录")])],1)],1)],1)])},n=[],t={name:"Login",data:function(){return{loginForm:{username:"admin",password:"admin"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{handleLogin:function(){var e=this;this.$store.dispatch("user/login",this.loginForm).then((function(){e.$router.push({name:"index"})}))["catch"]((function(r){r.response?401===r.response.status&&e.$message.error("用户名或密码错误"):e.$message.error("内部错误")}))}}},a=t,i=(s("9f60"),s("2877")),l=Object(i["a"])(a,o,n,!1,null,"1f4df780",null);r["default"]=l.exports},c0ae:function(e,r,s){}}]);
//# sourceMappingURL=chunk-3494ce80.1a7cbc4c.js.map