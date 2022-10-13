<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import ListNews from '../components/ListNews.vue';
  export default{
    components: {ListNews},
    methods: {
      ...mapActions(useCounterStore, ["showMatches"])
    },
    computed: {
      ...mapState(useCounterStore, ["dataMatches"])
    },
    created() {
      this.showMatches()
    }
  }
</script>

<template>
  <h1>Next Matches</h1>
  <main>
    <ListNews v-for="data in dataMatches" :key=data.id :data=data pageName="matches"/>
  </main>
</template>