import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import storeModules from './store'

Vue.use(Vuex)
const store = new Vuex.Store(storeModules)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
