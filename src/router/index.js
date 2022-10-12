import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import RentMotorcycle from '../pages/RentMotorcycle.vue'


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
  ]
})

export default router
