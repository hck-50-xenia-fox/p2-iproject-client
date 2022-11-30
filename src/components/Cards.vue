<script>
export default {
  name: "Cards",
  props: ["task"],
};
</script>

<template>
  <div class="col-3 mb-4">
    <div
      class="card shadow p-2 mb-4 rounded"
      style="width: 18rem; background-color: white"
    >
      <div class="card-body">
        <h5 class="card-title">{{ task.title }}</h5>
        <p class="card-text">
          {{ task.description }}
        </p>
      </div>
    </div>
  </div>
</template>
