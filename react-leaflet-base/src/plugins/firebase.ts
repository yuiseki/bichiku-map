import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/functions';

// Firebase initialize
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  mesurementId: process.env.REACT_APP_MESAUREMENT_ID,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

// // Firebase Auth
// firebase.auth().languageCode = 'ja';

// const onGoogleSignIn = (idToken: string): void => {
//   console.log('Google Auth Response', idToken);
//   // We need to register an Observer on Firebase Auth to make sure auth is initialized.
//   const unsubscribe = firebase.auth().onAuthStateChanged(() => {
//     unsubscribe();
//     // Build Firebase credential with the Google ID token.
//     const credential = firebase.auth.GoogleAuthProvider.credential(idToken);

//     // Sign in with credential from the Google user.
//     firebase
//       .auth()
//       .signInWithCredential(credential)
//       .catch((error) => {
//         console.error(error);
//         // Handle Errors here.
//         // const errorCode = error.code;
//         // const errorMessage = error.message;
//         // The email of the user's account used.
//         // const email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         // const credential = error.credential;
//         // ...
//       });
//   });
// };

// const onGoogleSignInWithRedirect = (): void => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithRedirect(provider);
// };

// export const auth = firebase.auth();
// export { onGoogleSignIn, onGoogleSignInWithRedirect };

// Firebase Firestore
// export const db = firebase.firestore().doc('versions/v1');
export type Timestamp = firebase.firestore.Timestamp;

// Firebase Functions
export const functions = firebase.app().functions('asia-northeast1');
// For testing only
// functions.useEmulator("localhost", 5001);
