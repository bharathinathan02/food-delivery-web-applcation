import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import HomeHeader from './pages/HomeHeader';
import Admin from './pages/Admin';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const alogin = document.getElementById('alogin');
  if (alogin) {
    const aloginRoot = createRoot(alogin);
    aloginRoot.render(
      <Router>
        <HomeHeader />
        <Admin />
        <Footer />
      </Router>
    );
  }
  

  
});


