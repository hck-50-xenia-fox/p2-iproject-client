<script>
  import { mapActions } from 'pinia';
  import { RouterLink } from 'vue-router'
  import { useFootballStore } from '../stores/football';
  export default {
    name: "navbar",

    components: {
      RouterLink
    },  

    methods: {
      ...mapActions(useFootballStore, ["doLogout"])
    },

  }
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: black;">
    <div class="container-fluid">
      <RouterLink to="/football" style="color:black; text-decoration: none;">
        <a class="navbar-brand" href="#"><i class="bi bi-trophy"></i> - iScore</a>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/football" style="color:black; text-decoration: none;">
                <a class="nav-link" href="#">Live Score</a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/premier-league" style="color:black; text-decoration: none;">
                <a class="nav-link" href="#">Premier League</a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/champions-league" style="color:black; text-decoration: none;">
                <a class="nav-link" href="#">Champions League</a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/highlight" style="color:black; text-decoration: none;">
                <a class="nav-link" href="#">Highlights</a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/chat-room" style="color:black; text-decoration: none;">
                <a class="nav-link" href="#">Chat</a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <a @click.prevent="doLogout" class="nav-link" href="#"><i class="bi bi-arrow-left-square-fill"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>