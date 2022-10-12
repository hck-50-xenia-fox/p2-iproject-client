<script>
import { mapState } from "pinia";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {

  components: {
    Navbar,
    RouterView,
  },
};
</script>

<template>
  <RouterView />
</template>
