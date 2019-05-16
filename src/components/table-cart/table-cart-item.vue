<template>
  <tr>
    <th scope="row">{{ index + 1 }}</th>
    <td>{{ product.title }}</td>
    <td>{{ product.price }}$</td>
    <td>{{ product.count }}</td>
    <td>{{ product.total }}$</td>
    <td>
      <button type="button"
              class="btn btn-sm btn-success"
              @click.prevent="addProductInCart(product)"><i class="fas fa-plus"></i>
      </button>
      <button type="button"
              class="btn btn-sm btn-warning"
              @click.prevent="removeProductInCart(product)"
      ><i class="fas fa-minus"></i>
      </button>
      <button type="button"
              class="btn btn-sm btn-danger"
              @click.prevent="allRemoveProductInCart(product)"
      ><i class="fas fa-trash-alt"></i>
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'
import {
  ADD_PRODUCT_IN_CART,
  REMOVE_PRODUCT_IN_CART,
  ALL_REMOVE_PRODUCT_IN_CART
} from '@/store/types/actions'

export default {
  name: 'table-cart-item',

  props: {
    product: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },

  methods: {
    ...mapActions('cart', {
      addProductInCart: ADD_PRODUCT_IN_CART,
      removeProductInCart: REMOVE_PRODUCT_IN_CART,
      allRemoveProductInCart: ALL_REMOVE_PRODUCT_IN_CART
    })
  }
}
</script>
