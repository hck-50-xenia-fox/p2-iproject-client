<script>
  import { mapActions } from 'pinia';
  import { useLoginStore } from '../stores/storeLogin';
  export default{
    name: "RegisterView",
    data() {
      return{
        dataRegister:{
          username: "",
          email: "",
          password: "",
          phoneNumber: "",
          address: ""
        }
      }
    },
    methods:{
      ...mapActions(useLoginStore, ["registerHandler"])
    }
  }
</script>

<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="card shadow-lg">
            <div class="card-body">
              <h3>Register</h3>
              <p>Let's Create Account!</p>
              <form method="post" @submit.prevent="registerHandler(dataRegister)">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input v-model="dataRegister.username" type="text" class="form-control" id="username" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input v-model="dataRegister.email" type="email" class="form-control" id="email" />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input v-model="dataRegister.password" type="password" class="form-control" id="password" />
                </div>
                <div class="mb-3">
                  <label for="phone_number" class="form-label">Phone Number</label>
                  <input v-model="dataRegister.phoneNumber" type="number" class="form-control" id="phoneNumber" />
                </div>
                <div class="form-floating mb-3">
                  <textarea v-model="dataRegister.address" class="form-control" placeholder="Leave a comment here" id="address"></textarea>
                  <label for="address" class="form-label">Address</label>
                </div>
                <button type="submit" class="btn btn-danger mb-2 me-3">Create Account! <i class="bi bi-person-lines-fill"></i></button>
                <button @click="$router.push('/login')" type="submit" class="btn btn-secondary mb-2">Login <i class="bi bi-arrow-right-square"></i></button>
                <h6>Click login if you have already account!</h6>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>