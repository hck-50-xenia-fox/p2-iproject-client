<script>
import { mapState } from "pinia";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import { useIndexStore } from "../stores";
export default {
  name: "ManagerForum",
  components: { Footer, NavBar },
  computed: {
    ...mapState(useIndexStore, ["loginType"]),
  },
};
</script>

<template>
  <NavBar />
  <div class="row justify-content-center" style="width: 100%">
    <div class="col col-lg-4 col-xl-8">
      <div class="card rounded-1 mt-5">
        <div class="card-body p-4">
          <div class="d-flex justify-content-end">
            <RouterLink v-if="loginType === 'manager'" to="/managers">
              <button class="btn btn-secondary">Back</button>
            </RouterLink>
            <RouterLink v-if="loginType === 'employee'" to="/employee">
              <button class="btn btn-secondary">Back</button>
            </RouterLink>
            <RouterLink v-if="loginType === 'company'" to="/dashboard">
              <button class="btn btn-secondary">Back</button>
            </RouterLink>
            <RouterLink v-if="loginType === ''" to="/">
              <button class="btn btn-secondary">Back</button>
            </RouterLink>
          </div>
          <p class="mb-2">
            <span class="h2 me-2">Forums</span>
            <span class="badge bg-success">Chat</span>
          </p>
          <p class="text-muted pb-2">User Online</p>

          <ul class="list-group rounded-0">
            <li
              class="list-group-item border-0 d-flex align-items-center ps-0"
            ></li>
          </ul>
          <div class="d-flex gap-2">
            <input type="text" style="width: 100%; height: 60px" />
            <button class="btn btn-dark justify-content-end">
              <i class="bi bi-chat-text-fill"></i>
              <small>Send</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
