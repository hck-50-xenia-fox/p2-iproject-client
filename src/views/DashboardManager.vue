<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useIndexStore } from "../stores";
import { useTaskStore } from "../stores/task";
import { useEmployeeStore } from "../stores/employee";
import EmployeeCard from "../components/EmployeeCard.vue";
export default {
  name: "DashboardManager",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  components: { NavBar, Footer, RouterLink, EmployeeCard },
  methods: {
    ...mapActions(useTaskStore, ["addTask", "addEmployeeTask"]),
    ...mapActions(useEmployeeStore, ["getEmployees"]),

    changeLoginType(page) {
      this.loginType = page;
    },
    addTaskHandler() {
      this.addTask({
        title: this.title,
        description: this.description,
      });
      this.title = "";
      this.description = "";
    },
  },
  computed: {
    ...mapWritableState(useIndexStore, ["loginType"]),
    ...mapState(useEmployeeStore, ["employees"]),
  },
  created() {
    this.getEmployees();
  },
};
</script>

<template>
  <NavBar />
  <section>
    <div class="row gap-5 justify-content-center" style="width: 100%">
      <h2 class="d-flex justify-content-center m-3 text-black">
        Your Employees
      </h2>
      <div class="d-flex justify-content-center gap-4">
        <RouterLink @click="changeLoginType('employee')" to="/register">
          <button class="btn btn-secondary">Add Employee</button>
        </RouterLink>
        <RouterLink to="/managers/tasks">
          <button class="btn btn-secondary">View Tasks</button>
        </RouterLink>
        <RouterLink to="/managers/forums">
          <button class="btn btn-secondary">Forums</button>
        </RouterLink>
      </div>
      <form @submit.prevent="addTaskHandler">
        <div class="d-flex justify-content-center text-center gap-4">
          <div class="card bg-dark p-3">
            <label class="text-white m-1">Title</label>
            <input type="text" v-model="title" />
            <label class="text-white m-1">Description</label>
            <textarea
              class="mb-2"
              v-model="description"
              cols="15"
              rows="5"
            ></textarea>
            <button type="submit" class="btn btn-success">Add Task</button>
          </div>
        </div>
      </form>
      <div class="container">
        <div class="row justify-content-center m-5 gap-4">
          <EmployeeCard
            v-for="employee in employees"
            :key="employee.id"
            :employee="employee"
          />
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<style>
.icon:hover {
  color: darkred;
}
.card-manager {
  background-color: white;
}

.card-manager:hover {
  background-color: rgb(207, 207, 207);
}
</style>
