<script>
import io from "socket.io-client";
const baseUrl = "http://localhost:3000";
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

      this.socketInstance.on("message:received", (data) => {
        console.log(data);
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
  <form>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Message</h5>
        <div v-if="!joined" class="parent-container">
          <div class="name-container">
            <input type="text" class="user-name" v-model="currentUser" />
            <button @click="join" class="join-button">Join</button>
          </div>
        </div>
      </div>
    </div>
  </form>

  <div class="card" style="width: 18rem">
    <div class="card-body">
      <div v-if="joined" class="text-input-container">
        <div class="list-containe">
          <div v-for="msg in messages" :key="msg.id">
            <b>
              {{ msg.user }}
            </b>
            :{{ msg.text }}
          </div>
        </div>
        <div>
          <textarea
            v-model="text"
            class="text-message"
            @keyup.enter="sendMessage"
          >
          </textarea>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>
