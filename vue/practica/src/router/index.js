import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/pitagoras',
    name: 'Pitagoras',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pitagoras.vue')
  },
  {
    path: '/cotizaciones',
    name: 'Cotizaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/CotizacionesVue.vue')
  },
  {
    path:'/cliente',
    name:'Cliente',
    component: () => import('../views/Cliente.vue')
  },
  {
    path:'/socket',
    name:'Socket',
    component: () => import('../views/Socket.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
