import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './features/Home';
import Sanpham from './features/Sanpham';
import Giothieu from './features/Giothieu';
import Tintuc from './features/Tintuc';
import Lienhe from './features/Lienhe';
import { firebaseConnect } from './firebase/firebaseConnect';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'


function App() {
  console.log(firebaseConnect)
  const [product,setproduct]=useState()
  console.log(product)
  useEffect(()=>{
    firebase.database().ref("SanPhamNoiBat").on("value", snapshot => {
      let studentlist = [];
      snapshot.forEach(snap => {
        console.log(snap)
          // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          studentlist.push(snap.val());
      });
      setproduct(studentlist)
    });
  },[])
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
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
