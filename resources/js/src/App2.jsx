import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import HomeHeader from './pages/HomeHeader';
import Farmer from './pages/Farmer';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const login = document.getElementById('login');
  if (login) {
    const loginRoot = createRoot(login);
    loginRoot.render(
      <Router>
        <HomeHeader />
        <Farmer />
        <Footer />
      </Router>
    );
  }
  

  
});


