import React from 'react';
import './App.css';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";

function App() {
  return (
   
      <div>
        <MyNavbar />
        <HeroSection />
        <Section2 />

        <Footer />
      </div>
  );
}

export default App;
