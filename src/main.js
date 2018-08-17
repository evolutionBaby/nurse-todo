import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import modules from './store'
Vue.use(Vuex)

const store = new Vuex.Store(modules)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
