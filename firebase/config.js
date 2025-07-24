// /firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEfUu4z_MPtcF8AWLAQF1rRdGa3I3TSCQ",
  authDomain: "safibuilds-ea8bd.firebaseapp.com",
  projectId: "safibuilds-ea8bd",
  storageBucket: "safibuilds-ea8bd.firebasestorage.app",
  messagingSenderId: "725487457324",
  appId: "1:725487457324:web:00e2900cab0b29c8022d89",
  measurementId: "G-BVX6MWKVZH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
