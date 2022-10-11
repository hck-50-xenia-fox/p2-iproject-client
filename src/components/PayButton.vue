<script>
import { mapActions } from "pinia";
import { useIndexStore } from "@/stores";

export default {
  methods: {
    ...mapActions(useIndexStore, ["payButton"]),
  },

  computed: {},
};
</script>
<template>
  <button @click="payButton" id="pay-button">Pay</button>
</template>
<style></style>
