import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDJOh7Rg0QzX6IUsx7UyuAPbpYjYrhYcxk",
  authDomain: "smart-toilet-10c91.firebaseapp.com",
  projectId: "smart-toilet-10c91",
  storageBucket: "smart-toilet-10c91.firebasestorage.app",
  messagingSenderId: "854141506520",
  appId: "1:854141506520:web:efba32f46a4c0cdf5658ad",
  measurementId: "G-FWQW7Z99WG"
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const database = getAuth(app);