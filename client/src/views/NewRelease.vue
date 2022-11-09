<script>
import NavBar from "../components/NavBar.vue";
import Cards from "../components/Cards.vue";
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import Headline from "../components/Headline.vue";
import Carousel from "../components/Carousel.vue";
export default {
  name: "NewRelease",
  components: { NavBar, Cards, Headline, Carousel },
  computed: {
    ...mapState(useIndexStore, ["newReleases"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["getNewReleases", "checkLogin"]),
  },
  created() {
    this.getNewReleases();
    this.checkLogin();
  },
};
</script>

<template>
  <div
    class="container-fluid"
    style="background-color: black; min-height: 100vh"
  >
    <div class="row">
      <NavBar />
    </div>
    <div class="d-flex mt-4 justify-content-center align-items-center">
      <Carousel />
    </div>

    <!-- HEADER -->
    <div class="container-sm text-center mt-5" data-aos="zoom-in">
      <p
        class="h2 display-5 fw-normal justify-content-center text-light bg-black"
      >
        Release Radar
      </p>
      <p class="h4 text-muted bg-black">
        Browse for new releases, as soon as they drop
      </p>
    </div>
    <!-- HEADER -->

    <!-- NEW RELEASES CARD -->
    <div class="row mt-5">
      <div
        class="col-3 mb-3"
        style="display: flex; justify-content: center"
        v-for="playlist in newReleases"
        :key="playlist.id"
      >
        <Cards :data="playlist" typeCard="album" />
      </div>
    </div>
    <!-- NEW RELEASES END -->
  </div>
</template>
