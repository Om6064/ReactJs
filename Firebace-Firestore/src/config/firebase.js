import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAo1fSXWz27IarjL_S0sfkFBtIyP2qcK8",
  authDomain: "react-test-app-be3e5.firebaseapp.com",
  projectId: "react-test-app-be3e5",
  storageBucket: "react-test-app-be3e5.firebasestorage.app",
  messagingSenderId: "1077039723081",
  appId: "1:1077039723081:web:5857c5b404f85e68d18598"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);