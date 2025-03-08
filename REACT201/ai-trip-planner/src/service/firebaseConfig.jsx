


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyC12EXxEeDiqXIgbNzzFskkmpn8e-x6F1k",
  authDomain: "trip-planner-315c0.firebaseapp.com",
  projectId: "trip-planner-315c0",
  storageBucket: "trip-planner-315c0.firebasestorage.app",
  messagingSenderId: "717120241280",
  appId: "1:717120241280:web:d3efc343afce2f087c3065",
  measurementId: "G-C26W4FPN37",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db =getFirestore(app)
