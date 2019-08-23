import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAJUFdwjoRqsDlzGIxOmL-Xe6Xtuh2qge4',
  authDomain: 'crwn-db-c7a00.firebaseapp.com',
  databaseURL: 'https://crwn-db-c7a00.firebaseio.com',
  projectId: 'crwn-db-c7a00',
  storageBucket: '',
  messagingSenderId: '655617000708',
  appId: '1:655617000708:web:083d72613f4f3b91'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
