import Vue from 'vue'
import Router from 'vue-router'
import Catalog from './pages/Catalog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./pages/Cart.vue')
    }
  ]
})
