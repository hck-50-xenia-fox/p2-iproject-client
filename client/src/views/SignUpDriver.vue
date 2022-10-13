<script>
import { mapActions, mapState } from "pinia";
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
      role: "Driver",
    },
    more: {
      lisence: "",
    },
  }),
  methods: {
    ...mapActions(useFormStore, ["showPass"]),
    ...mapActions(useUserStore, ["signupNewCustomer"]),
    handleSignUp() {
      this.signupNewCustomer(this.account);
    },
  },
  computed: {
    ...mapState(useUserStore, ["statusDriver"]),
  },
  components: { NavBar },
};
</script>

<template>
  <NavBar />
  <!-- sign up -->
  <div class="l-form" id="signup_div">
    <form v-if="!statusDriver" class="form" @submit.prevent="handleSignUp">
      <div class="signup_div">
        <h1 class="text-2xl">Fill form below to become our special partner!</h1>
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
      <button class="flex bg-black text-white rounded-md px-36 w-full py-3">
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </form>
    <!-- next -->
    <form v-else class="form" @submit.prevent="handleSignUp">
      <div class="signup_div">
        <h1 class="text-2xl">Awesome,keep continue!</h1>
      </div>
      <div class="form__div text-12">
        <select class="form__input" placeholder=" ">
          <option value="" selected disabled>--Choose One--</option>
          <option value="bike">Tisa Bike</option>
          <option value="car">Tisa Car</option>
        </select>
        <label for="" class="form__label">Ride Type</label>
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
        <label for="" class="form__label">lisence</label>
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
        <label for="" class="form__label">Model</label>
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
        <label for="" class="form__label">Police Number</label>
      </div>
      <br /><br />
      <button class="flex bg-black text-white rounded-md px-36 w-full py-3">
        Submit
      </button>
    </form>
  </div>
</template>
