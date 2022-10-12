<script>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import Navbar from './components/Navbar.vue'
import Twitter from './components/Twitter.vue'

export default {
  components: {
    Navbar,
    Twitter
  }
}
</script>

<template>
<Navbar />
<!-- <Twitter /> -->


  <RouterView />
</template>

