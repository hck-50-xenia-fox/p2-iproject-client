<script>
export default {
  name: "VideoCard",
  props: ["streamer"],
};
</script>

<template>
  <!--Card 1-->
  <div class="rounded overflow-hidden shadow-2xl w-2/3">
    <img class="w-full" :src="streamer?.avatar" alt="Mountain" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ streamer?.username }}</div>
      <a :href="streamer?.twitch_url">
        <button class="bg-purple-300 rounded-lg p-1 mr-3">twitch</button></a
      >
      <a :href="streamer?.url">
        <button class="bg-green-500 rounded-lg p-1">
          chess.com profile
        </button></a
      >
    </div>
    <div class="px-6 py-1">
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-if="streamer.is_live"
        class="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >live</span
      >
      <span
        v-if="!streamer.is_live"
        class="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >live</span
      >
    </div>
  </div>
</template>
