<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  components: { Navbar },
};
</script>

<template>
  <div class="container-fluid" style="min-height: 100vh;">
    <div class="row">
      <Navbar />
    </div>
    <div class="container" style="display: flex; justify-content: center; text-align: center; margin-top: 120px;">
      <div class="card" style="width: 19rem; margin:auto">
        <img
          src="../assets/image/foto-3.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Pokemon List</h5>
          <p class="card-text">
            increase knowledge about your pokemon here, pokedex await!
          </p>
          <button
          type="button"
          class="btn btn-light"
          @click.prevent="$router.push('/pokemons')"
        >
          Go
        </button>
        </div>
      </div>
      <div class="card" style="width: 19rem; margin:auto">
        <img
          src="../assets/image/foto-2.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Matchmaking</h5>
          <p class="card-text">
            Test your knowledge of Pokemon here!
          </p>
          <button
          type="button"
          class="btn btn-light"
          @click.prevent="$router.push('/matchmaking')"
        >
          Go
        </button>
        </div>
      </div>
      <div class="card" style="width: 19rem; margin:auto">
        <img src="../assets/image/foto-1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Create your question!</h5>
          <p class="card-text">
            Interested in creating your own Pokemon questions? try here!
          </p>
          <button
          type="button"
          class="btn btn-light"
          @click.prevent="$router.push('/questions')"
        >
          Go
        </button>
        </div>
      </div>
    </div>
  </div>
</template>
