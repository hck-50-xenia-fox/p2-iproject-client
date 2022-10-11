import { defineStore } from "pinia";
import { io } from "socket.io-client";
import axios from "@/apis/axios-instance.js";

const socket = io("http://localhost:3000");
console.log(socket);
export const useIndexStore = defineStore("index", {
  state: () => ({
    isLogin: false,
  }),

  actions: {
    async payButton() {
      try {
        const { data } = await axios({
          method: "post",
          url: "/pay",
        });
        snap.pay(data.token);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
