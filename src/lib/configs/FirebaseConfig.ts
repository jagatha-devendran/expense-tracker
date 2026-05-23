import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { 
  PUBLIC_FIREBASE_API_KEY, 
  PUBLIC_FIREBASE_AUTH_DOMAIN, 
  PUBLIC_FIREBASE_PROJECT_ID, 
  PUBLIC_FIREBASE_STORAGE_BUCKET, 
  PUBLIC_FIREBASE_MESSAGING_SENDER_ID, 
  PUBLIC_FIREBASE_APP_ID 
} from '$env/static/public';

console.log("Initializing Firebase with Project ID:", PUBLIC_FIREBASE_PROJECT_ID);

const firebaseConfig = {
  apiKey: PUBLIC_FIREBASE_API_KEY,
  authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: PUBLIC_FIREBASE_APP_ID
};

if (!PUBLIC_FIREBASE_API_KEY) {
  console.error("Firebase API Key is missing! Check your .env file.");
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
