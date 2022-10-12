import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import PremierLeague from "../views/PremierLeague.vue";
import VideoHighlight from "../views/VideoHighlight.vue";

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
    {
      path: "/highlight",
      name: "highlight",
      component: VideoHighlight,
    },
  ],
});

router.beforeEach((to, from) => {
  let token = localStorage.getItem("access_token");
  if (token && to.name === "login") {
    return {
      path: "/football",
    };
  } else if (token && to.name === "register") {
    return {
      path: "/football",
    };
  } else if (!token && to.name === "premierLeague") {
    return {
      path: "/login",
    };
  } else if (!token && to.name === "home") {
    return {
      path: "/login",
    };
  } else if (!token && to.name === "highlight") {
    return {
      path: "/login",
    };
  }
});

export default router;
