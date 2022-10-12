import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import RentMotorcycle from '../pages/RentMotorcycle.vue'
import AboutUs from '../pages/AboutUs.vue'


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
  ]
})

export default router
