<script>
import PayButton from "../components/PayButton.vue";
import ChatButton from "../components/ChatButton.vue";
import { useIndexStore } from "@/stores/index.js";

import { mapActions } from "pinia";
export default {
  methods: {
    ...mapActions(useIndexStore, ["logout", "signout"]),
  },
  computed: {},
  components: { PayButton, ChatButton },
};
</script>
<template>
  <div class="ml-4">
    <PayButton />
  </div>

  <ChatButton />

  <div>
    <RouterLink to="/login">Login</RouterLink>
  </div>

  <div>
    <button @click="logout()">Logout</button>
    <button @click="signout()">fblogout</button>
  </div>
</template>
<style></style>
