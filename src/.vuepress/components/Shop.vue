<template>
  <div class="shop-container custom">
    <div class="shop-item" v-for="(item, idx) of items" :key="item.image" @click="showModal(idx)">
      <img :src="$withBase('/shop/' + item.image + '_m.jpg')" class="small-img">
      <div class="shop-title">
        <div class="code">
          {{item.code}}
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
            {{currentItem.name}}</div>
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
        {code: 'Код 1.', name: 'Bucephalandra sp. "Stripes" Tapah', image: '01'},
        {code: 'Код 2.', name: 'Bucephalandra sp. Simunjam', image: '02'},
        {code: 'Код 7.', name: 'Bucephalandra sp. green wavy', image: '07'},
        {code: 'Код 8.', name: 'Bucephalandra sp.  Green Saw, West Kalimantan', image: '08'},
        {code: 'Код 21.', name: 'Bucephalandra sp. Batang Аi', image: '21'},
        {code: 'Код 27.', name: 'Bucephalandra. sp. Velvet Leaf ', image: '27'},
        {code: 'Код 31.', name: 'Bucephalandra. sp. Green Velvet Leaf 1', image: '31'},
        {code: 'Код 32.', name: 'Bucephalandra. sp.  Green Velvet Leaf 2', image: '32'},
        {code: 'Код 35.', name: 'Bucephalandra sp. Blue Gaia', image: '35'},
        {code: 'Код 36.', name: 'Bucephalandra. sp. Palm Tree', image: '36'},
        {code: 'Код 37.', name: 'Bucephalandra. sp. Theia 1', image: '37'},
        {code: 'Код 39.', name: 'Bucephalandra. sp. Theia 10', image: '39'},
        {code: 'Код 40.', name: 'Bucephalandra. sp. Theia. 9', image: '40'},
        {code: 'Код 43.', name: 'Bucephalandra sp. Super Blue 2, Central Kalimantan', image: '43'},
        {code: 'Код 44.', name: 'Bucephalandra sp. Brunei', image: '44'},
        {code: 'Код 45.', name: 'Bucephalandra sp. Bonti River, Indonesia', image: '45'},
        {code: 'Код 47.', name: 'Bucephalandra sp. Yellow Green', image: '47'},
        {code: 'Код 48.', name: 'Bucephalandra sp. Achilles', image: '48'},
        {code: 'Код 49.', name: 'Furtadoa sumatrensis', image: '49'},
        {code: 'Код 52.', name: 'Bucephalandra sp. Nangatang Kir', image: '52'},
        {code: 'Код 55.', name: 'Bucephalandra sp. Bukit Kelam Utara Dark Green, Kalimantan', image: '55'},
        {code: 'Код 56.', name: 'Bucephalandra sp. Shine Green, Sokan', image: '56'},
        {code: 'Код 58.', name: 'Bucephalandra sp. Metalic Grey', image: '58'},
        {code: 'Код 59.', name: 'Bucephalandra sp. Elegant Blue', image: '59'},
        {code: 'Код 60.', name: 'Bucephalandra sp. Mukok', image: '60'},
        {code: 'Код 62.', name: 'Homalomena Humilis "Red Velvet"', image: '62'},
        {code: 'Код 65.', name: 'Bucephalandra sp. Dark Silver Grey', image: '65'},
        {code: 'Код 66.', name: 'Bucephalandra sp. Dark Green Bluish', image: '66'},
        {code: 'Код 67.', name: 'Anubias  "Bonsai"', image: '67'},
        {code: 'Код 68.', name: 'Bucephalandra sp.', image: '68'},
        {code: 'Код 69.', name: 'Bucephalandra sp.', image: '69'},
        {code: 'Код 70.', name: 'Bucephalandra sp.', image: '70'},
        {code: 'Код 71.', name: 'Bucephalandra sp.', image: '71'},
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

  .shop-item .code {
    font-weight: bold;
  }

  .shop-item .name {
    font-size: 16px;
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

  .modal-bg .close-button {
    position: absolute;
    color: white;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
</style>
