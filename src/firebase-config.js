import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8ZlKvLrzbACgh-whEFmAka354DoGopSM",
  authDomain: "todos-5586a.firebaseapp.com",
  projectId: "todos-5586a",
  storageBucket: "todos-5586a.appspot.com",
  messagingSenderId: "188718013286",
  appId: "1:188718013286:web:d2502d2930dccb659c86a7"
};

initializeApp(firebaseConfig);

export const database = getFirestore();