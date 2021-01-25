import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDV6isDvFxhZXdc74y9RZF4phngSY2c6-E",
    authDomain: "react-app-cursos-74f88.firebaseapp.com",
    projectId: "react-app-cursos-74f88",
    storageBucket: "react-app-cursos-74f88.appspot.com",
    messagingSenderId: "223229177537",
    appId: "1:223229177537:web:cdd1585433eb45ea226e40"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { 
    db,
    googleAuthProvider,
    firebase
}