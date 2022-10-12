<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";
import { mapWritableState } from "pinia";
import { useIndexStore } from "../stores";
export default {
  name: "HomeView",
  components: { NavBar, Footer, RouterLink },
  methods: {
    changeLoginType(type) {
      this.loginType = type;
    },
  },
  computed: {
    ...mapWritableState(useIndexStore, ["loginType"]),
  },
};
</script>

<template>
  <!-- Header-->
  <NavBar />
  <!-- <h1>lorem10000  </h1> -->
  <div
    style="
      background-image: url('https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8');
    "
  >
    <div class="container px-5">
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-6">
          <div class="text-center my-5">
            <h1 class="display-5 fw-bolder text-white mb-5">
              Manage your business with an easy way !
            </h1>
            <h3 class="display-flex justify-content-center text-white mb-5">
              Login
            </h3>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <RouterLink
                to="/login"
                @click="changeLoginType('company')"
                class="btn btn-secondary btn-lg px-4 me-sm-3"
                >Company</RouterLink
              >
              <RouterLink
                to="/login"
                @click="changeLoginType('employee')"
                class="btn btn-secondary btn-lg px-4 me-sm-3"
                >Employee</RouterLink
              >
              <RouterLink
                to="/login"
                @click="changeLoginType('manager')"
                class="btn btn-secondary btn-lg px-4 me-sm-3"
                >Manager</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Features section-->
  <section class="py-5 border-bottom" id="features">
    <div class="container px-5 my-5">
      <div class="row gx-5">
        <div class="col-lg-12 text-center mb-5">
          <div
            class="bg-secondary bg-gradient text-white rounded"
            style="height: 50px"
          >
            <h3 class="bi bi-building"></h3>
          </div>
          <h2 class="h4 fw-bolder">Getting started with your own Company</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <RouterLink
            @click="changeLoginType('company')"
            to="/register"
            class="text-decoration-none"
          >
            Register
            <i class="bi bi-arrow-right"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
