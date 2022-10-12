import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/RegisterPage.vue'
import Home from '../views/HomePage.vue'
import Chat from '../views/ChatPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
  ]
})

export default router
