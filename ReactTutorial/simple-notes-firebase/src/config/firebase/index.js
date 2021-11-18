import firebase from "firebase/compat/app";
import "firebase/compat/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBl3ImJzmZ6ynszSa5ku6SlgmQpU11tIn4",
  authDomain: "simple-notes-firebase-a134f.firebaseapp.com",
  projectId: "simple-notes-firebase-a134f",
  storageBucket: "simple-notes-firebase-a134f.appspot.com",
  messagingSenderId: "701779140103",
  appId: "1:701779140103:web:f1f981ee687687adfe54a2",
  measurementId: "G-16HN3VD5PE",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
