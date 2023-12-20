import MyNavbar from './Navbar';
import Footer from './Footer';

import React from 'react';
import { Route, Routes} from 'react-router-dom';

import About from './About';
import FeedbackForm from './FeedbackForm';
import Header from './Header';
import { HeroSection } from './HeroSection';
import Statistics from './Statistics';
import SecurityUpdate from './SecurityUpdate'

function App() {
  return (
      <div>
       <Header />
       <HeroSection />
       <Statistics />
       <SecurityUpdate />
    
      </div>
    
  );
}

export default App;
