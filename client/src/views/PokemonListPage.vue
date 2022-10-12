<script>
import { mapActions, mapState } from "pinia";
import Navbar from "../components/Navbar.vue";
import { usePokemonStore } from "../stores/pokemon";
import { useUserStore } from "../stores/user";
export default {
  name: "PokemonList",
  components: { Navbar },
  computed: {
    ...mapState(usePokemonStore, ["pokemons"]),
  },
  methods: {
    ...mapActions(usePokemonStore, ["fetchDataPokemon", "pokemonDetail"]),
    ...mapActions(useUserStore, ["loginState"]),
  },
  created() {
    this.loginState();
    this.fetchDataPokemon();
  },
};
</script>

<template>
  <div class="container-fluid" style="min-height: 100vh">
    <div class="row">
      <Navbar />
    </div>

    <div class="container mt-5">
      <div class="row mt-5">
        <!-- <pre>{{pokemons}}</pre>     -->
        <div v-for="(pokemon, index) in pokemons" class="col-2 mb-3" @click.prevent="pokemonDetail(pokemon.name)" >
          <div id="card" style="height:95%" >
            <p class="hp">
              <span>HP</span>
              {{ pokemon.stats.hp }}
            </p>
            <img :src="pokemon.image.default" />
            <h4 class="poke-name">{{ pokemon.name }}</h4>
            <div class="types">
              <span>{{ pokemon.stats.types.name.type1 }}</span>
              <span v-if="pokemon.stats.types.name.type2">{{
                pokemon.stats.types.name.type2
              }}</span>
            </div>
            <div class="stats">
              <div>
                <h5>{{ pokemon.stats.attack }}</h5>
                <p>Attack</p>
              </div>
              <div>
                <h5>{{ pokemon.stats.defense }}</h5>
                <p>Defense</p>
              </div>
              <div>
                <h5>{{ pokemon.stats.speed }}</h5>
                <p>Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#card {
  position: relative;
  width: 100%;
  padding: 30px 20px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  /* font-family: "Poppins", sans-serif; */
}
#card img {
  display: block;
  width: 130px;
  max-height: 150px;
  position: relative;
  margin: 20px auto;
}
.hp {
  width: 70px;
  background-color: #ffffff;
  text-align: center;
  padding: 8px 0;
  border-radius: 60px;
  margin-left: auto;
  font-weight: 200;
}
.poke-name {
  text-align: center;
  font-weight: 200;
}
.types {
  display: flex;
  justify-content: space-around;
  margin: 20px 0 40px 0;
}
.hp span,
.types span {
  font-size: 12px;
  letter-spacing: 0.4px;
  font-weight: 600;
}
.types span {
  padding: 5px 20px;
  border-radius: 20px;
  color: #ffffff;
  background-color: black;
}
.stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.stats p {
  color: #404060;
}
</style>
