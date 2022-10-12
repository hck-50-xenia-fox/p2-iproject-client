<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "ManagerForum",
  components: { Footer, NavBar },
};
</script>

<template>
  <NavBar />
  <div class="row d-flex align-items-center h-100">
    <div class="col col-lg-4 col-xl-12">
      <div class="card rounded-1 mt-5">
        <div class="card-body p-4">
          <p class="mb-2">
            <span class="h2 me-2">Files</span>
            <span class="badge bg-primary">Upload a file</span>
          </p>
          <p class="text-muted pb-2">Employee Name</p>

          <ul class="list-group rounded-0">
            <li class="list-group-item border-0 d-flex align-items-center ps-0">
              <input
                class="form-check-input me-3"
                type="checkbox"
                value=""
                aria-label="..."
                checked
              />
              <s>Task list and assignments</s>
            </li>
          </ul>
          <div class="divider d-flex align-items-center my-4">
            <p class="text-center mx-3 mb-0" style="color: #a2aab7">
              Shared By
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
