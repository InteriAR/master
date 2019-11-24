import { AppRegistry } from 'react-native';
import App from './App.js';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqOGyna1hGFd3LLzfhrEZ5-3IC2AIdVdc",
    authDomain: "interiar-7acd3.firebaseapp.com",
    databaseURL: "https://interiar-7acd3.firebaseio.com",
    projectId: "interiar-7acd3",
    storageBucket: "interiar-7acd3.appspot.com",
    messagingSenderId: "247049716081",
    appId: "1:247049716081:web:f951db72b08f02c412b6d0",
    measurementId: "G-N1BGEXRZ18"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent('InteriAR', () => App);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => App);
git