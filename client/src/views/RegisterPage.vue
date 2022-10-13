<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'

export default {
    data() {
        return {
            username: '',
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['register']),
        registerButton() {
            this.register(this.username, this.name, this.email, this.password)
            this.$router.push('/login')
        }
    }
}
</script>

<template>
    <!-- REGISTER PAGE -->
    <div class="container-fluid" style="min-height:95vh">
        <div class=" d-flex justify-content-center">
            <div class="card rounded-3 shadow-lg col-5 mt-5" id="register-card">
                <!-- Register Form-->
                <div class="container px-5">
                    <div class="py-5">
                        <form @submit.prevent="registerButton">
                            <h1>Register</h1>
                            <div class="mb-3">
                                <label for="register-username" class="form-label">Username</label>
                                <input v-model="username" type="text" class="form-control" id="register-username"
                                    placeholder="Username" />
                            </div>
                            <div class="mb-3">
                                <label for="register-name" class="form-label">Name</label>
                                <input v-model="name" type="text" class="form-control" id="register-name"
                                    placeholder="Name" />
                            </div>
                            <div class="mb-3">
                                <label for="register-email" class="form-label">Email</label>
                                <input v-model="email" type="email" class="form-control" id="register-email"
                                    placeholder="Email" />
                            </div>
                            <div class="mb-3">
                                <label for="register-password" class="form-label">Password</label>
                                <input v-model="password" type="password" class="form-control" id="register-password"
                                    placeholder="Password" />
                            </div>
                            <div class="d-flex justify-content-center pt-3">
                                <button type="submit" class="btn col-3 btn-lg" id="button">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- End Register -->
        </div>
    </div>

    <!-- END REGISTER PAGE -->
</template>