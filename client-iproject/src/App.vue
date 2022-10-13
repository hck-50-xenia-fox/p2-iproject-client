<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    RouterView,
    Navbar
}
};
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style></style>
