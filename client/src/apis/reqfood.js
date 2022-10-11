import axios from "axios";

const instance = axios.create({
  // baseURL: "https://resto-menu-1000-2.herokuapp.com/cus",
  baseURL: "http://localhost:3000",
});

export default instance;
