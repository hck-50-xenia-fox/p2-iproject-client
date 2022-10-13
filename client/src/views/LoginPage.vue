<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  methods: {
    ...mapActions(useCounterStore, ["signInWithFacebook"]),
  },
};
</script>

<template>
  <div class="form__field">
    <!-- <input type="submit" value="Sign In" /> -->
    
    <button
      class="btn btn-md btn-primary"
      type="button"
      @click.prevent="signInWithFacebook"
    >
      Sign In
    </button>
  </div>
</template>
