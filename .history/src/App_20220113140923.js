import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDer-GOpU9NiBVPCfUvuT9t-yS1K3vPXAE",
  authDomain: "web-cafe-806eb.firebaseapp.com",
  
};
firebase.initializeApp(firebaseConfig)

function App() {
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
