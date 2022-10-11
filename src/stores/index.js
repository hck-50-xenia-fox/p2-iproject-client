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

    logout() {
      localStorage.clear();
      this.router.push("/");
    },
  },
});
