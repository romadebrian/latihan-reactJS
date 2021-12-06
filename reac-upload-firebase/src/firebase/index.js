import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9SVzmFEchEU3U5xkvqQ1PqyB_IYg1aP0",
  authDomain: "fir-react-upload-7d439.firebaseapp.com",
  projectId: "fir-react-upload-7d439",
  storageBucket: "fir-react-upload-7d439.appspot.com",
  messagingSenderId: "166476431030",
  appId: "1:166476431030:web:0780c98e2ebdbd75b43017",
  measurementId: "G-8BQV9THZZY",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
