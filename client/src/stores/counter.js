import { defineStore } from "pinia";
import swal from "sweetalert2";
const baseUrl = "http://localhost:3001";
// const baseUrl = `https://desolate-wave-18945.herokuapp.com/`
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
    courseData: [],
    myCourse: [],
    paymentResponse: {},
  }),
  actions: {
    checkLogin() {
      if (localStorage.getItem("access_token")) this.isLogin = true;
      else this.isLogin = false;
    },
    supabase() {
      supabase.auth.onAuthStateChange((_, session) => {
        this.loginSosmed();
      });
    },
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
      try {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: "facebook",
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async loginSosmed() {
      try {
        const token = JSON.parse(localStorage.getItem("supabase.auth.token"));
        const response = await axios.post(`${baseUrl}/login`, {
          headers: {
            access_token: token.currentSession.access_token,
          },
        });
        const data2 = localStorage.setItem(
          "access_token",
          response.data.access_token
        );
        if (data2) {
          this.router.push("/course");
        } else {
          this.router.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async register(username, email, password) {
      try {
        const response = await axios({
          url: `${baseUrl}/register`,
          method: "POST",
          data: {
            username,
            email,
            password,
          },
        });
        this.isLogin = false;
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCourse() {
      try {
        const response = await axios({
          url: baseUrl + "/course",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(response);
        this.courseData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addCourse(id) {
      try {
        await axios({
          url: `${baseUrl}/mycourse`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            CourseId: id,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async payment() {
      try {
        let { data } = await axios({
          url: `${baseUrl}/payment`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        snap.pay(`${data.transactionToken}`, {
          onSuccess: async function (result) {
            this.paymentResponse = result;
            await axios({
              method: "PUT",
              url: `${baseUrl}/mycourse/:courseId`,
              headers: {
                access_token: localStorage.getItem("access_token"),
              },
            });
            localStorage.setItem("status", "available");
            this.available = true;
            this.checkLogin();
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMyCourse() {
      try {
        const response = await axios({
          url: `${baseUrl}/mycourse/:courseId`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.myCourse = response.data;
        if (!paymentResponse) {
          this.router.push("/course");
        } else {
          this.router.push("/mycourse");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async putMyCourse(id, status) {
      try {
        await axios({
          url: `${baseUrl}/mycourse/:courseId`,
          method: "PUT",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            status,
          },
        });
        this.fetchCourse();
      } catch (error) {
        console.log(error);
      }
    },
  },

});

