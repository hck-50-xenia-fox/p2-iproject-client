<script>
  import { mapActions } from 'pinia';
import { RouterLink } from 'vue-router'
import { useFootballStore } from '../stores/football';

  export default {
    name: "register",

    data() {
      return {
        userRegister: {
          username: "",
          email: "",
          password: "",
        }
      }
    },

    components: {
      RouterLink
    },

    methods: {
      ...mapActions(useFootballStore, ["doRegister"]),
      registerHandle() {
        this.doRegister(this.userRegister);
      }
    }
  }
</script>

<template>
  <section id="register">
    <div class="full-cover">
      <div class="container">
        <div class="row">
          <div class="col-6 mx-auto">
            <div class="card shadow p-3 mb-5 bg-white rounded" style="margin-top: 2.3em">
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center"><i class="bi bi-journal-text"></i>&nbsp;Register
                </h5>
                <hr>
                <form @submit.prevent="registerHandle" class="px-4 py-3">
                  <div class="form-group">
                    <label>Username</label>
                    <input v-model="userRegister.username" type="text" class="form-control" placeholder="type username"
                      required>
                  </div><br>
                  <div class="form-group">
                    <label>Email</label>
                    <input v-model="userRegister.email" type="email" class="form-control"
                      placeholder="email@example.com" required>
                  </div><br>
                  <div class="form-group">
                    <label>Password</label>
                    <input v-model="userRegister.password" type="password" class="form-control"
                      placeholder="type password" required>
                  </div><br><br>
                  <div class="d-flex justify-content-center">
                    <p>
                      Have account?
                      <RouterLink to="/login">
                        <a href="" style="color:black; text-decoration: none;">Back to Login</a>
                      </RouterLink>
                    </p>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-secondary">Sign up</button>
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