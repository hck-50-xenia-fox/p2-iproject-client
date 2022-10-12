<script>
export default {
  props: ["inventory", "index"],
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
    <td><button>Edit</button> || <button>Delete</button></td>
  </tr>
</template>
