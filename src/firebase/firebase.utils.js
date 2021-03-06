import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBk4-J3Wxrmon3GDLXkT4Q5EPyl-0yMh_k",
  authDomain: "crwn-db-fceb6.firebaseapp.com",
  databaseURL: "https://crwn-db-fceb6.firebaseio.com",
  projectId: "crwn-db-fceb6",
  storageBucket: "crwn-db-fceb6.appspot.com",
  messagingSenderId: "762754658955",
  appId: "1:762754658955:web:e4d296ec4e2f1f34441a8e",
  measurementId: "G-TB60WDMWLL",
};
  export const createUserProfile  = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    const userRef =  firestore.doc(`users/${userAuth.uid}`);
    const snap =await userRef.get();
    if(!snap.exists){
      const {email } = userAuth;
      const displayName=additionalData;
     
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          createdAt,
          email
        })
      }catch(error){
        console.log("error creating user",error.message);
      }
    }
    return userRef;
  }
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
