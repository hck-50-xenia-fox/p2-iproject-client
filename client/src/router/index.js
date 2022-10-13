import { createRouter, createWebHistory } from 'vue-router'
import  HomePage from '../views/HomePage.vue'
import  LoginPage  from '../views/LoginPage.vue'
import  RegisterPage  from '../views/RegisterPage.vue'
import  PokemonListPage  from '../views/PokemonListPage.vue'
import  DetailPokemonPage  from '../views/DetailPokemonPage.vue'
import  ProfileDetailPage  from '../views/ProfileDetailPage.vue'
import  ProfileEditPage from '../views/ProfileEditPage.vue'
import  QuestionsAddPage from '../views/AddQuestionsPage.vue'
import MatchmakingPage from '../views/MatchmakingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
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
    {
      path: '/profile',
      name: 'profile',
      component: ProfileDetailPage
    },
    {
      path: '/profile/:username',
      name: 'editProfile',
      component: ProfileEditPage
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: PokemonListPage
    },
    {
      path: '/pokemons/:name',
      name: 'DetailPokemon',
      component: DetailPokemonPage
    },
    {
      path: '/questions',
      name: 'AddQuestions',
      component: QuestionsAddPage
    },
    {
      path: '/matchmaking',
      name: 'matchmaking',
      component: MatchmakingPage
    }
  ]
})

router.beforeEach((to, from) => {
  if (!localStorage.getItem('access_token') && to.name === 'matchmaking' || !localStorage.getItem('access_token') && to.name === 'AddQuestions' || !localStorage.getItem('access_token') && to.name === 'DetailPokemon' || !localStorage.getItem('access_token') && to.name === 'pokemons' || !localStorage.getItem('access_token') && to.name === 'editProfile' || !localStorage.getItem('access_token') && to.name === 'profile' || !localStorage.getItem('access_token') && to.name === 'home') {
    return { path : '/login'}
  } else if (localStorage.getItem('access_token') && to.name === 'login' || localStorage.getItem('access_token') && to.name === 'register') {
    return { path : '/'}
  }
})

export default router
