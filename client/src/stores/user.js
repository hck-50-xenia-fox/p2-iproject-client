import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLogin: true,
      password: "",
      email: "",
      username: "",
      description: "",
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
      answer: "",
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

        Swal.fire(
          "Registered!",
          "Your account have been registered",
          "success"
        );
        this.$router.push("/login");

        (this.username = ""), (this.email = ""), (this.password = "");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
    async handleAddQuestion() {
      try {
        let data = await axios({
          url: `${baseUrl}/questions`,
          method: "POST",
          data: {
            description: this.description,
            choice1: this.choice1,
            choice2: this.choice2,
            choice3: this.choice3,
            choice4: this.choice4,
            answer: this.answer,
          },
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        console.log(data, "ini di storee add question");

        this.$router.push("/");

        Swal.fire(
          "Added!",
          "Your question has been accommodated, thank you for your participation.",
          "success"
        );

        this.description = "";
        this.choice1 = "";
        this.choice2 = "";
        this.choice3 = "";
        this.choice4 = "";
        this.answer = "";
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
  },
});
