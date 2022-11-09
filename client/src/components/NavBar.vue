<script>
import { mapActions, mapWritableState } from "pinia";
import { useIndexStore } from "../stores";

export default {
  name: "NavBar",
  methods: {
    ...mapActions(useIndexStore, ["handleLogOut", "checkLogin"]),
  },
  computed: {
    ...mapWritableState(useIndexStore, ["isLogin", "whatPage"]),
  },
};
</script>

<template>
  <nav
    class="navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom"
    id="navbar-menu"
  >
    <div class="container-fluid">
      <a
        @click.prevent="$router.push('/')"
        class="navbar-brand flex me-30"
        href="#"
        ><img
          src="../assets/Spotify_Logo_CMYK_Green.png"
          style="max-width: 100px; margin-top: -7px"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample09">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              @click.prevent="$router.push('/')"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a @click="$router.push('/premium')" class="nav-link" href="#"
              >Premium</a
            >
          </li>
        </ul>
        <form role="search">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div class="navbar-nav mr-auto align-items-sm-center">
          <a
            v-if="isLogin === true"
            @click.prevent="handleLogOut"
            class="nav-link"
            href="#"
            >Log Out</a
          >
          <router-link class="nav-link" v-if="isLogin === false" to="/login"
            >Log In</router-link
          >
          <!-- <a
            v-if="isLogin === false"
            @click.prevent="$router.push('/login')"
            class="nav-link"
            >Log In</a
          > -->
        </div>
      </div>
    </div>
  </nav>
</template>
