import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-9c604.firebaseapp.com",
  projectId: "chat-app-9c604",
  storageBucket: "chat-app-9c604.firebasestorage.app",
  messagingSenderId: "424044191812",
  appId: "1:424044191812:web:943f2df1c780fde4775c11",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
