import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Routes from './routes';

Vue.use(VueRouter)

var router = new VueRouter(Routes);

// mount
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
