import React  from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './features/Home';
import Sanpham from './features/Sanpham';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Home/>
      <Sanpham/>
      
      <Footer />  
    </div>

  );
}

export default App;
