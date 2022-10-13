<script>
import { mapActions, mapWritableState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useHistoryStore } from "./stores/history";
import { useUserStore } from "./stores/user";
export default {
  components: {
    RouterLink,
    RouterView,
    Navbar,
  },
  methods: {
    ...mapActions(useUserStore, ["generateInvoice"]),
    ...mapActions(useHistoryStore, ["GetReportData"]),
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin"]),
  },
  created() {
    this.GetReportData();
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
