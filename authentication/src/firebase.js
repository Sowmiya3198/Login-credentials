import firebase from 'firebase/compat/app';
import "firebase/compat/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDTRVwN2sys1kRw_505q67RBWVmUL8-Kek",
    authDomain: "auth-login-e7385.firebaseapp.com",
    projectId: "auth-login-e7385",
    storageBucket: "auth-login-e7385.appspot.com",
    messagingSenderId: "128146608762",
    appId: "1:128146608762:web:9ba64dcc4c76967520e1c3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const githubProvider = new firebase.auth.GithubAuthProvider();


  export { auth,googleProvider,githubProvider}