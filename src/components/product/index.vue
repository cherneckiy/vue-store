<template>
  <div class="card">
    <img :src="coverImage" class="card-img-top" :alt="title">
    <div class="card-body">
      <h5 class="card-title"> {{ title }}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="row">
        <div class="col-5">
          <span>price: {{ price }}$</span>
        </div>
        <div class="col-7 text-right">
          <a href="#" class="btn btn-primary" @click.prevent="addProduct">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ADD_PRODUCT_IN_CART } from '@/store/types/actions'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'product',
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    coverImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState('catalog', ['products'])
  },
  methods: {
    ...mapActions('cart', {
      addProductInCart: ADD_PRODUCT_IN_CART
    }),
    addProduct () {
      const product = this.products.find(product => product.id === this.id)
      this.addProductInCart(product)
    }
  }
}
</script>

<style scoped>

</style>
