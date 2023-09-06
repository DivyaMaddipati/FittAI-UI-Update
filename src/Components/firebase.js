// firebase.js
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVrq5jqxEsGxEWvWbuUhJk9dOH5AXZlaM",
  authDomain: "fit-ai-40f83.firebaseapp.com",
  projectId: "fit-ai-40f83",
  storageBucket: "fit-ai-40f83.appspot.com",
  messagingSenderId: "762106212520",
  appId: "1:762106212520:web:920c2f9aa6b6ee13e5529d",
  measurementId: "G-EHFV9V6J0N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export const storage = firebase.storage();
export default firebase;