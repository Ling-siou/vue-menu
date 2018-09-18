import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuescroll from 'vue-scroll'

Vue.use(vuescroll, {debounce: 600})
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App),
  components: { App },
  router,
})
