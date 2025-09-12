import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const history = createWebHashHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/ol/dbview',
    name: 'oldbview',
    component: () => import('@/views/ol/dbView.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('@/views/intro.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/views/Portfolio.vue'),
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About.vue'),
    meta: {
      layout: 'default',
    },
  },
]
const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes,
})

export { router }
