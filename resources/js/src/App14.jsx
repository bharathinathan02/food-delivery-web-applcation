import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import CustomerHeader from './pages/CustomerHeader';
/* import Cart from './pages/Cart';
 */import Purchased from './pages/Purchased';

 import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const purchased = document.getElementById('purchased');
  if (purchased) {
    const purchasedRoot = createRoot(purchased);
    purchasedRoot.render(
      <Router>
        <CustomerHeader />
        <Purchased />
        <Footer />
      </Router>
    );
  }
  

  
});


