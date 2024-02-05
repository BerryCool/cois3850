// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6jvUC_HpRCBPXwUsta3jse-vBI7kVxN4",
  authDomain: "cois3850.firebaseapp.com",
  projectId: "cois3850",
  storageBucket: "cois3850.appspot.com",
  messagingSenderId: "334418025348",
  appId: "1:334418025348:web:262d561f6ca60257f35bd1",
  measurementId: "G-VD7GHDRTKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
