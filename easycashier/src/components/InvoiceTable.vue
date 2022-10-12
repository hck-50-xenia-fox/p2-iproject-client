<script>
import { mapActions } from "pinia";
import { useDataStore } from "../stores/dataprocess";

export default {
  props: ["invoice", "index"],
  methods: {
    ...mapActions(useDataStore, ["generateInvoice"]),
    handleGenerateInvoie(page) {
      this.generateInvoice(page);
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
      <button @click.prevent="handleGenerateInvoie(invoice.id)">
        Print Invoice
      </button>
      || <button>Delete</button>
    </td>
  </tr>
</template>
