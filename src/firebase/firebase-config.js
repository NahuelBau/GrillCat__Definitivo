import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB-wgjEa5CjfNoHK1UieWgaNB4bISViXLo",
  authDomain: "r40-cb492.firebaseapp.com",
  projectId: "r40-cb492",
  storageBucket: "r40-cb492.appspot.com",
  messagingSenderId: "487115931344",
  appId: "1:487115931344:web:894941c1601099e268a8d5"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

