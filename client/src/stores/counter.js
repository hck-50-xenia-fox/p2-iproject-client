import { defineStore } from "pinia";
import swal from "sweetalert2";
const baseUrl = "http://localhost:3000";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://oesifujokekrtlvsrztj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lc2lmdWpva2VrcnRsdnNyenRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU1NDU1OTAsImV4cCI6MTk4MTEyMTU5MH0.TmXHytLmdFhaf90Oxa8Pl7OHjj5h4qOdHMzUzBGsDtk"
);

export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    dataLogin: "",
    courseData:[],
    isPage: ''
  }),
  actions: {
    checkLogin() {
      if (localStorage.getItem("access_token")) this.isLogin = true;
      else this.isLogin = false;
    },
    // async spotify() {
    //   try {
    //     const { user, session, error } = await supabase.auth.signIn({
    //       provider: "facebook",
    //     });
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    logout() {
      this.isLogin = false;
      localStorage.clear();
      this.router.push("/home");
    },
    async login(email, password) {
      try {
        const response = await axios({
          url: baseUrl + "/login",
          method: "POST",
          data: {
            email,
            password,
          },
        });
        console.log(response, "<== ini dari login");
        localStorage.setItem("access_token", response.data.access_token);
        this.isLogin = true;
        this.router.push("/home");
      } catch (error) {
        console.log(error);
      }
    },
    async signInWithFacebook() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
      });
    },
    // async register(username, email, password) {
    //   try {
    //     const response = await axios({

    //     })
    //   } catch (error) {

    //   }
    // },
    async fetchCourse() {
      try {
        const dataCourse = await axios({
          url: baseUrl + "/course",
          method: "GET",
          // headers: {
          //   access_token: localStorage.getItem("access_token"),
          // },
        });
        console.log(response);
        this.courseData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
