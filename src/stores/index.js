import { defineStore } from "pinia";
import axios from "@/apis/axios-instance.js";

export const useIndexStore = defineStore("index", {
  state: () => ({
    isLogin: false,
  }),

  actions: {
    async payButton() {
      try {
        const { data } = await axios({
          method: "post",
          url: "/midtrans/pay",
        });
        snap.pay(data.token);
      } catch (err) {
        console.log(err);
      }
    },

    async login(credentials) {
      try {
        const { data } = await axios({
          method: "post",
          url: "/users/login",
          data: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        localStorage.setItem("access_token", data.access_token);

        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    async handleCredentialResponse(response) {
      const { credential } = response;
      try {
        const { data } = await axios({
          method: "POST",
          url: "/pub/google-login",
          data: {
            credential,
          },
        });

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("name", data.name);

        this.router.push("/");
        this.isLoggedIn = true;
      } catch (err) {
        new Swal(
          "Whoops, can't login!",
          "please double check your email/password",
          "error"
        );
      }
    },

    logout() {
      localStorage.clear();
      this.router.push("/");
    },
  },
});
