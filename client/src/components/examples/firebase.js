// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUIvqWxRFRi5yP7swDNuZvWxer7ORPa9I",
  authDomain: "loginauth-d935f.firebaseapp.com",
  projectId: "loginauth-d935f",
  storageBucket: "loginauth-d935f.firebasestorage.app",
  messagingSenderId: "814055327073",
  appId: "1:814055327073:web:7c53fc4b7c2cd5b56db120"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;