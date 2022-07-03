import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFnlfnAfa7crQZjJ7wuzSmvr03H25vc5g",
  authDomain: "journalapp-8bcaa.firebaseapp.com",
  projectId: "journalapp-8bcaa",
  storageBucket: "journalapp-8bcaa.appspot.com",
  messagingSenderId: "994406390638",
  appId: "1:994406390638:web:a18b3c0d8b76654948bf7f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);