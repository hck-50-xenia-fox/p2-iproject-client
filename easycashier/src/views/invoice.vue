<script>
import InvoiceTable from "../components/InvoiceTable.vue";
import Sidebar from "../components/Sidebar.vue";
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../stores/dataprocess";
export default {
  components: {
    InvoiceTable,
    Sidebar,
  },
  watch: {
    "$route.query": {
      handler() {
        console.log();
        this.fetchAllInvoice();
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(useDataStore, ["fetchAllInvoice"]),
  },
  computed: {
    ...mapState(useDataStore, ["InvoiceList"]),
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2>Invoice List</h2>
        <button>
          <RouterLink
            class="text-dark"
            style="text-decoration: none"
            to="/invoiceAddForm"
          >
            Add Invoice</RouterLink
          >
        </button>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr style="text-align: center">
                <th scope="col">No</th>
                <th scope="col">Costumer Name</th>
                <th scope="col">Costumer Address</th>
                <th scope="col">Inventory Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price Per Item</th>
                <th scope="col">Reference</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <InvoiceTable
                v-for="(invoice, index) in InvoiceList"
                :key="invoice.id"
                :invoice="invoice"
                :index="index"
              />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>
