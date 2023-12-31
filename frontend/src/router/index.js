import { createRouter, createWebHistory } from 'vue-router'

import dashboard from '../views/dashboard.vue'
import user from '../views/user.vue'
import post from '../views/post.vue'
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

  {
    path: '/post',
    name: 'post',
    coponent: post
  }

  //localhost:8080:/book router 
  // {
  //   path: '/post',
  //   name: post,
  //   component: () => import(/* webpackChunkName: "about" */ '../views/post.vue')
  // }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router




