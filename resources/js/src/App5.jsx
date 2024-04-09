import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import HomeHeader from './pages/HomeHeader';
import CustomerRegister from './pages/CustomerRegister';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const customerregister = document.getElementById('customerregister');
  if (customerregister) {
    const customerregisterRoot = createRoot(customerregister);
    customerregisterRoot.render(
      <Router>
        <HomeHeader />
        <CustomerRegister />
        <Footer />
      </Router>
    );
  }
  

  
});


