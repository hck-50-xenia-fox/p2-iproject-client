<script>
import { mapActions, mapWritableState } from "pinia";
import { RouterLink } from "vue-router";
import { useIndexStore } from "../stores";
export default {
  name: "NavBar",
  components: RouterLink,
  methods: {
    ...mapActions(useIndexStore, ["logout"]),
  },
  computed: {
    ...mapWritableState(useIndexStore, ["loginStatus"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.loginStatus = true;
    }
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-5">
      <RouterLink to="/" class="navbar-brand" href="">Tuesday.com</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
          <li class="nav-item" v-if="loginStatus">
            <a class="nav-link" @click.prevent="logout" href="">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
