import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import MyPurchase from "../views/MyPurchase.vue";
import PaymentPage from "../views/PaymentPage.vue";

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
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/payment/finish",
      name: "payment",
      component: PaymentPage,
    },
    {
      path: "/rents",
      name: "rents",
      component: MyPurchase,
      beforeEnter: (to, from, next) => {
        if (to.name === "rents" && !localStorage.getItem("access_token")) {
          next("/login");
        } else {
          next();
        }
      },
    },
  ],
});

export default router;
