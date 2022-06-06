import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA4bHaPzdu4UWG9fKacEJXHE6pz5JP8UM",
    authDomain: "sparta-react-advanced-e24a2.firebaseapp.com",
    projectId: "sparta-react-advanced-e24a2",
    storageBucket: "sparta-react-advanced-e24a2.appspot.com",
    messagingSenderId: "124995871957",
    appId: "1:124995871957:web:a7daaf727c885462beae5c",
    measurementId: "G-9588VV5P66"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;