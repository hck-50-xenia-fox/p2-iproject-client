<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { mapActions, mapState } from "pinia";
import { useTaskStore } from "../stores/task";
export default {
  name: "EmployeeTask",
  data() {
    return {};
  },
  components: { NavBar, Footer },
  methods: {
    ...mapActions(useTaskStore, ["fetchMyTask", "updateTask"]),
    updateHandler(id) {
      this.updateTask(id);
    },
  },
  computed: {
    ...mapState(useTaskStore, ["mytasks"]),
  },
  created() {
    this.fetchMyTask();
  },
};
</script>

<template>
  <NavBar />
  <section class="vh-100" style="background-color: grey">
    <div class="d-flex justify-content-center">
      <h1 class="text-white mt-2">My Task</h1>
    </div>
    <div class="container">
      <div class="row d-flex align-items-center h-100">
        <div class="col col-lg-12 col-xl-12">
          <div class="card rounded-1 mt-5">
            <div class="card-body p-4">
              <p class="mb-2">
                <span class="h2 me-2">Tasks</span>
                <span class="badge bg-danger">checklist</span>
              </p>
              <p class="text-muted pb-2">{{ new Date() }}</p>

              <ul class="list-group rounded-0">
                <li
                  v-for="mytask in mytasks"
                  :key="mytask.id"
                  class="list-group-item border-0 d-flex align-items-center gap-2"
                >
                  <a @click.prevent="updateHandler(mytask.TaskId)" href=""
                    ><i class="bi bi-check-circle-fill icon-check"></i
                  ></a>
                  <i>{{ mytask.Task.title }}</i>
                </li>
              </ul>
              <div class="divider d-flex align-items-center my-4">
                <p class="text-center mx-3 mb-0" style="color: #a2aab7">
                  Uploaded By
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col col-lg-4 col-xl-8">
            <div class="card rounded-1 mt-5">
              <div class="card-body p-4">
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
          </div> -->
      </div>
      <div class="row d-flex align-items-center h-100">
        <div class="col col-lg-4 col-xl-12">
          <div class="card rounded-1 mt-5">
            <div class="card-body p-4">
              <p class="mb-2">
                <span class="h2 me-2">Files</span>
                <span class="badge bg-primary">Upload a file</span>
              </p>
              <p class="text-muted pb-2">Employee Name</p>

              <ul class="list-group rounded-0"></ul>
              <div class="divider d-flex align-items-center my-4">
                <p class="text-center mx-3 mb-0" style="color: #a2aab7">
                  Shared By
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<style>
.icon-check:hover {
  color: forestgreen;
}
</style>
