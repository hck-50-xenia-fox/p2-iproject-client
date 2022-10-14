import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import About from "../views/About.vue";
import Course from "../views/Course.vue";
import MyCourse from "../views/MyCourse.vue";


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
      path: "/course",
      name: "course",
      component: Course,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token")) {
          return { path: "/login" };
        }
      },
    },
    {
      path: "/mycourse",
      name: "mycourse",
      component: MyCourse,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token")) {
          return { path: "/login" };
        }
        if (!localStorage.getItem("transactionToken")) {
          return { path: "/course" };
        }
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
  ],
});

export default router;
