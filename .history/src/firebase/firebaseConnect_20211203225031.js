import firebase from 'firebase/compat/app';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyDer-GOpU9NiBVPCfUvuT9t-yS1K3vPXAE",
  authDomain: "web-cafe-806eb.firebaseapp.com",
  databaseURL: "https://web-cafe-806eb-default-rtdb.firebaseio.com",
  projectId: "web-cafe-806eb",
  storageBucket: "web-cafe-806eb.appspot.com",
  messagingSenderId: "608900056116",
  appId: "1:608900056116:web:210235fb3741f3ece63661"
};

firebase.initializeApp(firebaseConfig)
ex