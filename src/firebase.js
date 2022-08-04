// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJgWj3wd0k9_Ok1MWG2S3R6QUNuAi-quE",
  authDomain: "todo-app-cp-13e11.firebaseapp.com",
  projectId: "todo-app-cp-13e11",
  storageBucket: "todo-app-cp-13e11.appspot.com",
  messagingSenderId: "570951088275",
  appId: "1:570951088275:web:d72b38ec14069cd2773566",
  measurementId: "G-B3KQEV8FQ6"
});

const db = firebaseApp.firestore();

export default db;