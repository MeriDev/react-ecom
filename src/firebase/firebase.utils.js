import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  Firestore,
} from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAt6B-P3ZImqoXBKk9cLL0wT7iYhoJGowI',
  authDomain: 'crwn-f6bf3.firebaseapp.com',
  projectId: 'crwn-f6bf3',
  storageBucket: 'crwn-f6bf3.appspot.com',
  messagingSenderId: '182015742544',
  appId: '1:182015742544:web:be1933ae03a5276da4b755',
};

const app = initializeApp(firebaseConfig);

// Add users to DB

// FIRESTORE
const db = getFirestore();
const users = collection(db, 'users');

getDocs(users).then(snapshot => {
  console.log(snapshot.docs());
});

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // const userRef = Firestore.doc(`users/${userAuth.uid}`);
  const userRef = getDocs(`users/${userAuth.uid}`);
  // const snapShot = await userRef.get();

  console.log(userRef);

  // if (!snapShot.exists) {
  // }
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  // await userRef.set({
  //   displayName,
  //   email,
  //   createdAt,
  //   ...additionalData,
  // });
  addDoc(users, {
    displayName,
    email,
    createdAt,
    ...additionalData,
  }).then(user => console.log(user));
};

// Sign in with google
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signUpWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
};
