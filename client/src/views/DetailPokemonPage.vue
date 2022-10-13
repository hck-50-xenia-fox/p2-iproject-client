<script>
import { mapActions, mapState } from 'pinia';
import { usePokemonStore } from '../stores/pokemon';
import Navbar from '../components/Navbar.vue';
import { useUserStore } from '../stores/user';

export default {
    name: "PokemonDetail",
    components: { Navbar },
    computed: {
        ...mapState(usePokemonStore, ['detailPokemon'])
    },
    methods: {
        ...mapActions(usePokemonStore, ['pokemonDetail']),
        ...mapActions(useUserStore, ['loginState'])
    },
    created() {
        this.loginState()
        this.pokemonDetail(this.$route.params.name)
    }
   
}
</script>

<template>
    <div class="container-fluid" style="min-height: 100vh">
    <div class="row">
      <Navbar/>
    </div>

    <div class="container mt-5">
      <div class="row mt-5">  
        <div class="col mb-3">
          <div id="card" style="width:40%; margin:auto" @click.prevent="$router.push('/pokemons')" >
            <p class="hp">
              <span>HP</span>
              {{ detailPokemon.stats.hp }}
            </p>
            <img :src="detailPokemon.image.default" />
            <h4 class="poke-name">{{ detailPokemon.name }}</h4>
            <div class="types">
              <span>{{ detailPokemon.stats.types.name.type1 }}</span>
              <span v-if="detailPokemon.stats.types.name.type2">{{
                detailPokemon.stats.types.name.type2
              }}</span>
            </div>
            <div class="text-center mb-4" >
                <h5>{{detailPokemon.description}}</h5>
            </div>

            <div class="stats">
                <div>
                <h5>{{ detailPokemon.stats.attack }}</h5>
                <p>Attack</p>
              </div>
              <div>
                <h5>{{ detailPokemon.stats.defense }}</h5>
                <p>Defense</p>
              </div>
              <div>
                <h5>{{ detailPokemon.stats.specialAttack}}</h5>
                <p>Sp.Attack</p>
              </div>
              <div>
                <h5>{{ detailPokemon.stats.specialDefense}}</h5>
                <p>Sp.Defense</p>
              </div>
              <div>
                <h5>{{ detailPokemon.stats.speed}}</h5>
                <p>Speed</p>
              </div>
              <div>
                <h5>{{ detailPokemon.stats.height }}</h5>
                <p>Height</p>
              </div>
              <div>
                <h5>{{detailPokemon.stats.weight }}</h5>
                <p>Weight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>