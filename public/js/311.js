"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[311],{525:(t,e,i)=>{i.d(e,{Z:()=>d});var a=i(538),o=i(9669),s=i.n(o),n=i(2346),r=i(9755),l=i.n(r),c={init:function(){a.default.use(n.Z,s()),a.default.axios.defaults.baseURL="http://127.0.0.1:9999/"},setHeader:function(){var t=AuthService.getToken();t&&(a.default.axios.defaults.headers.common.Authorization="Bearer ".concat(t)),l().ajaxSetup({headers:{"X-CSRF-TOKEN":l()('meta[name="csrf-token"]').attr("content"),Authorization:"Bearer ".concat(t)}})},query:function(t,e){return a.default.axios.get(t,e).catch((function(t){throw t&&t.response&&401===t.response.status&&c.sessionExpire(),new Error("[RWV] ApiService ".concat(t))}))},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a.default.axios.get("".concat(t,"/").concat(e)).catch((function(t){throw t&&t.response&&401===t.response.status&&c.sessionExpire(),new Error("[RWV] ApiService ".concat(t))}))},post:function(t,e){return a.default.axios.post("".concat(t),e).catch((function(t){throw t&&t.response&&401===t.response.status&&c.sessionExpire(),new Error("[RWV] ApiService ".concat(t))}))},update:function(t,e,i){return a.default.axios.put("".concat(t,"/").concat(e),i).catch((function(t){throw t&&t.response&&401===t.response.status&&c.sessionExpire(),new Error("[RWV] ApiService ".concat(t))}))},put:function(t,e){return a.default.axios.put("".concat(t),e).catch((function(t){throw t&&t.response&&401===t.response.status&&c.sessionExpire(),new Error("[RWV] ApiService ".concat(t))}))},delete:function(t){return a.default.axios.delete(t).catch((function(t){throw t&&t.response&&401===t.response.status&&c.sessionExpire(),new Error("[RWV] ApiService ".concat(t))}))}};const d=c},43:(t,e,i)=>{i.d(e,{Z:()=>s});var a=i(3645),o=i.n(a)()((function(t){return t[1]}));o.push([t.id,".custorm-upload .el-upload--picture-card{height:unset;line-height:10px;padding:25px;width:120px}.custorm-upload .el-upload-list--picture-card .el-upload-list__item{height:120px;width:120px}",""]);const s=o},2347:(t,e,i)=>{i.d(e,{Z:()=>s});var a=i(3645),o=i.n(a)()((function(t){return t[1]}));o.push([t.id,".custom-tree-node{align-items:center;display:flex;flex:1;font-size:14px;justify-content:space-between;padding-right:8px}",""]);const s=o},2311:(t,e,i)=>{i.r(e),i.d(e,{default:()=>y});var a=i(7757),o=i.n(a),s=i(525);function n(t,e,i,a,o,s,n){try{var r=t[s](n),l=r.value}catch(t){return void i(t)}r.done?e(l):Promise.resolve(l).then(a,o)}function r(t){return function(){var e=this,i=arguments;return new Promise((function(a,o){var s=t.apply(e,i);function r(t){n(s,a,o,r,l,"next",t)}function l(t){n(s,a,o,r,l,"throw",t)}r(void 0)}))}}const l={watch:{filterDataCategorys:function(t){this.$refs.tree.filter(t)}},data:function(){return{filterDataCategorys:"",data:[],categoryActive:"",loading:!0,listCate:[]}},mounted:function(){this.getList()},methods:{getParent:function(t){var e=this;return r(o().mark((function i(){var a;return o().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=e,i.next=3,s.Z.query("/api/admin/categorys/getParent/"+t).then((function(t){var e=t.data;e.success&&(a.listCate=e.data)}));case 3:case"end":return i.stop()}}),i)})))()},selectCategory:function(t){var e=this;return r(o().mark((function i(){return o().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e.categoryActive=t,e.listCate=[],i.next=4,e.getParent(t.id);case 4:case"end":return i.stop()}}),i)})))()},filterNode:function(t,e){return!t||-1!==e.title.indexOf(t)},getList:function(){var t=this;t.loading=!0,s.Z.query("/api/admin/categorys",{params:{type:"treeData"}}).then((function(e){var i=e.data;t.data=i.data,t.loading=!1}))},submitData:function(){this.$emit("saveData",this.categoryActive.id)}},computed:{titleCaterogy:function(){return this.listCate.join(" -> ")}}};var c=i(3379),d=i.n(c),u=i(2347),p={insert:"head",singleton:!1};d()(u.Z,p);u.Z.locals;var f=i(1900);function m(t,e,i,a,o,s,n){try{var r=t[s](n),l=r.value}catch(t){return void i(t)}r.done?e(l):Promise.resolve(l).then(a,o)}const v={components:{treeDataCategory:(0,f.Z)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"row",staticStyle:{display:"flex","flex-wrap":"nowrap"}},[i("el-input",{attrs:{placeholder:"Nhập kí tự cần tìm kiếm danh mục"},model:{value:t.filterDataCategorys,callback:function(e){t.filterDataCategorys=e},expression:"filterDataCategorys"}})],1),t._v(" "),i("el-divider"),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{display:"flex","justify-content":"center"}},[i("i",{staticClass:"el-icon-loading",staticStyle:{"font-size":"40px"}})]),t._v(" "),i("el-tree",{directives:[{name:"show",rawName:"v-show",value:t.data&&!t.loading,expression:"data && !loading"}],ref:"tree",attrs:{"empty-text":"Không tìm thấy !","filter-node-method":t.filterNode,data:t.data,"show-checkbox":!1,"node-key":"id","default-expand-all":"","check-on-click-node":!0,"expand-on-click-node":!1},on:{"node-click":t.selectCategory},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var a=e.data;return i("span",{staticClass:"custom-tree-node"},[i("span",[t._v(t._s(a.title))]),t._v(" "),i("span",[i("span",{directives:[{name:"show",rawName:"v-show",value:a.id==t.categoryActive.id,expression:"data.id == categoryActive.id"}]},[i("i",{staticClass:"el-icon-circle-check",staticStyle:{color:"#67c23a","font-size":"20px","font-weight":"bold"}})])])])}}])}),t._v(" "),i("el-divider"),t._v(" "),i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.categoryActive,expression:"categoryActive"}]},[i("i",{staticClass:"el-icon-check"}),t._v(" Đã chọn: "),i("span",{staticStyle:{"font-weight":"bold","font-size":"15px"}},[t._v(t._s(this.titleCaterogy))])])]),t._v(" "),i("div",[i("el-button",{on:{click:function(e){return t.getList()}}},[i("i",{staticClass:"el-icon-refresh"}),t._v(" Reload")]),t._v(" "),i("el-button",{attrs:{type:"success"},on:{click:function(e){return t.submitData()}}},[i("i",{staticClass:"el-icon-document-checked"}),t._v(" Lưu lại")])],1)])],1)])}),[],!1,null,null,null).exports},data:function(){return{loadingForm:!1,required:{required:!0,message:"Vui lòng không bỏ trống",trigger:"blur"},requiredChange:{required:!0,message:"Vui lòng không bỏ trống",trigger:"change"},listTitleCategory:"",form:{name:"",id_category:"",description:"",trade_mark:"",option:[{key:Date.now(),id_color:"",id_size:"",total:"",price:""}]},formData:new FormData,dialogVisible:!1,dialogImageUrl:"",limitImg:6,fileList:[],listCategory:[],dialogSelectCategory:!1,isUpdate:!1,listColor:[],listSize:[]}},mounted:function(){this.getCategory(),this.getListColor(),this.getListSize(),this.$route.params.id?(this.isUpdate=!0,this.getDetailProduct()):this.isUpdate=!1},methods:{getListColor:function(){var t=this;s.Z.query("/api/admin/product_color").then((function(e){var i=e.data;i.success&&(t.listColor=i.data)}))},getListSize:function(){var t=this;s.Z.query("/api/admin/product_size").then((function(e){var i=e.data;i.success&&(t.listSize=i.data)}))},getDetailProduct:function(){var t=this;this.loadingForm=!0,s.Z.query("/api/admin/products/"+this.$route.params.id).then((function(e){var i=e.data;if(i.success){var a=i.data;t.form.name=a.name,t.form.id_category=a.id_category,t.getParent(a.id_category),t.form.trade_mark=a.trade_mark,t.form.description=a.description,t.form.option=a.options_product,t.form.option.map((function(t,e){t.id_color=[t.id_color],t.id_size=[t.id_size]})),a.images_product.forEach((function(e){t.fileList.push({url:"/"+e.path})}))}t.loadingForm=!1})),console.log(this.form)},appendToFormData:function(){var t=this,e=this;Object.keys(this.form).forEach((function(i){"option"!==i?e.formData.set(i,t.form[i]):t.formData.set("option",JSON.stringify(t.form[i]))}))},appendFileToFormData:function(){var t=this;this.fileList.map((function(e,i){t.formData.set("file"+i,e.raw)}))},submitData:function(){var t=this;t.appendToFormData(),t.appendFileToFormData(),this.$refs.form.validate((function(e){if(!e)return!1;s.Z.post("/api/admin/products/create",t.formData).then((function(e){var i=e.data;i.success?(t.$notify({title:"Success",message:i.mess,type:"success"}),t.$router.push({name:"ProductList"})):t.$notify({title:"Error",message:i.mess,type:"error"})}))}))},resetForm:function(t){this.$refs[t].resetFields(),this.listTitleCategory=""},selectCategory:function(){this.dialogSelectCategory=!0},saveCategory:function(t){this.form.id_category=t,t&&this.getParent(t),this.dialogSelectCategory=!1},getParent:function(t){var e,i=this;return(e=o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i,e.next=3,s.Z.query("/api/admin/categorys/getParent/"+t).then((function(t){var e=t.data;e.success&&(a.listTitleCategory=e.data)}));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(a,o){var s=e.apply(t,i);function n(t){m(s,a,o,n,r,"next",t)}function r(t){m(s,a,o,n,r,"throw",t)}n(void 0)}))})()},submit:function(){console.log(this.form)},getCategory:function(){var t=this;s.Z.query("/api/admin/categorys",{params:{type:"data"}}).then((function(e){var i=e.data;t.listCategory=i.data}))},removeOption:function(t){if(this.form.option.length>1){var e=this.form.option.indexOf(t);-1!==e&&this.form.option.splice(e,1)}},addOption:function(){this.form.option.push({key:Date.now(),id_color:"",id_size:"",total:"",price:""})},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleUploadChange:function(t){-1==this.fileList.findIndex((function(e){return e.uid==t.uid}))&&this.fileList.push(t)},messLimit:function(){this.$notify({title:"Error",message:"Không upload số lượng ảnh vượt quá mức cho phép",type:"error"})},removeImg:function(t){this.fileList=this.fileList.filter((function(e){return e.uid!=t.uid})),console.log(t.uid),s.Z.post("/api/admin/removeFile",{path:t.response})}}};var h=i(43),g={insert:"head",singleton:!1};d()(h.Z,g);h.Z.locals;const y=(0,f.Z)(v,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"FormProduct"},[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingForm,expression:"loadingForm"}],ref:"form",staticClass:"demo-ruleForm",attrs:{"label-position":"right",model:t.form}},[i("div",{staticClass:"elevation-1",staticStyle:{padding:"14px","background-color":"#ffffff"}},[i("span",{staticStyle:{"font-size":"15px","font-weight":"bold"}},[t._v("Thông tin cơ bản")]),t._v(" "),i("el-divider"),t._v(" "),i("el-form-item",{attrs:{"label-width":"180px",label:"Hình ảnh sản phẩm"}},[i("div",{staticClass:"form-group"},[i("el-upload",{ref:"upload",staticClass:"custorm-upload",attrs:{"auto-upload":!1,accept:"image/png, image/jpeg",action:"/api/admin/upload","list-type":"picture-card","on-change":t.handleUploadChange,"on-remove":t.removeImg,multiple:"",limit:t.limitImg,"on-exceed":t.messLimit,"file-list":t.fileList},scopedSlots:t._u([{key:"file",fn:function(e){var a=e.file;return i("div",{},[i("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:a.url,alt:""}}),t._v(" "),i("span",{staticClass:"el-upload-list__item-actions"},[i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(e){return t.removeImg(a)}}},[i("i",{staticClass:"el-icon-delete"})]),t._v(" "),i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){return t.handlePictureCardPreview(a)}}},[i("i",{staticClass:"el-icon-zoom-in"})])]),t._v(" "),t.fileList.length&&t.fileList[0].uid==a.uid?i("div",{staticStyle:{"background-color":"rgba(139,145,147,0.66)",color:"#fff",position:"absolute",bottom:"0",width:"100%","text-align":"center"}},[t._v("Ảnh bìa")]):t._e()])}}])},[t._v(" "),i("div",{staticStyle:{"text-align":"center","line-height":"20px",display:"flex","align-items":"center","flex-direction":"column"}},[i("i",{staticClass:"el-icon-picture-outline",attrs:{color:"red"}}),t._v(" "),i("span",{staticStyle:{"font-size":"10px"}},[t._v("Thêm hình ảnh "+t._s(t.fileList.length)+"/"+t._s(t.limitImg))])])]),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)]),t._v(" "),i("el-form-item",{attrs:{"label-width":"180px","inline-message":!0,rules:t.required,label:"Tên sản phẩm",prop:"name"}},[i("div",{staticClass:"form-group"},[i("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)]),t._v(" "),i("el-form-item",{attrs:{"label-width":"180px","inline-message":!0,label:"Danh mục sản phẩm",prop:"id_category",rules:t.requiredChange}},[i("el-input",{staticStyle:{display:"none"},model:{value:t.form.id_category,callback:function(e){t.$set(t.form,"id_category",e)},expression:"form.id_category"}}),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.listTitleCategory,expression:"!listTitleCategory"}],staticStyle:{border:"1px dotted",color:"orange"},on:{click:function(e){return t.selectCategory()}}},[i("i",{staticClass:"el-icon-edit"}),t._v(" Chọn danh mục sản phẩm\n                    ")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.listTitleCategory,expression:"listTitleCategory"}],staticStyle:{border:"1px dotted rgb(0,0,0,0.2)",padding:"5px","border-radius":"5px"}},[i("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.listTitleCategory&&t.listTitleCategory.join(" -> ")))]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.listTitleCategory,expression:"listTitleCategory"}],staticStyle:{color:"orange"},attrs:{type:"text"},on:{click:function(e){return t.selectCategory()}}},[i("i",{staticClass:"el-icon-edit"})])],1),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogSelectCategory},on:{"update:visible":function(e){t.dialogSelectCategory=e}}},[i("treeDataCategory",{on:{saveData:function(e){return t.saveCategory(e)}}})],1)],1),t._v(" "),i("el-form-item",{attrs:{"label-width":"180px",label:"Thương hiệu",prop:"trade_mark"}},[i("div",{staticClass:"form-group"},[i("el-input",{model:{value:t.form.trade_mark,callback:function(e){t.$set(t.form,"trade_mark",e)},expression:"form.trade_mark"}})],1)]),t._v(" "),i("el-form-item",{attrs:{"label-width":"180px",label:"Mô tả sản phẩm",prop:"description"}},[i("div",{staticClass:"form-group"},[i("el-input",{attrs:{"show-word-limit":"",maxlength:"20",type:"textarea",autosize:{minRows:4,maxRows:4}},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)])],1),t._v(" "),i("div",{staticClass:"elevation-1 mt-2",staticStyle:{padding:"14px","background-color":"#ffffff"}},[i("span",{staticStyle:{"font-size":"15px","font-weight":"bold"}},[t._v("Thông tin chi tiết")]),t._v(" "),i("el-divider"),t._v(" "),i("el-form-item",{attrs:{"label-width":"180px",label:"Phân loại sản phẩm"}},[t._l(t.form.option,(function(e,a){return i("div",{key:a,staticClass:"row",staticStyle:{"background-color":"#f6f6f6"}},[i("div",{staticClass:"col-3 mt-2 "},[i("el-form-item",{attrs:{"inline-message":!0,"label-width":"auto",rules:t.requiredChange,prop:"option."+a+".id_color"}},[i("div",{staticClass:"display:flex; flex-wrap:nowrap"},[i("el-descriptions",{attrs:{column:3,border:""}},[i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user"}),t._v("\n                                                Màu\n                                            ")]),t._v(" "),i("el-select",{attrs:{multiple:"","multiple-limit":1,placeholder:"ví dụ: Đỏ, xanh, vàng,..."},model:{value:e.id_color,callback:function(i){t.$set(e,"id_color",i)},expression:"item['id_color']"}},t._l(t.listColor,(function(t){return i("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],2)],1)],1)])],1),t._v(" "),i("div",{staticClass:"col-3 mt-2"},[i("el-form-item",{attrs:{"inline-message":!0,"label-width":"auto",rules:t.required,prop:"option."+a+".id_size"}},[i("div",{staticClass:"display:flex; flex-wrap:nowrap"},[i("el-descriptions",{attrs:{column:2,border:""}},[i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user"}),t._v("\n                                                Size\n                                            ")]),t._v(" "),i("el-select",{attrs:{multiple:"","multiple-limit":1,placeholder:"ví dụ: X, M, L, XL,..."},model:{value:e.id_size,callback:function(i){t.$set(e,"id_size",i)},expression:"item['id_size']"}},t._l(t.listSize,(function(t){return i("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],2)],1)],1)])],1),t._v(" "),i("div",{staticClass:"col-3 mt-2 "},[i("el-form-item",{attrs:{"inline-message":!0,"label-width":"auto",rules:t.required,prop:"option."+a+".total"}},[i("div",{staticClass:"display:flex; flex-wrap:nowrap"},[i("el-descriptions",{attrs:{column:3,border:""}},[i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user"}),t._v("\n                                                Total\n                                            ")]),t._v(" "),i("el-input",{attrs:{type:"number"},model:{value:e.total,callback:function(i){t.$set(e,"total",i)},expression:"item['total']"}})],2)],1)],1)])],1),t._v(" "),i("div",{staticClass:"col-3 mt-2 "},[i("el-form-item",{attrs:{"inline-message":!0,"label-width":"auto",rules:t.required,prop:"option."+a+".price"}},[i("div",{staticClass:"display:flex; flex-wrap:nowrap"},[i("el-descriptions",{attrs:{column:3,border:""}},[i("el-descriptions-item",[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-user"}),t._v("\n                                                Price\n                                            ")]),t._v(" "),i("el-input",{attrs:{type:"number"},model:{value:e.price,callback:function(i){t.$set(e,"price",i)},expression:"item['price']"}})],2),t._v(" "),i("el-descriptions-item",[i("el-button",{staticStyle:{padding:"10px",cursor:"pointer"},attrs:{type:"text"},on:{click:function(i){return t.removeOption(e)}}},[i("i",{staticClass:"el-icon-delete"})])],1)],1)],1)])],1)])})),t._v(" "),i("el-button",{staticClass:"mt-3",staticStyle:{border:"1px dotted",color:"orange"},on:{click:function(e){return t.addOption()}}},[i("i",{staticClass:"el-icon-plus"}),t._v(" Thêm nhóm phân loại\n                    ")])],2)],1),t._v(" "),i("div",{staticClass:"elevation-1 mt-2",staticStyle:{padding:"14px","background-color":"#ffffff",display:"flex","justify-content":"end"}},[i("el-button",{attrs:{type:"success"},on:{click:function(e){return t.submitData()}}},[i("i",{staticClass:"el-icon-document-checked"}),t._v(" Lưu lại")]),t._v(" "),i("el-button",{on:{click:function(e){return t.resetForm("form")}}},[i("i",{staticClass:"el-icon-refresh"}),t._v(" Reset Form")]),t._v(" "),i("el-button",{on:{click:function(e){return t.$router.push({name:"ProductList"})}}},[i("i",{staticClass:"el-icon-close"}),t._v(" Đóng")])],1)])],1)}),[],!1,null,null,null).exports}}]);