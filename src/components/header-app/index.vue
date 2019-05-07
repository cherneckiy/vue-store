<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" >
      <img style="width: 70px; height: 70px" alt="Vue logo" src="~@/assets/logo.png">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" exact-active-class="active" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link" active-class="active">Cart</router-link>
        </li>
      </ul>
      <div>
        <router-link to="/cart">
          <i class="fas fa-shopping-cart"></i> Total: {{ total }}$
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'header-app',
  computed: {
    ...mapGetters('cart', ['total'])
  }
}

</script>

<style scoped>

</style>
