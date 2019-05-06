import { ADD_PRODUCT_IN_CART } from '@/store/types/actions'
export default {
  namespaced: true,
  state: {
    cart: [],
    total: 0
  },
  getters: {},
  mutations: {},
  actions: {
    [ADD_PRODUCT_IN_CART] ({ getters, rootState }, payload) {
      const products = rootState.catalog.products
      // eslint-disable-next-line no-return-assign
      const product = products.find(item => item.id = payload)
      console.log(product, 'product')
    }
  }
}
