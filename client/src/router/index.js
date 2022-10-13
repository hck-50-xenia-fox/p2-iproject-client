import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import RoomChatPage from "../views/RoomChatPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      beforeEnter: (to, from) => {
        // console.log("masuk ?");
        if (localStorage.getItem("access_token")) {
          router.push("/");
          return false;
        }
        return true;
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("access_token")) {
          router.push("/");
          return false;
        }
        return true;
      },
    },
    {
      path: "/chat",
      name: "chat",
      component: RoomChatPage,
    },
  ],
});

export default router;
