import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome'
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
   
      <div>
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />

          </Routes>

        <Footer />
      </div>
  );
}

export default App;
