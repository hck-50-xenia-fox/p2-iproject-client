<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { mapState } from "pinia";
import { useIndexStore } from "../stores";
export default {
  name: "RegisterPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      password: "",
    };
  },
  components: { NavBar, Footer },
  methods: {
    doRegister() {
      if (this.loginType === "company") {
      } else if (this.loginType === "manager") {
      } else if (this.loginType === "employee") {
      }
    },
  },
  computed: {
    ...mapState(useIndexStore, ["loginType"]),
  },
};
</script>

<template>
  <!-- Section: Design Block -->
  <NavBar />
  <section>
    <div
      class="px-4 py-5 px-md-5 text-center text-lg-start"
      style="
        background-image: url('https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8');
      "
    >
      <div class="container">
        <div class="row gx-lg-5 align-items-center">
          <div class="col-lg-6 mb-lg-0">
            <h1
              v-if="loginType === 'company'"
              class="my-5 display-3 fw-bold ls-tight text-white"
            >
              The best offer <br />
              <span class="text-primary">for your business</span>
            </h1>
            <h1
              v-if="loginType === 'companyManager'"
              class="my-5 display-3 fw-bold ls-tight text-white"
            >
              Add new Manager <br />
              <span class="text-primary">for your business</span>
            </h1>
            <h1
              v-if="loginType === 'employee'"
              class="my-5 display-3 fw-bold ls-tight text-white"
            >
              Add your employee <br />
              <span class="text-primary">for your business</span>
            </h1>
            <p style="color: white">Register Your Employee Or Manager</p>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card">
              <div class="card-body py-5 px-md-5">
                <form>
                  <!-- 2 column grid layout with text inputs for the first and last names -->
                  <div v-if="loginType !== 'company'" class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1"
                          >First name</label
                        >
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example2"
                          >Last name</label
                        >
                      </div>
                    </div>
                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example3">Role</label>
                    </div>
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
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
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example4"
                      >Password</label
                    >
                  </div>

                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>
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
  <!-- Section: Design Block -->
</template>
