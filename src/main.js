import Vue from 'vue'

import App from './app.vue'
import {VueRouter, router} from './router'
import {VueApollo, apolloClient} from './apollo'

Vue.use(VueRouter)
Vue.use(VueApollo, {apolloClient})

export default new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  replace: false
})
