import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import PremierLeague from "../views/PremierLeague.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/football",
      name: "home",
      component: Home,
    },
    {
      path: "/premier-league",
      name: "premierLeague",
      component: PremierLeague,
    },
  ],
});

export default router;
