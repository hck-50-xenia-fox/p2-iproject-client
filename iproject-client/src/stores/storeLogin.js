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
            Swal.fire({
                icon: "success",
                title: "You have logout! Bye",
                showConfirmButton: false,
                timer: 1500,
              });
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
                let role = data.dataUser.role
                let username = data.dataUser.username
                localStorage.setItem("access_token", access_token)
                localStorage.setItem("role", role)
                localStorage.setItem("username", username)
                this.isLogin = true
                this.$router.push("/")
                Swal.fire({
                    icon: "success",
                    title: "You have logged in!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            } catch (error) {
                // console.log(error)
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: `${error.response.data.msg}`,
                  });
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
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: `${error.response.data.msg}`,
                  });
            }
        },
        async handleCredentialResponse(response){
            try {
              const {credential} = response
              const data = await axios({
                method: "POST",
                url: baseUrl + "login/googleLogin",
                headers:{
                  google_token : credential
                }            
              })
              localStorage.setItem("access_token", data.data.access_token);
              Swal.fire({
                icon: "success",
                title: "You have logged in!",
                showConfirmButton: false,
                timer: 1500,
              });
              this.$router.push("/")
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.response.data.msg}`,
              });
            }
          }
    }
})
