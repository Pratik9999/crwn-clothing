import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyCZK49l_DQexARgkdCJHfiR6OXb-8237kc",
   authDomain: "crwn-db-c0e3f.firebaseapp.com",
   projectId: "crwn-db-c0e3f",
   storageBucket: "crwn-db-c0e3f.appspot.com",
   messagingSenderId: "967140326916",
   appId: "1:967140326916:web:2e8fc950ffa871ca087f51"
};

export const createUserprofileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`); 

   const snapShot =  await userRef.get(); 

   if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData 
         });
      } catch (error) {
         console.log('Error while creating user', error.message);
      }
   }

   return userRef;

}

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;