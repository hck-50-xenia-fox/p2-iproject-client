import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLogin: true,
      password: "",
      email: "",
      username: ""
    };
  },
  actions: {
    loginState() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    logout() {
      (this.isLogin = false), localStorage.clear();
      this.$router.push("/login");
      Swal.fire("Logged Out!", "You have logged Out!", "success");
    },
    async handleLogin() {
      try {
        let data = await axios({
          url: `${baseUrl}/login`,
          method: "POST",
          data: {
            email: this.email,
            password: this.password,
          },
        });

        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("username", data.data.username);

        this.isLogin = true;
        this.$router.push("/");
        this.password = "";
        this.email = "";
        Swal.fire("Logged In!", "You have logged in!", "success");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
    async handleRegister() {
      try {
        await axios({
          url: `${baseUrl}/register`,
          method: "POST",
          data: {
            username: this.username,
            email: this.email,
            password: this.password,
          },
        });

        Swal.fire("Registered!", "Your account have been registered", "success");
        this.$router.push("/login");

        this.username = "",
        this.email = "",
        this.password = ""
      
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    }
  },
});
