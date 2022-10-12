<script>
  import NavBar from '../components/NavBar.vue';
  import io from "socket.io-client";
  const baseUrl = "http://localhost:3000";

  export default {
    name: "chatRoom",

    data() {
      return {
        joined: false,
        currentUser: "",
        text: "",
        messages: [],
        io: io(baseUrl),
      };
    },

    components: {
      NavBar
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
      created() {
        let token = localStorage.getItem("access_token");
      }
    },
  }
</script>

<template>
  <NavBar />
  <div class="container mb-4">
    <div style="margin-top: 4.5em">
      <h3 class="text-center">Chat Room</h3>
    </div>
    <hr>
    <div class="row mb-4">

      <div v-if="!joined" class="col-6 mx-auto">
        <div class="card shadow p-3 mb-5 bg-white rounded" style="margin-top: 4.4em">
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center"><i class="bi bi-chat-dots-fill"></i></h5>
            <hr>
            <div class="form-group">
              <label>Enter your alias name:</label>
              <input type="text" class="form-control" placeholder="user" v-model="currentUser" required>
            </div><br>
            <br>
            <div class="d-flex justify-content-center">
              <button @click="join" class="btn btn-secondary">Enter</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="joined" class="col-6 mx-auto">
        <div class="card shadow p-3 mb-5 bg-white rounded" style="margin-top: 4.4em">
          <div class="card-body">
            <div class="form-group">
              <div class="mb-3">
                <div v-for="msg in messages" :key="msg.id">
                  <b>
                    {{ msg.user }}
                  </b>
                  :{{ msg.text }}
                </div>
                <textarea v-model="text" class="form-control" id="exampleFormControlTextarea1" rows="3" @keyup.enter="sendMessage">
                </textarea>
                <p>*Press enter for send conversation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>