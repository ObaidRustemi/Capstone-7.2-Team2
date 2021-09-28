<script type="module" src="main.js"></script>;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbVczx7hDMimb8WWu-Pc6DKauPrhT8NKg",
  authDomain: "capstone-69cb8.firebaseapp.com",
  projectId: "capstone-69cb8",
  storageBucket: "capstone-69cb8.appspot.com",
  messagingSenderId: "703229087722",
  appId: "1:703229087722:web:5ed8f0eb57c2b660cd6c93",
  measurementId: "G-G613X6JGG5",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);
const db = getFirestore(firebaseapp);

console.log(analytics);
console.log(db);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
