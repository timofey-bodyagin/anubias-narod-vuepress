(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{327:function(a,e,n){},565:function(a,e,n){"use strict";n(327)},572:function(a,e,n){"use strict";n.r(e);var i={data:function(){return{modalVisible:!1,currentItem:{},items:[{code:"Код 1.",name:'Bucephalandra sp. "Stripes" Tapah',image:"01"},{code:"Код 2.",name:"Bucephalandra sp. Simunjam",image:"02"},{code:"Код 7.",name:"Bucephalandra sp. green wavy",image:"07"},{code:"Код 8.",name:"Bucephalandra sp.  Green Saw, West Kalimantan",image:"08"},{code:"Код 21.",name:"Bucephalandra sp. Batang Аi",image:"21"},{code:"Код 27.",name:"Bucephalandra. sp. Velvet Leaf ",image:"27"},{code:"Код 31.",name:"Bucephalandra. sp. Green Velvet Leaf 1",image:"31"},{code:"Код 32.",name:"Bucephalandra. sp.  Green Velvet Leaf 2",image:"32"},{code:"Код 35.",name:"Bucephalandra sp. Blue Gaia",image:"35"},{code:"Код 36.",name:"Bucephalandra. sp. Palm Tree",image:"36"},{code:"Код 37.",name:"Bucephalandra. sp. Theia 1",image:"37"},{code:"Код 39.",name:"Bucephalandra. sp. Theia 10",image:"39"},{code:"Код 40.",name:"Bucephalandra. sp. Theia. 9",image:"40"},{code:"Код 43.",name:"Bucephalandra sp. Super Blue 2, Central Kalimantan",image:"43"},{code:"Код 44.",name:"Bucephalandra sp. Brunei",image:"44"},{code:"Код 45.",name:"Bucephalandra sp. Bonti River, Indonesia",image:"45"},{code:"Код 47.",name:"Bucephalandra sp. Yellow Green",image:"47"},{code:"Код 48.",name:"Bucephalandra sp. Achilles",image:"48"},{code:"Код 49.",name:"Furtadoa sumatrensis",image:"49"},{code:"Код 52.",name:"Bucephalandra sp. Nangatang Kir",image:"52"},{code:"Код 55.",name:"Bucephalandra sp. Bukit Kelam Utara Dark Green, Kalimantan",image:"55"},{code:"Код 56.",name:"Bucephalandra sp. Shine Green, Sokan",image:"56"},{code:"Код 58.",name:"Bucephalandra sp. Metalic Grey",image:"58"},{code:"Код 59.",name:"Bucephalandra sp. Elegant Blue",image:"59"},{code:"Код 60.",name:"Bucephalandra sp. Mukok",image:"60"},{code:"Код 62.",name:'Homalomena Humilis "Red Velvet"',image:"62"},{code:"Код 65.",name:"Bucephalandra sp. Dark Silver Grey",image:"65"},{code:"Код 66.",name:"Bucephalandra sp. Dark Green Bluish",image:"66"},{code:"Код 67.",name:'Anubias  "Bonsai"',image:"67"},{code:"Код 68.",name:"Bucephalandra sp.",image:"68"},{code:"Код 69.",name:"Bucephalandra sp.",image:"69"},{code:"Код 70.",name:"Bucephalandra sp.",image:"70"},{code:"Код 71.",name:"Bucephalandra sp.",image:"71"}]}},computed:{modalStyle:function(){return{display:this.modalVisible?"flex":"none"}}},methods:{showModal:function(a){a>=0&&a<this.items.length?this.currentItem=this.items[a]:this.currentItem={},this.modalVisible=!0},hideModal:function(){this.modalVisible=!1}}},t=(n(565),n(45)),s=Object(t.a)(i,(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"shop-container custom"},[a._l(a.items,(function(e,i){return n("div",{key:e.image,staticClass:"shop-item",on:{click:function(e){return a.showModal(i)}}},[n("img",{staticClass:"small-img",attrs:{src:a.$withBase("/shop/"+e.image+"_m.jpg")}}),a._v(" "),n("div",{staticClass:"shop-title"},[n("div",{staticClass:"code"},[a._v("\n        "+a._s(e.code)+"\n      ")]),a._v(" "),n("div",{staticClass:"name"},[a._v("\n        "+a._s(e.name))])])])})),a._v(" "),n("div",{staticClass:"modal-bg",style:a.modalStyle,on:{click:function(e){return e.target!==e.currentTarget?null:a.hideModal(e)}}},[a.currentItem.image?n("div",{staticClass:"modal"},[n("img",{attrs:{src:a.$withBase("/shop/"+a.currentItem.image+".jpg")}}),a._v(" "),n("div",{staticClass:"shop-title"},[n("div",{staticClass:"code"},[a._v("\n          "+a._s(a.currentItem.code)+"\n        ")]),a._v(" "),n("div",{staticClass:"name"},[a._v("\n          "+a._s(a.currentItem.name))])]),a._v(" "),n("img",{staticClass:"close-button",attrs:{src:a.$withBase("/close.svg"),alt:""},on:{click:function(e){return e.target!==e.currentTarget?null:a.hideModal(e)}}}),a._v(" "),n("div",{staticClass:"back button"}),a._v(" "),n("div",{staticClass:"forward button"})]):a._e()])],2)}),[],!1,null,null,null);e.default=s.exports}}]);