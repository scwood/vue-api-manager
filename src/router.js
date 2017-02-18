import Vue from 'vue'
import Router from 'vue-router'

import Root from 'components/Root'
import Login from 'components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Root,
      children: [
        { path: 'login', component: Login },
        { path: 'proxies', component: Root },
        { path: 'proxies/new', component: Root },
        { path: 'proxies/:id', component: Root },
      ]
    },
    { path: '*', redirect: '/login' },
  ]
})
