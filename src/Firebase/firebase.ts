
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
 
    apiKey: "AIzaSyDfBFDwcXG0fajz1V13ujTadh8PQnDYAP4",
    authDomain: "pharmacy-websites.firebaseapp.com",
    projectId: "pharmacy-websites",
    storageBucket: "pharmacy-websites.appspot.com",
    messagingSenderId: "404036865184",
    appId: "1:404036865184:web:6dec6a783b31fbbbeacdc5"
}
import { getAuth } from 'firebase/auth'
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
export default db;
export const auth = getAuth();