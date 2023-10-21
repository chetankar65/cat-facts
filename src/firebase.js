// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAEBdMBf_M83F7PDmd4CbQfyC5N7GNdQzM",
    authDomain: "chatbot-c294d.firebaseapp.com",
    projectId: "chatbot-c294d",
    storageBucket: "chatbot-c294d.appspot.com",
    messagingSenderId: "836313913859",
    appId: "1:836313913859:web:ef85151d38daa8086a8c36"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();