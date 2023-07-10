import { createRouter, createWebHistory } from 'vue-router'

import dashboard from '../views/dashboard.vue'
import user from '../views/user.vue'
import book from '../views/book.vue'
import project from '../views/project.vue'

const routes = [

  //localhost:8080:/ router (dashboard)
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },

  //localhost:8080:/project router 
  {
    path: '/project',
    name : 'project',
    component : project
  },

  //localhost:8080:/user router 
  {
    path: '/user',
    name: 'user',
    component: user
  },

  //localhost:8080:/book router 
  {
    path: '/book',
    name: book,
    component: () => import(/* webpackChunkName: "about" */ '../views/book.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router




