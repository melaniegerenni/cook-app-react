// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkGC33VI3jst9I5I_9FfjfgOhJma72Et0",
  authDomain: "cook-app-a7b28.firebaseapp.com",
  projectId: "cook-app-a7b28",
  storageBucket: "cook-app-a7b28.appspot.com",
  messagingSenderId: "346576017162",
  appId: "1:346576017162:web:227a2736be1857251a0cf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);