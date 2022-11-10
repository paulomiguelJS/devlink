import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNVQg9pzmiOcsO77WpKllOx5tGHhxOZqg",
  authDomain: "linktree-3996c.firebaseapp.com",
  projectId: "linktree-3996c",
  storageBucket: "linktree-3996c.appspot.com",
  messagingSenderId: "1057612302130",
  appId: "1:1057612302130:web:e072c5f2d49de17826b92b",
  measurementId: "G-K2TLP3QHTC",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
