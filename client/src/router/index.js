import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'
import DetailView from '../views/DetailView.vue'
import ChatRoomView from '../views/ChatRoomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/streaming/:streamId',
      name: 'streaming',
      component: DetailView
    },
    {
      path: '/liveForum',
      name: 'liveForum',
      component: ChatRoomView
    }
  ]
})

router.beforeEach((to, from) => {
  if (!localStorage.getItem('access_token') && to.name === 'profile') {
    return { path: '/' };
  } else if (localStorage.getItem('access_token') && to.name === 'register') {
    return { path: '/' };
  }
});


export default router
