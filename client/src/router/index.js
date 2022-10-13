import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from '../views/LoginView.vue'
import ChatroomView from '../views/ChatroomView.vue'
import CharactersView from '../views/CharactersView.vue'
import SummonsView from '../views/SummonsView.vue'
import RegisterView from '../views/RegisterView.vue'
import MediaView from '../views/MediaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: ChatroomView
    },
    {
      path: '/characters',
      name: 'characterView',
      component: CharactersView
    },
    {
      path: '/summons',
      name: 'summonView',
      component: SummonsView
    },
    {
      path: '/register',
      name: 'registerView',
      component: RegisterView
    },
    {
      path: '/media',
      name: 'mediaView',
      component: MediaView
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
