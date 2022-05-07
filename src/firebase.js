import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaxFx3oWnaKDs0gbrlZuxxff8CSwETlv8",
    authDomain: "lin-clone.firebaseapp.com",
    projectId: "lin-clone",
    storageBucket: "lin-clone.appspot.com",
    messagingSenderId: "1082220803996",
    appId: "1:1082220803996:web:472b3e4d18f83426aa3a59"
  };
  
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export { auth,provider,storage };
  export default db;