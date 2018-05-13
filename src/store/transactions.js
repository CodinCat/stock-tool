const state = {
  records: [],
}

const mutations = {
  addRecord(state, record) {
    state.records.push(record)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
