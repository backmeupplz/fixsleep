import AppStore from '@/store/modules/AppStore'
import persistentState from '@/store/plugins/persistentState'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    AppStore,
  },
  plugins: [persistentState],
})

export default store
