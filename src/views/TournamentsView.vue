<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import ListNews from '../components/ListNews.vue';
  export default{
    components: {ListNews},
    methods: {
      ...mapActions(useCounterStore, ["showTournaments"])
    },
    computed: {
      ...mapState(useCounterStore, ["dataTournaments"])
    },
    created() {
      this.showTournaments()
    }
  }
</script>

<template>
  <h1>Next Tournaments</h1>
  <main>
    <ListNews v-for="data in dataTournaments" :key=data.id :data=data pageName="tournaments"/>
  </main>
</template>