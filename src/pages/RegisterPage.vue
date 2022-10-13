<script>
import { mapActions, mapState } from 'pinia'
import { useSewamotorStore } from '../stores/sewamotor.js'

export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
        }
    }, methods: {
        ...mapActions(useSewamotorStore, ['register', 'checkLogin']),
        handleRegister(name, email, password, phoneNumber) {
            this.register(name, email, password, phoneNumber)
            this.name = ""
            this.email = ""
            this.password = ""
            this.phoneNumber = ""
        }
    },
    created() {
        this.checkLogin()
    }
}
</script>

<template>
    <div id="fh5co-content-section">
        <div class="container">
            <div class="row row-bottom-padded-md">
                <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box fadeInUp animated-fast">

                    <h1 class="display-4 fw-bold lh-1 mb-3">Create an account</h1>
                    <p class="col-lg-10 fs-4">If you create an account, you can get personalized services like
                        checking
                        purchase history and getting discount coupons with your membership. Register today for free!
                    </p>


                    <form class="p-4 p-md-5 border rounded-3 bg-light">
                        <div class="form-floating mb-3">
                            <input v-model="name" type="text" class="form-control" style="height: 60px"
                                id="register-name" placeholder="Your name">
                            <label for="register-username">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="email" type="email" class="form-control" style="height: 60px"
                                id="register-email" placeholder="Your email">
                            <label for="register-email">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="password" type="password" class="form-control" style="height: 60px"
                                id="register-password" placeholder="Your password">
                            <label for="register-password">Password</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="phoneNumber" type="text" class="form-control" style="height: 60px"
                                id="register-phoneNumber" placeholder="Your phone number">
                            <label for="register-phoneNumber">Phone Number</label>
                        </div>

                        <small>
                            <p class="col-lg-10 fs-4 te">By creating an account, you agree to SewaMotor’s privacy
                                policy and
                                terms of use.</p>
                        </small>
                        <div class="d-flex justify-content-center mt-4 mb-3">
                            <p>
                                <a  @click.prevent="handleRegister(name, email, password, phoneNumber)" class="btn btn-primary btn-lg btn-demo" href="">Register</a>
                            </p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>