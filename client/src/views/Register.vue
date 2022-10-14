<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Register",
  data() {
    return {
      register: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["register"]),
  },
}
</script>

<template>
  <section>
    <div>
      <h1>Sign up Form :</h1>
      <form
        @submit.prevent="registrasi(register)"
        method="post"
        class="wrapper"
      >
        <input v-model="register.username" type="text" placeholder="Username" />
        <input
          v-model="register.email"
          type="email"
          placeholder="Email here "
        />
        <input
          v-model="register.password"
          type="password"
          placeholder="Password"
        />
        <input
          v-model="register.phoneNumber"
          type="text"
          placeholder="phoneNumber"
        />
        <input v-model="register.address" type="text" placeholder="address" />
        <button @click="registrasi" type="submit">Sign up me</button>
      </form>
      <div class="container mt-5">
        Have an account?
        <span>
          <a @click="router.push('/login')" href="">Sign In</a>
        </span>
      </div>
    </div>
  </section>
</template>


