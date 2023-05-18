// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7W6_HYt9Oi72D3sO82I_Ug_2di7savkQ",
    authDomain: "toy-house-open.firebaseapp.com",
    projectId: "toy-house-open",
    storageBucket: "toy-house-open.appspot.com",
    messagingSenderId: "937862644647",
    appId: "1:937862644647:web:82568e0d95653375786c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;