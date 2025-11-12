// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWSeUsKQOA0JV6c3F4KAysuhaSalGXW3s",
  authDomain: "veridian-bills.firebaseapp.com",
  projectId: "veridian-bills",
  storageBucket: "veridian-bills.firebasestorage.app",
  messagingSenderId: "705191550469",
  appId: "1:705191550469:web:dd9c020ef6fe55b932c66c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)