import {
  UPDATE_PRODUCT_IN_CART,
  ADD_PRODUCT_IN_CART,
  REMOVE_PRODUCT_IN_CART,
  ALL_REMOVE_PRODUCT_IN_CART } from '@/store/types/actions'
import { UPDATE_PRODUCTS_IN_CART } from '@/store/types/mutations'
export default {
  namespaced: true,
  state: {
    cart: [],
    total: 0
  },
  getters: {
    newProduct: () => (product, item = {}, quantity) => {
      const {
        id = product.id,
        title = product.title,
        price = product.price,
        total = 0,
        count = 0
      } = item
      return {
        id,
        title,
        price,
        count: count + quantity,
        total: total + product.price * quantity
      }
    },
    updateProducts: ({ cart }) => newProduct => {
      const hasProduct = cart.some(item => item.id === newProduct.id)

      if (newProduct.count === 0) {
        return cart.filter(item => item.id !== newProduct.id)
      }

      if (hasProduct) {
        return cart.map(item => {
          if (item.id === newProduct.id) {
            return newProduct
          }
          return item
        })
      }

      return [...cart, newProduct]
    }
  },
  mutations: {
    [UPDATE_PRODUCTS_IN_CART] (state, newProductInCart) {
      state.cart = newProductInCart
    }
  },
  actions: {
    [UPDATE_PRODUCT_IN_CART] ({ state, getters, commit }, { product, quantity }) {
      const item = state.cart.find(item => item.id === product.id)
      const newProduct = getters.newProduct(product, item, quantity)
      const newProductInCart = getters.updateProducts(newProduct)
      commit(UPDATE_PRODUCTS_IN_CART, newProductInCart)
    },

    [ADD_PRODUCT_IN_CART] ({ dispatch }, product) {
      dispatch(UPDATE_PRODUCT_IN_CART, { product, quantity: 1 })
    },

    [REMOVE_PRODUCT_IN_CART] ({ dispatch }, product) {
      dispatch(UPDATE_PRODUCT_IN_CART, { product, quantity: -1 })
    },

    [ALL_REMOVE_PRODUCT_IN_CART] ({ state, dispatch }, product) {
      const item = state.cart.find(item => item.id === product.id)
      dispatch(UPDATE_PRODUCT_IN_CART, { product, quantity: -item.count })
    }
  }
}
