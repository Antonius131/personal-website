import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Init from '../components/Init'

/**
 *  Mobile components
 */
import Main from '../components/mobile/Main'
import Portfolio from '../components/mobile/Portfolio'
import AboutMe from '../components/mobile/AboutMe'
import MySkills from '../components/mobile/MySkills'

/**
 * Desktop components
 */
import MainDesktop from '../components/desktop/MainDesktop'

const routes = [
  {
    path: '/',
    component: Init
  },

  /**
   * Mobile routes
   */
  {
    path: '/mobile',
    component: Main
  },
  {
    path: '/mobile/works',
    component: Portfolio
  },
  {
    path: '/mobile/about',
    component: AboutMe
  },
  {
    path: '/mobile/skills',
    component: MySkills
  },

  /**
   * Dsektop routes
   */
  {
    path: '/desktop',
    component: MainDesktop
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
