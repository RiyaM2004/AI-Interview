import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-8d9c7.firebaseapp.com",
  projectId: "interviewiq-8d9c7",
  storageBucket: "interviewiq-8d9c7.firebasestorage.app",
  messagingSenderId: "135953381949",
  appId: "1:135953381949:web:ad867177b52cb569088854",
  measurementId: "G-3J9MX38FGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}