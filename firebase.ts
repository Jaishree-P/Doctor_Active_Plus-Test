// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8ZAOOFSdZ8RkdGKh7IskFnh1LCDsrQgo",
  authDomain: "doctor-active-plus-review.firebaseapp.com",
  projectId: "doctor-active-plus-review",
  storageBucket: "doctor-active-plus-review.firebasestorage.app",
  messagingSenderId: "958341366869",
  appId: "1:958341366869:web:de54c832b1889454df80dc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
