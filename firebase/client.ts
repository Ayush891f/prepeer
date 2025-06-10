// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDc1mf1v4Ppv9x4av-C79oaE48bhb5YYCM",
    authDomain: "preppeer-1a29d.firebaseapp.com",
    projectId: "preppeer-1a29d",
    storageBucket: "preppeer-1a29d.firebasestorage.app",
    messagingSenderId: "177708092977",
    appId: "1:177708092977:web:25c3e99ef3e31c46678f10",
    measurementId: "G-1YNGM47RDS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
