<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";


export default {
  data() {
    return {
      inputUser: {
        email: "",
        password: "",
      },

     
    };
  },
  components : {
  },


  methods: {
    ...mapActions(useIndexStore, ["userLogin"]),
    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      await window.FB.login(function(response) {
        if (response.authResponse) {
          console.log(response.authResponse);
          // alert("You are logged in &amp; cookie set!");
          // Now you can redirect the user or do an AJAX request to
          // a PHP script that grabs the signed request from the cookie.
        } else {
          // alert("User cancelled login or did not fully authorize.");
        }
      });
      return false;
    },
    async initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "650369569800276", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: "v13.0"
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  },
};
</script>

<template>
  <div class="container">
    <div class="row m-5 no-gutters shadow-lg">
      <div class="col-md-6 d-none d-md-block">
        <img
          src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
          class="img-fluid"
          style="min-height: 100%"
        />
      </div>
      <div class="col-md-6 bg-white p-5">
        <h3 class="pb-3">Login Form</h3>
        <div class="form-style">
          <form @submit.prevent="userLogin(inputUser)">
            <div class="form-group pb-3">
              <input
                v-model="inputUser.email"
                placeholder="Email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group pb-3">
              <input
                v-model="inputUser.password"
                type="password"
                placeholder="Password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div
              class="d-flex align-items-center justify-content-between"
            ></div>
            <div class="pb-2">
              <button
                type="submit"
                class="btn btn-dark w-100 font-weight-bold mt-2"
              >
                Submit
              </button>
            </div>
          </form>
          <div class="sideline">OR</div>
          <div>
            <a @click.prevent="logInWithFacebook">
              <button type="submit" class="btn btn-primary w-100 font-weight-bold mt-2"><i class="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button>
            </a>
          </div>
          <div class="pt-4 text-center">
            Get Members Benefit. <a @click.prevent="$router.push('/register')" href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
