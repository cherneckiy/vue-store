<template>
  <div class="container">

    <div class="d-flex justify-content-center" v-if="loading">
      <div class="spinner-border  m-5" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div class="row" v-else>

      <div class="col-md-4 my-4" v-for="product in products" :key="product.id">
        <product v-bind="product"/>
      </div>

    </div>

  </div>
</template>

<script>
import Product from '@/components/product/index'
import { mapState, mapActions } from 'vuex'
import { GET_ALL_PRODUCTS } from '@/store/types/actions'
export default {
  name: 'catalog',
  components: { Product },
  computed: {
    ...mapState('catalog', ['products', 'loading'])
  },
  methods: {
    ...mapActions('catalog', {
      getAllProducts: GET_ALL_PRODUCTS
    })
  },
  created () {
    this.getAllProducts()
  }
}
</script>

<style scoped>

</style>
