<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
  props: ["data", "index"],
  methods: {
    ...mapActions(useCounterStore, ["searchYoutube"]),
    search(data){
      this.searchYoutube(data)
    }
  }
}
</script>

<template>
  <tr>
    <td>{{index+1}}</td>
    <td>{{data.name}}</td>
    <td v-if="data.attr">{{data.attr}}</td>
    <td v-if="data.region">{{data.region}}</td>
    <td><a @click.prevent="$router.push(`/highlight/${data.name}`)"  href="">Click this to see video</a></td>
  </tr>
</template>