<script>
import { mapActions } from 'pinia';
import { useLoginStore } from '../stores/storeLogin';
import { decodeCredential } from 'vue3-google-login';

export default {
    name: "LoginView",
    data() {
        return {
            dataLogin: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions(useLoginStore, ["loginHandler", "handleCredentialResponse"]),

        callback(response) {
            this.handleCredentialResponse(response)
            console.log("Handle the response", response)
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-center mt-1">
            <img src="../assets/logo-petshop-re.png" alt="" width="10">
        </div>
        <div class="row mt-2">
            <div class="col-7 mx-auto">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <h3>Login</h3>
                        <p>Welcome to Petshop App!</p>
                        <form method="post" @submit.prevent="loginHandler(dataLogin)">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input v-model="dataLogin.email" type="email" class="form-control" id="email" />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input v-model="dataLogin.password" type="password" class="form-control"
                                    id="password" />
                            </div>
                            <button type="submit" class="btn btn-warning me-3">
                                Let's Login! <i class="bi bi-arrow-bar-right"></i>
                            </button>
                            
                            <button @click="$router.push('/register')" type="submit" class="btn btn-secondary">
                                I'm a new user <i class="bi bi-person-lines-fill"></i>
                            </button>
                        </form>
                        <GoogleLogin :callback="callback" class="mt-4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>