import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYA_KVJNy2l_MsOBo2RhcmJzwaW41V8B4",
    authDomain: "urban-fresh-app.firebaseapp.com",
    projectId: "urban-fresh-app",
    storageBucket: "urban-fresh-app.appspot.com",
    messagingSenderId: "125641437524",
    appId: "1:125641437524:web:c8df89be6bdc96137658c1"
  };
  
  // Initialize Firebase
  export const FIREBASE_APP = initializeApp(firebaseConfig);
  export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
  export const FIREBASE_AUTH = getAuth(FIREBASE_APP);