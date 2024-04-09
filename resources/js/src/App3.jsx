import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import HomeHeader from './pages/HomeHeader';
import FarmerRegister from './pages/FarmerRegister';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const register = document.getElementById('register');
  if (register) {
    const registerRoot = createRoot(register);
    registerRoot.render(
      <Router>
        <HomeHeader />
        <FarmerRegister />
        <Footer />
      </Router>
    );
  }
  

  
});


