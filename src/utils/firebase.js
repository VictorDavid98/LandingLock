import firebase from "firebase/app";
import database from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBJaygqWSyuXlbYSNTRdoWqXcAL3ymuyxM",
    authDomain: "lock-landing-page.firebaseapp.com",
    projectId: "lock-landing-page",
    storageBucket: "lock-landing-page.appspot.com",
    messagingSenderId: "187772061402",
    appId: "1:187772061402:web:c042e7656f5a8ad08d07e3"
  };

export default firebase.initializeApp(firebaseConfig);



