import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/RegisterPage.vue'
import Home from '../views/HomePage.vue'
import Chat from '../views/ChatPage.vue'
import Swal from "sweetalert2";

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
      component: Home,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token")) {
          Swal.fire({
            title: 'Error!',
            text: 'You Need To Login First!',
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
          return { path: "/login" };
        }
      },
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token")) {
          Swal.fire({
            title: 'Error!',
            text: 'You Need To Login First!',
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
          return { path: "/login" };
        }
      },
    },
  ]
})

router.beforeEach((to, from) => {
  if (!localStorage.access_token && to.name == "home") {
    return "/login";
  }
  if (localStorage.access_token && to.name == "Login") {
    return "/";
  }
});

export default router
