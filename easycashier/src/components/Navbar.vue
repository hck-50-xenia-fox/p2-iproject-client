<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      data: "",
    };
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
    handleLogout() {
      this.logout();
    },
  },
};
</script>
<template>
  <header
    class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
  >
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"
      >Company name</a
    >

    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="" @click.prevent="handleLogout"
          >Sign out</a
        >
      </div>
    </div>
  </header>
</template>
