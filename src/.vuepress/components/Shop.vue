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
        {code: 'Код 1.', name: 'Buc. sp. "Stripes" Tapah 2', price: 600, image: '01'},
        {code: 'Код 28.', name: 'Buc. sp. Pearl Grey', price: 800, image: '28'},
        {code: 'Код 30.', name: 'Buc. sp. Sedong', price: 800, image: '30'},
        {code: 'Код 44.', name: 'Buc. sp. Brunei', price: 800, image: '44'},
        {code: 'Код 45.', name: 'Buc. sp. Metalic Dark Grey', price: 1000, image: '45'},
        {code: 'Код 54.', name: 'Buc. sp. Narcissus 1 Melawi', price: 600, image: '54'},
        {code: 'Код 54.1.', name: 'Buc. sp. Narcissus 1 Melawi', price: 600, image: '54_1'},
        {code: 'Код 59.', name: 'Buc. sp. Elegant Blue', price: 1000, image: '59'},
        {code: 'Код 60.', name: 'Buc. sp. Mukok', price: 700, image: '60'},
        {code: 'Код 61.', name: 'Buc. sp.   Giant', price: 700, image: '61'},
        {code: 'Код 70.', name: 'Buc. Kishii', price: 1200, image: '70'},
        {code: 'Код 71.', name: 'Buc. sp. Dark Achilles', price: 1200, image: '71'},
        {code: 'Код 72.', name: 'Buc. sp. Green Achilles', price: 1000, image: '72'},
        {code: 'Код 72.1', name: 'Buc. sp. Green Achilles', price: 1000, image: '72_1'},
        {code: 'Код 73.', name: 'Buc. sp.  Skeleton king  narrow  leaf', price: 900, image: '73'},
        {code: 'Код 74.', name: 'Buc. sp. Skeleton king oval  leaf', price: 800, image: '74'},
        {code: 'Код 75.', name: 'Buc. sp. Skeleton king  oval-elliptical leaf', price: 700, image: '75'},
        {code: 'Код 77.', name: 'Buc. Skeleton king  sp.', price: 600, image: '77'},
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
    /*max-width: 800px;*/
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
