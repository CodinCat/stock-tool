const state = {
  discount: 0.6,
  bindQuantity: true,
  buyPrice: 50.5,
  buyQuantity: 10,
  sellPrice: 50.5,
  sellQuantity: 10,
}

const mutations = {
  setDiscount(state, discount) {
    state.discount = discount
  },
  toggleBindQuantity(state) {
    state.bindQuantity = !state.bindQuantity
  },
  setBuyPrice(state, buyPrice) {
    state.buyPrice = buyPrice
  },
  setBuyQuantity(state, buyQuantity) {
    state.buyQuantity = buyQuantity
    if (state.bindQuantity && state.sellQuantity !== buyQuantity) {
      state.sellQuantity = buyQuantity
    }
  },
  setSellPrice(state, sellPrice) {
    state.sellPrice = sellPrice
  },
  setSellQuantity(state, sellQuantity) {
    state.sellQuantity = sellQuantity
    if (state.bindQuantity && state.buyQuantity !== sellQuantity) {
      state.buyQuantity = sellQuantity
    }
  },
}

const getters = {
  buyTotal: state => state.buyPrice * state.buyQuantity * 1000,

  sellTotal: state => state.sellPrice * state.sellQuantity * 1000,

  earningPer1: state => Math.round((state.sellPrice - state.buyPrice) * 1000),

  totalEarning: (state, getters) =>
    Math.round(getters.sellTotal - getters.buyTotal),

  calcFee: state => totalPrice =>
    Math.max(Math.floor(totalPrice * state.discount * 0.001425), 20),

  buyFee: (state, getters) => getters.calcFee(getters.buyTotal),

  sellFee: (state, getters) => getters.calcFee(getters.sellTotal),

  tax: state => Math.floor(state.sellPrice * state.sellQuantity * 1000 * 0.003),

  totalFees: (state, getters) => getters.buyFee + getters.sellFee + getters.tax,
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
}
