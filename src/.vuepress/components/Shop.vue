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
        {code: 'Код 1.', name: 'Bucephalandra sp. "Stripes" Tapah 2', price: 300, image: '01'},
        {code: 'Код 2.', name: 'Bucephalandra sp. Simunjam', price: 400, image: '02'},
        {code: 'Код 6.', name: 'Bucephalandra sp. Metalic Grey', price: 300, image: '06'},
        {code: 'Код 7.', name: 'Bucephalandra sp. Green  wavy', price: 300, image: '07'},
        {code: 'Код 11.', name: 'Bucephalandra sp. Long Leaf', price: 400, image: '11'},
        {code: 'Код 18.', name: 'Bucephalandra sp. Silver Powder', price: 300, image: '18'},
        {code: 'Код 31.', name: 'Bucephalandra sp.  Godzilla', price: 400, image: '31'},
        {code: 'Код 32.', name: 'Bucephalandra sp.   Green Broad Leaf', price: 400, image: '32'},
        {code: 'Код 33.', name: 'Bucephalandra sp.   velvet  entikong', price: 400, image: '33'},
        {code: 'Код 34.', name: 'Bucephalandra sp.  Dark entikong', price: 400, image: '34'},
        {code: 'Код 37.', name: 'Bucephalandra sp.  centipede-bund', price: 400, image: '37'},
        {code: 'Код 39.', name: 'Bucephalandra. sp. Theia sp', price: 400, image: '39'},
        {code: 'Код 40.', name: 'Bucephalandra. sp. Theia 9', price: 300, image: '40'},
        {code: 'Код 43.2.', name: '  Bucephalandra sp. Super Blue 2', price: 400, image: '43_02'},
        {code: 'Код 43.', name: 'Bucephalandra sp. Super Blue', price: 400, image: '43'},
        {code: 'Код 44.', name: 'Bucephalandra sp. Brunei', price: 400, image: '44'},
        {code: 'Код 46.', name: 'Вucephalandra sp. montleyana', price: 300, image: '46'},
        {code: 'Код 48.', name: 'Bucephalandra sp. Dark Silver Grey', price: 300, image: '48'},
        {code: 'Код 53.', name: 'Bucephalandra sp. Cherish III', price: 300, image: '53'},
        {code: 'Код 54.', name: 'Bucephalandra sp. Narcissus 2', price: 400, image: '54'},
        {code: 'Код 59.', name: 'Bucephalandra sp. Metalic Dark Grey', price: 600, image: '59'},
        {code: 'Код 63.', name: 'Schismatoglottis sp. Metalic  "Pikachu"', price: 300, image: '63'},
        {code: 'Код 93.', name: 'Bucephalandra sp. Nanga Taman, Kab.Sanggau', price: 400, image: '93'},
        {code: 'Код 73.', name: 'Bucephalandra sp.  Skeleton king  narrow  leaf', price: 600, image: '73'},
        {code: 'Код 74.', name: 'Bucephalandra sp. Skeleton king oval  leaf', price: 500, image: '74'},
        {code: 'Код 75.', name: 'Bucephalandra sp. Skeleton king  oval-elliptical leaf', price: 400, image: '75'},
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
