import VueRouter from 'vue-router'

import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

export default new VueRouter({ routes })