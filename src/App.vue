<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  methods: {},
  computed: {},
  components: { Navbar, Footer },
};
</script>
<template>
  <Navbar></Navbar>
  <RouterView />
  <Footer />
</template>
<style></style>
