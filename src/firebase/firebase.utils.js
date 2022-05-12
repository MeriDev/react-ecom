import { initializeApp } from 'firebase/app';

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
const provider = new GoogleAuthProvider();

export const auth = getAuth();
signInWithPopup(auth, provider)
  .then(result => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var credential = GoogleAuthProvider.credentialFromResult(result);
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  })
  .catch(error => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The AuthCredential type that was used.
    var credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
