import  firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGWZ4_kQKj6an34wA5D4wacflceaia9IU",
  authDomain: "clone-706f4.firebaseapp.com",
  projectId: "clone-706f4",
  storageBucket: "clone-706f4.firebasestorage.app",
  messagingSenderId: "446658168485",
  appId: "1:446658168485:web:21998e561f6af4795bef4c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();