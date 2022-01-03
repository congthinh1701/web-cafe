import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './features/Home';
import Sanpham from './features/Sanpham';
import Giothieu from './features/Giothieu';
import Tintuc from './features/Tintuc';
import Lienhe from './features/Lienhe';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Routes>

        <Home />
        <Sanpham />
        <Giothieu />
        <Tintuc />
        <Lienhe />
      </Routes>

      <Footer />
    </div>

  );
}

export default App;
