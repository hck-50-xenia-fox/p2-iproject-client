import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardCompany from "../views/DashboardCompany.vue";
import DashboardManager from "../views/DashboardManager.vue";
import LoginView from "../views/LoginPage.vue";
import RegisterView from "../views/RegisterPage.vue";
import EmployeeTask from "../views/EmployeeTask.vue";
import ManagerForum from "../views/ManagerForum.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardCompany,
    },
    {
      path: "/managers",
      name: "manager",
      component: DashboardManager,
      children: [
        {
          path: "forums",
          name: "forums",
          component: ManagerForum,
        },
      ],
    },
    {
      path: "/employee",
      name: "",
      component: EmployeeTask,
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
  ],
});

export default router;
