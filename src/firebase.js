import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBE7otcTHY9lb236l3TRMSFfNtv48gVq0o",
    authDomain: "whats-app-clone-b7bd9.firebaseapp.com",
    projectId: "whats-app-clone-b7bd9",
    storageBucket: "whats-app-clone-b7bd9.appspot.com",
    messagingSenderId: "161940213994",
    appId: "1:161940213994:web:2f59177da894bc97c44793",
    measurementId: "G-QNY94NT2TM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;