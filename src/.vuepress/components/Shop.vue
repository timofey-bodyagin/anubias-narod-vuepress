<template>
  <div class="shop-container custom">
    <div class="shop-item" v-for="(item, idx) of items" :key="item.image" @click="showModal(idx)">
      <img :src="$withBase('/shop/' + item.image + '_m.jpg')" class="small-img">
      <div class="shop-title">
        <div class="title-container">
          <div class="code">
            {{item.code}}
          </div>
          <div class="price">
            {{item.price}}
          </div>
        </div>
        <div class="name">
          {{item.name}}</div>
        </div>
    </div>
    <div class="modal-bg" :style="modalStyle" @click.self="hideModal">
      <div class="modal" v-if="currentItem.image">
        <img :src="$withBase('/shop/' + currentItem.image + '.jpg')">
        <div class="shop-title">
          <div class="code">
            {{currentItem.code}}
          </div>
          <div class="name">
            {{currentItem.name}}
          </div>
        </div>
        <div class="price-title">
          <div class="price">
            {{currentItem.price}}
          </div>
        </div>
        <img :src="$withBase('/close.svg')" class="close-button" alt="" @click.self="hideModal">
        <div class="back button"></div>
        <div class="forward button"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalVisible: false,
      currentItem: {},
      items: [
        {code: 'Код 1.', name: 'Bucephalandra sp. "Stripes" Tapah', image: '01', price: 250},
        {code: 'Код 7.', name: 'Bucephalandra sp. green wavy', image: '07', price: 250},
        {code: 'Код 8.', name: 'Bucephalandra sp.  Green Saw', image: '08', price: 200},
        {code: 'Код 11.', name: 'Bucephalandra sp. Long Leaf', image: '11', price: 250},
        {code: 'Код 27.', name: 'Bucephalandra. sp.Velvet Leaf (VL)', image: '27', price: 300},
        {code: 'Код 30.', name: 'Bucephalandra. sp.', image: '30', price: 250},
        {code: 'Код 35.', name: 'Bucephalandra sp. Blue Gaia', image: '35', price: 250},
        {code: 'Код 38.', name: 'Bucephalandra. sp. Theia 4.', image: '38', price: 200},
        {code: 'Код 43.', name: 'Bucephalandra sp. Super Blue 2.', image: '43', price: 400},
        {code: 'Код 44.', name: 'Bucephalandra sp. Brunei', image: '44', price: 300},
        {code: 'Код 46.', name: 'Вucephalandra sp. montleyana semuntai 2.', image: '46', price: 250},
        {code: 'Код 49.', name: 'Furtadoa sumatrensis', image: '49', price: 300},
        {code: 'Код 51.', name: 'Bucephalandra sp. Velvet Leaf 3.', image: '51', price: 250},
        {code: 'Код 52.', name: 'Bucephalandra sp. Nangatang Kir', image: '52', price: 200},
        {code: 'Код 53.', name: 'Bucephalandra sp. Cherish III', image: '53', price: 250},
        {code: 'Код 54.', name: 'Bucephalandra sp. Narcissus 3.', image: '54', price: 200},
        {code: 'Код 56.', name: 'Bucephalandra sp. Shine Green, Sokan', image: '56', price: 200},
        {code: 'Код 57.', name: 'Bucephalandra sp. Emerald Carpet', image: '57', price: 200},
        {code: 'Код 58.', name: 'Bucephalandra sp. Metalic Grey', image: '58', price: 250},
        {code: 'Код 59.', name: 'Bucephalandra sp. Elegant Blue', image: '59', price: 500},
        {code: 'Код 60.', name: 'Bucephalandra sp. Mukok', image: '60', price: 250},
        {code: 'Код 62.', name: 'Homalomena Humilis', image: '62', price: 300},
        {code: 'Код 63.', name: 'Schismatoglottis sp. Pikachu', image: '63', price: 500},
        {code: 'Код 64.', name: 'Homalomena insignis,', image: '64', price: 300},
        {code: 'Код 65.', name: 'Bucephalandra sp. Dark Silver Grey', image: '65', price: 250},
        {code: 'Код 66.', name: 'Bucephalandra sp. Dark Green Bluish', image: '66', price: 250},
        {code: 'Код 67.', name: 'Anubias  "Bonsai"', image: '67', price: 150},
        {code: 'Код 68.', name: 'Bucephalandra sp. Dark Silver', image: '68', price: 300},
        {code: 'Код 70.', name: 'Bucephalandra sp. Skeleton king narrow leaf', image: '70', price: 500},
        {code: 'Код 71.', name: 'Bucephalandra sp. Skeleton king oval leaf', image: '71', price: 300},
        {code: 'Код 72.', name: 'Bucephalandra sp. Skeleton king  oval-elliptical leaf', image: '72', price: 400},
        {code: 'Код 73.', name: 'Bucephalandra sp. Skeleton king round  leaf', image: '73', price: 400},
        {code: 'Код 74.', name: 'Bucephalandra sp. Skeleton  sp.', image: '74', price: 400},
        {code: 'Код 75.', name: 'Bucephalandra sp. Skeleton  sp.', image: '75', price: 400},
        {code: 'Код 76.', name: 'Bucephalandra sp. Skeleton sp.', image: '76', price: 400},
        {code: 'Код 77.', name: 'Bucephalandra sp. Skeleton sp.', image: '77', price: 400},
        {code: 'Код 80.', name: 'Bucephalandra sp.', image: '80', price: 250},
      ]
    }
  },
  computed: {
    modalStyle() {
      return {
        display: this.modalVisible ? 'flex' : 'none'
      }
    }
  },
  methods: {
    showModal(idx) {
      if (idx >= 0 && idx < this.items.length ) {
        this.currentItem = this.items[idx];
      } else {
        this.currentItem = {};
      }
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    }
  }
}
</script>

<style>
  .shop-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .shop-item {
    max-width: 300px;
    margin: 10px;
    cursor: pointer;
  }

  .shop-item .code, .shop-item .price {
    font-weight: bold;
  }

  .shop-item .price:after, .modal-bg .price:after {
    content: ' руб.';

  }

  .shop-item .name {
    font-size: 16px;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
  }

  img {
    border-radius: 5px;
  }

  .modal-bg {
    z-index: 10000;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    max-width: 800px;
    max-height: 100%;
    min-width: 300px;
    position: relative;
  }

  .modal-bg .shop-title {
    box-sizing: border-box;
    position: absolute;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 5px;
    left: 0px;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    border-top-right-radius: 50px;
  }

  .modal-bg .price-title {
    box-sizing: border-box;
    position: absolute;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 5px;
    right: 0px;
    padding: 10px 10px 10px 40px;
    font-size: 18px;
    font-weight: bold;
    border-top-left-radius: 50px;
  }

  .modal-bg .close-button {
    position: absolute;
    color: white;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
</style>
