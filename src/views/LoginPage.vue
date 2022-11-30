<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: { NavBar, Footer },
  computed: {
    ...mapState(useIndexStore, ["loginType"]),
  },
  methods: {
    ...mapActions(useIndexStore, [
      "loginCompany",
      "loginManager",
      "loginEmployee",
    ]),
    doLogin() {
      if (this.loginType === "company") {
        this.loginCompany({
          email: this.email,
          password: this.password,
        });
        this.email = "";
        this.password = "";
      } else if (this.loginType === "manager") {
        this.loginManager({
          email: this.email,
          password: this.password,
        });
        this.email = "";
        this.password = "";
      } else if (this.loginType === "employee") {
        this.loginEmployee({
          email: this.email,
          password: this.password,
        });
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>

<template>
  <section>
    <NavBar />
    <!-- Jumbotron -->
    <div
      class="px-4 py-5 px-md-5 text-center text-lg-start"
      style="
        background-image: url('https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8');
      "
    >
      <div class="container">
        <div class="row gx-lg-5 align-items-center">
          <div class="mb-5 mb-lg-0">
            <h1 class="fw-bold ls-tight text-white mb-5">
              Best Work Manager Ever<br />
              <span class="text-primary">for your business</span>
            </h1>
          </div>

          <div class="mb-5 mb-lg-0">
            <div class="card">
              <div class="card-body py-5 px-md-5">
                <form @submit.prevent="doLogin">
                  <!-- 2 column grid layout with text inputs for the first and last names -->

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      v-model="email"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example3"
                      >Email address</label
                    >
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      v-model="password"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example4"
                      >Password</label
                    >
                  </div>

                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-5">
                    Login
                  </button>
                  <div class="d-flex justify-content-center mb-3">
                    <RouterLink to="/"
                      ><button class="btn btn-secondary">
                        Back
                      </button></RouterLink
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
  <Footer />
</template>
