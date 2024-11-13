'use client'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8h75p16fuLjKem8RElACLw92P79jvFfg",
  authDomain: "fall24livedemoidx.firebaseapp.com",
  projectId: "fall24livedemoidx",
  storageBucket: "fall24livedemoidx.appspot.com",
  messagingSenderId: "612170978336",
  appId: "1:612170978336:web:b7d2f71438a03ccbd39845",
  measurementId: "G-NJ45BY7L5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};