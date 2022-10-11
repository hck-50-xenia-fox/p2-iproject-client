import { defineStore } from "pinia";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

export const useChatStore = defineStore("chat", {
  state: () => ({
    chat: {
      message: "",
    },
  }),

  actions: {
    sendMessage(msg) {
      socket.emit("new-message", msg);
    },

    retrieveMessage() {
      socket.on("new-message", (data) => {
        this.chat.message = data.message;
      });
    },
  },
});
