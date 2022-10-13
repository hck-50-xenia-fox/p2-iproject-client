<script>
import { mapActions, mapState } from "pinia";
import { useHistoryStore } from "../stores/history";
import Sidebar from "../components/Sidebar.vue";
import HistoryTable from "../components/HistoryTable.vue";

export default {
  components: {
    Sidebar,
    HistoryTable,
  },
  watch: {
    "$route.query": {
      handler() {
        this.fetchHistory();
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(useHistoryStore, ["fetchHistory"]),
  },
  computed: {
    ...mapState(useHistoryStore, ["recordData"]),
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2>History List</h2>

        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr style="text-align: center">
                <th scope="col">No</th>
                <th scope="col">expense</th>
                <th scope="col">revenue</th>
                <th scope="col">description</th>
                <th scope="col">type</th>
                <th scope="col">Reference</th>
                <th scope="col">updatedAt</th>
              </tr>
            </thead>
            <tbody>
              <HistoryTable
                v-for="(record, index) in recordData"
                :key="record.id"
                :record="record"
                :index="index"
              />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>
