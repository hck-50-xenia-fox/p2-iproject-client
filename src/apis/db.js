import firebase from "firebase/compat";
import "firebase/compat/database";

// API keys
const firebaseConfig = {
  apiKey: "AIzaSyBLbMy_cWqWhv_hhUd2tv5jcP0m9ItIWeU",
  authDomain: "book-store-365312.firebaseapp.com",
  databaseURL: "https://book-store-365312-default-rtdb.firebaseio.com",
  projectId: "book-store-365312",
  storageBucket: "book-store-365312.appspot.com",
  messagingSenderId: "1012086062031",
  appId: "1:1012086062031:web:2f325710c2d837165c30ba",
};

const db = firebase.initializeApp(firebaseConfig);

export default db;
