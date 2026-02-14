import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5nRp8IYeU71QVfncXrO-nhWK7-1Dx1tE",
    authDomain: "travel-and-tourism-19494.firebaseapp.com",
    projectId: "travel-and-tourism-19494",
    storageBucket: "travel-and-tourism-19494.firebasestorage.app",
    messagingSenderId: "476829232484",
    appId: "1:476829232484:web:131d02ddc75bb62815de71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
