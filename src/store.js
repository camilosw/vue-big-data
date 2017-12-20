import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentCategoryId: null
}

const actions = {
  setActiveCategory ({ commit }, categoryId) {
    commit('SET_ACTIVE_CATEGORY', categoryId)
  }
}

const mutations = {
  SET_ACTIVE_CATEGORY (state, categoryId) {
    state.currentCategoryId = categoryId
  }
}

const getters = {
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
