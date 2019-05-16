<template>
  <div id="app">
    <header-app/>
    <router-view/>
  </div>
</template>

<script>
import HeaderApp from '@/components/header-app/index'

export default {
  components: { HeaderApp }
}

</script>

<style lang="scss">
  @import "~bootstrap/dist/css/bootstrap.css";
  @import "~@fortawesome/fontawesome-free/css/all.css";
</style>
