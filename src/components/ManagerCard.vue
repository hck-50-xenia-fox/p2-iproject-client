<script>
import { mapActions } from "pinia";
import { useManagerStore } from "../stores/manager";

export default {
  name: "ManagerCard",
  props: ["manager"],
  methods: {
    ...mapActions(useManagerStore, ["fireManager"]),
    handleDelete(id) {
      this.fireManager(id);
    },
  },
};
</script>

<template>
  <div class="card-manager col-3 shadow">
    <div class="card-title">
      <h2>{{ manager.firstName }}</h2>
      <div class="d-flex justify-content-end align-items-center">
        <a href="" @click.prevent="handleDelete(manager.id)">
          <h3 class="bi bi-fire icon"></h3
        ></a>
      </div>
      <medium>Role : {{ manager.role }}</medium
      ><br />
      <small>Total Subordinate : {{ manager.Employees.length }}</small>
    </div>
  </div>
</template>
