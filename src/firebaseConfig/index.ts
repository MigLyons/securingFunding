    // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import { initializeApp, getApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Lrsp08hNmVVECOQLQ71aTk8NopI-D08",
  authDomain: "awad-003.firebaseapp.com",
  projectId: "awad-003",
  storageBucket: "awad-003.appspot.com",
  messagingSenderId: "879211946497",
  appId: "1:879211946497:web:8cc206921be0c21dce1600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, app, db };
export default app;