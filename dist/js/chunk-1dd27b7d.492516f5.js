(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dd27b7d"],{"7cb4":function(t,e,r){"use strict";r.r(e);var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shoppingCart"},[r("table",[r("caption",[t._v("商品结算")]),t._m(0),t._l(t.books,(function(e){return r("tr",{key:e.id},[r("td",[r("img",{attrs:{src:e.imgUrl}})]),r("td",[r("router-link",{attrs:{to:"/book/"+e.id,target:"_blank"}},[t._v(t._s(e.title))])],1),r("td",[t._v(t._s(t._f("currency")(e.price)))]),r("td",[t._v(" \n          "+t._s(e.quantity)+"\n      ")]),r("td",[t._v(t._s(t._f("currency")(t.cartItemPrice(e.id))))])])}))],2),r("p",[r("button",{staticClass:"pay",on:{click:t.pay}},[t._v("付款")]),r("span",[t._v("总价："+t._s(t._f("currency")(t.cartTotalPrice)))])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th"),r("th",[t._v("商品名称")]),r("th",[t._v("单价")]),r("th",[t._v("数量")]),r("th",[t._v("金额")])])}],a=(r("8e6e"),r("ac6a"),r("456d"),r("ade3")),o=r("2f62");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={name:"Checkout",computed:i(i({},Object(o["e"])("cart",{books:"items"})),Object(o["c"])("cart",["cartTotalPrice","cartItemPrice"])),methods:i(i({},Object(o["d"])("cart",["setCartItems"])),{},{pay:function(){this.setCartItems({items:[]}),this.$msgBox.show({title:"付款成功"})}})},b=u,p=(r("ab80"),r("2877")),l=Object(p["a"])(b,c,n,!1,null,"bfce12ac",null);e["default"]=l.exports},"96c1":function(t,e,r){},ab80:function(t,e,r){"use strict";r("96c1")}}]);
//# sourceMappingURL=chunk-1dd27b7d.492516f5.js.map