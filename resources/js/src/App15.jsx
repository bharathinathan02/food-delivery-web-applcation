import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import FarmerHeader from './pages/FarmerHeader';
import Sales from './pages/Sales';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const sales = document.getElementById('sales');
  if (sales) {
    const salesRoot = createRoot(sales);
    salesRoot.render(
      <Router>
        <FarmerHeader />
        <Sales />
        <Footer />
      </Router>
    );
  }
  

  
});


