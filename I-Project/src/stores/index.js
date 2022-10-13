import { defineStore } from "pinia";
import axios from "axios";
import Swal from 'sweetalert2'

const baseUrl = "http://localhost:3000";

export const useIprojectStore = defineStore("Iproject", {
  state: () => ({
    isLogin: false,
    nearby:''
  }),
  actions: {
    async fetchDataNearby(lat, lng){
        try {
          const response = await axios.get(`${baseUrl}/nearby?lat=${lat}&lng=${lng}`)
          this.nearby = response.data
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      },
    logout() {
      this.isLogin = false;
      localStorage.clear();
    },
    async regist(obj) {
      try {
        await axios.post(`${baseUrl}/register`, obj);
        this.$router.push("/login");
        Swal.fire({
            title: 'Success!',
            text: 'Login Success',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
      } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data.msg[0],
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
      }
    },

    async login(obj) {
      try {
        let res = await axios.post(`${baseUrl}/login`, obj);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("username", res.data.username);
        this.isLogin = true;
        this.$router.push("/");
        Swal.fire({
            title: 'Success!',
            text: `hey, ${res.data.username}`,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
      } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data.msg,
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
      }
    },

    async handleCredentialResponse(response) {
        try {
          console.log("Encoded JWT ID token: " + response.credential);
          const { credential } = response;
          const data = await axios({
            method: "POST",
            url: baseUrl + `/google-sign-in`,
            headers: {
              google_token: credential,
            },
          });
          localStorage.setItem("access_token", data.data.access_token);
          localStorage.setItem("username",data.data.username)
          this.isLogin = true;
          this.$router.push("/");
         
        } catch (error) {
          console.log(error);
        }
    },

  },


});
