<template>
  <div class="container">

    <div class="row">

      <div class="col-md-4 my-4">
        <product/>
      </div>

    </div>

  </div>
</template>

<script>
import Product from '@/components/product/index'
export default {
  name: 'catalog',
  components: { Product }
}
</script>

<style scoped>

</style>
