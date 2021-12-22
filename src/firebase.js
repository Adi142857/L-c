import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_MTcom7DK9xBM2cQ60xiyv5jwt-Ubg40",
    authDomain: "lin-clone-4a094.firebaseapp.com",
    projectId: "lin-clone-4a094",
    storageBucket: "lin-clone-4a094.appspot.com",
    messagingSenderId: "175758921253",
    appId: "1:175758921253:web:96a52466e4a6a72035b9cc"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export { auth,provider,storage };
  export default db;