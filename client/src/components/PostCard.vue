<script>
export default {
  data() {
    return {};
  },
  props: ["post"],
};
</script>
<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ post.id }}</h5>
      <p class="card-text">{{ post.text }}</p>
      <a href="#" class="btn btn-primary">Like</a>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 30%;
  padding: 1rem;
  margin-bottom: 1rem;
}

.card-body {
  color: black;
}
</style>