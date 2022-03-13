import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Cards from './components/Cards';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Buy from './components/pages/Collection';
import Collection from './components/pages/Buy';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Cards />
        <Footer />
        <Routes>
          <Route path='/home' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/collection' component={Buy} />
          <Route path='/buy' component={Collection} />
        </Routes>
      </Router>
    </>
  );
}

export default App;