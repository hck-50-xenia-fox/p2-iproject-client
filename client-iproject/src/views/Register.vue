<script>
import { mapActions } from 'pinia';
import { useStoreIndex } from '../stores/storeIndex';
import { RouterLink } from 'vue-router';

export default {
    name: "register",
    data() {
        return {
            registerCustomer: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        ...mapActions(useStoreIndex, ['register']),
        isRegister() {
            this.register(this.registerCustomer)
        }
    },
    components: {
        RouterLink
    }
};
</script>

<template>
    <!-- Register -->
    <section class="container" id="register-section">
        <div class="row">
            <div class="col-6 mx-auto text-left">
                <div class="form-signin m-auto">
                    <form @submit.prevent="isRegister" id="register-form">
                        <div class="col-12 text-center">
                            <h1 class="mb-3 mt-5">
                                <img src="../assets/Kalib.jpg" width="200" alt="Kalibro" />
                            </h1>
                        </div>
                        <h2 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                            Sign Up your account
                        </h2>
                        <div class="mb-3">
                            <div class="d-flex justify-content-between">
                                <label for="register-email">Email</label>
                            </div>
                            <input v-model="registerCustomer.email" type="email" class="form-control"
                                id="register-email" autocomplete="off" required />
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-between">
                                <label for="register-password">Password</label>
                            </div>
                            <input v-model="registerCustomer.password" type="password" class="form-control"
                                id="register-password" autocomplete="off" required />
                        </div>
                        <div class="d-flex justify-content-center">
                            <p>Do you have account?
                                <RouterLink to="/login">
                                    <a href="" style="color:black; text-decoration: none;">Back to Login | </a>
                                </RouterLink>
                                <RouterLink to="/">
                                    <a href="" style="color:black; text-decoration: none;">Back to Home</a>
                                </RouterLink>
                            </p>
                        </div>
                        <div>
                            <button class="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3" type="submit">Sign
                                Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- End Register -->
</template>
