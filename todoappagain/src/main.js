import Vue from 'vue'
import App from './App.vue'
import Store from './Store'

Vue.config.productionTip = false

new Vue({
  Store,
  render: h => h(App),
}).$mount('#app')
