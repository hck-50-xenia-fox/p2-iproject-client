import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Favorite from "../views/CustomerFavorite.vue";
import DetailFood from "../views/DetailFood.vue";
import NotFound from "../views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
      meta: {
        reload: true,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Favorite,
    },
    {
      path: "/detailfood/:id",
      name: "detailfood",
      component: DetailFood,
    },
    { path: "/:pathMatch(.*)*", name: "notfound", component: NotFound },
  ],
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("access_token")) {
    if (localStorage.getItem("role") !== "Customer" && to.name === "favorites")
      next("/");
    else if (to.name === "signin" || to.name === "sinup") next("/");
    else next();
  } else next();
});

export default router;
