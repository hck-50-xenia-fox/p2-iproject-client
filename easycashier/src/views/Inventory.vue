<script>
import TableData from "../components/Table.vue";
import Sidebar from "../components/Sidebar.vue";
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../stores/dataprocess";
export default {
  components: {
    TableData,
    Sidebar,
  },
  watch: {
    "$route.query": {
      handler() {
        console.log();
        this.fetchInventory();
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(useDataStore, ["fetchInventory"]),
  },
  computed: {
    ...mapState(useDataStore, ["InventoryList"]),
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2>Inventory List</h2>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr style="text-align: center">
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price Per Item</th>
                <th scope="col">Reference</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <TableData
                v-for="(inventory, index) in InventoryList"
                :key="inventory.id"
                :inventory="inventory"
                :index="index"
              />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>
