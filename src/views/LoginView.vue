<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["login", "facebookLogin"]),
    doLogin() {
      this.login(this.user);
    },
  }
};
</script>

<template>
  <div class="form">
    <div class="log">
      <a href="" class="underline">Login</a>
      <a @click.prevent="$router.push('/register')" href="">Register</a>
    </div>
    <form @submit.prevent="doLogin">
      <div class="textbox">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <input v-model="user.email" type="email" placeholder="email" />
      </div>
      <div class="textbox">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input v-model="user.password" type="password" placeholder="password" />
      </div>
      <input type="submit" class="btn" value="Submit" />
    </form>
    <div style="display: flex; justify-content: center; align-items: center">
      <a style="color:black" class="btn btn-success"
        href="https://accounts.spotify.com/authorize?client_id=927d6c332db24844a322c7b8eeb97492&response_type=code&redirect_uri=http://127.0.0.1:5173"
        >Login Spotify</a
      >
    </div>
  </div>
</template>