const state = {
  user: '',
  time: new Date(),
  messages: []
}

const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  addMessage (state, payload) {
    state.messages.push(payload)
  },
  setTime (state, payload) {
    state.time = payload
  }
}

const actions = {
  setUser: ({ commit }, payload) => {
    commit('setUser', payload)
  },
  addMessage: ({ commit }, payload) => {
    commit('addMessage', payload)
  },
  setTime: ({ commit }) => {
    commit('setTime', new Date())
  }
}

const getters = {
  time: (state) => {
    return state.time
  },
  user: (state) => {
    return state.user
  },
  messages: (state) => {
    return state.messages
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
