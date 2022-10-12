<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";
import { mapWritableState } from "pinia";
import { useIndexStore } from "../stores";
export default {
  name: "DashboardCompany",
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
      <h2 class="d-flex justify-content-center m-4 text-black">Managers</h2>
      <div class="d-flex justify-content-center gap-4">
        <RouterLink @click="changeLoginType('companyManager')" to="/register"
          ><button class="btn btn-secondary">Add Managers</button></RouterLink
        >
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Manager Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Manager Role</medium><br />
          <small>Total Subordinate</small>
        </div>
      </div>
      <div class="card-manager col-3 shadow">
        <div class="card-title">
          <h2>Manager Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Manager Role</medium><br />
          <small>Total Subordinate</small>
        </div>
      </div>
      <div class="card col-3 shadow">
        <div class="card-title">
          <h2>Manager Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Manager Role</medium><br />
          <small>Total Subordinate</small>
        </div>
      </div>
      <div class="card col-3 shadow">
        <div class="card-title">
          <h2>Manager Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Manager Role</medium><br />
          <small>Total Subordinate</small>
        </div>
      </div>
      <div class="card col-3 shadow">
        <div class="card-title">
          <h2>Manager Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Manager Role</medium><br />
          <small>Total Subordinate</small>
        </div>
      </div>
      <div class="card col-3 shadow">
        <div class="card-title">
          <h2>Manager Name</h2>
          <div class="d-flex justify-content-end align-items-center">
            <h3 class="bi bi-fire icon"></h3>
          </div>
          <medium>Manager Role</medium><br />
          <small>Total Subordinate</small>
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
.card-manager:hover {
  background-color: rgb(202, 202, 202);
}
</style>
