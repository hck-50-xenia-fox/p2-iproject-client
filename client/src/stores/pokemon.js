import { defineStore } from "pinia";
import axios from "axios";

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://pokeapp-iproject.herokuapp.com"

export const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return {
      pokemons: [],
      detailPokemon: [],
    };
  },
  actions: {
    async fetchDataPokemon() {
      try {
        let data = await axios({
          url: `${baseUrl}/pokemons`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.pokemons = data.data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
        this.$router.push("/home");
      }
    },
    async pokemonDetail(name) {
      try {
        let data = await axios({
          url: `${baseUrl}/pokemons/${name}`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        console.log(data, "ini di store pokemon detail");

        this.detailPokemon = data.data;

        console.log(
          this.detailPokemon,
          "ini detail pokemon setelah di reasign"
        );

        this.$router.push(`/pokemons/${name}`);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
  },
});
