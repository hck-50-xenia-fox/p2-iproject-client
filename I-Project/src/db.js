// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXkfYMWoeggvtH8iAVM_K_JeVjC2FTgX0",
    authDomain: "go-koss-hck8.firebaseapp.com",
    databaseURL: "https://go-koss-hck8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "go-koss-hck8",
    storageBucket: "go-koss-hck8.appspot.com",
    messagingSenderId: "823253862890",
    appId: "1:823253862890:web:ad69cb4a4804ff7a0f0a93",
    measurementId: "G-3JM4R65RJ0"
  };

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export default db;