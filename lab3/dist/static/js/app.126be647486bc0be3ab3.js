webpackJsonp([1],{"1/oy":function(t,e){},"1wHo":function(t,e){},AzoP:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("Jmt5");var o=i("e6fC"),a=i("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")(null,r,!1,function(t){i("1wHo")},null,null).exports,l=i("/ocq"),n=i("mtWM"),d=i.n(n),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-alert",{attrs:{variant:"success",show:""}},[this._v(this._s(this.message))]),this._v(" "),e("br")],1)},staticRenderFns:[]};var c=i("VU/8")({props:["message"]},m,!1,function(t){i("AzoP")},"data-v-12fd0c62",null).exports,p={data:function(){return{shops:[],addShopForm:{id:"",Mall:"",Type:"",Name:"",City:"",District:""},message:"",showMessage:!1,editForm:{id:"",Mall:"",Type:"",Name:"",City:"",District:""}}},components:{alert:c},methods:{getShops:function(){var t=this;d.a.get("http://localhost:5000/shops").then(function(e){t.shops=e.data.shops,console.log(e.data)}).catch(function(t){console.error(t)})},addShop:function(t){var e=this;d.a.post("http://localhost:5000/shops",t).then(function(){e.getShops(),e.message="Shop added!",e.showMessage=!0}).catch(function(t){console.log(t),e.getShops()})},editShop:function(t){this.editForm=t,this.mallName=t.Mall},updateShop:function(t,e,i){var o=this;0===i.length&&(i="empty");var a="http://localhost:5000/shops/"+e+"/"+i;d.a.put(a,t).then(function(){o.getShops()}).catch(function(t){console.error(t),o.getShops()})},onResetUpdate:function(t){t.preventDefault(),this.initForm(),this.getShops()},onSubmitUpdate:function(t){t.preventDefault(),this.$refs.editShopModal.hide();var e={Mall:this.editForm.Mall,Type:this.editForm.Type,Name:this.editForm.Name,City:this.editForm.City,District:this.editForm.District};this.updateShop(e,this.editForm.id,this.mallName)},initForm:function(){this.addShopForm.id="",this.addShopForm.Mall="",this.addShopForm.Type="",this.addShopForm.Name="",this.addShopForm.City="",this.addShopForm.District="",this.editForm.id="",this.editForm.Name="",this.editForm.Type="",this.editForm.Mall="",this.editForm.City="",this.editForm.District=""},onSubmit:function(t){t.preventDefault(),this.$refs.addShopModal.hide();var e={Mall:this.addShopForm.Mall,Type:this.addShopForm.Type,Name:this.addShopForm.Name,City:this.addShopForm.City,District:this.addShopForm.District};this.addShop(e),this.initForm()},onReset:function(t){t.preventDefault(),this.initForm()},removeShop:function(t,e){var i=this;0===e.length&&(e="empty");var o="http://localhost:5000/shops/"+t+"/"+e;d.a.delete(o).then(function(){i.getShops(),i.message="Shop removed!",i.showMessage=!0}).catch(function(t){console.error(t),i.getShops()})},onDeleteShop:function(t){this.removeShop(t.id,t.Mall),console.log("want to delete"),console.log(t)}},created:function(){this.getShops()}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-10"},[t._m(0),t._v(" "),i("h2",[t._v("\n          Shops\n        ")]),t._v(" "),i("hr"),i("br"),i("br"),t._v(" "),i("button",{directives:[{name:"b-modal",rawName:"v-b-modal.shop-modal",modifiers:{"shop-modal":!0}}],staticClass:"btn btn-success btn-sm",attrs:{type:"button"}},[t._v("Add Shop")]),t._v(" "),i("br"),i("br"),t._v(" "),i("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),i("tbody",t._l(t.shops,function(e,o){return i("tr",{key:o},[i("td",[t._v(t._s(e.Name))]),t._v(" "),i("td",[t._v(t._s(e.Type))]),t._v(" "),i("td",[t._v(t._s(e.Mall))]),t._v(" "),i("td",[t._v(t._s(e.City))]),t._v(" "),i("td",[t._v(t._s(e.District))]),t._v(" "),i("td",[i("div",{staticClass:"btn-group",attrs:{role:"group"}},[i("button",{directives:[{name:"b-modal",rawName:"v-b-modal.shop-update-modal",modifiers:{"shop-update-modal":!0}}],staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:function(i){return t.editShop(e)}}},[t._v("\n                  Update\n                ")]),t._v(" "),i("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(i){return t.onDeleteShop(e)}}},[t._v("\n                  Delete\n                ")])])])])}),0)])])]),t._v(" "),i("b-modal",{ref:"addShopModal",attrs:{id:"shop-modal",title:"Add a new shop","hide-footer":""}},[i("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[i("b-form-group",{attrs:{id:"form-mall-group",label:"Mall:","label-for":"form-mall-input"}},[i("b-form-input",{attrs:{id:"form-mall-input",type:"text",required:"",placeholder:"Enter Mall"},model:{value:t.addShopForm.Mall,callback:function(e){t.$set(t.addShopForm,"Mall",e)},expression:"addShopForm.Mall"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-type-group",label:"Type:","label-for":"form-type-input"}},[i("b-form-input",{attrs:{id:"form-type-input",type:"text",required:"",placeholder:"Enter Type"},model:{value:t.addShopForm.Type,callback:function(e){t.$set(t.addShopForm,"Type",e)},expression:"addShopForm.Type"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-name-group",label:"Name:","label-for":"form-name-input"}},[i("b-form-input",{attrs:{id:"form-name-input",type:"text",required:"",placeholder:"Enter Name"},model:{value:t.addShopForm.Name,callback:function(e){t.$set(t.addShopForm,"Name",e)},expression:"addShopForm.Name"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-city-group",label:"City:","label-for":"form-city-input"}},[i("b-form-input",{attrs:{id:"form-city-input",type:"text",required:"",placeholder:"Enter City"},model:{value:t.addShopForm.City,callback:function(e){t.$set(t.addShopForm,"City",e)},expression:"addShopForm.City"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-district-group",label:"District:","label-for":"form-district-input"}},[i("b-form-input",{attrs:{id:"form-district-input",type:"text",required:"",placeholder:"Enter District"},model:{value:t.addShopForm.District,callback:function(e){t.$set(t.addShopForm,"District",e)},expression:"addShopForm.District"}})],1),t._v(" "),i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),i("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1),t._v(" "),i("b-modal",{ref:"editShopModal",attrs:{id:"shop-update-modal",title:"Update","hide-footer":""}},[i("b-form",{staticClass:"w-100",on:{submit:t.onSubmitUpdate,reset:t.onResetUpdate}},[i("b-form-group",{attrs:{id:"form-mall-edit-group",label:"Mall:","label-for":"form-mall-edit-input"}},[i("b-form-input",{attrs:{id:"form-mall-edit-input",type:"text",required:"",placeholder:"Enter mall"},model:{value:t.editForm.Mall,callback:function(e){t.$set(t.editForm,"Mall",e)},expression:"editForm.Mall"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-type-edit-group",label:"Type:","label-for":"form-type-edit-input"}},[i("b-form-input",{attrs:{id:"form-type-edit-input",type:"text",required:"",placeholder:"Enter type"},model:{value:t.editForm.Type,callback:function(e){t.$set(t.editForm,"Type",e)},expression:"editForm.Type"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-name-edit-group",label:"Name:","label-for":"form-name-edit-input"}},[i("b-form-input",{attrs:{id:"form-name-edit-input",type:"text",required:"",placeholder:"Enter name"},model:{value:t.editForm.Name,callback:function(e){t.$set(t.editForm,"Name",e)},expression:"editForm.Name"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-city-edit-group",label:"City:","label-for":"form-city-edit-input"}},[i("b-form-input",{attrs:{id:"form-name-city-input",type:"text",required:"",placeholder:"Enter City"},model:{value:t.editForm.City,callback:function(e){t.$set(t.editForm,"City",e)},expression:"editForm.City"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-district-edit-group",label:"City:","label-for":"form-district-edit-input"}},[i("b-form-input",{attrs:{id:"form-name-district-input",type:"text",required:"",placeholder:"Enter District"},model:{value:t.editForm.District,callback:function(e){t.$set(t.editForm,"District",e)},expression:"editForm.District"}})],1),t._v(" "),i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Update")]),t._v(" "),i("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("a",{attrs:{href:"/",id:"link"}},[this._v("Home")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v("Type")]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v("Mall")]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v("City")]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v("District")]),t._v(" "),i("th")])])}]};var h=i("VU/8")(p,u,!1,function(t){i("l9mM")},"data-v-604e3806",null).exports,f={data:function(){return{malls:[],uniqueMalls:[],addMallForm:{id:"",Name:"",City:"",District:""},message:"",showMessage:!1,editForm:{id:"",Name:"",City:"",District:""},shopsForm:{id:"",Name:"",City:"",District:"",Shop:""}}},components:{alert:c},methods:{getMalls:function(){var t=this;d.a.get("http://localhost:5000/malls").then(function(e){t.malls=e.data.malls;var i=[];t.uniqueMalls=[],t.malls.forEach(function(e){i.includes(e.Name)||(i.push(e.Name),t.uniqueMalls.push({id:e.id,City:e.City,District:e.District,Name:e.Name}))}),console.log(t.uniqueMalls)}).catch(function(t){console.error(t)})},addMall:function(t){var e=this;d.a.post("http://localhost:5000/malls",t).then(function(){e.getMalls(),e.message="Mall added!",e.showMessage=!0}).catch(function(t){console.log(t),e.getMalls()})},editMall:function(t){this.editForm=t},showShops:function(t){this.shopsForm=t},updateMall:function(t,e){var i=this,o="http://localhost:5000/malls/"+e;d.a.put(o,t).then(function(){i.getMalls()}).catch(function(t){console.error(t),i.getMalls()})},onResetUpdate:function(t){t.preventDefault(),this.initForm(),this.getMalls()},onSubmitUpdate:function(t){t.preventDefault(),this.$refs.editMallModal.hide();var e={Name:this.editForm.Name,City:this.editForm.City,District:this.editForm.District};this.updateMall(e,this.editForm.id)},initForm:function(){this.addMallForm.id="",this.addMallForm.Name="",this.addMallForm.City="",this.addMallForm.District="",this.editForm.id="",this.editForm.Name="",this.editForm.City="",this.editForm.District=""},onSubmit:function(t){t.preventDefault(),this.$refs.addMallModal.hide();var e={Name:this.addMallForm.Name,City:this.addMallForm.City,District:this.addMallForm.District};this.addMall(e),this.initForm()},onReset:function(t){t.preventDefault(),this.initForm()},removeMall:function(t){var e=this,i="http://localhost:5000/malls/"+t;d.a.delete(i).then(function(){e.getMalls(),e.message="Mall removed!",e.showMessage=!0}).catch(function(t){console.error(t),e.getMalls()})},onDeleteMall:function(t){this.removeMall(t.id)}},created:function(){this.getMalls()}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-10"},[t._m(0),t._v(" "),i("h2",[t._v("\n          Malls\n        ")]),t._v(" "),i("hr"),i("br"),i("br"),t._v(" "),i("button",{directives:[{name:"b-modal",rawName:"v-b-modal.mall-modal",modifiers:{"mall-modal":!0}}],staticClass:"btn btn-success btn-sm",attrs:{type:"button"}},[t._v("Add Mall")]),t._v(" "),i("br"),i("br"),t._v(" "),i("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),i("tbody",t._l(t.uniqueMalls,function(e,o){return i("tr",{key:o},[i("td",[t._v(t._s(e.Name))]),t._v(" "),i("td",[t._v(t._s(e.City))]),t._v(" "),i("td",[t._v(t._s(e.District))]),t._v(" "),i("td",[i("div",{staticClass:"btn-group",attrs:{role:"group"}},[i("button",{directives:[{name:"b-modal",rawName:"v-b-modal.all-shops-modal",modifiers:{"all-shops-modal":!0}}],staticClass:"btn btn-info btn-sm",attrs:{type:"button"},on:{click:function(i){return t.showShops(e)}}},[t._v("\n                  Show Shops\n                ")]),t._v(" "),i("button",{directives:[{name:"b-modal",rawName:"v-b-modal.mall-update-modal",modifiers:{"mall-update-modal":!0}}],staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:function(i){return t.editMall(e)}}},[t._v("\n                  Update\n                ")]),t._v(" "),i("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(i){return t.onDeleteMall(e)}}},[t._v("\n                  Delete\n                ")])])])])}),0)])])]),t._v(" "),i("b-modal",{ref:"addMallModal",attrs:{id:"mall-modal",title:"Add a new mall","hide-footer":""}},[i("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[i("b-form-group",{attrs:{id:"form-name-group",label:"Name:","label-for":"form-name-input"}},[i("b-form-input",{attrs:{id:"form-name-input",type:"text",required:"",placeholder:"Enter Name"},model:{value:t.addMallForm.Name,callback:function(e){t.$set(t.addMallForm,"Name",e)},expression:"addMallForm.Name"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-city-group",label:"City:","label-for":"form-city-input"}},[i("b-form-input",{attrs:{id:"form-city-input",type:"text",required:"",placeholder:"Enter City"},model:{value:t.addMallForm.City,callback:function(e){t.$set(t.addMallForm,"City",e)},expression:"addMallForm.City"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-district-group",label:"District:","label-for":"form-district-input"}},[i("b-form-input",{attrs:{id:"form-district-input",type:"text",required:"",placeholder:"Enter District"},model:{value:t.addMallForm.District,callback:function(e){t.$set(t.addMallForm,"District",e)},expression:"addMallForm.District"}})],1),t._v(" "),i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),i("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1),t._v(" "),i("b-modal",{ref:"editMallModal",attrs:{id:"mall-update-modal",title:"Update","hide-footer":""}},[i("b-form",{staticClass:"w-100",on:{submit:t.onSubmitUpdate,reset:t.onResetUpdate}},[i("b-form-group",{attrs:{id:"form-name-edit-group",label:"Name:","label-for":"form-name-edit-input"}},[i("b-form-input",{attrs:{id:"form-name-edit-input",type:"text",required:"",placeholder:"Enter name"},model:{value:t.editForm.Name,callback:function(e){t.$set(t.editForm,"Name",e)},expression:"editForm.Name"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-city-edit-group",label:"City:","label-for":"form-city-edit-input"}},[i("b-form-input",{attrs:{id:"form-name-city-input",type:"text",required:"",placeholder:"Enter City"},model:{value:t.editForm.City,callback:function(e){t.$set(t.editForm,"City",e)},expression:"editForm.City"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"form-district-edit-group",label:"City:","label-for":"form-district-edit-input"}},[i("b-form-input",{attrs:{id:"form-name-district-input",type:"text",required:"",placeholder:"Enter District"},model:{value:t.editForm.District,callback:function(e){t.$set(t.editForm,"District",e)},expression:"editForm.District"}})],1),t._v(" "),i("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Update")]),t._v(" "),i("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1),t._v(" "),i("b-modal",{ref:"allShopsModal",attrs:{id:"all-shops-modal",title:"Shops","hide-footer":""}},[i("table",{staticClass:"table table-hover"},[i("thead",[i("tr",[i("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),i("th")])]),t._v(" "),i("tbody",t._l(t.malls,function(e,o){return i("tr",{key:o},[e.id===t.shopsForm.id?i("td",[t._v(t._s(e.Shop))]):t._e()])}),0)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("a",{attrs:{href:"/",id:"link"}},[this._v("Home")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("Name")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("City")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("District")]),this._v(" "),e("th")])])}]};var b=i("VU/8")(f,v,!1,function(t){i("oTHU")},"data-v-80db9fb2",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello",attrs:{id:"hello"}},[this._m(0),this._v(" "),e("h1",[this._v(this._s(this.msg))]),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"logo"}},[e("img",{attrs:{src:i("SBfr")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{attrs:{id:"links"}},[e("li",[e("a",{attrs:{href:"malls"}},[this._v("\n          Malls\n        ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"shops"}},[this._v("\n          Shops\n        ")])])])}]};var y=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to ShopFinder"}}},_,!1,function(t){i("TCNY")},"data-v-5e9435fe",null).exports;a.a.use(l.a);var F=new l.a({routes:[{path:"/shops",name:"Shops",component:h},{path:"/malls",name:"Malls",component:b},{path:"/",name:"HelloWorld",component:y}],mode:"history"});a.a.config.productionTip=!1,a.a.use(o.a),new a.a({el:"#app",router:F,components:{App:s},template:"<App/>"})},SBfr:function(t,e,i){t.exports=i.p+"static/img/custom_logo_1.7d674bc.png"},TCNY:function(t,e){},l9mM:function(t,e){},oTHU:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.126be647486bc0be3ab3.js.map