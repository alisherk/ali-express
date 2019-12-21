import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7_0qLOgMg5LGxUz-DiqF8YTJLcv44weU",
    authDomain: "clth-shop.firebaseapp.com",
    databaseURL: "https://clth-shop.firebaseio.com",
    projectId: "clth-shop",
    storageBucket: "clth-shop.appspot.com",
    messagingSenderId: "1061638706334",
    appId: "1:1061638706334:web:0351ba5050b2495f83978f",
    measurementId: "G-19RBGRFNFW"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((res, rej) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => { 
      unsubscribe();
      res(userAuth);
    }, rej); 
  })
};


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const addColAndDoc = async (colKey, objToAdd) => {
  const colRef = firestore.collection(colKey); 
  const batch = firestore.batch();

  objToAdd.forEach(obj => {
    const newDocRef = colRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit(); 
}; 

export const convertColSnapToMap = col => {
  const transformedCol = col.docs.map(doc => {
    const { title, items } = doc.data(); 
    return {
      routeName: encodeURI(title.toLowerCase()), 
      id: doc.id, 
      title, 
      items
    }
  }); 
  return transformedCol.reduce((acc, col) => {
     acc[col.title.toLowerCase()] = col; 
     return acc;
   }, {});
};

export default firebase;