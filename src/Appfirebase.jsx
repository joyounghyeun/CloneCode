import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz5l9T7Rr8KCztK-wFw9ITTcgbD4NbzLc",
  authDomain: "nwitter-75d09.firebaseapp.com",
  projectId: "nwitter-75d09",
  storageBucket: "nwitter-75d09.appspot.com",
  messagingSenderId: "605578482901",
  appId: "1:605578482901:web:fb8a6b2f35225a885d3e5c",
};

initializeApp(firebaseConfig);
export default firebase;
