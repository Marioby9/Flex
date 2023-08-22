// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {onSnapshot, collection, getFirestore, doc, query, where, addDoc, setDoc, updateDoc, deleteDoc, arrayUnion} from "firebase/firestore";
import { getAuth, deleteUser } from 'firebase/auth'
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
export const auth = getAuth();

export const addUser = (uid, user) => setDoc(doc(collection(db, 'users'), uid), user);
export const getUsername = (uid, callback) => onSnapshot(query(doc(db, 'users', uid)), callback);

export const deleteAccount = (uid) =>{
  deleteDoc(doc(db, "users", uid));
  onSnapshot(query(collection(db, 'routines'), where("uid", "==", uid)), (docs) => {
    docs.forEach(elm => {
      deleteDoc(doc(db, "routines", elm.id));
    })
  })
  deleteUser(auth.currentUser);
} 

//OnSnapshot es un getter y traemos rutinas
export const addRoutine = (routine) => addDoc(collection(db, "routines"), routine);
export const getRoutines = (uid, callback) => onSnapshot(query(collection(db, 'routines'), where("uid", "==", uid)), callback);

export const addExercise = async (exercise, idRou) => {
    const idExe = await addDoc(collection(db, "exercises"), exercise);   
    await updateDoc(doc(db, "routines", idRou), {
      exercises: arrayUnion(idExe.id)
    });
};

export const getExercise = (id, callback) => onSnapshot(doc(db, 'exercises', id), callback);

//ADD DATA INTO DB. USING ADD INSTEAD OF SET BECAUSE OF RANDOMIZE AN ID


