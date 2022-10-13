<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";


export default {
  data() {
    return {
      inputUser: {
        email: "",
        password: "",
      },

     
    };
  },
  components : {
  },


  methods: {
    ...mapActions(useIndexStore, ["userLogin"]),
   
    
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center mt-4">Eight Crypto</h1>
    <div class="row m-5 no-gutters shadow-lg">
      <div class="col-md-6 d-none d-md-block">
        <img
          src="https://images.unsplash.com/photo-1614533422330-396d7dde96b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNyeXB0b3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
          class="img-fluid"
          style="min-height: 100%"
        />
      </div>
      <div class="col-md-6 bg-white p-5">
        <h3 class="pb-3">Login Form</h3>
        <div class="form-style">
          <form @submit.prevent="userLogin(inputUser)">
            <div class="form-group pb-3">
              <input
                v-model="inputUser.email"
                placeholder="Email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group pb-3">
              <input
                v-model="inputUser.password"
                type="password"
                placeholder="Password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div
              class="d-flex align-items-center justify-content-between"
            ></div>
            <div class="pb-2">
              <button
                type="submit"
                class="btn btn-dark w-100 font-weight-bold mt-2"
              >
                Submit
              </button>
            </div>
          </form>
          <!-- <div class="sideline">OR</div>
          <div>
            <a @click.prevent="logInWithFacebook">
              <button type="submit" class="btn btn-primary w-100 font-weight-bold mt-2"><i class="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button>
            </a>
          </div> -->
          <div class="pt-4 text-center">
            Get Members Benefit. <a @click.prevent="$router.push('/register')" href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
