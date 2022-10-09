// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCGTLjX4ZyC8qHNUp8wdVQMcAg-XRggyBo",
    authDomain: "allmacenreact.firebaseapp.com",
    projectId: "allmacenreact",
    storageBucket: "allmacenreact.appspot.com",
    messagingSenderId: "140002749275",
    appId: "1:140002749275:web:3c23cbf3ecf888c3db087e",
    measurementId: "G-HPHG75DVRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);