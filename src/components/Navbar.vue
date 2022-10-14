<script>
import { useIndexStore } from "@/stores/index.js";
import { mapActions, mapState } from "pinia";
import PayButton from "./PayButton.vue";

export default {
  data() {
    return {
      status: localStorage.getItem("status"),
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["logout", "signout", "loginCheck"]),
  },

  computed: {
    ...mapState(useIndexStore, ["isLoggedIn"]),
  },

  components: { PayButton },

  created() {
    this.loginCheck();
  },
};
</script>

<template>
  <div class="flex justify-between navbar bg-base-100">
    <RouterLink to="/" class="text-xl normal-case btn btn-ghost"
      >Libraari</RouterLink
    >
    <!-- <button @click="signout()">fblogout</button> -->

    <RouterLink
      v-if="status === 'Gold' && this.isLoggedIn"
      to="/chat"
      class="btn btn-sm"
      >Go to Club</RouterLink
    >

    <div v-if="status === 'Free'">
      <p class="mr-4">Become a gold member to join book club</p>
      <PayButton class="mr-4" />
    </div>

    <button v-if="this.isLoggedIn" @click="logout()">Logout</button>
  </div>
</template>
<style></style>
