<script>
export default {
  name: "ManagerCard",
  props: ["manager"],
};
</script>

<template>
  <div class="card-manager col-3 shadow">
    <div class="card-title">
      <h2>{{ manager.firstName }}</h2>
      <div class="d-flex justify-content-end align-items-center">
        <h3 class="bi bi-fire icon"></h3>
      </div>
      <medium>Role : {{ manager.role }}</medium
      ><br />
      <small>Total Subordinate : {{ manager.Employees.length }}</small>
    </div>
  </div>
</template>
