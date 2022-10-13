<script>
import { mapActions, mapState } from "pinia";
import { useMasterStore } from "../stores/masterStore";

export default {
  name: "ProfileView",
  computed: {
    ...mapState(useMasterStore, ["dataPlayerLogin", "statsPlayerLogin"]),
  },
  methods: {
    ...mapActions(useMasterStore, ["getChessData"]),
  },
  async created() {
    await this.getChessData();
  },
};
</script>

<template>
  <!-- <pre>{{ dataPlayerLogin }}</pre>
  <pre>{{ statsPlayerLogin }}</pre> -->
  <div class="bg-gray-100">
    <div class="container mx-auto mt-2 p-5">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div
            class="border-t-4 bg-white p-3 shadow-2xl border-green-300 rounded-sm"
          >
            <div class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto"
                src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1614856483/m05pk5u02cei1tctbvrt.jpg"
                alt=""
              />
            </div>
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              {{ dataPlayerLogin?.data?.username }}
            </h1>
            <h3 class="text-gray-900 font-lg text-semibold leading-6">
              name : {{ dataPlayerLogin?.data?.name }}
            </h3>
            <h3 class="text-gray-900 font-lg text-semibold leading-6">
              Followers : {{ dataPlayerLogin?.data?.followers }}
            </h3>
            <h3 class="text-gray-900 font-lg text-semibold leading-6">
              Status : {{ dataPlayerLogin?.status }}
            </h3>
            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-2xl border-gray-100 rounded-sm">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            >
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Rapid Rating</div>
                  <div class="px-4 py-2">
                    {{ statsPlayerLogin?.chess_rapid?.last?.rating }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Highest</div>
                  <div class="px-4 py-2">
                    {{ statsPlayerLogin?.chess_rapid?.best?.rating }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Record</div>
                  <div class="px-4 py-2">
                    win : {{ statsPlayerLogin?.chess_rapid?.record?.win }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2">
                    loss : {{ statsPlayerLogin?.chess_rapid?.record?.loss }}
                  </div>
                  <div class="px-4 py-2">
                    draw : {{ statsPlayerLogin?.chess_rapid?.record?.draw }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Bullet Rating</div>
                  <div class="px-4 py-2">
                    {{ statsPlayerLogin?.chess_bullet?.last?.rating }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Highest</div>
                  <div class="px-4 py-2">
                    {{ statsPlayerLogin?.chess_bullet?.best?.rating }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Record</div>
                  <div class="px-4 py-2">
                    win : {{ statsPlayerLogin?.chess_bullet?.record?.win }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2">
                    loss : {{ statsPlayerLogin?.chess_bullet?.record?.loss }}
                  </div>
                  <div class="px-4 py-2">
                    draw : {{ statsPlayerLogin?.chess_bullet?.record?.draw }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>
