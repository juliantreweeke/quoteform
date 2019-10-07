import Vue from 'vue'
import Router from 'vue-router'

import Admin from '../components/Admin.vue'
import Main from '../components/Main.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
  ]
})
