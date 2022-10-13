<script>
import { mapState } from "pinia";
import { useStoreIndex } from "../stores/storeIndex";

export default {
  name: "Covid",

  computed: {
    ...mapState(useStoreIndex, ["covid19"]),
    //   covid(){
    //       return this.$store.state.covid19
    //   },
    //   country(){
    //       return this.$store.state.country
    //   }
  },
};
</script>

<template>
  <header class="rounded-bottom">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col" class="mt-1">Country</th>
            <th scope="col">Active</th>
            <th scope="col">Deaths</th>
            <th scope="col">Critical</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ covid19.country }}</td>
            <td>{{ covid19.cases.active }}</td>
            <td>{{ covid19.deaths.total }}</td>
            <td>{{ covid19.cases.critical }}</td>
          </tr>
        </tbody>
      </table>
  </header>
</template>

<style>
.table {
  color: whitesmoke;
}

.table th,
.table td {
  padding: 5px;
}

.covid-data {
  height: 75px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
