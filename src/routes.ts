import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About }
]

export default { routes };