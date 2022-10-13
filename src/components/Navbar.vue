<script>
import { useIndexStore } from "@/stores/index.js";
import { mapActions } from "pinia";
import PayButton from "./PayButton.vue";

export default {
  methods: {
    ...mapActions(useIndexStore, ["logout", "signout"]),
  },
  components: { PayButton },
};
</script>
<template>
  <div class="navbar bg-base-100">
    <a class="text-xl normal-case btn btn-ghost">Libraari</a>
    <button @click="logout()">Logout</button>
    <!-- <button @click="signout()">fblogout</button> -->
    <div>
      <p>Become a gold member to join book club</p>
      <PayButton/>
    </div>
  </div>
</template>
<style></style>
