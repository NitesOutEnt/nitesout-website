import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
    apiKey: "AIzaSyAU0avmPEcrWxznuIGXJVzqT8l9xlKzm0k",
    authDomain: "nitesout-website.firebaseapp.com",
    databaseURL: "https://nitesout-website-default-rtdb.firebaseio.com",
    projectId: "nitesout-website",
    storageBucket: "nitesout-website.appspot.com",
    messagingSenderId: "341238459745",
    appId: "1:341238459745:web:01322264723ba4c452e920",
    measurementId: "G-48CLLWEP5F"
});

const db = app.firestore();

export {app, db};