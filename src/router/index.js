import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardCompany from "../views/DashboardCompany.vue";
import DashboardManager from "../views/DashboardManager.vue";
import LoginView from "../views/LoginPage.vue";
import RegisterView from "../views/RegisterPage.vue";
import EmployeeTask from "../views/EmployeeTask.vue";
import ManagerForum from "../views/ManagerForum.vue";
import TaskList from "../views/TaskList.vue";

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
    },
    {
      path: "/managers/tasks",
      name: "tasks",
      component: TaskList,
    },
    {
      path: "/managers/forums",
      name: "forums",
      component: ManagerForum,
    },
    {
      path: "/employee",
      name: "employee",
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

router.beforeEach((to, from) => {
  if (localStorage.getItem("access_token") && to.name === "login") {
    return {
      path: "/",
    };
  } else if (
    (!localStorage.getItem("access_token") && to.name === "employee") ||
    (!localStorage.getItem("access_token") && to.name === "manager") ||
    (!localStorage.getItem("access_token") && to.name === "dashboard")
  ) {
    return {
      path: "/",
    };
  }
});

export default router;
