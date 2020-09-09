import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyC7sU76tUs-Nw5HqxAL7s_fJritAm3u6uk",
    authDomain: "noted-firebase.firebaseapp.com",
    databaseURL: "https://noted-firebase.firebaseio.com",
    projectId: "noted-firebase",
    storageBucket: "noted-firebase.appspot.com",
    messagingSenderId: "496758633286",
    appId: "1:496758633286:web:6980063942653139886b47",
    measurementId: "G-TDY9Q9L4HZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;