<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['logIn', 'handleCredentialResponse']),
        loginButton() {
            this.logIn(this.email, this.password),
                this.$router.push('/')
        },
    },
    mounted() {
        let cb = this.handleCredentialResponse
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: "497505358780-g4uktm6s7ehlembe84khrmpdv9mi6au6.apps.googleusercontent.com",
                callback: cb
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }  // customization attributes
            );
            google.accounts.id.prompt(); // also display the One Tap dialog
        }
    },
}
</script>

<template>
    <!-- LOGIN PAGE -->
    <div class="container-fluid" style="min-height:95vh">
        <div class=" d-flex justify-content-center">
            <div class="card rounded-3 shadow-lg col-4 d-flex flex-row justify-content-center my-5 bg-light"
                id="login-card">
                <!-- Login Form -->
                <div class="px-5">
                    <div class="py-5">
                        <form @submit.prevent="loginButton">
                            <h1>Login</h1>
                            <div class="mb-3">
                                <label for="login-email" class="form-label">Email address</label>
                                <input v-model="email" type="email" class="form-control" id="login-email"
                                    aria-describedby="emailHelp" placeholder="Email" />
                                <div id="login-email" class="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="login-password" class="form-label">Password</label>
                                <input v-model="password" type="password" class="form-control" id="login-password"
                                    placeholder="Password" />
                            </div>
                            <div class="d-flex justify-content-center pt-3">
                                <button type="submit" class="btn col-4 btn-lg" id="button">
                                    Submit
                                </button>
                            </div>
                            <hr />
                            <div id="buttonDiv"></div>
                            <router-link to="/register" href="#" class="d-flex justify-content-end">Register
                            </router-link>
                        </form>
                    </div>
                </div>
            </div>
            <!-- End Login -->

        </div>
    </div>
    <!-- END LOGIN REGISTER PAGE -->
</template>