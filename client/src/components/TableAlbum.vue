<script>
export default {
  name: "TableAlbum",
  props: ["tracks"],
  methods: {
    toSecond(ms) {
      var minutes = Math.floor(ms / 60000);
      var seconds = ((ms % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    cutString(str, num) {
      return str.length > num ? str.substring(0, num) + "..." : str;
    },
  },
};
</script>

<template>
  <table class="table align-middle mb-0 bg-white">
    <thead class="bg-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Artist</th>
        <th scope="col">Preview</th>
        <th scope="col">Duration</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(track, i) in tracks" :key="track?.id || track?.track?.id">
        <td class="fw-bold mb-1">{{ i + 1 }}</td>
        <td>
          <img
            :src="
              track?.track?.album?.images?.[0]?.url ||
              track?.album?.images?.[0]?.url
            "
            width="64"
            class="rounded"
          />{{ cutString(track?.track?.name || track?.name, 35) }}
        </td>
        <td>
          <router-link
            :to="`/artist/${
              track?.track?.artists?.[0]?.id || track?.artists?.[0]?.id
            }`"
            >{{
              cutString(
                track?.track?.artists?.[0]?.name || track?.artists?.[0]?.name,
                15
              )
            }}</router-link
          >
        </td>
        <td>
          <audio controls="" class="g-blue-600">
            <source
              :src="track?.track?.preview_url || track?.preview_url"
              type="audio/ogg"
            />
            <source
              :src="track?.track?.preview_url || track?.preview_url"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </td>

        <td>
          {{ toSecond(track?.track?.duration_ms || track?.duration_ms) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
