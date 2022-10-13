import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Places from "../views/Places.vue";
import Hotels from "../views/Hotels.vue";
import Restaurants from "../views/Restaurants.vue";
import Attractions from "../views/Attractions.vue";
import Detail from "../views/Detail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomeView,
      children: [
        {
          path: "",
          component: Places,
        },
        {
          path: "Places",
          name: "Places",
          component: Places,
        },
        {
          path: "hotels",
          name: "Hotels",
          component: Hotels,
        },
        {
          path: "restaurants",
          name: "Restaurants",
          component: Restaurants,
        },
        {
          path: "attractions",
          name: "Attractions",
          component: Attractions,
        },
      ],
    },
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
      path: "/detail",
      name: "Detail",
      component: Detail,
    },
    // {},
  ],
});

router.beforeEach((to, from) => {
  if (
    localStorage.getItem("access_token") &&
    (to.name == "login" || to.name == "register")
  ) {
    return {
      path: "/",
    };
  }
});

export default router;
