<script>
import { mapActions } from "pinia";
import { useFormStore } from "../stores/form";
import { useUserStore } from "../stores/user";
import ButtonTemplate from "../components/ButtonTemplate.vue";
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
  components: { ButtonTemplate },
};
</script>

<template>
  <!-- sign in -->
  <div class="l-form" id="signin_div">
    <form @submit.prevent="mySigninHendler" class="form">
      <div class="signin_div">
        <img class="img_signin" src="../assets/logo1.jpeg" alt="Am Food" />
        <h1 class="form__title">Sign In</h1>
        <p>Use your AM Food Account</p>
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
      <div class="form__div__a">
        <RouterLink to="/signup" class="text-mypink">Create account</RouterLink>
      </div>
      <ButtonTemplate
        :btn="{
          name: 'Sign In',
          style: 'form__button',
          styleDiv: 'form__div__button',
        }"
      />
    </form>
  </div>
</template>
