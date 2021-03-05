import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCuVYtaNQKxapZh0eQss1X9HKgpO9h8qP8",
  authDomain: "crwn-db-6371e.firebaseapp.com",
  projectId: "crwn-db-6371e",
  storageBucket: "crwn-db-6371e.appspot.com",
  messagingSenderId: "518412220005",
  appId: "1:518412220005:web:bf6e9624126aae6f60788c",
  measurementId: "G-YE36R2W6GH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
