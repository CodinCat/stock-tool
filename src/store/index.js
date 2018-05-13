import Vue from 'vue'
import Vuex from 'vuex'
import calculator from './calculator'
import transactions from './transactions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    calculator,
    transactions,
  },
})
