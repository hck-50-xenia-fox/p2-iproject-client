<script>
import { RouterLink, RouterView } from "vue-router"
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";


export default {
  name: "RegisterView",
  data() {
    return {
      newUser : {
        username: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions(useIndexStore, ["handleRegister"]),
    register() {
      this.handleRegister(this.newUser)
    }
  }
};
</script>

<template>
  <section class="container text-center mt-3">
    <div class="row d-flex justify-content-center">

      <br /><br /><br />
      <form @submit.prevent="register">
        <div class="row d-flex justify-content-center">
          <div class="form-control mb-4" style="width: 500px">
            <!-- Username input -->
            <label class="form-label" for="form2Example1">Username</label>
            <input
              type="text"
              id="loginUsername-form"
              class="form-control"
              placeholder="Input your username"
              v-model="newUser.username"
            />
            <!-- Email input -->
            <label class="form-label" for="form2Example1">Email</label>
            <input
              type="email"
              id="loginEmail-form"
              class="form-control"
              placeholder="Input your email"
              v-model="newUser.email"
            />
            <!-- Password Input -->
            <label class="form-label" for="form2Example2">Password</label>
            <input
              type="password"
              id="loginPassword-form"
              class="form-control"
              placeholder="Input your password"
              v-model="newUser.password"
            />
            
            
          </div>
          <div class="row justify-content-center">
            <button
              type="submit"
              class="btn btn-primary btn-block mb-4"
              style="width: 100px"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
