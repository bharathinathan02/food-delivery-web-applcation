import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import FarmerHeader from './pages/FarmerHeader';
import FarmerHome from './pages/FarmerHome';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const farmerhome = document.getElementById('farmerhome');
  if (farmerhome) {
    const farmerhomeRoot = createRoot(farmerhome);
    farmerhomeRoot.render(
      <Router>
        <FarmerHeader />
        <FarmerHome />
        <Footer />
      </Router>
    );
  }
  

  
});


