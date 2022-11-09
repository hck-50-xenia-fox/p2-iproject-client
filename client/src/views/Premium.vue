<script>
import NavBar from "../components/NavBar.vue";
import Pricing from "../components/Pricing.vue";
export default {
  name: "NewRelease",
  components: { NavBar, Pricing },
};
</script>

<template>
  <div
    class="container-fluid"
    style="background-color: black; min-height: 100vh"
  >
    <div class="row">
      <NavBar />
    </div>
    <div class="mt-5">
      <Pricing />
    </div>
  </div>
</template>
