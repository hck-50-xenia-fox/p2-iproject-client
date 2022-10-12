<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Tasks",
  components: { NavBar, Footer },
};
</script>
<template>
  <NavBar />
  <h2 class="text-dark text-center mt-5">Tasks</h2>
  <div class="d-flex justify-content-center gap-5 m-5">
    <div class="card" style="width: 300px; height: 150px">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    <div class="card" style="width: 300px; height: 150px">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    <div class="card" style="width: 300px; height: 150px">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    <div class="card" style="width: 300px; height: 150px">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
</template>
