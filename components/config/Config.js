import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAT9fhlOuMeTWK9q5MkMVKXHqnebY9AbFI",
    authDomain: "elela-2e5c7.firebaseapp.com",
    databaseURL: "https://elela-2e5c7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "elela-2e5c7",
    storageBucket: "elela-2e5c7.appspot.com",
    messagingSenderId: "207655482815",
    appId: "1:207655482815:web:ecda40cc14cdc6df959d0a",
    measurementId: "G-F39C042V00"
};

// if (!getApps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const firebase = initializeApp(firebaseConfig);
// const db = getFirestore(firebase);
// const auth = getAuth(firebase);


const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();

export default firebase;
