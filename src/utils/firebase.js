// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg-5GemMyKUYgleBIBU1emjhJyrsOpkck",
  authDomain: "netflixgpt-c7791.firebaseapp.com",
  projectId: "netflixgpt-c7791",
  storageBucket: "netflixgpt-c7791.appspot.com",
  messagingSenderId: "124362952408",
  appId: "1:124362952408:web:b530fa6a0d261c52e7d1ad",
  measurementId: "G-660E81LGFC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
