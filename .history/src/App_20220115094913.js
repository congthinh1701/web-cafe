import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router'

import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./features/Home";
import Sanpham from "./features/Sanpham";
import Giothieu from "./features/Giothieu";
import Tintuc from "./features/Tintuc";
import Lienhe from "./features/Lienhe";
import Detail from "./features/Sanpham/Detail";
import Register from "./features/SignIn/Register";
// Auth
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Admin from "./features/Admin";
import { useDispatch } from "react-redux";
import { checkLogin } from "./actions/user";
import Login from "./features/SignIn/Login";

const firebaseConfig = {
  apiKey: "AIzaSyDer-GOpU9NiBVPCfUvuT9t-yS1K3vPXAE",
  authDomain: "web-cafe-806eb.firebaseapp.com",
  databaseURL: "https://web-cafe-806eb-default-rtdb.firebaseio.com",
  projectId: "web-cafe-806eb",
  storageBucket: "web-cafe-806eb.appspot.com",
  messagingSenderId: "608900056116",
  appId: "1:608900056116:web:210235fb3741f3ece63661",
};
firebase.initializeApp(firebaseConfig);

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const dispatch = useDispatch();

  /// setup firebase Auth Google
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
        return () => {
          return () => unregisterAuthObserver();
        };
      }, []);
      // check login go up data redux
    if (isSignedIn) {
      const profile = {
        name: firebase.auth().currentUser.displayName,
        photo:firebase.auth().currentUser.photoURL
      };
      const action = checkLogin(profile);
      
      dispatch(action);
    }
    else {
      const action = checkLogin(isSignedIn);
      dispatch(action);
    }
  });

  return (
    <div>
      <Router>
        <Header />
        <Banner />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Sanpham" element={<Sanpham />} />
          <Route path="/Giothieu" element={<Giothieu />} />
          <Route path="/Lienhe" element={<Lienhe />} />
          <Route path="/Tintuc" element={<Tintuc />} />
          <Route path="/Sanpham/Detail" element={<Detail />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Admin" { isSignedIn ? <Admin/>: <Navigate to="/Login"/>  
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
