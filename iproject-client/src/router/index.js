import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProductView from '../views/ProductView.vue'
import FormAdd from '../components/FormAdd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/product/add',
      name: 'product-add',
      component: FormAdd
    },
  ]
})

router.beforeEach((to) => {
  if(!localStorage.getItem("access_token") && to.name === "home"){
    return {path: "/login"}
  } else if(localStorage.getItem("access_token") && to.name === "login"){
    return {path: "/"}
  } else if(localStorage.getItem("access_token") && to.name === "register"){
    return {path: "/"}
  } else if(!localStorage.getItem("access_token") && to.name === "product"){
    return {path: "/login"}
  } else if(!localStorage.getItem("access_token") && to.name === "product-add"){
    return {path: "/login"}
  }
})

export default router
