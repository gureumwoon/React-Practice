// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCADE6rJAPMpVKjsr0BejjSgVKjFBy_2Pc",
    authDomain: "sparta-react-basic-4a998.firebaseapp.com",
    projectId: "sparta-react-basic-4a998",
    storageBucket: "sparta-react-basic-4a998.appspot.com",
    messagingSenderId: "653331688274",
    appId: "1:653331688274:web:bfcc7e54c5f3951be7288b",
    measurementId: "G-ZZ4XYWFB8Q"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();