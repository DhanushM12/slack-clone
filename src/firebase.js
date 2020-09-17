import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHNvKTgwIGMcIA5aaTj9KUK3DiShFiFeY',
  authDomain: 'slack-clone-945d6.firebaseapp.com',
  databaseURL: 'https://slack-clone-945d6.firebaseio.com',
  projectId: 'slack-clone-945d6',
  storageBucket: 'slack-clone-945d6.appspot.com',
  messagingSenderId: '332766992607',
  appId: '1:332766992607:web:51a7651eb1d2803321316a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
};
