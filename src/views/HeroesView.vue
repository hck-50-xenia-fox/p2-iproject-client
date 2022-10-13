<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import ListFeatures from '../components/ListFeatures.vue';
  export default{
    components: {ListFeatures},
    methods: {
      ...mapActions(useCounterStore, ["showHeroes"])
    },
    computed: {
      ...mapState(useCounterStore, ["dataHeroes"])
    },
    created() {
      this.showHeroes()
    }
  }
</script>

<template>
  <h1>All Heroes</h1>
  <div class="container-table">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Attributes</th>
          <th>Videos</th>
        </tr>
      </thead>
      <tbody>
        <ListFeatures v-for="(data, index) in dataHeroes" :key=data.id :data=data :index=+index />
      </tbody>
    </table>
  </div>
</template>