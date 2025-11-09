// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3tzBFA_O8X2IzDT5P_mu4ALa4xgArKcY",
  authDomain: "plate-share-138b1.firebaseapp.com",
  projectId: "plate-share-138b1",
  storageBucket: "plate-share-138b1.firebasestorage.app",
  messagingSenderId: "341440072169",
  appId: "1:341440072169:web:c7e291fe8bec7f03056378",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
