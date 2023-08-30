// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { onSnapshot, collection, getFirestore, doc, query, where, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import { getAuth, deleteUser } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBr7MpOAhpo8JRm7L6siL0bRdaODTu5GAA",
  authDomain: "signvm-flex.firebaseapp.com",
  projectId: "signvm-flex",
  storageBucket: "signvm-flex.appspot.com",
  messagingSenderId: "996178208562",
  appId: "1:996178208562:web:deb09a2b2ae7319794192b",
  measurementId: "G-Z3KSXBDR9K"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const analytics = getAnalytics(app)
export const auth = getAuth()

export const addUserConfig = (uid, config) => setDoc(doc(collection(db, 'config'), uid), config)
export const getUserConfig = (uid, callback) => onSnapshot(query(doc(db, 'config', uid)), callback)
export const updateColor = (uid, newColor) => updateDoc(doc(db, "config", uid), { color: newColor })
export const updateUsername = (uid, newName) => updateDoc(doc(db, "config", uid), { username: newName })
export const updateHeight = (uid, newHeight) => updateDoc(doc(db, "config", uid), { height: newHeight })
export const updateWeight = (uid, newWeight) => updateDoc(doc(db, "config", uid), { weight: newWeight })

//

export const addWorkout = async workout => await addDoc(collection(db, "workouts"), workout)
export const getWorkouts = (uid, callback) => onSnapshot(query(collection(db, 'workouts'), where("uid", "==", uid)), callback)
export const deleteWorkout = id => {
  deleteDoc(doc(db, "workouts", id))
  onSnapshot(query(collection(db, 'exercises'), where("uid", "==", auth.currentUser.uid), where("workout", "==", id)), (docs) => docs.forEach(exe => deleteDoc(doc(db, "exercises", exe.id))))
}

//

export const addExercise = exercise => addDoc(collection(db, "exercises"), exercise)
export const getExercises = (uid, callback) => onSnapshot(query(collection(db, 'exercises'), where("uid", "==", uid)), callback)

//

export const deleteAccount = uid => {
  onSnapshot(query(collection(db, 'workouts'), where("uid", "==", uid)), (docs) => docs.forEach(workout => deleteDoc(doc(db, "workouts", workout.id))))
  onSnapshot(query(collection(db, 'exercises'), where("uid", "==", uid)), (docs) => docs.forEach(workout => deleteDoc(doc(db, "exercises", workout.id))))
  deleteDoc(doc(db, "config", uid))
  deleteUser(auth.currentUser)
} 