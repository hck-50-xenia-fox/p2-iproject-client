<script>
export default {
  mounted() {
    new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    );
  },
};
</script>
<template>
  <input
    class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
    type="search"
    name="search"
    placeholder="Enter your address"
    id="autocomplete"
  />
</template>
<style>
.pac-icon {
  display: none;
}
.pac-item {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.pac-item:hover {
  background-color: #ececec;
}
.pac-item-query {
  font-size: 16px;
}
</style>
