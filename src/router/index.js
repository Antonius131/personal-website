import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MainComponent from '../components/MainComponent'
import PortfolioPreview from '../components/PortfolioPreview'

const routes = [
  {
    path: '/',
    component: MainComponent
  },
  {
    path: '/works',
    component: PortfolioPreview
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
