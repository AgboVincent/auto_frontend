import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Flutterwave from 'vue-flutterwave';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-895362a74986153380262d89bfdc9b8a-X' })

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
