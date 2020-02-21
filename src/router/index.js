import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記

Vue.use(VueRouter)

Vue.use(VueAxios, axios) //追記

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('../views/Weather.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
