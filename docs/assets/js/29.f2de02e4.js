(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{328:function(e,a,i){},588:function(e,a,i){"use strict";i(328)},595:function(e,a,i){"use strict";i.r(a);var c={data:function(){return{modalVisible:!1,currentItem:{},items:[{code:"Код 1.",name:'Bucephalandra sp. "Stripes" Tapah 2',price:300,image:"01"},{code:"Код 2.",name:"Bucephalandra sp. Simunjam",price:400,image:"02"},{code:"Код 6.",name:"Bucephalandra sp. Metalic Grey",price:300,image:"06"},{code:"Код 7.",name:"Bucephalandra sp. Green  wavy",price:300,image:"07"},{code:"Код 9.",name:"Bucephalandra sp. Serian",price:500,image:"09"},{code:"Код 11.",name:"Bucephalandra sp. Long Leaf",price:400,image:"11"},{code:"Код 18.",name:"Bucephalandra sp. Silver Powder",price:300,image:"18"},{code:"Код 30.",name:"Bucephalandra. sp. Sedong",price:400,image:"30"},{code:"Код 31.",name:"Bucephalandra sp.  Godzilla",price:400,image:"31"},{code:"Код 32.",name:"Bucephalandra sp.   Green Broad Leaf",price:400,image:"32"},{code:"Код 33.",name:"Bucephalandra sp.   velvet  entikong",price:400,image:"33"},{code:"Код 34.",name:"Bucephalandra sp.  Dark entikong",price:400,image:"34"},{code:"Код 35.",name:"Bucephalandra sp.   Giant",price:500,image:"35"},{code:"Код 37.",name:"Bucephalandra sp.  centipede-bund",price:400,image:"37"},{code:"Код 39.",name:"Bucephalandra. sp. Theia sp",price:400,image:"39"},{code:"Код 40.",name:"Bucephalandra. sp. Theia 9",price:300,image:"40"},{code:"Код 43.2.",name:"  Bucephalandra sp. Super Blue 2",price:400,image:"43_02"},{code:"Код 43.",name:"Bucephalandra sp. Super Blue",price:400,image:"43"},{code:"Код 44.",name:"Bucephalandra sp. Brunei",price:400,image:"44"},{code:"Код 46.",name:"Вucephalandra sp. montleyana",price:300,image:"46"},{code:"Код 48.",name:"Bucephalandra sp. Dark Silver Grey",price:300,image:"48"},{code:"Код 51.",name:"Bucephalandra sp. Velvet Leaf 3",price:400,image:"51"},{code:"Код 53.",name:"Bucephalandra sp. Cherish III",price:300,image:"53"},{code:"Код 54.",name:"Bucephalandra sp. Narcissus 2",price:400,image:"54"},{code:"Код 59.",name:"Bucephalandra sp. Metalic Dark Grey",price:600,image:"59"},{code:"Код 63.",name:'Schismatoglottis sp. Metalic  "Pikachu"',price:300,image:"63"},{code:"Код 64.",name:"Homalomena insignis",price:500,image:"64"},{code:"Код 68.",name:"Bucephalandra sp sp. Dark Silver",price:500,image:"68"},{code:"Код 93.",name:"Bucephalandra sp. Nanga Taman, Kab.Sanggau",price:400,image:"93"},{code:"Код 70.",name:"Bucephalandra Kishii",price:600,image:"70"},{code:"Код 71.",name:"Bucephalandra sp. Dark Achilles",price:600,image:"71"},{code:"Код 72.",name:"Bucephalandra sp. Green Achilles",price:600,image:"72"},{code:"Код 73.",name:"Bucephalandra sp.  Skeleton king  narrow  leaf",price:600,image:"73"},{code:"Код 74.",name:"Bucephalandra sp. Skeleton king oval  leaf",price:500,image:"74"},{code:"Код 75.",name:"Bucephalandra sp. Skeleton king  oval-elliptical leaf",price:400,image:"75"},{code:"Код 76.",name:"Bucephalandra sp. Skeleton king round  leaf",price:600,image:"76"},{code:"Код 77.",name:"Bucephalandra sp. Skeleton king large",price:500,image:"77"}]}},computed:{modalStyle:function(){return{display:this.modalVisible?"flex":"none"}}},methods:{showModal:function(e){e>=0&&e<this.items.length?this.currentItem=this.items[e]:this.currentItem={},this.modalVisible=!0},hideModal:function(){this.modalVisible=!1}}},n=(i(588),i(45)),r=Object(n.a)(c,(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"shop-container custom"},[e._l(e.items,(function(a,c){return i("div",{key:a.image,staticClass:"shop-item",on:{click:function(a){return e.showModal(c)}}},[i("img",{staticClass:"small-img",attrs:{src:e.$withBase("/shop/"+a.image+"_m.jpg")}}),e._v(" "),i("div",{staticClass:"shop-title"},[i("div",{staticClass:"title-container"},[i("div",{staticClass:"code"},[e._v("\n          "+e._s(a.code)+"\n        ")]),e._v(" "),i("div",{staticClass:"price"},[e._v("\n          "+e._s(a.price)+"\n        ")])]),e._v(" "),i("div",{staticClass:"name"},[e._v("\n        "+e._s(a.name))])])])})),e._v(" "),i("div",{staticClass:"modal-bg",style:e.modalStyle,on:{click:function(a){return a.target!==a.currentTarget?null:e.hideModal(a)}}},[e.currentItem.image?i("div",{staticClass:"modal"},[i("img",{attrs:{src:e.$withBase("/shop/"+e.currentItem.image+".jpg")}}),e._v(" "),i("div",{staticClass:"shop-title"},[i("div",{staticClass:"code"},[e._v("\n          "+e._s(e.currentItem.code)+"\n        ")]),e._v(" "),i("div",{staticClass:"name"},[e._v("\n          "+e._s(e.currentItem.name)+"\n        ")])]),e._v(" "),i("div",{staticClass:"price-title"},[i("div",{staticClass:"price"},[e._v("\n          "+e._s(e.currentItem.price)+"\n        ")])]),e._v(" "),i("img",{staticClass:"close-button",attrs:{src:e.$withBase("/close.svg"),alt:""},on:{click:function(a){return a.target!==a.currentTarget?null:e.hideModal(a)}}}),e._v(" "),i("div",{staticClass:"back button"}),e._v(" "),i("div",{staticClass:"forward button"})]):e._e()])],2)}),[],!1,null,null,null);a.default=r.exports}}]);