/*! For license information please see 613.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[613],{36245:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(23645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".el-table .warning-row{background:oldlace}.el-table .success-row{background:#f0f9eb}.color-item{border-radius:6px;height:20px;width:40px}",""]);const i=o},64613:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),s=new E(n||[]);return i(a,"_invoke",{value:L(t,r,s)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function p(){}function m(){}function v(){}var y={};u(y,s,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==e&&r.call(b,s)&&(y=b);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(i,a,s,c){var l=d(t[i],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return o("throw",t,s,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=C(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function C(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,l,"Generator"),u(w,s,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function i(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}const a={name:"create_update",props:["resID"],data:function(){return{title:"",form:{title:"",value:""},requiredForm:{required:!0,message:"Vui lòng không bỏ trống!",trigger:"blur"}}},mounted:function(){this.resID?(this.title="Cập nhật màu sản phẩm",this.getDetail(this.resID)):(this.title="Thêm mới màu sản phẩm",this.$refs.form.resetFields())},watch:{resID:function(t){t?(this.title="Cập nhật màu sản phẩm",this.getDetail(t)):this.title="Thêm mới màu sản phẩm"}},methods:{submit:function(){var t,e=this,r=this;t=this.resID?"/api/admin/product_color/update/"+this.resID:"/api/admin/product_color/create",this.$refs.form.validate((function(n){if(!n)return!1;axios({method:"post",url:t,data:e.form}).then((function(t){t.data.success?(r.$notify({title:"Success",message:t.data.mess,type:"success"}),r.$emit("success"),r.$refs.form.resetFields()):r.$notify({title:"Error",message:t.data.mess,type:"error"})}))}))},getDetail:function(t){var e,r=this;return(e=o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r,e.next=3,axios({method:"get",url:"/api/admin/product_color/detail/"+t}).then((function(t){var e=t.data;if(e.success){var r=e.data;n.form.title=r.title,n.form.value=r.value}}));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))})()}}};var s=r(51900);const c={components:{formData:(0,s.Z)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_product_color"},[e("div",{staticStyle:{"margin-top":"-30px"}},[e("span",{staticStyle:{"font-size":"13px","font-weight":"bold","text-transform":"uppercase"}},[t._v(t._s(t.title))]),t._v(" "),e("el-divider")],1),t._v(" "),e("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:t.form,"label-width":"120px"}},[e("el-form-item",{attrs:{rules:t.requiredForm,label:"Màu sản phẩm",prop:"title"}},[e("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),e("el-form-item",{attrs:{rules:t.requiredForm,label:"Chọn mã màu",prop:"value"}},[e("el-color-picker",{model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}})],1)],1),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"end"}},[e("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("Lưu lại")]),t._v(" "),e("el-button",{on:{click:function(e){return t.$refs.form.resetFields()}}},[t._v("Reset Form")])],1)],1)}),[],!1,null,"02e76bad",null).exports},data:function(){return{idUpdate:"",outerVisible:!1,loadingTable:!1,tableData:[],slideData:[],textSearch:"",currentPage:1,options:{Total:10,Page:1,PageLimit:10}}},mounted:function(){this.getList()},methods:{success:function(){this.outerVisible=!1,this.getList()},update:function(t){this.idUpdate=t.id,this.outerVisible=!0},handleSizeChange:function(t){this.options.PageLimit=t,this.getList()},handleCurrentChange:function(t){this.options.Page=t,this.getList()},updateStatus:function(t,e){var r=this,n=new FormData;console.log(e,"0"==e?"1":"0"),n.append("hidden","0"==e?"1":"0"),axios({method:"post",url:"/api/admin/product_color/update/"+t,data:n}).then((function(t){t.data.success?(r.$notify({title:"Success",message:t.data.mess,type:"success"}),r.getList()):r.$notify({title:"Error",message:t.data.mess,type:"error"})}))},deleteBanner:function(t){var e=this;axios({method:"post",url:"/api/admin/product_color/delete/"+t}).then((function(t){t.data.success?(e.$notify({title:"Success",message:t.data.mess,type:"success"}),e.getList()):e.$notify({title:"Error",message:t.data.mess,type:"error"})}))},getList:function(){var t=this;t.loadingTable=!0;var e={};this.options.Page&&(e.Page=this.options.Page),this.options.PageLimit&&(e.PageLimit=this.options.PageLimit),this.textSearch&&(e.TextSearch=this.textSearch),axios({method:"get",url:"/api/admin/product_color",params:e}).then((function(e){var r=e.data;r.success&&(t.tableData=r.data,t.options.Total=r.total,t.slideData=r.data.filter((function(t){return 1==t.hidden}))),t.loadingTable=!1}))},changeStatus:function(t){alert(t)},tableRowClassName:function(t){t.row;var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""}}};var l=r(93379),u=r.n(l),f=r(36245),d={insert:"head",singleton:!1};u()(f.Z,d);f.Z.locals;const h=(0,s.Z)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card card-default"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"row",staticStyle:{display:"flex","flex-wrap":"nowrap",padding:"8px","justify-content":"space-between"}},[e("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"Nhập kí tự cần tìm kiếm danh mục"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},scopedSlots:t._u([{key:"append",fn:function(){return[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[e("i",{staticClass:"el-icon-search"}),t._v(" Tìm\n                                        kiếm\n                                    ")])]},proxy:!0}]),model:{value:t.textSearch,callback:function(e){t.textSearch=e},expression:"textSearch"}}),t._v(" "),e("el-button",{staticClass:"ml-2",attrs:{type:"primary"},on:{click:function(e){t.outerVisible=!0,t.idUpdate=""}}},[e("i",{staticClass:"el-icon-plus"}),t._v(" Thêm mới\n                            ")])],1),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingTable,expression:"loadingTable"}],staticStyle:{width:"100%"},attrs:{"empty-text":"Chưa có dữ liệu !",data:t.tableData,border:"",resizable:!0,"row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{prop:"title",label:"COLOR",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"COLOR VALUE"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{staticClass:"color-item",style:{"background-color":t.row.value}})]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"value",label:"COLOR CODE"}}),t._v(" "),e("el-table-column",{attrs:{prop:"created_at",label:"NGÀY TẠO",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                    "+t._s(t._f("formatDate")(e.row.created_at))+"\n                                ")]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"THAO TÁC",width:"180"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.update(r.row)}}},[t._v("Cập\n                                        nhật\n                                    ")]),t._v(" "),e("el-popconfirm",{attrs:{"confirm-button-text":"Xóa","cancel-button-text":"Không",title:"Bạn có chắc chắn muốn xóa hình ảnh này ?"},on:{confirm:function(){return t.deleteBanner(r.row.id)}}},[e("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},slot:"reference"},[e("i",{staticClass:"el-icon-delete"}),t._v(" Xóa\n                                        ")])],1)]}}])}),t._v(" "),e("template",{slot:"empty"},[e("el-empty",{attrs:{description:"No data"}})],1)],2)],1),t._v(" "),e("div",{staticClass:"block",staticStyle:{"margin-left":"0px","margin-right":"8px",padding:"10px",width:"100%"}},[e("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":t.options.PageLimit,layout:"total, sizes, prev, pager, next, jumper",total:t.options.Total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])]),t._v(" "),e("div",{staticClass:"card-footer"})])]),t._v(" "),e("el-dialog",{attrs:{visible:t.outerVisible},on:{"update:visible":function(e){t.outerVisible=e}}},[e("formData",{attrs:{resID:t.idUpdate},on:{success:t.success}})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(0,0,0,0.1)"}},[e("h3",{staticClass:"card-title"},[t._v("DANH SÁCH MÀU SẢN PHẨM")]),t._v(" "),e("div",{staticClass:"card-tools"},[e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse"}},[e("i",{staticClass:"fas fa-minus"})])])])}],!1,null,null,null).exports}}]);