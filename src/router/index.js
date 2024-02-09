import {  createRouter, createWebHashHistory } from 'vue-router'

import RegisterationView from '../views/RegisterationView.vue'
import LoginView from '../views/LoginView.vue'

import CreateTodoView from '../views/userViews/CreateTodoView.vue'
import ReadTodosView from '../views/userViews/ReadTodosView.vue'
import ManageTodosView from '../views/userViews//ManageTodosView.vue'
import LayoutView from '../views/userViews/LayoutView'

import WelcomePageView from '../views/visitorViews/WelcomePageView.vue'
const routes = [
  {
    path:'/',
    name:"welcomePage",
    component:WelcomePageView,
    meta: { requiresGuest: true }
  },
   {
    path: '/registeration',
    name: 'registeration',
    component: RegisterationView,
    meta: { requiresGuest: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresGuest: true }
  },
  {
    path:'/',
    name:'layout',
    component:LayoutView,
    meta: { requiresAuth: true },
    children:[

        
      {
        path: '',
        name: 'readTodos',
        component: ReadTodosView,
       
      },
      {

        path: 'create-todo',
        name: 'createTodo',
        component: CreateTodoView,
      
      },
  
      {
        path: 'manage-todo',
        name: 'manageTodos',
        component: ManageTodosView
      },

    ]
  },


 
]




const router = createRouter({
  history: createWebHashHistory(),
  routes
})




router.beforeEach((to, from, next) => {
  const userAuthenticated = localStorage.getItem("token");

  if (to.meta.requiresAuth && !userAuthenticated) {
    next({ name: 'WelcomePageView' });
  } else if (to.meta.requiresGuest && userAuthenticated) {
    next({ name: 'layout' });
  } else {
    next();
  }
});

export default router
