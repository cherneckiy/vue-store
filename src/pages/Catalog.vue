<template>
  <div class="container">

    <div class="row">

      <div class="col-md-4 my-4" v-for="product in products" :key="product.id">
        <product v-bind="product"/>
      </div>

    </div>

  </div>
</template>

<script>
import Product from '@/components/product/index'
import { mapState } from 'vuex'
export default {
  name: 'catalog',
  components: { Product },
  computed: {
    ...mapState('catalog', ['products'])
  }
}
</script>

<style scoped>

</style>
