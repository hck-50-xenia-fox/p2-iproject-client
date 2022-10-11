<script>
import { mapActions } from "pinia";
import { useFormStore } from "../stores/form";
import { useUserStore } from "../stores/user";
import ButtonTemplate from "../components/ButtonTemplate.vue";

export default {
  name: "SignUp",
  data: () => ({
    account: {
      username: "",
      email: "",
      password: "",
      phoneNumber: null,
      address: "",
    },
  }),
  methods: {
    ...mapActions(useFormStore, ["showPass"]),
    ...mapActions(useUserStore, ["signupNewCustomer"]),
    handleSignUp() {
      this.signupNewCustomer(this.account);
    },
  },
  components: { ButtonTemplate },
};
</script>

<template>
  <!-- sign up -->
  <div class="l-form" id="signup_div">
    <form class="form2" @submit.prevent="handleSignUp">
      <div class="signup_div">
        <img class="img_signin" src="../assets/logo1.jpeg" alt="Am Food" />
        <p>Create your AM Food Account</p>
      </div>
      <div class="form__div">
        <input
          type="text"
          id="username"
          class="form__input"
          placeholder=" "
          v-model="account.username"
          autocomplete="off"
        />
        <label for="" class="form__label">Username</label>
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
      <div class="form__div">
        <input
          type="number"
          id="phoneNumber"
          class="form__input"
          placeholder=" "
          v-model="account.phoneNumber"
          autocomplete="off"
        />
        <label for="" class="form__label">Phone Number</label>
      </div>
      <div class="form__div__2">
        <textarea
          id="address"
          class="form__input"
          placeholder=" "
          v-model="account.address"
          autocomplete="off"
        ></textarea>
        <label for="" class="form__label">Address</label>
      </div>
      <div class="form__div__a">
        <RouterLink to="/signin">Sign in instead</RouterLink>
      </div>
      <ButtonTemplate
        :btn="{
          name: 'Sign Up',
          style: 'form__button',
          styleDiv: 'form__div__button',
        }"
      />
    </form>
  </div>
</template>
