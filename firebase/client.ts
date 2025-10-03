// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwCPV4iGMzRoJQWFR1Wab9u3hInQQDkYs",
  authDomain: "ai-prepmate-d680a.firebaseapp.com",
  projectId: "ai-prepmate-d680a",
  storageBucket: "ai-prepmate-d680a.firebasestorage.app",
  messagingSenderId: "311012146950",
  appId: "1:311012146950:web:d21af266d03779dca86887"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const  db = getFirestore(app);