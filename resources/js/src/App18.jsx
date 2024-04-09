import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import CustomerHeader from './pages/CustomerHeader';
import ProductReview from './pages/ProductReview';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const productreview = document.getElementById('productreview');
  if (productreview) {
    const productreviewRoot = createRoot(productreview);
    productreviewRoot.render(
      <Router>
        <CustomerHeader />
        <ProductReview />
        <Footer />
      </Router>
    );
  }
  

  
});


