import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '../components/Main'
import Portfolio from '../components/Portfolio'
import AboutMe from '../components/AboutMe'
import MySkills from '../components/MySkills'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/works',
    component: Portfolio
  },
  {
    path: '/about',
    component: AboutMe
  },
  {
    path: '/skills',
    component: MySkills
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
