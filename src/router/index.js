import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
const About = () =>
  import(/* webpackChunkName: "About" */ '../views/About.vue')
const Works = () =>
  import(/* webpackChunkName: "Works" */ '../views/Works.vue')
const Social = () =>
  import(/* webpackChunkName: "Social" */ '../views/Social.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/social',
    name: 'Social',
    component: Social
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
