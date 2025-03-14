// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:"AIzaSyAPT_BvIsrOaglNps35tgOpJSFKdn_mbgc",
  authDomain: "personal-finance-app-7d795.firebaseapp.com",
  projectId: "personal-finance-app-7d795",
  storageBucket: "personal-finance-app-7d795.firebasestorage.app",
  messagingSenderId: "315207036096",
  appId: "1:315207036096:web:e704600e849d62a485d125"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;