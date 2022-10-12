import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from '../views/HomePage.vue'
import { LoginPage } from '../views/LoginPage.vue'
import { RegisterPage } from '../views/RegisterPage.vue'
import { PokemonListPage } from '../views/PokemonListPage.vue'
import { DetailPokemonPage } from '../views/DetailPokemonPage.vue'

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
      path: '/pokemons',
      name: 'pokemons',
      component: PokemonListPage
    },
    {
      path: '/pokemons/:id',
      name: 'DetailPokemon',
      component: DetailPokemonPage
    },
  ]
})

export default router
