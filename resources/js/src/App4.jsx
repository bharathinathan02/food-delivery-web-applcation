import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import HomeHeader from './pages/HomeHeader';
import Customer from './pages/Customer';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const customer = document.getElementById('customer');
  if (customer) {
    const customerRoot = createRoot(customer);
    customerRoot.render(
      <Router>
        <HomeHeader />
        <Customer />
        <Footer />
      </Router>
    );
  }
  

  
});


