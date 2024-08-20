import { initializeApp } from "firebase/app";
import { getAuth,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut } from "firebase/auth";

import ax from './ax.js';

const firebaseConfig = {
  apiKey: "AIzaSyAJpTjNMDaBH-AjM9n7WKzLRZ2jMcu6rdg",
  authDomain: "techtree-forums.firebaseapp.com",
  projectId: "techtree-forums",
  storageBucket: "techtree-forums.appspot.com",
  messagingSenderId: "545641306692",
  appId: "1:545641306692:web:8ae6ec0ede98d18ca0fa11",
  measurementId: "G-SHVKLMS8BT"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

var signUp = function(user) {
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      user.uid = userCredential.user.uid;

      ax.createUser(user);
      console.log('Created firebase user.');
    })
    .catch((error) => {
      console.log(error);
    });
};

var signIn = function(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      console.log('Firebase signIn successful.');

      ax.getUser(user.uid);
    })
    .catch((error) => {
      console.log(error);
    });
};

var logOut = function() {
  signOut(auth).then(() => {
    console.log('Firebase signOut successful.');
  }).catch((error) => {
    console.log(error);
  });
};

var methods = {
  signUp: signUp,
  signIn: signIn,
  logOut: logOut
};

export default methods;