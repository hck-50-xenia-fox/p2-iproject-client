import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import RentMotorcycle from '../pages/RentMotorcycle.vue'
import AboutUs from '../pages/AboutUs.vue'
import DetailMotor from '../pages/DetailMotor.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/rental',
      name: 'rent',
      component: RentMotorcycle
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/motorcycles/:id',
      name: 'detail',
      component: DetailMotor
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
  ]
})

export default router
