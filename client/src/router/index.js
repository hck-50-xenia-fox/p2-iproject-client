import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../views/HomePage.vue";
// import DetailPage from "../views/DetailPage.vue";
// import LoginPage from "../views/LoginPage.vue";
// import SearchPage from "../views/SearchPage.vue";
// import ChannelDetail from "../views/ChannelDetail.vue";
// import RegisterPage from "../views/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomePage,
    // },
    // {
    //   path: "/detail/:id",
    //   name: "detail",
    //   component: DetailPage,
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: LoginPage,
    // },
    // {
    //   path: "/register",
    //   name: "register",
    //   component: RegisterPage,
    // },
    // {
    //   path: "/search/:id",
    //   name: "search",
    //   component: SearchPage,
    // },
    // {
    //   path: "/channeldetail/:id",
    //   name: "channeldetail",
    //   component: ChannelDetail,
    // },
  ],
});

router.beforeEach((to, from) => {
  if (!localStorage.getItem("access_token") && to.name === "home") {
    return { name: "login" };
  } else if (!localStorage.getItem("access_token") && to.name === "detail") {
    return { name: "login" };
  } else if (!localStorage.getItem("access_token") && to.name === "search") {
    return { name: "login" };
  } else if (
    !localStorage.getItem("access_token") &&
    to.name === "channeldetail"
  ) {
    return { name: "login" };
  } else if (localStorage.getItem("access_token") && to.name === "login") {
    return { name: "home" };
  } else if (localStorage.getItem("access_token") && to.name === "register") {
    return { name: "home" };
  }
});
export default router;
