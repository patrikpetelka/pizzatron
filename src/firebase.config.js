import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHiAXGQq5RJyAsMxiezOx9kJunHZp9Nq4",
  authDomain: "pizzatron-72e2a.firebaseapp.com",
  projectId: "pizzatron-72e2a",
  storageBucket: "pizzatron-72e2a.appspot.com",
  messagingSenderId: "329496926504",
  appId: "1:329496926504:web:ef66d8db83a4e500b3181d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
