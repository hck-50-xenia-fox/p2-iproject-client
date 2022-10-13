<script>
import { mapActions } from "pinia";
import { useFormStore } from "../stores/form";
import { useUserStore } from "../stores/user";
import NavBar from "../components/NavBar.vue";

export default {
  name: "SignUp",
  data: () => ({
    account: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions(useFormStore, ["showPass"]),
    ...mapActions(useUserStore, ["signupNewCustomer"]),
    handleSignUp() {
      this.signupNewCustomer(this.account);
    },
  },
  components: { NavBar },
};
</script>

<template>
  <NavBar />
  <!-- sign up -->
  <div class="l-form" id="signup_div">
    <form class="form" @submit.prevent="handleSignUp">
      <div class="signup_div">
        <h1 class="text-2xl">What's your email enter below?</h1>
      </div>
      <div class="form__div">
        <input
          type="text"
          id="username"
          class="form__input"
          placeholder=" "
          v-model="account.firstName"
          autocomplete="off"
        />
        <label for="" class="form__label">First Name</label>
      </div>
      <div class="form__div">
        <input
          type="text"
          id="username"
          class="form__input"
          placeholder=" "
          v-model="account.lastName"
          autocomplete="off"
        />
        <label for="" class="form__label">Last Name</label>
      </div>
      <div class="form__div">
        <input
          type="email"
          id="email"
          class="form__input"
          placeholder=" "
          v-model="account.email"
          autocomplete="off"
        />
        <label for="" class="form__label">Email</label>
      </div>
      <div class="form__div">
        <input
          type="password"
          id="password"
          class="form__input"
          placeholder=" "
          v-model="account.password"
          autocomplete="off"
        />
        <label for="" class="form__label">Password</label>
      </div>
      <input type="checkbox" @click="showPass" class="show_password" /><span>
        Show Password
      </span>
      <br /><br />
      <button class="bg-black text-white rounded-md px-36 w-full py-3">
        Sign up
      </button>
    </form>
  </div>
</template>
