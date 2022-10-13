<script>
import { mapActions } from "pinia";
import { useFormStore } from "../stores/form";
import { useUserStore } from "../stores/user";
import NavBar from "../components/NavBar.vue";
export default {
  name: "SignIn",
  data: () => ({
    account: {
      email: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions(useFormStore, ["showPass"]),
    ...mapActions(useUserStore, ["signinHendler"]),
    mySigninHendler() {
      this.signinHendler(this.account);
    },
  },
  components: { NavBar },
};
</script>

<template>
  <NavBar />
  <!-- sign in -->
  <div class="l-form" id="signin_div">
    <form @submit.prevent="mySigninHendler" class="form">
      <div class="signin_div">
        <h1 class="text-2xl">
          Fill the form below to start the journey with us!
        </h1>
      </div>
      <div class="form__div">
        <input
          type="email"
          id="email"
          class="form__input"
          placeholder=" "
          v-model="account.email"
        />
        <label for="" class="form__label">Email</label>
      </div>
      <div class="form__div">
        <input
          type="password"
          id="password"
          class="form__input"
          placeholder=" "
          autocomplete="off"
          v-model="account.password"
        />
        <label for="" class="form__label">Password</label>
      </div>
      <input type="checkbox" @click="showPass" /><span> Show Password </span>
      <br />
      <br />
      <div id="buttonDiv"></div>
      <br />
      <button class="bg-black text-white rounded-md px-40 py-3 w-full">
        Log in
      </button>
    </form>
  </div>
</template>
