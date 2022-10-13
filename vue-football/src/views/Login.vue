<script>
  import { mapActions } from 'pinia';
  import { RouterLink } from 'vue-router'
  import { useFootballStore } from '../stores/football';

  export default {
    name: "login",

    data() {
      return {
        userLogin: {
          email: "",
          password: ""
        }
      }
    },

    components: {
      RouterLink
    },

    methods: {
      ...mapActions(useFootballStore, ["doLogin", "handleCredentialResponse"]),
      loginHandle() {
        this.doLogin(this.userLogin);
      }
    },

    mounted() {
      let googleHandle = this.handleCredentialResponse;
      window.onload = async function () {
        google.accounts.id.initialize({
          client_id:
            "798596101287-hq2u90ih8fgr8qg2sa8hjthti136hjd1.apps.googleusercontent.com",
          callback: googleHandle
        });
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" } // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
      };
      window.onclick = async function () {
        google.accounts.id.initialize({
          client_id:
            "798596101287-hq2u90ih8fgr8qg2sa8hjthti136hjd1.apps.googleusercontent.com",
          callback: googleHandle
        });
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" } // customization attributes
        );
      };
    }
    
  }
</script>

<template>
  <section id="login">
    <div class="full-cover">

      <div class="container">
        <div class="row">
          <div class="col-6 mx-auto">
            <div class="card shadow p-3 mb-5 bg-white rounded" style="margin-top: 3.5em">
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center"><i class="bi bi-file-lock-fill"></i>&nbsp;Login</h5>
                <hr>
                <form @submit.prevent="loginHandle" class="px-4 py-3">
                  <div class="form-group">
                    <label>Email</label>
                    <input v-model="userLogin.email" type="email" class="form-control" placeholder="email@example.com"
                      required>
                  </div><br>
                  <div class="form-group">
                    <label>Password</label>
                    <input v-model="userLogin.password" type="password" class="form-control" placeholder="type password"
                      required>
                  </div><br><br>
                  <div class="d-flex justify-content-center">
                    <p>
                      Don't have account?
                      <RouterLink to="/register">
                        <a href="" style="color:black; text-decoration: none;">Register</a>
                      </RouterLink>
                    </p>
                  </div>
    
                  <div class="d-flex justify-content-center">
                    <div id="buttonDiv"></div>
                  </div>
                  <br>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-secondary">Log in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style>
.full-cover {
    height: 100vh;
    background-image: url("../assets/image_s.jpg");
  }
</style>