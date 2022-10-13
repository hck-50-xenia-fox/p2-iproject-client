import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HeroesView from '../views/HeroesView.vue'
import TeamsView from '../views/TeamsView.vue'
import HighlightView from '../views/HighlightView.vue'
import MatchesView from '../views/MatchesView.vue'
import TournamentsView from '../views/TournamentsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: HeroesView
    },
    {
      path: '/highlight/:name',
      name: 'highlight',
      component: HighlightView
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView
    },
    {
      path: '/matches',
      name: 'matches',
      component: MatchesView
    },
    {
      path: '/tournaments',
      name: 'tournaments',
      component: TournamentsView
    }
  ]
})
router.beforeEach((to, from) => {
  if(localStorage.getItem("access_toqen") && (to.name == 'login' || to.name == 'register')){
    return({
      path: '/'
    })
  }else if(!localStorage.getItem("access_toqen") && (to.name != 'login' && to.name != 'register')){
    return({
      path: '/login'
    })
  }
})

export default router
