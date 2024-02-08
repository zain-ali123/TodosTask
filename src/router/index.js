import {  createRouter, createWebHashHistory } from 'vue-router'
import RegisterationView from '../views/RegisterationView.vue'
import LoginView from '../views/LoginView.vue'
import CreateTodoView from '../views/CreateTodoView.vue'
import ReadTodosView from '../views/ReadTodosView.vue'
import ManageTodosView from '../views/ManageTodosView.vue'
import WelcomePageView from '../views/WelcomePageView.vue'
const routes = [
  {
    path:'/',
    name:"welcomePage",
    component:WelcomePageView
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
    path: '/manageTodos',
    name: 'manageTodos',
    component: ManageTodosView
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
