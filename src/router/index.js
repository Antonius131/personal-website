import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MainComponent from '../components/MainComponent'
import PortfolioPreview from '../components/PortfolioPreview'
import AboutMe from '../components/AboutMe'

const routes = [
  {
    path: '/',
    component: MainComponent
  },
  {
    path: '/works',
    component: PortfolioPreview
  },
  {
    path: '/about',
    component: AboutMe
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
