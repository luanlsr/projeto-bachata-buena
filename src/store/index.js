import Vue from 'vue'
import Vuex from 'vuex'
import {pessoas, aulasSexta, aulasSabado, aulasDomingo} from './data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pessoas,
    aulasSexta,
    aulasSabado,
    aulasDomingo,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
