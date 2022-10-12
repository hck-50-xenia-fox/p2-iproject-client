<script>
export default {
  props: ["record", "index"],
  computed: {
    changeDate() {
      let updatedDate = this.record.updatedAt.slice(0, 10);
      return updatedDate;
    },
  },
};
</script>
<template>
  <tr style="text-align: center">
    <td>{{ index + 1 }}</td>
    <td>{{ record.expense }}</td>
    <td>{{ record.revenue }}</td>
    <td>{{ record.description }}</td>
    <td>{{ record.type }}</td>
    <td>{{ record.rev }}</td>
    <td>{{ changeDate }}</td>
  </tr>
</template>
