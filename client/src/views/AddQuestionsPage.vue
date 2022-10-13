<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";
import Navbar from "../components/Navbar.vue";

export default {
  name: "AddQuestion",
  components: { Navbar },
  computed: {
    ...mapWritableState(useUserStore, [
      "description",
      "choice1",
      "choice2",
      "choice3",
      "choice4",
      "answer",
    ]),
  },
  methods: {
    ...mapActions(useUserStore, ["handleAddQuestion", "loginState"]),
  },
  created() {
    this.loginState();
  },
};
</script>

<template>
  <div class="container-fluid" style="min-height: 100vh">
    <div class="row">
      <Navbar />
    </div>
    <div class="container contact">
      <div class="row">
        <div class="col-md-3">
          <div class="contact-info">
            <img
              src="../assets/image/foto-form-add.webp"
              style="width: 150px"
              alt="image"
            />
            <h3 style="margin-bottom: 100px">
              Thank you for your participation!
            </h3>
            <h4>
              We'd love to accommodate your pokemon related question ideas!
            </h4>
          </div>
        </div>
        <form class="col-md-9" @submit.prevent="handleAddQuestion">
          <div class="contact-form">
            <div class="form-group">
              <label class="control-label col-sm-2" for="fname"
                >Question:</label
              >
              <div class="col-sm-10">
                <input
                  v-model="description"
                  type="text"
                  class="form-control"
                  id="fname"
                  placeholder="Enter your questions ideas ... "
                  name="fname"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="lname"
                >Choice 1:</label
              >
              <div class="col-sm-10">
                <input
                  v-model="choice1"
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Enter choice 1 ..."
                  name="lname"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="lname"
                >Choice 2:</label
              >
              <div class="col-sm-10">
                <input
                  v-model="choice2"
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Enter choice 2 ..."
                  name="lname"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="lname"
                >Choice 3:</label
              >
              <div class="col-sm-10">
                <input
                  v-model="choice3"
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Enter choice 3 ..."
                  name="lname"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="lname"
                >Choice 4:</label
              >
              <div class="col-sm-10">
                <input
                  v-model="choice4"
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Enter choice 4 ..."
                  name="lname"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2" for="lname">Answer:</label>
              <div class="col-sm-10">
                <input
                  v-model="answer"
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Enter question answer here ..."
                  name="lname"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button
                  type="submit"
                  class="btn btn-default"
                  
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.contact {
  padding: 4%;
  height: 400px;
}
.col-md-3 {
  background: #ff9b00;
  padding: 4%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.contact-info {
  margin-top: 10%;
}
.contact-info img {
  margin-bottom: 15%;
}
.contact-info h2 {
  margin-bottom: 10%;
}
.col-md-9 {
  background: #fff;
  padding: 3%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.contact-form label {
  font-weight: 600;
}
.contact-form button {
  background: #25274d;
  color: #fff;
  font-weight: 600;
  width: 25%;
}
.contact-form button:focus {
  box-shadow: none;
}
</style>
