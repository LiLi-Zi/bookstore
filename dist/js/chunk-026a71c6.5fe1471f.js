(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-026a71c6"],{2781:function(t,n,e){},3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},6245:function(t,n,e){"use strict";e("2781")},6318:function(t,n,e){},"6b54":function(t,n,e){"use strict";e("3846");var o=e("cb7c"),a=e("0bfb"),r=e("9e1e"),i="toString",c=/./[i],u=function(t){e("2aba")(RegExp.prototype,i,t,!0)};e("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?u((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?a.call(t):void 0)})):c.name!=i&&u((function(){return c.call(this)}))},"8bf3":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"book"},[e("img",{attrs:{src:t.book.bigImgUrl}}),e("div",[e("div",{staticClass:"bookInfo"},[e("h3",[t._v(t._s(t.book.title))]),e("p",[t._v(t._s(t.book.slogan))]),e("p",[e("span",[t._v("作者："+t._s(t.book.author))]),e("span",[t._v("出版社："+t._s(t.book.bookConcern))]),e("span",[t._v("出版日期："+t._s(t.book.publishDate))])]),e("p",[e("span",{staticClass:"factPrice"},[t._v("\n                  "+t._s(t._f("currency")(t._f("factPrice")(t.book.price,t.book.discount)))+"\n              ")]),e("span",{staticClass:"discount"},[t._v(t._s(t._f("formatDiscount")(t.book.discount)))]),e("span",[t._v("[定价 "),e("span",{staticClass:"price"},[t._v(t._s(t._f("currency")(t.book.price)))]),t._v("]")])])]),e("div",{staticClass:"addCart"},[e("AddSubtractButton",{key:t.book.id,on:{updateQuantity:t.handleUpdate}}),e("button",{staticClass:"addCartButton",on:{click:function(n){return t.addCart(t.book)}}},[t._v("加入购物车")])],1)]),e("BookTabComponent",{attrs:{content:t.book.detail}})],1)},a=[],r=(e("8e6e"),e("ac6a"),e("456d"),e("6b54"),e("ade3")),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"addSubtractButton"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number",min:"0"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}}),e("div",[e("button",{on:{click:function(n){return n.preventDefault(),t.handleadd.apply(null,arguments)}}},[t._v("+")]),e("button",{attrs:{disabled:0==t.quantity},on:{click:function(n){return n.preventDefault(),t.handlesub.apply(null,arguments)}}},[t._v("-")])])])},c=[],u={name:"AddSubtractButton",data:function(){return{quantity:0}},methods:{handleadd:function(){this.quantity++,this.$emit("updateQuantity",this.quantity)},handlesub:function(){this.quantity--,this.$emit("updateQuantity",this.quantity)}},computed:{keyid:function(){return this.$route.fullPath}}},s=u,l=e("2877"),d=Object(l["a"])(s,i,c,!1,null,"a518e318",null),f=d.exports,b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tabComponent"},[t._l(t.tabs,(function(n){return e("button",{key:n.title,class:["tab-button",{active:t.currentTab==n.title}],on:{click:function(e){t.currentTab=n.title}}},[t._v("\n  "+t._s(n.displayName))])})),e("keep-alive",[e(t.currentTabComponent,{tag:"component",staticClass:"tab",attrs:{content:t.content}})],1)],2)},p=[],h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(t._s(t.content))])},v=[],m={name:"BookIntroduction",props:{content:{type:String,default:""}}},y=m,k=Object(l["a"])(y,h,v,!1,null,null,null),_=k.exports,g={name:"BookTabComponent",props:{content:{type:String,default:""}},data:function(){return{currentTab:"introduction",tabs:[{title:"introduction",displayName:"图书介绍"},{title:"comment",displayName:"图书评价"},{title:"qa",displayName:"图书问答"}]}},components:{BookIntroduction:_,BookComment:function(){return e.e("chunk-2d226d09").then(e.bind(null,"e9ed"))},BookQa:function(){return e.e("chunk-2d22d463").then(e.bind(null,"f795"))}},computed:{currentTabComponent:function(){return"book-"+this.currentTab}}},C=g,O=(e("f191"),Object(l["a"])(C,b,p,!1,null,"5891b992",null)),P=O.exports,j=e("2f62");function q(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function w(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?q(Object(e),!0).forEach((function(n){Object(r["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):q(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var B={name:"Book",data:function(){return{quantity:0,book:{}}},components:{AddSubtractButton:f,BookTabComponent:P},created:function(){var t=this;this.axios.get(this.$route.fullPath).then((function(n){200==n.status&&(t.book=n.data)})).catch((function(t){return alert(t)}))},methods:w({handleUpdate:function(t){this.quantity=t},factPrice:function(t,n){return t*n},addCart:function(t){var n=this.quantity;0==n&&(n=1),this.addProductToCart(w(w({},t),{},{factPrice:this.factPrice(t.price,t.discount),quantity:n})),this.$router.push("/cart")}},Object(j["b"])("cart",["addProductToCart"])),filters:{formatDiscount:function(t){if(t){var n=t.toString().slice(2)+"折";return n}return t}},beforeRouteUpdate:function(t,n,e){var o=this;this.axios.get(t.fullPath).then((function(t){o.book=t.data})),e()}},T=B,x=(e("6245"),Object(l["a"])(T,o,a,!1,null,"8d9ef4ca",null));n["default"]=x.exports},f191:function(t,n,e){"use strict";e("6318")}}]);
//# sourceMappingURL=chunk-026a71c6.5fe1471f.js.map