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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if this userAuth object does not exist, I want to return from this function

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // if the snapShot does not exist, it creates data
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
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
