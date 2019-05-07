import Vue from 'vue'
import Vuex from 'vuex'
import cart from './mobules/cart'
import catalog from './mobules/catalog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    catalog
  },
  state: {},
  mutations: {},
  actions: {}
})
