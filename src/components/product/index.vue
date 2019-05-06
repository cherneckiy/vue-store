<template>
  <div class="card">
<!--    <div class="d-flex justify-content-center">-->
<!--      <div class="spinner-border  m-5" role="status">-->
<!--        <span class="sr-only">Loading...</span>-->
<!--      </div>-->
<!--    </div>-->
    <img :src="coverImage" class="card-img-top" :alt="title">
    <div class="card-body">
      <h5 class="card-title"> {{ title }}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div class="row">
        <div class="col-5">
          <span>price: {{ price }}$</span>
        </div>
        <div class="col-7 text-right">
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: {
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
  }
}
</script>

<style scoped>

</style>
