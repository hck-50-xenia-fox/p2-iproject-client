<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Register",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["register"]),
    registerCustomer() {
      this.register(this.user);
    },
  },
};
</script>

<template>
  <div @submit.prevent="registerCustomer" class="form">
    <div class="log">
      <a @click.prevent="$router.push('/login')" href="">Login</a>
      <a href="" class="underline">Register</a>
    </div>
    <form>
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
  </div>
</template>