import { defineStore } from "pinia";
import axios from "@/apis/axios-instance.js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://imqbfsulurhrhklxfzdj.supabase.co";
const supabase = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltcWJmc3VsdXJocmhrbHhmemRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU1MTI2NTUsImV4cCI6MTk4MTA4ODY1NX0.2NvZZP8Ua3CKLQat7LcCB54z_yZNULRpz1GPLFi_MyA"
);

export const useIndexStore = defineStore("index", {
  state: () => ({
    isLoggedIn: false,
    books: [],
    book: {},
  }),

  actions: {
    //etc
    async signInWithFacebook() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
      });

      this.route.push("/");
      this.isLoggedIn = true;
    },

    async signout() {
      const { error } = await supabase.auth.signOut();
    },

    async payButton() {
      try {
        const { data } = await axios({
          method: "post",
          url: "/midtrans/pay",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(data);
        snap.pay(data.token, {
          onSuccess:  (result) => {
            console.log("success");
            console.log(result);
          },
          // onPending: function (result) {
          //   console.log("pending");
          //   console.log(result);
          // },
          // onError: function (result) {
          //   console.log("error");
          //   console.log(result);
          // },
          // onClose: function () {
          //   console.log(
          //     "customer closed the popup without finishing the payment"
          //   );
          // },
        });
      } catch (err) {
        console.log(err);
      }
    },

    async login(credentials) {
      try {
        const { data } = await axios({
          method: "post",
          url: "/users/login",
          data: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        this.isLoggedIn = true;

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("UserId", data.userId);
        localStorage.setItem("name", data.name);

        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    async handleCredentialResponse(response) {
      try {
        const { credential } = response;
        const { data } = await axios({
          method: "post",
          url: "/users/google-login",
          data: {
            credential,
          },
        });

        this.isLoggedIn = true;

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("UserId", data.userId);
        localStorage.setItem("name", data.name);

        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    logout() {
      localStorage.clear();
      this.router.push("/login");
    },

    //book
    async fetchBook(q) {
      console.log(q);
      try {
        const { data } = await axios({
          method: "get",
          url: `/books/${q ? q : ""}`,
        });
        this.books = data;
      } catch (err) {
        console.log(err);
      }
    },

    async bookById(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: `/books/${id}`,
        });
        this.book = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
