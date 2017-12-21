import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  products: [],
  categories: [],
  currentCategoryId: null,
  currentPage: 1,
  productsPerPage: 20,
  totalPages: null
}

const actions = {
  loadData ({ commit }) {
    axios.get('/static/data.json').then(response => {
      commit('SET_DATA', response.data)
    })
  },
  setActiveCategory ({ commit }, categoryId) {
    commit('SET_ACTIVE_CATEGORY', categoryId)
  },
  setCurrentPage ({ commit, state }, currentPage) {
    let newCurrentPage = currentPage < 1 ? 1 : currentPage
    newCurrentPage = newCurrentPage > state.totalPages ? state.totalPages : newCurrentPage
    commit('SET_CURRENT_PAGE', newCurrentPage)
  }
}

const mutations = {
  SET_DATA (state, data) {
    state.products = data.products
    state.categories = data.categories
  },
  SET_ACTIVE_CATEGORY (state, categoryId) {
    state.currentCategoryId = categoryId
  },
  SET_CURRENT_PAGE (state, currentPage) {
    state.currentPage = currentPage
  }
}

const getters = {
  categories: state => {
    return state.categories
  },
  filteredProducts: state => {
    let products = state.products.filter(product => {
      return !state.currentCategoryId || product.categoryId === state.currentCategoryId
    })
    state.totalPages = Math.ceil(products.length / state.productsPerPage)
    products = products.slice((state.currentPage - 1) * state.productsPerPage, state.currentPage * state.productsPerPage)
    return products
  },
  currentCategoryId: state => {
    return state.currentCategoryId
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
