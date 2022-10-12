import { defineStore } from "pinia";
import axios from "axios";
import Swal from 'sweetalert2'

const baseUrl = "http://localhost:3000";

export const useIprojectStore = defineStore("Iproject", {
  state: () => ({
    isLogin: false,
  }),
  actions: {
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
  },
});
