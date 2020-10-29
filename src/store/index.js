import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0
  },
  mutations: {
    setTotal (state, res) {
      state.total = res;
    },
  },
  actions: {
  },
  modules: {
  }
})
