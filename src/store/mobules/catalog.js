import Services from '@/services/index'
import { ALL_PRODUCTS } from '@/store/types/mutations'
import { GET_ALL_PRODUCTS } from '@/store/types/actions'
const service = new Services()

export default {
  namespaced: true,
  state: {
    products: [],
    loading: true
  },
  getters: {},
  mutations: {
    [ALL_PRODUCTS] (state, payload) {
      state.products = payload
      state.loading = false
    }
  },
  actions: {
    async [GET_ALL_PRODUCTS] ({ commit }) {
      const products = await service.getProducts()
      commit(ALL_PRODUCTS, products)
    }
  }
}
