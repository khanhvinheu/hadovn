"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[154],{9970:(t,a,e)=>{e.d(a,{Z:()=>n});var i=e(3645),s=e.n(i)()((function(t){return t[1]}));s.push([t.id,".cart-item[data-v-ce1b8f3c]{display:flex;flex-flow:row wrap;padding:0;position:relative}.cart-item__remove[data-v-ce1b8f3c]{cursor:pointer;position:absolute;right:0;top:0;transition:all .2s;z-index:3}.cart-item__title[data-v-ce1b8f3c]{display:block;font-size:.9rem;font-weight:700;max-width:85%}.pricing-info__item[data-v-ce1b8f3c]{display:flex;justify-content:space-between}.cart-item__thumbnail[data-v-ce1b8f3c]{border-radius:20px}.cart-item__thumbnail-block[data-v-ce1b8f3c]{position:relative;width:126px}.payment-method__item[data-v-ce1b8f3c]{align-items:center;border:1px solid #d9d9d9;border-radius:16px;cursor:pointer;display:flex;opacity:.6;padding:15px 20px;transition:all .2s}.payment-method__item-icon-wrapper img[data-v-ce1b8f3c]{max-height:35px;max-width:55px;min-width:35px}.payment-method__item.active[data-v-ce1b8f3c],.payment-method__item[data-v-ce1b8f3c]:not(.disabled):hover{border:1px solid #2f5acf;opacity:1}.checkout-btn[data-v-ce1b8f3c]{background-color:#000;border:none;border-radius:16px;color:#fff;cursor:pointer;height:55px;padding:15px 20px;text-align:center;transition:all .2s;width:100%}.payment-method__item[data-v-ce1b8f3c]:not(:last-child){margin-bottom:1rem}.cart-item__block[data-v-ce1b8f3c]{display:flex;flex-flow:row;flex-wrap:wrap;height:100%}.cart-item__select .vs__dropdown-toggle[data-v-ce1b8f3c]{border:1px solid #000!important;border-radius:8px!important;display:inline-flex!important;height:30px!important;margin-bottom:5px!important;padding:3px 6px!important}.cart-item__actions[data-v-ce1b8f3c]{display:flex;flex-flow:column;flex-wrap:wrap;margin-top:auto;width:100%}.cart-item__variant[data-v-ce1b8f3c]{font-size:.8rem}.cart-item__info[data-v-ce1b8f3c]{width:100%}.cart-item__actions-bottom[data-v-ce1b8f3c]{align-items:center;display:flex;justify-content:space-between;text-align:right}.cart__column-right[data-v-ce1b8f3c]{flex:3;margin-left:1.5rem}.cart-left-section[data-v-ce1b8f3c]{border-right:1px solid #d9d9d9}.payment-method__item-icon-wrapper[data-v-ce1b8f3c]{margin:0 1.5rem}",""]);const n=s},8154:(t,a,e)=>{e.r(a),e.d(a,{default:()=>_});var i=e(629);function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function n(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){c(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function c(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}const l={name:"ShoppingCart",data:function(){return{num:1}},computed:n(n(n({},(0,i.rn)(["cart"])),(0,i.Se)(["cartSize","cartTotalAmount"])),{},{tempTotalPrice:function(){var t=0;return this.$store.getters.shoppingCart.cart.map((function(a){t+=a.payment.total*a.payment.price})),t},TotalPrice:function(){var t=0;return this.$store.getters.shoppingCart.cart.map((function(a){t+=a.payment.total*a.payment.price})),t}})};var o=e(3379),r=e.n(o),m=e(9970),p={insert:"head",singleton:!1};r()(m.Z,p);m.Z.locals;const _=(0,e(1900).Z)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"site-content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"grid"},[e("div",{staticClass:"grid__column seven-twelfths mobile--one-whole cart-left-section"},[e("div",{staticClass:"cart-section"},[t._m(0),t._v(" "),e("div",{attrs:{id:"customer-info-block",customerinfo:"[object Object]"}},[e("div",{staticClass:"grid"},[e("div",{staticClass:"grid__column six-twelfths"},[e("el-input",{attrs:{placeholder:"Họ và tên"}})],1),t._v(" "),e("div",{staticClass:"grid__column six-twelfths"},[e("el-input",{attrs:{placeholder:"Số điện thoại"}})],1)]),t._v(" "),e("div",{staticClass:"grid"},[e("div",{staticClass:"grid__column"},[e("el-input",{attrs:{placeholder:"Email"}})],1),t._v(" "),e("div",{staticClass:"grid__column"},[e("div",{staticClass:"address-block"},[e("el-input",{attrs:{placeholder:"Địa chỉ (ví dụ: 103 Vạn Phúc, phường Vạn Phúc)"}})],1)])]),t._v(" "),e("div",{staticClass:"grid"},[e("div",{staticClass:"grid__column four-twelfths mobile--one-whole"},[e("div",{staticClass:"v-select vue-select vs--single vs--searchable",attrs:{dir:"auto",name:"nhanh_city"}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Chọn Tỉnh/ Thành Phố"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),e("div",{staticClass:"grid__column four-twelfths mobile--one-whole"},[e("div",{staticClass:"v-select vue-select vs--single vs--searchable",attrs:{dir:"auto",name:"nhanh_district"}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Chọn Quận / Huyện"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),e("div",{staticClass:"grid__column four-twelfths mobile--one-whole"},[e("div",{staticClass:"v-select vue-select vs--single vs--searchable",attrs:{dir:"auto",name:"nhanh_ward",id:"nhanh_ward"}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Chọn Phường/ Xã"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)])]),t._v(" "),e("div",{staticClass:"grid"},[e("div",{staticClass:"grid__column"},[e("el-input",{attrs:{placeholder:"Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"}})],1)])])]),t._v(" "),t._m(1),t._v(" "),e("input",{attrs:{type:"hidden",id:"gclid_field",name:"gclid_field",value:""}}),t._v(" "),e("div",{staticClass:"cart-section"},[e("button",{staticClass:"checkout-btn"},[t._v("\n                            Thanh toán "),e("span",[t._v(t._s(t._f("toThousandFilter")(t.TotalPrice)))]),t._v(" "),e("span",[t._v("(COD)")])])])]),t._v(" "),e("div",{staticClass:"grid__column five-twelfths mobile--one-whole"},[e("div",{staticClass:"cart-section"},[e("div",{staticClass:"title"},[t._v("\n                            Giỏ hàng\n                        ")]),t._v(" "),e("div",[t._m(2),t._v(" "),e("div",{staticClass:"cart-items"},t._l(t.$store.getters.shoppingCart.cart,(function(a){return e("div",{staticClass:"cart-item",staticStyle:{"margin-bottom":"10px"}},[e("span",{staticClass:"cart-item__remove"},[t._v("✕")]),t._v(" "),e("div",{staticClass:"cart__column cart__column-left"},[e("div",{staticClass:"cart-item__thumbnail-block"},[e("img",{staticClass:"cart-item__thumbnail",attrs:{src:a.images_product[0].path,alt:a.name}})])]),t._v(" "),e("div",{staticClass:"cart__column cart__column-right"},[e("div",{staticClass:"cart-item__block"},[e("div",{staticClass:"cart-item__info"},[e("a",{staticClass:"cart-item__title",attrs:{target:"_blank"}},[t._v("\n                                                "+t._s(a.name)+"\n                                            ")]),t._v(" "),e("div",{staticClass:"cart-item__variant"},[t._v("\n                                                   "+t._s(a.payment.color.title)+" / "+t._s(a.payment.size.title)+"\n                                                ")])]),t._v(" "),e("div",{staticClass:"cart-item__actions"},[e("div",{staticStyle:{display:"flex"}},[e("div",{staticClass:"v-select vue-select cart-item__select vs--single vs--unsearchable",staticStyle:{"padding-right":"5px","padding-bottom":"5px"}},[t._v("\n                                                           "+t._s(a.payment.price)+" x "+t._s(a.payment.total)+"\n")])]),t._v(" "),e("div",{staticClass:"cart-item__actions-bottom"},[e("div",{staticClass:"quantity-box"},[e("el-input-number",{attrs:{size:"small",value:a.payment.total,min:1,max:10}})],1),t._v(" "),e("div",{staticClass:"flex flex--column"},[e("span",[t._v("\n                                                            "+t._s(t._f("toThousandFilter")(a.payment.price*a.payment.total))+"đ\n                                                        ")])])])])])])])})),0)])]),t._v(" "),e("el-divider"),t._v(" "),e("div",{staticClass:"pricing-info"},[e("div",{staticClass:"pricing-info__item"},[e("p",[t._v("Tạm tính")]),t._v(" "),e("p",{staticClass:"pricing-info__sub"},[e("span",[t._v(t._s(t._f("toThousandFilter")(t.tempTotalPrice))+"đ")])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("el-divider"),t._v(" "),e("div",{staticClass:"pricing-info__item pricing-info__total"},[e("p",[t._v("\n                                Tổng")]),t._v(" "),e("p",{},[e("span",[t._v(t._s(t._f("toThousandFilter")(t.TotalPrice))+"đ")])])])],1)],1)])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-with-actions"},[e("div",{staticClass:"title"},[t._v("\n                                Thông tin vận chuyển\n                            ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cart-section"},[e("div",{staticClass:"title"},[t._v("\n                            Hình thức thanh toán\n                        ")]),t._v(" "),e("div",[e("form",[e("label",{staticClass:"payment-method__item active",attrs:{for:"payment-COD"}},[e("span",{staticClass:"payment-method__item-custom-checkbox custom-radio"},[e("input",{attrs:{type:"radio",id:"payment-COD",name:"payment-method",autocomplete:"off",value:"COD"}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("span",{staticClass:"payment-method__item-icon-wrapper"},[e("img",{attrs:{src:"/img/COD.svg",alt:"COD <br>Thanh toán khi nhận hàng"}})]),t._v(" "),e("span",{staticClass:"payment-method__item-name"},[t._v("COD "),e("br"),t._v("Thanh toán khi nhận\n                                        hàng")])]),e("label",{staticClass:"payment-method__item",attrs:{for:"payment-momo"}},[e("span",{staticClass:"payment-method__item-custom-checkbox custom-radio"},[e("input",{attrs:{type:"radio",id:"payment-momo",name:"payment-method",autocomplete:"off",value:"momo"}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("span",{staticClass:"payment-method__item-icon-wrapper"},[e("img",{attrs:{src:"https://www.coolmate.me/images/momo-icon.png",alt:"Thanh Toán MoMo"}})]),t._v(" "),e("span",{staticClass:"payment-method__item-name"},[t._v("Thanh Toán MoMo")])]),e("label",{staticClass:"payment-method__item",attrs:{for:"payment-zalopay"}},[e("span",{staticClass:"payment-method__item-custom-checkbox custom-radio"},[e("input",{attrs:{type:"radio",id:"payment-zalopay",name:"payment-method",autocomplete:"off",value:"zalopay"}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("span",{staticClass:"payment-method__item-icon-wrapper"},[e("img",{attrs:{src:"https://www.coolmate.me/images/logo-zalopay.svg",alt:"Ví điện tử ZaloPay"}})]),t._v(" "),e("span",{staticClass:"payment-method__item-name"},[t._v("Ví điện tử ZaloPay")])]),e("label",{staticClass:"payment-method__item",attrs:{for:"payment-shopeepay"}},[e("span",{staticClass:"payment-method__item-custom-checkbox custom-radio"},[e("input",{attrs:{type:"radio",id:"payment-shopeepay",name:"payment-method",autocomplete:"off",value:"shopeepay"}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("span",{staticClass:"payment-method__item-icon-wrapper"},[e("img",{attrs:{src:"https://mcdn.coolmate.me/image/September2021/195dbf69c0ac36f26fbd_(1).png",alt:"Ví ShopeePay <br><i>Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán bằng ShopeePay</i>"}})]),t._v(" "),e("span",{staticClass:"payment-method__item-name"},[t._v("Ví ShopeePay "),e("br"),e("i",[t._v("Giảm thêm 50k cho khách\n                                            hàng lần đầu mở ví và thanh toán bằng ShopeePay")])])]),e("label",{staticClass:"payment-method__item",attrs:{for:"payment-vnpay"}},[e("span",{staticClass:"payment-method__item-custom-checkbox custom-radio"},[e("input",{attrs:{type:"radio",id:"payment-vnpay",name:"payment-method",autocomplete:"off",value:"vnpay"}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("span",{staticClass:"payment-method__item-icon-wrapper"},[e("img",{attrs:{src:"https://www.coolmate.me/images/vnpay.png",alt:"Thẻ ATM / Internet Banking<br>Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)<br>VNPay QR"}})]),t._v(" "),e("span",{staticClass:"payment-method__item-name"},[t._v("Thẻ ATM / Internet Banking"),e("br"),t._v("Thẻ tín dụng\n                                        (Credit card) / Thẻ ghi nợ (Debit card)"),e("br"),t._v("VNPay QR")])]),e("label",{staticClass:"payment-method__item",attrs:{for:"payment-9pay"}},[e("span",{staticClass:"payment-method__item-custom-checkbox custom-radio"},[e("input",{attrs:{type:"radio",id:"payment-9pay",name:"payment-method",autocomplete:"off",value:"9pay"}}),t._v(" "),e("span",{staticClass:"checkmark"})]),t._v(" "),e("span",{staticClass:"payment-method__item-icon-wrapper"},[e("img",{attrs:{src:"https://mcdn.coolmate.me/uploads/May2022/9pay.svg",alt:"Ví điện tử 9Pay"}})]),t._v(" "),e("span",{staticClass:"payment-method__item-name"},[t._v("Ví điện tử 9Pay")])])])]),t._v(" "),e("p",{staticClass:"cart-return-text"},[t._v("\n                            Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm.\n                            Tìm hiểu thêm "),e("a",{attrs:{href:"#",target:"_blank"}},[e("b",[t._v("tại đây")])]),t._v(".\n                        ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dummy-cart-items",staticStyle:{display:"none"}},[e("div",{staticClass:"grid dummy-cart-item"},[e("div",{staticClass:"grid__column four-twelfths flex"},[e("div",{staticClass:"dummy-cart-item__thumbnail-block"},[e("div",{staticClass:"dummy-cart-item__thumbnail"}),t._v(" "),e("span",{staticClass:"dummy-cart-item__thumbnail-quantity"})])]),t._v(" "),e("div",{staticClass:"grid__column eight-twelfths"},[e("div",{staticClass:"dummy-cart-item__block"},[e("div",{staticClass:"dummy-cart-item__info"},[e("div",{staticClass:"dummy-cart-item__title"}),t._v(" "),e("div",{staticClass:"dummy-cart-item__variant"})]),t._v(" "),e("div",{staticClass:"dummy-cart-item__actions"},[e("div",{staticClass:"dummy-cart-item__price"})])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pricing-info__item"},[e("p",[t._v("Giảm giá")]),t._v(" "),e("p",{},[e("span",[t._v("0đ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pricing-info__item"},[e("p",[t._v("Phí giao hàng")]),t._v(" "),e("p",{},[e("span",[t._v("Miễn phí")])])])}],!1,null,"ce1b8f3c",null).exports}}]);