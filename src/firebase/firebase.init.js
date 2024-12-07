// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-fGr9OIRDRdwCNEIGMqeAwdXE9lZtJ2A",
  authDomain: "donation-tuilip-auth.firebaseapp.com",
  projectId: "donation-tuilip-auth",
  storageBucket: "donation-tuilip-auth.firebasestorage.app",
  messagingSenderId: "861943111494",
  appId: "1:861943111494:web:66cdf23a479ebfcaa54f47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
