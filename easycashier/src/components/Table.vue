<script>
import { mapActions } from "pinia";
import { useDataStore } from "../stores/dataprocess";

export default {
  props: ["inventory", "index"],
  methods: {
    ...mapActions(useDataStore, [
      "changePage",
      "deleteInventory",
      "fetchInventory",
    ]),
    deleteInventoryHandler(id) {
      this.deleteInventory(id);
      this.fetchInventory();
    },
    changePageHandler(page) {
      this.changePage(page);
    },
  },
};
</script>
<template>
  <tr style="text-align: center">
    <td>{{ index + 1 }}</td>
    <td>{{ inventory.productName }}</td>
    <td>{{ inventory.supplierName }}</td>
    <td>{{ inventory.quantity }}</td>
    <td>{{ inventory.pricePerItem }}</td>
    <td>{{ inventory.rev }}</td>
    <td>
      <button
        @click.prevent="changePageHandler(`InventoryEditForm/${inventory.id}`)"
      >
        Edit
      </button>

      ||
      <button @click.prevent="deleteInventoryHandler(inventory.id)">
        Delete
      </button>
    </td>
  </tr>
</template>
