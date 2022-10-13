<script>
import { mapActions } from "pinia";
import { useDataStore } from "../stores/dataprocess";

export default {
  props: ["invoice", "index"],
  methods: {
    ...mapActions(useDataStore, [
      "generateInvoice",
      "generatePayment",
      "deleteInvoice",
      "fetchAllInvoice",
    ]),
    handleGenerateInvoice(id) {
      this.generateInvoice(id);
    },
    handlegeneratePayment(id) {
      this.generatePayment(id);
    },
    handledeleteInvoice(id) {
      this.deleteInvoice(id);
      this.fetchAllInvoice();
    },
  },
};
</script>
<template>
  <tr style="text-align: center">
    <td>{{ index + 1 }}</td>
    <td>{{ invoice.customerName }}</td>
    <td>{{ invoice.customerAddress }}</td>
    <td>{{ invoice.Inventory.productName }}</td>
    <td>{{ invoice.quantity }}</td>
    <td>{{ invoice.priceToSale }}</td>
    <td>{{ invoice.rev }}</td>
    <td>
      <button @click.prevent="handleGenerateInvoice(invoice.id)">
        Print Invoice
      </button>
      ||
      <button @click.prevent="handledeleteInvoice(invoice.id)">Delete</button
      >||<button @click.prevent="handlegeneratePayment(invoice.id)">
        Pay!
      </button>
    </td>
  </tr>
</template>
