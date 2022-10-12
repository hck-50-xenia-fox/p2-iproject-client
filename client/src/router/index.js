import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NewsView from '../views/NewsView.vue'
import WishlistView from '../views/WishlistView.vue'
import LivePriceView from '../views/LivePriceView.vue'

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
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView
    },
    
  ]
})

router.beforeEach((to,from)=>{
  if(!localStorage.getItem('access_token') && to.name === 'wishlist'){
    return ({path : '/login'})
  }else if (localStorage.getItem('access_token') && to.name === 'login'){
    return ({path : '/'})
  }else if (!localStorage.getItem('access_token') && to.name === 'home'){
    return ({path : '/login'})
  }else if (!localStorage.getItem('access_token') && localStorage.getItem('status') ==='Free' && to.name === 'news'){
    return ({path : '/'})
  }else if (localStorage.getItem('access_token') && to.name === 'register'){
    return ({path : '/'})
  }
})
export default router
