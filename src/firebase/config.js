import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDrTjNivh8bCR8E2aMvfdAFxdI_2SidB0U",
    authDomain: "firetodo-1fde7.firebaseapp.com",
    projectId: "firetodo-1fde7",
    storageBucket: "firetodo-1fde7.appspot.com",
    messagingSenderId: "643882107171",
    appId: "1:643882107171:web:07a12425fed959d28b0c96",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
