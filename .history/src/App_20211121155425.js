import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";

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
      <Router>

        <Header />
        <Banner />
        <Switch>
          <Route exact path="/" component={<Home />} />
          <Route path="/Sanpham" component={<Sanpham />} />
          <Route path="/Giothieu" component={<Giothieu />} />
          <Route path="/Lienhe" component={<Lienhe />} />
          <Route path="/Tintuc" component={<Tintuc />} />
        </Switch>


        <Footer />
      </Router>

    </div>

  );
}

export default App;
