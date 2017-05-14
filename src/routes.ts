import { About, Home } from './pages';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About }
]

export default { routes };