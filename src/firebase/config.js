import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPVuTDTNa1yestSxgtwsUgJoivnFcvTik",
  authDomain: "firegram-90378.firebaseapp.com",
  projectId: "firegram-90378",
  storageBucket: "firegram-90378.appspot.com",
  messagingSenderId: "821341286558",
  appId: "1:821341286558:web:bfd4c38cd73f65a1c94b8f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Storage
const firegramStorage = firebase.storage();
// Initialize Firestore
const firegramFirestore = firebase.firestore();

export { firegramStorage, firegramFirestore };
