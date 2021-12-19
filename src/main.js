import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import bootstrap from 'bootstrap'

require('./assets/css/styles.css');

Vue.config.productionTip = false

new Vue({
  // bootstrap,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
