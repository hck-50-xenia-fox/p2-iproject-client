<script>
import { RouterLink, RouterView } from "vue-router";
import { mapActions } from "pinia";
import { useIndexStore } from '../stores'
import { onMounted } from "vue";

export default {
    name: 'LoginView',
    data() {
        return {
            loginUser: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useIndexStore, ['handleLogin', 'loginTwitter', 'supabaseAuth', 'handleCredentialResponse']),
        login() {
            this.handleLogin(this.loginUser)
        },
        callback(response) {
        this.handleCredentialResponse(response)
      }
    },
    mounted() {
        this.supabaseAuth()
    }
}
</script>

<template>
    <section>
    <div class="row d-flex justify-content-center mt-5">
      <br /><br /><br />
      <form @submit.prevent="login">
        <div class="row d-flex justify-content-center">
          <div class="form-control mb-4" style="width: 500px">
            <!-- Email input -->
            <label class="form-label" for="form2Example1">Email address</label>
            <input
              type="email"
              id="loginEmail-form"
              class="form-control mt-1 mb-1"
              placeholder="Input your email address"
              v-model="loginUser.email"
              
            />
            <!-- Password Input -->
            <label class="form-label" for="form2Example2">Password</label>
            <input
              type="password"
              id="loginPassword-form"
              class="form-control mt-1 mb-1"
              placeholder="Input your password"
              v-model="loginUser.password"
              
            />
          </div>
          <div class="row justify-content-center">
            <button
              type="submit"
              class="btn btn-primary btn-block mb-4"
              style="width: 100px"
            >
              Sign in
            </button>
          </div>

          <div class="text-center">
            <p>Not a member? <Router-link to="/register">Register</Router-link> </p>
            <p>or sign up with:</p>
            <!-- JANGAN LUPA TAMBAHIN TOMBOL GUGEL LOGIN -->
            <GoogleLogin :callback="callback"/>
          </div>
        </div>
      </form>
    </div>
    <a href="" @click.prevent="loginTwitter">login twitter</a>
  </section>

</template>