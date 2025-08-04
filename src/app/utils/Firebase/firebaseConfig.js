// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7N3s0QpBuvHN5uz47ETl6eH5mA4FXUe8",
  authDomain: "pioneer-491ed.firebaseapp.com",
    projectId: "pioneer-491ed",
  storageBucket: "pioneer-491ed.appspot.com", // ✅ FIXED THIS LINE
  messagingSenderId: "929757032271",
  appId: "1:929757032271:web:0e4597e2eefa254ec19f3a",
  measurementId: "G-K66M1MH3FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth =getAuth(app)

export { db };
