<script>
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  watch: {
    $route(to, from) {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
  },
  methods: {
    handleLogout() {
      this.isLogin = false;
      localStorage.clear();
    },
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          src="https://i.pinimg.com/736x/6f/35/0d/6f350d177d15776f7874b5c4d0e68a5b.jpg"
          class="d-inline-block me-2"
          width="80"
          alt=""
      /></a>
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Feed</router-link>
          </li>
          <!-- <li class="nav-item" v-if="isLogin">
            <router-link class="nav-link" to="/">Premium</router-link>
          </li> -->
          <li class="nav-item" v-if="isLogin">
            <router-link class="nav-link" to="/chat">Chat</router-link>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="isLogin">
            <a class="nav-link" @click.prevent="handleLogout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br />
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
