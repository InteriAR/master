import * as firebase from 'firebase';
import 'firebase/firestore'
import firebaseApiKey from './secrets'

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "interiar-7acd3.firebaseapp.com",
  databaseURL: "https://interiar-7acd3.firebaseio.com",
  projectId: "interiar-7acd3",
  storageBucket: "interiar-7acd3.appspot.com",
  messagingSenderId: "247049716081",
  appId: "1:247049716081:web:f951db72b08f02c412b6d0",
  measurementId: "G-N1BGEXRZ18"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig).firestore();

export default firebase

window.firebase = firebase;
