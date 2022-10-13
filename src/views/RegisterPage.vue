<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { mapActions, mapState } from "pinia";
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
    ...mapActions(useIndexStore, [
      "registerCompany",
      "registerManager",
      "registerEmployee",
    ]),
    doRegister() {
      if (this.loginType === "company") {
        this.registerCompany({
          name: this.firstName,
          email: this.email,
          password: this.password,
        });
        this.firstName = "";
        this.lastName = "";
        this.role = "";
        this.email = "";
        this.password = "";
      } else if (this.loginType === "companyManager") {
        this.registerManager({
          firstName: this.firstName,
          lastName: this.lastName,
          role: this.role,
          email: this.email,
          password: this.password,
        });
        this.firstName = "";
        this.lastName = "";
        this.role = "";
        this.email = "";
        this.password = "";
      } else if (this.loginType === "employee") {
        this.registerEmployee({
          firstName: this.firstName,
          lastName: this.lastName,
          role: this.role,
          email: this.email,
          password: this.password,
        });
        this.firstName = "";
        this.lastName = "";
        this.role = "";
        this.email = "";
        this.password = "";
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
      <div class="container mb-3">
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
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card">
              <div class="card-body py-5 px-md-5">
                <form @submit.prevent="doRegister">
                  <!-- 2 column grid layout with text inputs for the first and last names -->
                  <div class="row">
                    <div v-if="loginType !== 'company'" class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          v-model="firstName"
                          id="form3Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1"
                          >First name</label
                        >
                      </div>
                    </div>
                    <div v-if="loginType !== 'company'" class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          v-model="lastName"
                          id="form3Example2"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example2"
                          >Last name</label
                        >
                      </div>
                    </div>
                    <div v-else class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          v-model="firstName"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example2"
                          >Company Name</label
                        >
                      </div>
                    </div>
                    <div
                      v-if="loginType !== 'company'"
                      class="form-outline mb-4"
                    >
                      <input
                        type="text"
                        v-model="role"
                        id="form3Example3"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example3">Role</label>
                    </div>
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input type="email" v-model="email" class="form-control" />
                    <label class="form-label" for="form3Example3"
                      >Email address</label
                    >
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      v-model="password"
                      id="form3Example4"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example4"
                      >Password</label
                    >
                  </div>

                  <div class="d-flex justify-content-center mb-3 gap-4">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>
                    <RouterLink v-if="loginType === 'employee'" to="/managers"
                      ><button class="btn btn-secondary">
                        Back
                      </button></RouterLink
                    >
                    <RouterLink
                      v-if="loginType === 'companyManager'"
                      to="/dashboard"
                      ><button class="btn btn-secondary">
                        Back
                      </button></RouterLink
                    >
                    <RouterLink v-if="loginType === 'company'" to="/"
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
  <!-- Section: Design Block -->
</template>
