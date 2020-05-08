import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBcFwiaz7TWRjSHBBLFp5EsVVh3PBNxs1A",
    authDomain: "sqb-project-1556691614344.firebaseapp.com",
    databaseURL: "https://sqb-project-1556691614344.firebaseio.com",
    projectId: "sqb-project-1556691614344",
    storageBucket: "sqb-project-1556691614344.appspot.com",
    messagingSenderId: "616147616860",
    appId: "1:616147616860:web:cde834a09d1c0e8e0f5299",
    measurementId: "G-4X1B9YBF80"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;
