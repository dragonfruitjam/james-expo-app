// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/firebase-auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxyf6424zOJB9lrG7AyfbAN7B663uFFgQ",
  authDomain: "charismatic-cultists.firebaseapp.com",
  projectId: "charismatic-cultists",
  storageBucket: "charismatic-cultists.appspot.com",
  messagingSenderId: "517004977600",
  appId: "1:517004977600:web:8dad2dfd5ec8be5442d425"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
