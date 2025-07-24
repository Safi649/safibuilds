// firebase/config.js

// Import required Firebase SDK functions
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEfUu4z_MPtcF8AWLAQF1rRdGa3I3TSCQ",
  authDomain: "safibuilds-ea8bd.firebaseapp.com",
  projectId: "safibuilds-ea8bd",
  storageBucket: "safibuilds-ea8bd.appspot.com", // ✅ corrected domain
  messagingSenderId: "725487457324",
  appId: "1:725487457324:web:00e2900cab0b29c8022d89",
  measurementId: "G-BVX6MWKVZH"
};

// ✅ Initialize Firebase App (safe for SSR)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Export initialized services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
