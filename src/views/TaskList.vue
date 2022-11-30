<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { useTaskStore } from "../stores/task";
import { mapActions, mapState } from "pinia";
import Cards from "../components/Cards.vue";
import { useEmployeeStore } from "../stores/employee";
export default {
  name: "Tasks",
  data() {
    return {
      EmployeeId: 0,
      TaskId: 0,
    };
  },
  components: { NavBar, Footer, Cards },
  methods: {
    ...mapActions(useTaskStore, ["fetchTask", "addEmployeeTask"]),
    addEmployeeTaskHandler() {
      this.addEmployeeTask({
        EmployeeId: this.EmployeeId,
        TaskId: this.TaskId,
      });
      this.EmployeeId = 0;
      this.TaskId = 0;
    },
    ...mapActions(useEmployeeStore, ["getEmployees"]),
  },
  computed: {
    ...mapState(useTaskStore, ["tasks"]),
    ...mapState(useEmployeeStore, ["employees"]),
  },
  created() {
    this.fetchTask();
    this.getEmployees();
  },
};
</script>
<template>
  <NavBar />
  <h2 class="text-dark text-center mt-5">Tasks</h2>
  <div
    class="d-flex justify-content-center text-center mb-3"
    style="width: 100%"
  >
    <form @submit.prevent="addEmployeeTaskHandler">
      <div class="card bg-dark p-3">
        <label class="text-white m-1">Employee Name</label>
        <select v-model="EmployeeId">
          <option
            v-for="employee in employees"
            :key="employee.id"
            :value="employee.id"
          >
            {{ employee.firstName }}
          </option>
        </select>
        <label class="text-white m-1">Task Name</label>
        <select v-model="TaskId" class="mb-3">
          <option v-for="task in tasks" :value="task.id">
            {{ task.title }}
          </option>
        </select>
        <button type="submit" class="btn btn-success">
          Submit to employee
        </button>
      </div>
    </form>
  </div>
  <div class="container">
    <div class="row">
      <Cards v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
  <div class="d-flex justify-content-center mb-3">
    <RouterLink to="/managers"
      ><button class="btn btn-secondary">Back</button></RouterLink
    >
  </div>
</template>
