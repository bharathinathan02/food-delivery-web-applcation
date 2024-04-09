import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import CustomerHeader from './pages/CustomerHeader';
import ReviewSubmit from './pages/ReviewSubmit';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const reviewsubmit = document.getElementById('reviewsubmit');
  if (reviewsubmit) {
    const reviewsubmitRoot = createRoot(reviewsubmit);
    reviewsubmitRoot.render(
      <Router>
        <CustomerHeader />
        <ReviewSubmit />
        <Footer />
      </Router>
    );
  }
  

  
});


