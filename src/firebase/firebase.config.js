// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2KDUk6cihECXY9PfLJ1A1sf26uOvRZpY",
    authDomain: "coffee-store-1b3f8.firebaseapp.com",
    projectId: "coffee-store-1b3f8",
    storageBucket: "coffee-store-1b3f8.appspot.com",
    messagingSenderId: "871015708813",
    appId: "1:871015708813:web:d87ebc5cc13b72baa98ac4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;