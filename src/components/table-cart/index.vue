<template>
  <div class="container">

    <table class="table m-5">
      <thead class="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Count</th>
        <th scope="col">Total</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>

      <table-cart-item
        v-for="(product, index) in cart"
        :key="product.id"
        :product="product"
        :index="index"/>

      <tr class="thead-light">
        <th scope="row"></th>
        <th scope="row"></th>
        <th scope="row"></th>
        <th scope="row"></th>
        <th scope="row"></th>
        <th scope="row">total: {{ total }}$</th>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import TableCartItem from './table-cart-item'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'table-cart',
  components: { TableCartItem },
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', ['total'])
  }
}
</script>
