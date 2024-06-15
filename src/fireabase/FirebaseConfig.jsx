// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL3Vbp3UJZXBCAtyv0rV0jfaxk1pXRmhw",
  authDomain: "epicxventure.firebaseapp.com",
  projectId: "epicxventure",
  storageBucket: "epicxventure.appspot.com",
  messagingSenderId: "1014190094005",
  appId: "1:1014190094005:web:8d8d62a6a1599989c2b0fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}