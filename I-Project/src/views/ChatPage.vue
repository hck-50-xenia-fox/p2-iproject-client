<script>
import Navbar from '../components/Navbar.vue';
import { reactive, onMounted, ref } from 'vue';
export default {
    name: "Chat",
    components: {
        Navbar
    },
    setup () {
      const inputUsername = ref("");
      const inputMessage = ref("");
      const state = reactive({
        username: "",
        messages: []
      });
      const Login = () => {
        if (inputUsername.value != "" || inputUsername.value != null) {
          state.username = inputUsername.value;
          inputUsername.value = "";
        }
      }
      const Logout = () => {
        state.username = "";
      }
      const SendMessage = () => {
        const messagesRef = db.database().ref("messages");
        if (inputMessage.value === "" || inputMessage.value === null) {
          return;
        }
        const message = {
          username: state.username,
          content: inputMessage.value
        }
        messagesRef.push(message);
        inputMessage.value = "";
        console.log(messagesRef);
      }
      onMounted(() => {
        const messagesRef = db.database().ref("messages");
        messagesRef.on('value', snapshot => {
          const data = snapshot.val();
          let messages = [];
          Object.keys(data).forEach(key => {
            messages.push({
              id: key,
              username: data[key].username,
              content: data[key].content
            });
          });
          console.log(messages);
          state.messages = messages;
        });
      });
      return {
        inputUsername,
        Login,
        state,
        inputMessage,
        SendMessage,
        Logout
      }
    }
  }

</script>
<template>
    <Navbar />
    <div class="rounded-lg mt-20" v-if="state.username === '' || state.username === null">
        <div class="p-8 lg:w-1/2 mx-auto mt-10 rounded-lg">
            <div class="bg-gray-100 rounded-lg py-12 px-4 lg:px-24">
                <p class="text-center text-sm text-gray-500 font-light"> Chat With Oder </p>
                <form class="mt-6">
                    <div class="relative mt-3"> <input
                            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="username" type="text" placeholder="Username" />
                        <div class="absolute left-0 inset-y-0 flex items-center"> <svg
                                xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 text-gray-400 p-1"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg> </div>
                    </div>
                    
                    <div class="flex items-center gap-5 justify-center mt-8">
                        <button
                            class="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            Submit </button>
                    </div>
                </form>
            </div>
        </div>
    </div>


    <div class="view chat" v-else>
          <header>
            <button class="bg-red-500 logout hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="Logout">Exit Chat</button>
            <h1 class="rounded-lg box-content w-fit mt-12 bg-stone-900 text-lg text-white p-3">Welcome, {{ state.username }}</h1>
          </header>
          
          <section class="chat-box ">
            <div 
              v-for="message in state.messages" 
              :key="message.key" 
              :class="(message.username == state.username ? 'message current-user' : 'message')">
              <div class="message-inner">
                <div class="username">{{ message.username }}</div>
                <div class="content">{{ message.content }}</div>
              </div>
            </div>
          </section>
      
          <footer>
            <form @submit.prevent="SendMessage">
              <input 
                type="text" 
                v-model="inputMessage" 
                placeholder="Write a message..." />
              <input 
                type="submit" 
                value="Send" />
            </form>
          </footer>
        </div>
</template>

<style lang="scss">
* {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.view {
    display: flex;
    justify-content: center;
  //   min-height: 100vh;
  //   background-color: #ea526f;
  // #78350f
  // #1c1917

    &.login {
        align-items: center;
        .login-form {
            display: block;
            width: 100%;
            padding: 30px;
            
            .form-inner {
                display: block;
                background-color: #1c1917;
                padding: 50px 15px;
                border-radius: 16px;
                box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
                h1 {
                    color: #FFF;
                    font-size: 28px;
                    margin-bottom: 30px;
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                    color: #FFF;
                    font-size: 16px;
                    transition: 0.4s;
                }
                input[type="text"] {
                    appearance: none;
                    border: none;
                    outline: none;
                    background: none;
                    display: block;
                    width: 100%;
                    padding: 10px 15px;
                    border-radius: 8px;
                    margin-bottom: 15px;
                    
                    color: #333;
                    font-size: 18px;
                    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
                    background-color: #78350f;
                    transition: 0.4s;
                    &::placeholder {
                        color: #FFF;
                        transition: 0.4s;
                    }
                }
                input[type="submit"] {
                    appearance: none;
                    border: none;
                    outline: none;
                    background: none;
                    display: block;
                    width: 100%;
                    padding: 10px 15px;
                    background-color: #ea526f;
                    border-radius: 8px;
                    color: #FFF;
                    font-size: 18px;
                    font-weight: 700;
                }
                &:focus-within {
                    label {
                        color: #ea526f;
                    }
                    input[type="text"] {
                        background-color: #FFF;
                        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
                        &::placeholder {
                            color: #666;
                        }
                    }
                }
            }
        }
    }
    &.chat {
        flex-direction: column;
        header {
            position: relative;
            display: block;
            width: 100%;
            padding: 50px 30px 10px;
            .logout {
                position: absolute;
              
                right: 15px;
              
                border: none;
                border-radius: 15px;
             
                font-size: 18px;
            }
          //   h1 {
          //       color: #78350f;
          //       background-color: #1c1917;
          //   }
        }
        .chat-box {
            border-radius: 24px 24px 0px 0px;
            background-color: #1c1917;
            box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
            flex: 1 1 100%;
            padding: 30px;
            .message {
                display: flex;
                margin-bottom: 15px;
                
                .message-inner {
                    .username {
                        color: #888;
                        font-size: 16px;
                        margin-bottom: 5px;
                        padding-left: 15px;
                        padding-right: 15px;
                    }
                    .content {
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #78350f;
                        border-radius: 999px;
                        color: #FFF;
                        font-size: 18px;
                        line-height: 1.2em;
                        text-align: left;
                    }
                }
                &.current-user {
                    margin-top: 30px;
                    justify-content: flex-end;
                    text-align: right;
                    .message-inner {
                        max-width: 75%;
                        .content {
                            color: #FFF;
                            font-weight: 600;
                            background-color: #ea526f;
                        }
                    }
                }
            }
        }
        footer {
            position: sticky;
            bottom: 0px;
            background-color: #1c1917;
            padding: 30px;
            box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
            form {
                display: flex;
                input[type="text"] {
                    flex: 1 1 100%;
                    appearance: none;
                    border: none;
                    outline: none;
                    background: none;
                    display: block;
                    width: 100%;
                    padding: 10px 15px;
                    border-radius: 8px 0px 0px 8px;
                    
                    color: #fff;
                    font-size: 18px;
                    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
                    background-color: #78350f;
                    transition: 0.4s;
                    &::placeholder {
                        color: #FFF;
                        transition: 0.4s;
                    }
                }
                
                input[type="submit"] {
                    appearance: none;
                    border: none;
                    outline: none;
                    background: none;
                    display: block;
                    padding: 10px 15px;
                    border-radius: 0px 8px 8px 0px;
                    background-color: #ea526f;
                    color: #FFF;
                    font-size: 18px;
                    font-weight: 700;
                }
            }
        }
    }
}
</style>