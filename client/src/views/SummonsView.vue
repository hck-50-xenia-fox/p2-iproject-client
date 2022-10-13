<script>
import {mapActions, mapState} from 'pinia'
import {useIndexStore} from '../stores'
import SummonsCard from '../components/SummonsCard.vue'
export default {
    name: 'CharactersView',
    components: {
        SummonsCard
    },
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(useIndexStore, ['getSummons'])
    },
    computed: {
        ...mapState(useIndexStore, ['summons'])
    },
    created() {
        this.getSummons()
    }
}


</script>


<template>
<div class="container text-center mt-5">
    <div class="row">
      <SummonsCard 
        v-for="summon in summons" 
        :key="summon.id"
        :summon="summon"
      
      />
    </div>
  </div>



</template>