import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router';

import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'

import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
