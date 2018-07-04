import * as firebase from 'firebase'

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyDeM4zkSI2494TOTisoF4IwwrXX0slt9rE",
   authDomain: "bonuscalculator-3cc6c.firebaseapp.com",
   databaseURL: "https://bonuscalculator-3cc6c.firebaseio.com",
   projectId: "bonuscalculator-3cc6c",
   storageBucket: "bonuscalculator-3cc6c.appspot.com",
   messagingSenderId: "588481287510"
 };
 firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
