<script>
import { mapWritableState } from "pinia";
import { RouterLink } from "vue-router";
import io from "socket.io-client";
import { useIndexStore } from "../stores";
import NavBar from "../components/NavBar.vue";
const baseUrl = "https://tuesday-app.herokuapp.com";
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
  components: { NavBar, RouterLink },
  computed: {
    ...mapWritableState(useIndexStore, ["loginType"]),
  },
};
</script>
<template>
  <NavBar />
  <div class="col-8 text-center" style="width: 100%">
    <div class="card rounded-1 mt-5">
      <div class="card-body p-4">
        <p class="mb-2">
          <span class="h2 me-2">Forums</span>
          <span class="badge bg-success">Chat</span>
        </p>
        <ul class="list-group rounded-0">
          <li
            class="list-group-item border-0 d-flex align-items-center ps-0"
          ></li>
        </ul>
        <div v-if="!joined">
          <div class="d-flex justify-content-center gap-4">
            <input
              type="text"
              placeholder="Enter username..."
              v-model="currentUser"
            />
            <button @click="join" class="btn btn-secondary">Join</button>
          </div>
        </div>
        <div class="d-flex justify-content-center gap-2">
          <div v-if="joined">
            <div v-for="msg in messages" :key="msg.id">
              <b>
                {{ msg.user }}
              </b>
              :{{ msg.text }}
            </div>
            <div class="d-flex justify-content-center gap-3">
              <input v-model="text" class="text-message" />
              <button
                @click="sendMessage"
                class="btn btn-dark justify-content-end"
              >
                <i class="bi bi-chat-text-fill"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-around m-5">
          <RouterLink v-if="loginType === 'company'" to="/dashboard"
            ><button class="btn btn-secondary">BACK</button></RouterLink
          >
          <RouterLink v-else-if="loginType === 'manager'" to="/managers"
            ><button class="btn btn-secondary">BACK</button></RouterLink
          >
          <RouterLink v-else -if="loginType === 'employee'" to="/employee"
            ><button class="btn btn-secondary">BACK</button></RouterLink
          >
          <RouterLink v-else to="/"
            ><button class="btn btn-secondary">BACK</button></RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
