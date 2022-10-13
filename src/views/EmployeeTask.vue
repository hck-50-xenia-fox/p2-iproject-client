<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { mapActions, mapState } from "pinia";
import { useTaskStore } from "../stores/task";
import { useEmployeeStore } from "../stores/employee";
export default {
  name: "EmployeeTask",
  data() {
    return {
      email: "",
      subject: "",
      body: "",
    };
  },
  components: { NavBar, Footer },
  methods: {
    ...mapActions(useTaskStore, ["fetchMyTask", "updateTask"]),
    ...mapActions(useEmployeeStore, ["getMeme", "getQuotes"]),
    updateHandler(id) {
      this.updateTask(id);
    },
    sendEmail() {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "payman601@gmail.com",
        Password: "F8236C72C00A913B3801F275F9D02E160A70",
        To: this.email,
        From: "payman601@gmail.com",
        Subject: this.subject,
        Body: this.body,
      }).then((message) =>
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message send successfully!",
          showConfirmButton: false,
          timer: 1500,
        })
      );
      this.email = "";
      this.subject = "";
      this.body = "";
    },
  },
  computed: {
    ...mapState(useTaskStore, ["mytasks"]),
    ...mapState(useEmployeeStore, ["memes", "quotesOftheDay"]),
  },
  created() {
    this.fetchMyTask();
    this.getMeme();
    this.getQuotes();
  },
};
</script>

<template>
  <NavBar />
  <!-- {{ memes }} -->
  <section class="vh-100" style="background-color: grey">
    <div class="d-flex justify-content-center">
      <h1 class="text-white mt-2">My Task</h1>
    </div>
    <div class="container">
      <div class="row d-flex align-items-center h-100">
        <div class="col col-lg-12 col-xl-12">
          <div class="card rounded-1 mt-5">
            <div class="col col-lg-12 col-xl-12">
              <div class="card bg-secondary rounded m-3 text-center text-white">
                <div class="card-body p-4"></div>
                <b>Today's quotes</b>
                <p class="mb-2 mt-2">
                  <span class="h5 me-2">{{ quotesOftheDay }}</span>
                </p>
              </div>
            </div>
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
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-end align-items-center">
        <div class="col col-lg-4 col-xl-6">
          <div class="card bg-light rounded-1 mt-2 mb-5">
            <span class="h2 m-4 text-center">Today's Memes</span>
            <div class="card-body p-4 mb-5">
              <h4 class="text-center">For You</h4>
              <p class="mb-5 text-center">
                <img
                  :src="memes[Math.floor(Math.random(20))].image"
                  style="width: 100%"
                />
              </p>
            </div>
          </div>
        </div>
        <div class="col col-lg-4 col-xl-6">
          <div class="card bg-light rounded-1 mt-2">
            <span class="h2 m-4 text-center">Send Email!</span>
            <div class="card-body p-4">
              <!--Grid column-->
              <form @submit.prevent="sendEmail">
                <!--Grid row-->
                <div class="row">
                  <div class="col-md-6">
                    <label for="email" class="">To : </label>
                    <div class="md-form">
                      <input
                        type="text"
                        id="email"
                        v-model="email"
                        name="email"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <!--Grid column-->
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                  <div class="col-md-12">
                    <label for="subject" class="">Subject</label>
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        v-model="subject"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                  <!--Grid column-->
                  <label for="message">Your message</label>
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        v-model="body"
                        rows="2"
                        class="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-success mt-2">
                    Send!
                  </button>
                </div>
                <!--Grid row-->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.icon-check:hover {
  color: forestgreen;
}
</style>
