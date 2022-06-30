import Vue from 'vue'
import Vuex from 'vuex'
import {pessoas, quartos, aulasSexta, aulasSabado, aulasDomingo} from './data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pessoas,
    quartos,
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
