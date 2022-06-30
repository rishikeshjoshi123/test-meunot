import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDWcJIL5-PmNiBWHNrq-AEIHc7JN8_9LJg",
    authDomain: "meunot-e4225.firebaseapp.com",
    projectId: "meunot-e4225",
    storageBucket: "meunot-e4225.appspot.com",
    messagingSenderId: "737991110660",
    appId: "1:737991110660:web:e167b0ce10e610f93e8551",
    measurementId: "G-9WB97GD1HM"
  };


// Initialize Firebase

const app = initializeApp(firebaseConfig);
var auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getFirestore();
export {auth , provider, database};