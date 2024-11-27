// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-eZwDy_mxGt7kPrIzNde6kBSXlQ3WVbc",
  authDomain: "chatroom-63848.firebaseapp.com",
  projectId: "chatroom-63848",
  storageBucket: "chatroom-63848.firebasestorage.app",
  messagingSenderId: "148867496562",
  appId: "1:148867496562:web:29a64c6ad6073e487a60eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);