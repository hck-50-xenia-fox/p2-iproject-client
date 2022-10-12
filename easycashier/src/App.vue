<script>
import { mapActions, mapWritableState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useUserStore } from "./stores/user";
export default {
  components: {
    RouterLink,
    RouterView,
    Navbar,
  },
  methods: {
    ...mapActions(useUserStore, ["generateInvoice"]),
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin"]),
  },
  created() {
    if (!localStorage.access_token) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <section>
    <Navbar v-if="isLogin" />
  </section>
  <RouterView />
</template>

<style></style>
