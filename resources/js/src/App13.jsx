import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import CustomerHeader from './pages/CustomerHeader';
/* import Cart from './pages/Cart';
 */import Cart from './pages/Cart';

 import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const cartadd = document.getElementById('cartadd');
  if (cartadd) {
    const cartaddRoot = createRoot(cartadd);
    cartaddRoot.render(
      <Router>
        <CustomerHeader />
        <Cart />
        <Footer />
      </Router>
    );
  }
  

  
});


