import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import CustomerHeader from './pages/CustomerHeader';
import Review from './pages/Review';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const addreview = document.getElementById('addreview');
  if (addreview) {
    const addreviewRoot = createRoot(addreview);
    addreviewRoot.render(
      <Router>
        <CustomerHeader />
        <Review />
        <Footer />
      </Router>
    );
  }
  

  
});


