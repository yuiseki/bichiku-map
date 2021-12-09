import firebase from 'firebase/compat/app';
import 'firebase/firestore';

// Firebase initialize
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

// Firebase Firestore
export const db = firebase.firestore().doc('versions/v1');
// TimeStamp for Firebase Firestore
export type Timestamp = firebase.firestore.Timestamp;
