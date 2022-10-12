<script>
export default {
  name: "EmployeeCard",
  props: ["employee"],
};
</script>

<template>
  <div class="card-manager col-3 shadow rounded">
    <div class="card-title">
      <h2>{{ employee.firstName + " " + employee.lastName }}</h2>
      <div class="d-flex justify-content-end align-items-center">
        <h3 class="bi bi-fire icon"></h3>
      </div>
      <medium>Role : {{ employee.role }}</medium
      ><br />
      <small>Total Task : {{ employee.Tasks.length }}</small>
    </div>
    <div class="card-body"></div>
  </div>
</template>
