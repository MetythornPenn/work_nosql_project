import { createRouter, createWebHistory } from 'vue-router'

import dashboard from '../views/dashboard.vue'
import user from '../views/user.vue'
import book from '../views/book.vue'
import project from '../views/project.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/project',
    name : 'project',
    component : project
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/book',
    name: book,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/book.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router




