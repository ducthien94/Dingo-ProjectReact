import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database"
  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyBd9UvPGFOFfHrmtNfFwn6TRRaN1EohAFk",
    authDomain: "dingo-2314.firebaseapp.com",
    databaseURL: "https://dingo-2314.firebaseio.com",
    projectId: "dingo-2314",
    storageBucket: "dingo-2314.appspot.com",
    messagingSenderId: "200666974505",
    appId: "1:200666974505:web:25366a102014e15e4f0f38",
    measurementId: "G-M94QPKFNN2",
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  
  export default firebase;