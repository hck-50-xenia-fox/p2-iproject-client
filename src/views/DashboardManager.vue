<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";
import { mapWritableState } from "pinia";
import { useIndexStore } from "../stores";
export default {
  name: "DashboardManager",
  components: { NavBar, Footer, RouterLink },
  methods: {
    changeLoginType(page) {
      this.loginType = page;
    },
  },
  computed: {
    ...mapWritableState(useIndexStore, ["loginType"]),
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
        <button class="btn btn-secondary">Add Task</button>
        <button class="btn btn-secondary">View Tasks</button>
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Employee Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Role</medium><br />
          <small>Completed Task</small>
        </div>
        <div class="card-body"></div>
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Employee Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Role</medium><br />
          <small>Completed Task</small>
        </div>
        <div class="card-body"></div>
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Employee Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Role</medium><br />
          <small>Completed Task</small>
        </div>
        <div class="card-body"></div>
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Employee Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Role</medium><br />
          <small>Completed Task</small>
        </div>
        <div class="card-body"></div>
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Employee Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Role</medium><br />
          <small>Completed Task</small>
        </div>
        <div class="card-body"></div>
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Employee Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Role</medium><br />
          <small>Completed Task</small>
        </div>
        <div class="card-body"></div>
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Employee Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Role</medium><br />
          <small>Completed Task</small>
        </div>
        <div class="card-body"></div>
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Employee Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Role</medium><br />
          <small>Completed Task</small>
        </div>
        <div class="card-body"></div>
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Employee Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Role</medium><br />
          <small>Completed Task</small>
        </div>
        <div class="card-body"></div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<style>
.icon:hover {
  color: darkred;
}
.card-manager:hover {
  background-color: rgb(243, 243, 243);
}
</style>
