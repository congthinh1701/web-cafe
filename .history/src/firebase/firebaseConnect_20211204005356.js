import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDer-GOpU9NiBVPCfUvuT9t-yS1K3vPXAE",
  authDomain: "web-cafe-806eb.firebaseapp.com",
  databaseURL: "https://web-cafe-806eb-default-rtdb.firebaseio.com",
  projectId: "web-cafe-806eb",
  storageBucket: "web-cafe-806eb.appspot.com",
  messagingSenderId: "608900056116",
  appId: "1:608900056116:web:210235fb3741f3ece63661"
};

export const firebaseConnect= firebase.initializeApp(firebaseConfig)

var data=firebase.database().ref('SanPhamNoiBat')
data.on('value').then(function())
