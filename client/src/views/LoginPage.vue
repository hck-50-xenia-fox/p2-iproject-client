<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useCounterStore, ["signInWithFacebook", "login", "supabase"]),
    logIn() {
      this.login(this.email, this.password)
    }
  },
  mounted() {
    this.supabase
  }
};
</script>

<template>
  <div class="form__field">
    <!-- <input type="submit" value="Sign In" /> -->
    <div class="grid">
      <form @submit.prevent="logIn" method="post" class="form login">
        <div class="form__field">
          <label for="email"> <span class="hidden">Email</span></label>
          <input
            v-model="email"
            autocomplete="email"
            id="login_email"
            type="text"
            name="email"
            class="form__input"
            placeholder="email"
            required
          />
        </div>

        <div class="form__field">
          <label for="password"><span class="hidden">Password</span></label>
          <input
            v-model="password"
            id="login_password"
            type="password"
            name="password"
            class="form__input"
            placeholder="Password"
            required
          />
        </div>

        <div class="form__field">
          <!-- <input type="submit" value="Sign In" /> -->
          <button class="btn btn-md btn-primary" type="submit" @click="login">
            Sign In
          </button>
        </div>
      </form>
    </div>
    <GoogleLogin :callback="callback" />
    <!-- <button
      class="btn btn-md btn-primary"
      type="button"
      @click.prevent="signInWithFacebook"
    >
      Sign In
    </button> -->
  </div>
</template>
