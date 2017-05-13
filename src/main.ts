import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Router from './router';

Vue.use(VueRouter)

// mount
new Vue({
  el: '#app',
  Router,
  render: h => h(App)
})
