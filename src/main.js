import VueRouter from 'vue-router';
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';

window.Vue = require('vue');
Vue.use(VueRouter);

import App from './App.vue';
import Root from './Root.vue';
import router from './router';


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  router,
  render: h => h(Root)
}).$mount('#root')