import VueRouter from 'vue-router'

import Home from './components/home.vue'
import Foo from './components/foo.vue'
import Bar from './components/bar.vue'

export {VueRouter}

export const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
