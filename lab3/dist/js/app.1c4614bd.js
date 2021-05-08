(function(t){function e(e){for(var r,s,l=e[0],n=e[1],d=e[2],c=0,u=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&u.push(a[s][0]),a[s]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);m&&m(e);while(u.length)u.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,l=1;l<o.length;l++){var n=o[l];0!==a[n]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=n;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"13de":function(t,e,o){"use strict";o("c3cf")},"2d35":function(t,e,o){"use strict";o("8c33")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("f9e3");var r=o("5f5b"),a=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},s=[],l=(o("034f"),o("2877")),n={},d=Object(l["a"])(n,i,s,!1,null,null,null),m=d.exports,c=o("8c4f"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(t._s(t.msg))])])},p=[],h=o("bc3a"),f=o.n(h),b={name:"Ping",data:function(){return{msg:""}},methods:{getMessage:function(){var t=this,e="http://127.0.0.1:1337/ping";f.a.get(e).then((function(e){t.msg=e.data,console.log(e),console.log(e.request),console.log(e.headers)})).catch((function(t){console.error(t)}))}},created:function(){this.getMessage()}},v=b,y=Object(l["a"])(v,u,p,!1,null,"4c33d0d2",null),g=y.exports,F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-10"},[t._m(0),o("h2",[t._v(" Shops ")]),o("hr"),o("br"),o("br"),o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.shop-modal",modifiers:{"shop-modal":!0}}],staticClass:"btn btn-success btn-sm",attrs:{type:"button"}},[t._v("Add Shop")]),o("br"),o("br"),o("table",{staticClass:"table table-hover"},[t._m(1),o("tbody",t._l(t.shops,(function(e,r){return o("tr",{key:r},[o("td",[t._v(t._s(e.Name))]),o("td",[t._v(t._s(e.Type))]),o("td",[t._v(t._s(e.Mall))]),o("td",[t._v(t._s(e.City))]),o("td",[t._v(t._s(e.District))]),o("td",[o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.shop-update-modal",modifiers:{"shop-update-modal":!0}}],staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:function(o){return t.editShop(e)}}},[t._v(" Update ")]),o("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(o){return t.onDeleteShop(e)}}},[t._v(" Delete ")])])])])})),0)])])]),o("b-modal",{ref:"addShopModal",attrs:{id:"shop-modal",title:"Add a new shop","hide-footer":""}},[o("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[o("b-form-group",{attrs:{id:"form-mall-group",label:"Mall:","label-for":"form-mall-input"}},[o("b-form-input",{attrs:{id:"form-mall-input",type:"text",required:"",placeholder:"Enter Mall"},model:{value:t.addShopForm.Mall,callback:function(e){t.$set(t.addShopForm,"Mall",e)},expression:"addShopForm.Mall"}})],1),o("b-form-group",{attrs:{id:"form-type-group",label:"Type:","label-for":"form-type-input"}},[o("b-form-input",{attrs:{id:"form-type-input",type:"text",required:"",placeholder:"Enter Type"},model:{value:t.addShopForm.Type,callback:function(e){t.$set(t.addShopForm,"Type",e)},expression:"addShopForm.Type"}})],1),o("b-form-group",{attrs:{id:"form-name-group",label:"Name:","label-for":"form-name-input"}},[o("b-form-input",{attrs:{id:"form-name-input",type:"text",required:"",placeholder:"Enter Name"},model:{value:t.addShopForm.Name,callback:function(e){t.$set(t.addShopForm,"Name",e)},expression:"addShopForm.Name"}})],1),o("b-form-group",{attrs:{id:"form-city-group",label:"City:","label-for":"form-city-input"}},[o("b-form-input",{attrs:{id:"form-city-input",type:"text",required:"",placeholder:"Enter City"},model:{value:t.addShopForm.City,callback:function(e){t.$set(t.addShopForm,"City",e)},expression:"addShopForm.City"}})],1),o("b-form-group",{attrs:{id:"form-district-group",label:"District:","label-for":"form-district-input"}},[o("b-form-input",{attrs:{id:"form-district-input",type:"text",required:"",placeholder:"Enter District"},model:{value:t.addShopForm.District,callback:function(e){t.$set(t.addShopForm,"District",e)},expression:"addShopForm.District"}})],1),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1),o("b-modal",{ref:"editShopModal",attrs:{id:"shop-update-modal",title:"Update","hide-footer":""}},[o("b-form",{staticClass:"w-100",on:{submit:t.onSubmitUpdate,reset:t.onResetUpdate}},[o("b-form-group",{attrs:{id:"form-mall-edit-group",label:"Mall:","label-for":"form-mall-edit-input"}},[o("b-form-input",{attrs:{id:"form-mall-edit-input",type:"text",required:"",placeholder:"Enter mall"},model:{value:t.editForm.Mall,callback:function(e){t.$set(t.editForm,"Mall",e)},expression:"editForm.Mall"}})],1),o("b-form-group",{attrs:{id:"form-type-edit-group",label:"Type:","label-for":"form-type-edit-input"}},[o("b-form-input",{attrs:{id:"form-type-edit-input",type:"text",required:"",placeholder:"Enter type"},model:{value:t.editForm.Type,callback:function(e){t.$set(t.editForm,"Type",e)},expression:"editForm.Type"}})],1),o("b-form-group",{attrs:{id:"form-name-edit-group",label:"Name:","label-for":"form-name-edit-input"}},[o("b-form-input",{attrs:{id:"form-name-edit-input",type:"text",required:"",placeholder:"Enter name"},model:{value:t.editForm.Name,callback:function(e){t.$set(t.editForm,"Name",e)},expression:"editForm.Name"}})],1),o("b-form-group",{attrs:{id:"form-city-edit-group",label:"City:","label-for":"form-city-edit-input"}},[o("b-form-input",{attrs:{id:"form-name-city-input",type:"text",required:"",placeholder:"Enter City"},model:{value:t.editForm.City,callback:function(e){t.$set(t.editForm,"City",e)},expression:"editForm.City"}})],1),o("b-form-group",{attrs:{id:"form-district-edit-group",label:"City:","label-for":"form-district-edit-input"}},[o("b-form-input",{attrs:{id:"form-name-district-input",type:"text",required:"",placeholder:"Enter District"},model:{value:t.editForm.District,callback:function(e){t.$set(t.editForm,"District",e)},expression:"editForm.District"}})],1),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Update")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1)],1)},_=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[o("a",{attrs:{href:"/",id:"link"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("Name")]),o("th",{attrs:{scope:"col"}},[t._v("Type")]),o("th",{attrs:{scope:"col"}},[t._v("Mall")]),o("th",{attrs:{scope:"col"}},[t._v("City")]),o("th",{attrs:{scope:"col"}},[t._v("District")]),o("th")])])}],M=(o("99af"),{data:function(){return{shops:[],addShopForm:{id:"",Mall:"",Type:"",Name:"",City:"",District:""},message:"",showMessage:!1,editForm:{id:"",Mall:"",Type:"",Name:"",City:"",District:""}}},methods:{getShops:function(){var t=this,e="http://127.0.0.1:1337/shops";f.a.get(e).then((function(e){t.shops=e.data.shops,console.log(e.data)})).catch((function(t){console.error(t)}))},addShop:function(t){var e=this,o="http://127.0.0.1:1337/shops";f.a.post(o,t).then((function(){e.getShops(),e.message="Shop added!",e.showMessage=!0})).catch((function(t){console.log(t),e.getShops()}))},editShop:function(t){this.editForm=t,this.mallName=t.Mall},updateShop:function(t,e,o){var r=this;0===o.length&&(o="empty");var a="http://localhost:5000/shops/".concat(e,"/").concat(o);f.a.put(a,t).then((function(){r.getShops()})).catch((function(t){console.error(t),r.getShops()}))},onResetUpdate:function(t){t.preventDefault(),this.initForm(),this.getShops()},onSubmitUpdate:function(t){t.preventDefault(),this.$refs.editShopModal.hide();var e={Mall:this.editForm.Mall,Type:this.editForm.Type,Name:this.editForm.Name,City:this.editForm.City,District:this.editForm.District};this.updateShop(e,this.editForm.id,this.mallName)},initForm:function(){this.addShopForm.id="",this.addShopForm.Mall="",this.addShopForm.Type="",this.addShopForm.Name="",this.addShopForm.City="",this.addShopForm.District="",this.editForm.id="",this.editForm.Name="",this.editForm.Type="",this.editForm.Mall="",this.editForm.City="",this.editForm.District=""},onSubmit:function(t){t.preventDefault(),this.$refs.addShopModal.hide();var e={Mall:this.addShopForm.Mall,Type:this.addShopForm.Type,Name:this.addShopForm.Name,City:this.addShopForm.City,District:this.addShopForm.District};this.addShop(e),this.initForm()},onReset:function(t){t.preventDefault(),this.initForm()},removeShop:function(t,e){var o=this;0===e.length&&(e="empty");var r="http://localhost:5000/shops/".concat(t,"/").concat(e);f.a.delete(r).then((function(){o.getShops(),o.message="Shop removed!",o.showMessage=!0})).catch((function(t){console.error(t),o.getShops()}))},onDeleteShop:function(t){this.removeShop(t.id,t.Mall),console.log("want to delete"),console.log(t)}},created:function(){this.getShops()}}),S=M,C=(o("13de"),Object(l["a"])(S,F,_,!1,null,"c8d4a1c2",null)),D=C.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-10"},[t._m(0),o("h2",[t._v(" Malls ")]),o("hr"),o("br"),o("br"),o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.mall-modal",modifiers:{"mall-modal":!0}}],staticClass:"btn btn-success btn-sm",attrs:{type:"button"}},[t._v("Add Mall")]),o("br"),o("br"),o("table",{staticClass:"table table-hover"},[t._m(1),o("tbody",t._l(t.uniqueMalls,(function(e,r){return o("tr",{key:r},[o("td",[t._v(t._s(e.Name))]),o("td",[t._v(t._s(e.City))]),o("td",[t._v(t._s(e.District))]),o("td",[o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.all-shops-modal",modifiers:{"all-shops-modal":!0}}],staticClass:"btn btn-info btn-sm",attrs:{type:"button"},on:{click:function(o){return t.showShops(e)}}},[t._v(" Show Shops ")]),o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.mall-update-modal",modifiers:{"mall-update-modal":!0}}],staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:function(o){return t.editMall(e)}}},[t._v(" Update ")]),o("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(o){return t.onDeleteMall(e)}}},[t._v(" Delete ")])])])])})),0)])])]),o("b-modal",{ref:"addMallModal",attrs:{id:"mall-modal",title:"Add a new mall","hide-footer":""}},[o("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[o("b-form-group",{attrs:{id:"form-name-group",label:"Name:","label-for":"form-name-input"}},[o("b-form-input",{attrs:{id:"form-name-input",type:"text",required:"",placeholder:"Enter Name"},model:{value:t.addMallForm.Name,callback:function(e){t.$set(t.addMallForm,"Name",e)},expression:"addMallForm.Name"}})],1),o("b-form-group",{attrs:{id:"form-city-group",label:"City:","label-for":"form-city-input"}},[o("b-form-input",{attrs:{id:"form-city-input",type:"text",required:"",placeholder:"Enter City"},model:{value:t.addMallForm.City,callback:function(e){t.$set(t.addMallForm,"City",e)},expression:"addMallForm.City"}})],1),o("b-form-group",{attrs:{id:"form-district-group",label:"District:","label-for":"form-district-input"}},[o("b-form-input",{attrs:{id:"form-district-input",type:"text",required:"",placeholder:"Enter District"},model:{value:t.addMallForm.District,callback:function(e){t.$set(t.addMallForm,"District",e)},expression:"addMallForm.District"}})],1),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1),o("b-modal",{ref:"editMallModal",attrs:{id:"mall-update-modal",title:"Update","hide-footer":""}},[o("b-form",{staticClass:"w-100",on:{submit:t.onSubmitUpdate,reset:t.onResetUpdate}},[o("b-form-group",{attrs:{id:"form-name-edit-group",label:"Name:","label-for":"form-name-edit-input"}},[o("b-form-input",{attrs:{id:"form-name-edit-input",type:"text",required:"",placeholder:"Enter name"},model:{value:t.editForm.Name,callback:function(e){t.$set(t.editForm,"Name",e)},expression:"editForm.Name"}})],1),o("b-form-group",{attrs:{id:"form-city-edit-group",label:"City:","label-for":"form-city-edit-input"}},[o("b-form-input",{attrs:{id:"form-name-city-input",type:"text",required:"",placeholder:"Enter City"},model:{value:t.editForm.City,callback:function(e){t.$set(t.editForm,"City",e)},expression:"editForm.City"}})],1),o("b-form-group",{attrs:{id:"form-district-edit-group",label:"City:","label-for":"form-district-edit-input"}},[o("b-form-input",{attrs:{id:"form-name-district-input",type:"text",required:"",placeholder:"Enter District"},model:{value:t.editForm.District,callback:function(e){t.$set(t.editForm,"District",e)},expression:"editForm.District"}})],1),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Update")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1),o("b-modal",{ref:"allShopsModal",attrs:{id:"all-shops-modal",title:"Shops","hide-footer":""}},[o("table",{staticClass:"table table-hover"},[o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("Name")]),o("th")])]),o("tbody",t._l(t.malls,(function(e,r){return o("tr",{key:r},[e.id===t.shopsForm.id?o("td",[t._v(t._s(e.Shop))]):t._e()])})),0)])])],1)},x=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[o("a",{attrs:{href:"/",id:"link"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("Name")]),o("th",{attrs:{scope:"col"}},[t._v("City")]),o("th",{attrs:{scope:"col"}},[t._v("District")]),o("th")])])}],w=(o("4160"),o("caad"),o("159b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-alert",{attrs:{variant:"success",show:""}},[t._v(t._s(t.message))]),o("br")],1)}),$=[],k={props:["message"]},E=k,q=Object(l["a"])(E,w,$,!1,null,"566ce179",null),T=q.exports,O={data:function(){return{malls:[],uniqueMalls:[],addMallForm:{id:"",Name:"",City:"",District:""},message:"",showMessage:!1,editForm:{id:"",Name:"",City:"",District:""},shopsForm:{id:"",Name:"",City:"",District:"",Shop:""}}},components:{alert:T},methods:{getMalls:function(){var t=this,e="http://127.0.0.1:1337/malls";f.a.get(e).then((function(e){t.malls=e.data.malls;var o=[];t.uniqueMalls=[],t.malls.forEach((function(e){o.includes(e.Name)||(o.push(e.Name),t.uniqueMalls.push({id:e.id,City:e.City,District:e.District,Name:e.Name}))})),console.log(t.uniqueMalls)})).catch((function(t){console.error(t)}))},addMall:function(t){var e=this,o="http://127.0.0.1:1337/malls";f.a.post(o,t).then((function(){e.getMalls(),e.message="Mall added!",e.showMessage=!0})).catch((function(t){console.log(t),e.getMalls()}))},editMall:function(t){this.editForm=t},showShops:function(t){this.shopsForm=t},updateMall:function(t,e){var o=this,r="http://localhost:5000/malls/".concat(e);f.a.put(r,t).then((function(){o.getMalls()})).catch((function(t){console.error(t),o.getMalls()}))},onResetUpdate:function(t){t.preventDefault(),this.initForm(),this.getMalls()},onSubmitUpdate:function(t){t.preventDefault(),this.$refs.editMallModal.hide();var e={Name:this.editForm.Name,City:this.editForm.City,District:this.editForm.District};this.updateMall(e,this.editForm.id)},initForm:function(){this.addMallForm.id="",this.addMallForm.Name="",this.addMallForm.City="",this.addMallForm.District="",this.editForm.id="",this.editForm.Name="",this.editForm.City="",this.editForm.District=""},onSubmit:function(t){t.preventDefault(),this.$refs.addMallModal.hide();var e={Name:this.addMallForm.Name,City:this.addMallForm.City,District:this.addMallForm.District};this.addMall(e),this.initForm()},onReset:function(t){t.preventDefault(),this.initForm()},removeMall:function(t){var e=this,o="http://localhost:5000/malls/".concat(t);f.a.delete(o).then((function(){e.getMalls(),e.message="Mall removed!",e.showMessage=!0})).catch((function(t){console.error(t),e.getMalls()}))},onDeleteMall:function(t){this.removeMall(t.id)}},created:function(){this.getMalls()}},j=O,U=(o("f84a"),Object(l["a"])(j,N,x,!1,null,"4f0b766f",null)),R=U.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello",attrs:{id:"hello"}},[t._m(0),o("h1",[t._v(t._s(t.msg))]),t._m(1)])},A=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"logo"}},[r("img",{attrs:{src:o("ba7d")}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{attrs:{id:"links"}},[o("li",[o("a",{attrs:{href:"malls"}},[t._v(" Malls ")])]),o("li",[o("a",{attrs:{href:"shops"}},[t._v(" Shops ")])])])}],H={name:"HelloWorld",data:function(){return{msg:"Welcome to ShopFinder"}}},W=H,J=(o("2d35"),Object(l["a"])(W,P,A,!1,null,"63919555",null)),z=J.exports;a["default"].use(c["a"]);var B=new c["a"]({routes:[{path:"/shops",name:"Shops",component:D},{path:"/malls",name:"Malls",component:R},{path:"/",name:"HelloWorld",component:z},{path:"/ping",name:"Ping",component:g}],mode:"history"});a["default"].config.productionTip=!1,a["default"].use(r["a"]),new a["default"]({router:B,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,o){},"8c33":function(t,e,o){},ba7d:function(t,e,o){t.exports=o.p+"img/custom_logo_1.7d674bc1.png"},bfcc:function(t,e,o){},c3cf:function(t,e,o){},f84a:function(t,e,o){"use strict";o("bfcc")}});
//# sourceMappingURL=app.1c4614bd.js.map