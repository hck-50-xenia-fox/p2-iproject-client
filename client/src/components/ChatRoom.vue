<script>
import io from "socket.io-client";

// https://iproject-fangod.herokuapp.com
// http://localhost:3000
const baseUrl = "https://iproject-fangod.herokuapp.com";
export default {
  name: "ChatRoom",
  data() {
    return {
      joined: false,
      currentUser: "",
      text: "",
      messages: [],
      io: io(baseUrl),
    };
  },
  methods: {
    join() {
      this.joined = true;
      this.socketInstance = this.io;
      console.log(this.socketInstance);

      this.socketInstance.on("message:received", (data) => {
        // console.log(data, "<<<<");
        this.messages = this.messages.concat(data);
      });
    },
    sendMessage() {
      this.addMessage();
      this.text = "";
    },
    addMessage() {
      const message = {
        id: new Date().getTime(),
        text: this.text,
        user: this.currentUser,
      };
      this.messages = this.messages.concat(message);
      this.socketInstance.emit("message", message);
    },
  },
};
</script>

<template>
  <div
    v-if="!joined"
    class="w-full h-full flex justify-center items-center fixed pt-40 shadow-2xl"
  >
    <div class="flex flex-col border border-gray-900">
      <input
        type="text"
        class="h-8 text-2xl p-2 mb-1 text-center bg- bg-gray-500"
        v-model="currentUser"
      />
      <button @click="join" class="h-8 text-3xl rounded-lg border-l-indigo-500">
        Join
      </button>
    </div>
  </div>
  <div v-if="joined" class="h-screen bg-orange-400">
    <div class="bg-red-500">
      <div v-for="msg in messages" :key="msg.id">
        <b class="border-l-indigo-500">
          {{ msg.user }}
        </b>
        :{{ msg.text }}
      </div>
    </div>
    <div>
      <textarea
        v-model="text"
        class="w-full absolute bottom-0 h-20 p-2 box-border border border-black"
        @keyup.enter="sendMessage"
      >
      </textarea>
    </div>
  </div>
</template>
