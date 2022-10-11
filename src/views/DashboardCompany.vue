<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "Dashboard",
  components: { NavBar },
};
</script>

<template>
  <NavBar />
  <div class="row dashboard-cards">
    <h2 class="d-flex justify-content-center m-5 text-black">Managers</h2>
    <div class="card col-md-4">
      <div class="card-title">
        <h2>Manager Name</h2>
        <div class="d-flex justify-content-end align-items-center">
          <h3 class="bi bi-fire icon"></h3>
        </div>
        <medium>Manager Role</medium><br />
        <small>Total Subordinate</small>
      </div>
    </div>
    <div class="card col-md-4">
      <div class="card-title">
        <h2>Manager Name</h2>
        <div class="d-flex justify-content-end align-items-center">
          <h3 class="bi bi-fire icon"></h3>
        </div>
        <medium>Manager Role</medium><br />
        <small>Total Subordinate</small>
      </div>
    </div>
    <div class="card col-md-4">
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
</template>

<style></style>
