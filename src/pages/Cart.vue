<template>
  <div class="about">
    <h1 class='text-center m-5'> Your cart is empty </h1>
    <TableCart />
  </div>
</template>
<script>
import TableCart from '@/components/table-cart/index'
export default {
  name: 'cart',
  components: { TableCart }
}
</script>
