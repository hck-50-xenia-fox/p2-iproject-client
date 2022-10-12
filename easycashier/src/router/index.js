import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Inventory from "../views/Inventory.vue";
import Invoice from "../views/Invoice.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/inventory",
      name: "inventory",
      component: Inventory,
    },
    {
      path: "/invoice",
      name: "invoice",
      component: Invoice,
    },
    //
  ],
});
router.beforeEach((to, from) => {
  if (!localStorage.access_token && to.name == "home") {
    return "/login";
  }
  if (localStorage.access_token && to.name == "Login") {
    return "/";
  }
});

export default router;
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (About.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import('../views/AboutView.vue')
// }
