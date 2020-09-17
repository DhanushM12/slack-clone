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
export const firestore = firebase.firestore();
window.firestore = firestore;
//initialize google provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  //ask user to select a gmail account in a new popup window
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export const createOrGetUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // check if a the user doc is there in DB with
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  // if no user exists in DB @ path 'userRef' then go and make one
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    const createdAt = new Date();

    try {
      await userRef.set({
        display_name: displayName || additionalData.displayName,
        email,
        photo_url: photoURL
          ? photoURL
          : 'https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72',
        created_at: createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection('users').doc(uid);
    return userDocument;
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};
