(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{328:function(e,a,i){},588:function(e,a,i){"use strict";i(328)},595:function(e,a,i){"use strict";i.r(a);var c={data:function(){return{modalVisible:!1,currentItem:{},items:[{code:"Код 1.",name:'Bucephalandra sp. "Stripes" Tapah',image:"01",price:250},{code:"Код 7.",name:"Bucephalandra sp. green wavy",image:"07",price:250},{code:"Код 8.",name:"Bucephalandra sp.  Green Saw",image:"08",price:200},{code:"Код 11.",name:"Bucephalandra sp. Long Leaf",image:"11",price:250},{code:"Код 27.",name:"Bucephalandra. sp.Velvet Leaf (VL)",image:"27",price:300},{code:"Код 28.",name:"Bucephalandra. sp. Pearl Grey",image:"28",price:500},{code:"Код 30.",name:"Bucephalandra. sp.",image:"30",price:250},{code:"Код 35.",name:"Bucephalandra sp. Blue Gaia",image:"35",price:250},{code:"Код 38.",name:"Bucephalandra. sp. Theia 4.",image:"38",price:200},{code:"Код 43.",name:"Bucephalandra sp. Super Blue 2.",image:"43",price:400},{code:"Код 44.",name:"Bucephalandra sp. Brunei",image:"44",price:300},{code:"Код 46.",name:"Вucephalandra sp. montleyana semuntai 2.",image:"46",price:250},{code:"Код 49.",name:"Furtadoa sumatrensis",image:"49",price:300},{code:"Код 51.",name:"Bucephalandra sp. Velvet Leaf 3.",image:"51",price:250},{code:"Код 52.",name:"Bucephalandra sp. Nangatang Kir",image:"52",price:200},{code:"Код 53.",name:"Bucephalandra sp. Cherish III",image:"53",price:250},{code:"Код 54.",name:"Bucephalandra sp. Narcissus 3.",image:"54",price:200},{code:"Код 56.",name:"Bucephalandra sp. Shine Green, Sokan",image:"56",price:200},{code:"Код 57.",name:"Bucephalandra sp. Emerald Carpet",image:"57",price:200},{code:"Код 58.",name:"Bucephalandra sp. Metalic Grey",image:"58",price:250},{code:"Код 59.",name:"Bucephalandra sp. Elegant Blue",image:"59",price:500},{code:"Код 60.",name:"Bucephalandra sp. Mukok",image:"60",price:250},{code:"Код 62.",name:"Homalomena Humilis",image:"62",price:300},{code:"Код 63.",name:"Schismatoglottis sp. Pikachu",image:"63",price:500},{code:"Код 64.",name:"Homalomena insignis,",image:"64",price:300},{code:"Код 65.",name:"Bucephalandra sp. Dark Silver Grey",image:"65",price:250},{code:"Код 66.",name:"Bucephalandra sp. Dark Green Bluish",image:"66",price:250},{code:"Код 67.",name:'Anubias  "Bonsai"',image:"67",price:150},{code:"Код 68.",name:"Bucephalandra sp. Dark Silver",image:"68",price:300},{code:"Код 70.",name:"Bucephalandra sp. Skeleton king narrow leaf",image:"70",price:500},{code:"Код 71.",name:"Bucephalandra sp. Skeleton king oval leaf",image:"71",price:300},{code:"Код 72.",name:"Bucephalandra sp. Skeleton king  oval-elliptical leaf",image:"72",price:400},{code:"Код 73.",name:"Bucephalandra sp. Skeleton king round  leaf",image:"73",price:400},{code:"Код 74.",name:"Bucephalandra sp. Skeleton  sp.",image:"74",price:400},{code:"Код 75.",name:"Bucephalandra sp. Skeleton  sp.",image:"75",price:400},{code:"Код 76.",name:"Bucephalandra sp. Skeleton sp.",image:"76",price:400},{code:"Код 77.",name:"Bucephalandra sp. Skeleton sp.",image:"77",price:400},{code:"Код 80.",name:"Bucephalandra sp.",image:"80",price:250}]}},computed:{modalStyle:function(){return{display:this.modalVisible?"flex":"none"}}},methods:{showModal:function(e){e>=0&&e<this.items.length?this.currentItem=this.items[e]:this.currentItem={},this.modalVisible=!0},hideModal:function(){this.modalVisible=!1}}},n=(i(588),i(45)),s=Object(n.a)(c,(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"shop-container custom"},[e._l(e.items,(function(a,c){return i("div",{key:a.image,staticClass:"shop-item",on:{click:function(a){return e.showModal(c)}}},[i("img",{staticClass:"small-img",attrs:{src:e.$withBase("/shop/"+a.image+"_m.jpg")}}),e._v(" "),i("div",{staticClass:"shop-title"},[i("div",{staticClass:"title-container"},[i("div",{staticClass:"code"},[e._v("\n          "+e._s(a.code)+"\n        ")]),e._v(" "),i("div",{staticClass:"price"},[e._v("\n          "+e._s(a.price)+"\n        ")])]),e._v(" "),i("div",{staticClass:"name"},[e._v("\n        "+e._s(a.name))])])])})),e._v(" "),i("div",{staticClass:"modal-bg",style:e.modalStyle,on:{click:function(a){return a.target!==a.currentTarget?null:e.hideModal(a)}}},[e.currentItem.image?i("div",{staticClass:"modal"},[i("img",{attrs:{src:e.$withBase("/shop/"+e.currentItem.image+".jpg")}}),e._v(" "),i("div",{staticClass:"shop-title"},[i("div",{staticClass:"code"},[e._v("\n          "+e._s(e.currentItem.code)+"\n        ")]),e._v(" "),i("div",{staticClass:"name"},[e._v("\n          "+e._s(e.currentItem.name)+"\n        ")])]),e._v(" "),i("div",{staticClass:"price-title"},[i("div",{staticClass:"price"},[e._v("\n          "+e._s(e.currentItem.price)+"\n        ")])]),e._v(" "),i("img",{staticClass:"close-button",attrs:{src:e.$withBase("/close.svg"),alt:""},on:{click:function(a){return a.target!==a.currentTarget?null:e.hideModal(a)}}}),e._v(" "),i("div",{staticClass:"back button"}),e._v(" "),i("div",{staticClass:"forward button"})]):e._e()])],2)}),[],!1,null,null,null);a.default=s.exports}}]);