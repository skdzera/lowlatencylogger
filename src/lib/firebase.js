import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-8ffe1.firebaseapp.com",
  projectId: "chat-app-8ffe1",
  storageBucket: "chat-app-8ffe1.appspot.com",
  messagingSenderId: "826501150341",
  appId: "1:826501150341:web:c7d471828512298ecd5bec"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const Storage = getStorage()
