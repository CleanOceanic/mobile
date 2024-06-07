import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCN1jO1mfrH7MIIHxCHbd4KF9nqUL8XxmE",
    authDomain: "gscleanoceanic.firebaseapp.com",
    projectId: "gscleanoceanic",
    storageBucket: "gscleanoceanic.appspot.com",
    messagingSenderId: "352290620840",
    appId: "1:352290620840:web:f37644284b08b85ab3499d"
  };

if(!firebase.apps.length){ //deixa uma rota
  console.log(`Conectando...  Status:${firebase.apps.length}`);
  firebase.initializeApp(firebaseConfig);
  console.log(`Conectado  Status:${firebase.apps.length}`);
}

export default firebase;