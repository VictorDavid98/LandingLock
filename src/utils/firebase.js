// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJaygqWSyuXlbYSNTRdoWqXcAL3ymuyxM",
  authDomain: "lock-landing-page.firebaseapp.com",
  projectId: "lock-landing-page",
  storageBucket: "lock-landing-page.appspot.com",
  messagingSenderId: "187772061402",
  appId: "1:187772061402:web:c042e7656f5a8ad08d07e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

const auth = getAuth();

export { auth };