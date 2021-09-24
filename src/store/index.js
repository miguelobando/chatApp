import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import chat from './modules/chat'
export default function () {
  const Store = new Vuex.Store({
    modules: {
      chat
    }
  })
  return Store
}
