import Vue from 'vue'

import App from './app.vue'
import {VueRouter, router} from './router'

Vue.use(VueRouter)

export default new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  replace: false
})
