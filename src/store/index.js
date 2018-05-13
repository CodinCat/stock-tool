import Vue from 'vue'
import Vuex from 'vuex'
import calculator from './calculator'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    calculator,
  },
})
