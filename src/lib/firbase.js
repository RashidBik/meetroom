// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfJCiL-TantQmyK_394U-t6220VxcQ4mY",
  authDomain: "meetroom-cd1e0.firebaseapp.com",
  projectId: "meetroom-cd1e0",
  storageBucket: "meetroom-cd1e0.appspot.com",
  messagingSenderId: "526833367122",
  appId: "1:526833367122:web:ebbf054837fec365abc78b",
  measurementId: "G-22DNE4JP60"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// @ts-ignore
export const auth = firebase.auth();
// @ts-ignore
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// @ts-ignore
export const db = firebase.firestore();