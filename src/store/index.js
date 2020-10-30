import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    supuser: []
  },
  mutations: {
    setTotal (state, res) {
      state.total = res;
    },
    setSupuser (state, res) {
      state.supuser = res;
    },
  },
  actions: {
  },
  modules: {
  }
})
