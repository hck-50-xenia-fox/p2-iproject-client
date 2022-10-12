<script>
import { mapActions } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import { useUserStore } from "./stores/user";
export default {
  components: {
    RouterLink,
    RouterView,
    HelloWorld,
    Navbar,
  },
  methods: {
    ...mapActions(useUserStore, ["generateInvoice"]),
  },
};
</script>

<template>
  <section>
    <Navbar />
  </section>
  <RouterView />
</template>

<style></style>
