<script>
export default {
  name: "StreamerCard",
  props: ["video"],
};
</script>

<template>
  <!-- <div
    class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img
        class="rounded-t-lg items-center"
        :src="video?.video?.thumbnails[0]?.url"
        alt=""
      />
    </a>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ video?.video?.title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ video?.video?.descriptionSnippet }}
      </p>
      <a
        @click.prevent="
          this.$router.push(`/streaming/${video?.video?.videoId}`)
        "
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        watch video
        <svg
          aria-hidden="true"
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div> -->

  <div class="flex justify-center">
    <div class="rounded-lg shadow-2xl bg-white max-w-sm">
      <a>
        <img
          class="rounded-t-lg w-full"
          :src="video?.video?.thumbnails[0]?.url"
          alt=""
        />
      </a>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">
          {{ video?.video?.title }}
        </h5>
        <p class="text-gray-700 text-base mb-4">
          {{ video?.video?.descriptionSnippet }}
        </p>
        <button
          @click="this.$router.push(`/streaming/${video?.video?.videoId}`)"
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          play video
        </button>
      </div>
    </div>
  </div>
</template>
