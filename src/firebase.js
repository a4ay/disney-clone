import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAenyBaXSY6C4tRuw2GAZYX3kbNkv7MyYs",
  authDomain: "disneyplus-clone-57dc3.firebaseapp.com",
  projectId: "disneyplus-clone-57dc3",
  storageBucket: "disneyplus-clone-57dc3.appspot.com",
  messagingSenderId: "350846409690",
  appId: "1:350846409690:web:f28405b7ce3d6307f13ee3",
  measurementId: "G-FXQD7VNT5T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export {auth, provider, storage};
export default db;