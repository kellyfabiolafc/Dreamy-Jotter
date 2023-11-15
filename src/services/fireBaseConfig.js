import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAiWzsjZnrCoZCglGecUoho2-DXLOs8ALM",
  authDomain: "dreamy-jotter.firebaseapp.com",
  databaseURL: "https://dreamy-jotter-default-rtdb.firebaseio.com",
  projectId: "dreamy-jotter",
  storageBucket: "dreamy-jotter.appspot.com",
  messagingSenderId: "33778266706",
  appId: "1:33778266706:web:02367ad62446f920e7e58b",
  measurementId: "G-8CNXJMHLGH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

const registerWithEmail = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};
const signOutUser = () => {
  return signOut(auth);
};

export { signInWithGoogle, registerWithEmail, signOutUser , auth };
