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
  <button class="btn btn-sm" @click="payButton" id="pay-button">Join</button>
</template>
<style></style>
