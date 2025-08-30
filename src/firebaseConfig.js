import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0KndGi_-SXemUL5xbi2EBlc6Xjyw5QwI",
  authDomain: "ai-resistance-trainer.firebaseapp.com",
  projectId: "ai-resistance-trainer",
  storageBucket: "ai-resistance-trainer.firebasestorage.app",
  messagingSenderId: "574208857473",
  appId: "1:574208857473:web:69ccf92286888a1aae0480"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;

