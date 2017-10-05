import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCB8w1stWQvI60v5VtTlUnMwCe41Y6Xd-M",
    authDomain: "notes-app-74c0d.firebaseapp.com",
    databaseURL: "https://notes-app-74c0d.firebaseio.com",
    projectId: "notes-app-74c0d",
    storageBucket: "",
    messagingSenderId: "1020529161734"
  };
  firebase.initializeApp(config);
  
  export default firebase;