<script>
import { mapActions } from "pinia";
import NavBar from "./components/NavBar.vue";
import { useCounterStore } from "./stores/counter";
import {RouterView} from 'vue-router' 
export default {
  components: {
    NavBar,
  },
  methods: {
    ...mapActions(useCounterStore, ["checkLogin"]),
  },
  created() {
    this.checkLogin();
  },
};
</script>

<template>
  <NavBar />
  <RouterView />
</template>
