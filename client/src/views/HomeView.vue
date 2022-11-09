<script>
import NavBar from "../components/NavBar.vue";
import Cards from "../components/Cards.vue";
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import Headline from "../components/Headline.vue";
export default {
  name: "HomeView",
  components: { NavBar, Cards, Headline },
  computed: {
    ...mapState(useIndexStore, ["newReleases"]),
  },
  methods: {
    ...mapActions(useIndexStore, [
      "getNewReleases",
      "snapPayment",
      "checkLogin",
    ]),
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
    <Headline />
  </div>
</template>
