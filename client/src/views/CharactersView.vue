<script>
import {mapActions, mapState} from 'pinia'
import {useIndexStore} from '../stores'
import CharactersCard from '../components/CharactersCard.vue'
export default {
    name: 'CharactersView',
    components: {
        CharactersCard
    },
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(useIndexStore, ['getCharacters'])
    },
    computed: {
        ...mapState(useIndexStore, ['characters'])
    },
    created() {
        this.getCharacters()
    }
}

</script>


<template>

<div class="container text-center mt-5">
    <div class="row">
      <CharactersCard 
        v-for="character in characters" 
        :key="character.id"
        :character="character"
      
      />
    </div>
  </div>



</template>