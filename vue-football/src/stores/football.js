import { defineStore } from "pinia";
import axios from "axios";

const baseURL = "http://localhost:3000";

export const useFootballStore = defineStore("football", {
  state: () => {
    return {
      access_token: localStorage.getItem("access_token"),
    };
  },

  actions: {
    async doRegister(val) {
      try {
        const { data } = await axios.post(`${baseURL}/register`, val);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "success register new user",
          showConfirmButton: false,
          timer: 1500,
        });

        this.$router.push("/login");
      } catch (err) {
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    async doLogin(val) {
      try {
        const { data } = await axios.post(`${baseURL}/login`, val);
        localStorage.setItem("access_token", data.access_token);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "success login",
          showConfirmButton: false,
          timer: 1500,
        });

        this.$router.push("/football");
      } catch (err) {
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    doLogout() {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Log out!", "Success Logout.", "success");

          localStorage.clear();
          this.$router.push("/login");
          // this.isLogin = false;
        }
      });
    },
  },
});
