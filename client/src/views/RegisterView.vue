<script>
import { mapActions } from 'pinia';
import { useIndexStore } from "../stores";

  export default {
    data(){
      return{
        inputRegister : {
          username : '',
          email : '',
          password : ''
        }
      }
    },
    methods: {
      ...mapActions(useIndexStore,['userRegister'])
    },
  }
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
        <h3 class="pb-3">Register Form</h3>
        <div class="form-style">
          <form @submit.prevent="userRegister(inputRegister)">
            <div class="form-group pb-3">
              <input
                v-model="inputRegister.username"
                placeholder="Username"
                class="form-control"
              />
            </div>
            <div class="form-group pb-3">
              <input
                v-model="inputRegister.email"
                placeholder="Email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group pb-3">
              <input
                v-model="inputRegister.password"
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
          <!-- <div class="sideline">OR</div> -->
          <div>
            <!-- <button type="submit" class="btn btn-primary w-100 font-weight-bold mt-2"><i class="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button> -->
          </div>
          <div class="pt-4 text-center">
            Already have an account? <a @click.prevent="$router.push('/login')" href="#">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
