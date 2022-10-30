import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPdZ_4-jsc1bxvhcb9-J32ziTtT1ppCEw",
  authDomain: "meetroom-10e18.firebaseapp.com",
  projectId: "meetroom-10e18",
  storageBucket: "meetroom-10e18.appspot.com",
  messagingSenderId: "498512767474",
  appId: "1:498512767474:web:bea4ac744d7dd9c3bba36b"
};

// Initialize Firebase
initializeApp(firebaseConfig);


// export const auth = getAuth();

// export const provider = new firebase.auth.OAuthProvider('oidc.my-provider');
// provider.addScope('offline_access');
// firebase.auth().signInWithPopup(provider);

// export const db = getFirestore();
