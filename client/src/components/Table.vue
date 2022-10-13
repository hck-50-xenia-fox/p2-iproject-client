<script>
import { mapState } from "pinia";
import { useMasterStore } from "../stores/masterStore";

export default {
  name: "Table",
  computed: {
    ...mapState(useMasterStore, ["topPlayer"]),
  },
};
</script>

<template>
  <div class="overflow-x-auto">
    <div class="flex items-center justify-center font-sans overflow-hidden">
      <div class="w-full lg:w-5/6">
        <div class="bg-white shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr
                class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
              >
                <th class="py-3 px-6 text-center">Username</th>
                <th class="py-3 px-6 text-center">Rating</th>
                <th class="py-3 px-6 text-center">Title</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr
                v-for="player in topPlayer"
                class="border-b border-gray-200 hover:bg-gray-100"
              >
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center justify-center">
                    <div class="mr-2 items-center">{{ player?.username }}</div>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center justify-center">
                    <span>{{ player?.perfs?.bullet?.rating }}</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center justify-center">
                    <span>{{ player?.title }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
