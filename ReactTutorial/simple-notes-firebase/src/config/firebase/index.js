// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl3ImJzmZ6ynszSa5ku6SlgmQpU11tIn4",
  authDomain: "simple-notes-firebase-a134f.firebaseapp.com",
  projectId: "simple-notes-firebase-a134f",
  storageBucket: "simple-notes-firebase-a134f.appspot.com",
  messagingSenderId: "701779140103",
  appId: "1:701779140103:web:f1f981ee687687adfe54a2",
  measurementId: "G-16HN3VD5PE",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

export default firebase;
