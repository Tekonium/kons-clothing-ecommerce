// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDOmR9OdprZod3DCIcDLwHQmSenpxQv-Z0',
  authDomain: 'kons-clothing.firebaseapp.com',
  projectId: 'kons-clothing',
  storageBucket: 'kons-clothing.appspot.com',
  messagingSenderId: '1056223008302',
  appId: '1:1056223008302:web:68033e794e233019a9b1bf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authentication setup
const provider = new GoogleAuthProvider({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  //if user doc doesnt exist create one
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = Date.now();

    try {
      await setDoc(userDocRef, { displayName, email, createAt });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
