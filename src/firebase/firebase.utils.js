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
export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;
    // console.log(firestore.doc('users/23423dwdr'));
    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot=await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date()
        try{
            await userRef.set({displayName,email,createdAt,...additionalData})
        }
        catch(error){
            console.log('error creating User',error.message);
        }
    }
    return userRef;
};


  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;
