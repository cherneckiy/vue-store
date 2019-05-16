<template>
  <div class="about">
    <h1 class='text-center m-5' v-if="hasCart"> Your cart is empty </h1>
    <TableCart v-else />
  </div>
</template>

<script>
import TableCart from '@/components/table-cart/index'
import { mapState } from 'vuex'

export default {
  name: 'cart',

  components: { TableCart },

  computed: {
    ...mapState('cart', ['cart']),

    hasCart () {
      return !this.cart.length > 0
    }
  }
}
</script>
