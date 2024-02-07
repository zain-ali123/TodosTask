import {  createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterationView from '../views/RegisterationView.vue'
import LoginView from '../views/LoginView.vue'
import CreateTodoView from '../views/CreateTodoView.vue'
import ReadTodosView from '../views/ReadTodosView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registeration',
    name: 'registeration',
    component: RegisterationView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/createTodo',
    name: 'createTodo',
    component: CreateTodoView
  },
  {
    path: '/readTodos',
    name: 'readTodos',
    component: ReadTodosView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
