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
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/database'


function App() {

  componentDidMount() {



    firebase.database().ref("students-list").on("value", snapshot => {
      let studentlist = [];
      snapshot.forEach(snap => {
        // snap.val() is the dictionary with all your keys/values from the 'students-list' path
        studentlist.push(snap.val());
      });
      this.setState({ studentslist: studentlist });
    });


  }

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
