// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {onSnapshot, collection, getFirestore, doc, getDoc, addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPHqqYyhuEJ7fIpRksToVYC5zbM1onZ3w",
  authDomain: "flex-fa8c8.firebaseapp.com",
  projectId: "flex-fa8c8",
  storageBucket: "flex-fa8c8.appspot.com",
  messagingSenderId: "824163771541",
  appId: "1:824163771541:web:83622e1bb9f3aada3f679c",
  measurementId: "G-SY23L7GKQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);

//OnSnapshot es un getter y traemos rutinas
export const getRoutines = (callback) => onSnapshot(collection(db, '/routines'), callback);
export const getExercise = (id, callback) => onSnapshot(doc(db, '/exercises', id), callback);

//ADD DATA INTO DB. USING ADD INSTEAD OF SET BECAUSE OF RANDOMIZE AN ID
export const addRoutine = async (routine) => {
    const docRef = await addDoc(collection(db, "routines"), routine);
};
