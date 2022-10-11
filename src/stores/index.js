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
  },
});
