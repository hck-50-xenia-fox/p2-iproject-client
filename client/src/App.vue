<script>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
<Navbar />


  <RouterView />
</template>

