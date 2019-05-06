<template>
  <div class="container">

    <table class="table m-5">
      <thead class="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>

      <table-cart-item v-for="product in cart" :key="product.id"/>

      <tr class="thead-light">
        <th scope="row"></th>
        <th scope="row"></th>
        <th scope="row"></th>
        <th scope="row">total: 200$</th>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import TableCartItem from './table-cart-item'
import { mapState } from 'vuex'

export default {
  name: 'table-cart',
  components: { TableCartItem },
  methods: {
    ...mapState('cart', ['cart'])
  }
}
</script>
