import { defineStore } from "pinia";
import axios from 'axios'
let baseUrl = "http://localhost:3000/"

export const useLoginStore = defineStore("login", {
    state: () => {
        return{
            isLogin : false
        }
    },
    actions:{
        loginCheck(){
            if(localStorage.access_token){
                this.isLogin = true
            }
        },
        logout(){
            this.isLogin = false
            localStorage.clear()
            this.$router.push("/login")
        },
        async loginHandler(loginData){
            try {
                let {data} = await axios({
                    method: "POST",
                    url: baseUrl + "login",
                    data:{
                        email: loginData.email,
                        password: loginData.password
                    }
                })
                let access_token = data.access_token
                localStorage.setItem("access_token", access_token)
                this.isLogin = true
                this.$router.push("/")
                Swal.fire({
                    icon: "success",
                    title: "You have logged in!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            } catch (error) {
                console.log(error)
            }
        },
        async registerHandler(registerData){
            try {
                await axios({
                    method: "POST",
                    url: baseUrl + "register",
                    data:{
                        username: registerData.username,
                        email: registerData.email,
                        password: registerData.password,
                        phoneNumber: registerData.phoneNumber,
                        address: registerData.address
                    }
                })
                Swal.fire({
                    icon: "success",
                    title: "Let's Login!",
                    text: "Your account has been created!",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                this.$router.push("/login")
            } catch (error) {
                console.log(error)
            }
        }
    }
})
