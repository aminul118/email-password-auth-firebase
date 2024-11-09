// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7q6prJJVzO0WswlVsll0pQPvoxoRg3QA",
  authDomain: "email-password-auth-6a65c.firebaseapp.com",
  projectId: "email-password-auth-6a65c",
  storageBucket: "email-password-auth-6a65c.firebasestorage.app",
  messagingSenderId: "309162940272",
  appId: "1:309162940272:web:c6c04483f4beb5f873e1b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
