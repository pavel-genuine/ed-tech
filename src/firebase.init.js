// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa9_cLlyEO6bp_sD9xRFK8fTU3S6rRGG4",
  authDomain: "ed-tech-909ea.firebaseapp.com",
  projectId: "ed-tech-909ea",
  storageBucket: "ed-tech-909ea.appspot.com",
  messagingSenderId: "789598054534",
  appId: "1:789598054534:web:8bff27246c1d2b3bf10907"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;