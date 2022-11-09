import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import MyPlaylist from "../views/MyPlaylist.vue";
import AlbumDetail from "../views/AlbumDetail.vue";
import NewRelease from "../views/NewRelease.vue";
import Premium from "../views/Premium.vue";

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
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/album/:id",
      name: "album",
      component: AlbumDetail,
    },
    {
      path: "/my-playlist",
      name: "myplaylist",
      component: MyPlaylist,
    },
    {
      path: "/new-release",
      name: "newrelease",
      component: NewRelease,
    },
    {
      path: "/premium",
      name: "premium",
      component: Premium,
    },
  ],
});

router.beforeEach((to, from) => {
  if (localStorage.getItem("access_token") && to.name === "login") {
    return { path: "/new-release" };
  }
});

export default router;
