<script>
export default {
  props: ["data", "typeCard"],
  methods: {
    // cutString(str, num) {
    //   return str.length > num ? str.substring(0, num) + "..." : str;
    // },
  },
};
</script>

<template>
  <div class="card shadow-sm mt-20" style="width: 16rem; height: 21rem">
    <div>
      <router-link :to="`/${typeCard}/${data?.id || data?.name}`">
        <img
          class="p-2 w-full rounded-lg"
          :src="data?.images?.[0]?.url || data?.genres || data.imageUrl"
          :alt="data?.name"
          style="width: 16rem"
        />
      </router-link>
      <div class="px-5 pb-5">
        <h6 class="d-flex justify-content-center align-items-center">
          <router-link :to="`/${typeCard}/${data.id || data?.name}`">{{
            data?.name
          }}</router-link>
        </h6>
      </div>
    </div>
  </div>
</template>
