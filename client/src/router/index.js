import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import About from "../views/About.vue";
import Course from "../views/Course.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/courses",
      name: "courses",
      component: Course,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
  ],
});

export default router;
