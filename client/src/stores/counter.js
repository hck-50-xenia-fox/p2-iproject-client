import { defineStore } from "pinia";
import axios from "axios";
// let baseUrl = `https://youtube-alex-chandra-hanif.herokuapp.com`;
let baseUrl = `http://localhost:3000`;
export const useCounterStore = defineStore("counter", {
  state: () => ({
    dataTrailerMovie: [],
    dataSearch: [],
    dataDetailVideo: [],
    dataChannelDetail: [],
    dataChannelVideos: [],
    dataHistory: [],
    dataComment: [],
  }),
  actions: {
    // Register
    async register(username, email, password) {
      try {
        let data = await axios({
          url: `${baseUrl}/users/register`,
          method: "POST",
          data: {
            username,
            email,
            password,
          },
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Success",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    },

    // Login
    async login(email, password) {
      try {
        let data = await axios({
          method: "POST",
          url: `${baseUrl}/users/login`,
          data: {
            email,
            password,
          },
        });
        console.log(data.data.access_token);
        console.log(data.data.username);
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("username", data.data.username);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    },

    // Get Trailer
    async getTrailer() {
      try {
        let data = await axios({
          method: "GET",
          url: `${baseUrl}/youtube/movieTrailer`,
        });
        // console.log(data.data);
        this.dataTrailerMovie = data.data.filter((el, i) => i < 15);
      } catch (error) {
        console.log(error);
      }
    },

    // Get Search Movie
    async searchMovie(search) {
      try {
        if (search === undefined) {
          search = "Hacktiv+8";
        }
        let data = await axios({
          method: "GET",
          url: `${baseUrl}/youtube/search/${search}`,
        });
        console.log(data.data);
        this.dataSearch = data.data.filter((el, i) => i < 18);
      } catch (error) {
        console.log(error);
      }
    },

    // Detail Video
    async getDetailVideo(id) {
      try {
        let data = await axios({
          method: "GET",
          url: `${baseUrl}/youtube/videoDetail/${id}`,
        });
        this.dataDetailVideo = data.data;
      } catch (error) {
        console.log(error);
      }
    },

    // Get Channel
    async getChannelDetail(id) {
      try {
        let data = await axios({
          method: "GET",
          url: `${baseUrl}/youtube/channelDetail/${id}`,
        });
        this.dataChannelDetail = data.data;
        console.log("berhasil");
      } catch (error) {
        console.log(error);
      }
    },

    // Get videos Channel
    async getChannelVideos(id) {
      try {
        let data = await axios({
          method: "GET",
          url: `${baseUrl}/youtube/channelVideos/${id}`,
        });
        console.log("berhasil fatch video");
        this.dataChannelVideos = data.data.filter((el, i) => i < 12);
      } catch (error) {
        console.log(error);
      }
    },

    async getHistory() {
      try {
        let data = await axios({
          url: `${baseUrl}/users/getHistory`,
          method: "GET",
        });
        this.dataHistory = data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getComment(id) {
      try {
        let data = await axios({
          url: `${baseUrl}/youtube/comments/${id}`,
          method: "GET",
        });
        this.dataComment = data.data.content.filter((el, i) => i < 8);
        console.log(this.dataComment);
      } catch (error) {
        console.log(error);
      }
    },

    async logout() {
      try {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be Logout!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes!",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.clear();
            this.router.push("/");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "See You",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
