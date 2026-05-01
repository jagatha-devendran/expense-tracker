// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEmGVMm3upaiKyDmF-GmrWivri-ouYGV0",
  authDomain: "expense-tracker-f704c.firebaseapp.com",
  projectId: "expense-tracker-f704c",
  storageBucket: "expense-tracker-f704c.firebasestorage.app",
  messagingSenderId: "447106152835",
  appId: "1:447106152835:web:f33d502074982a85c69eb6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

