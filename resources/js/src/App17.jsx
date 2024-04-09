import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import FarmerHeader from './pages/FarmerHeader';
import AllReview from './pages/AllReview';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const allreview = document.getElementById('allreview');
  if (allreview) {
    const allreviewRoot = createRoot(allreview);
    allreviewRoot.render(
      <Router>
        <FarmerHeader />
        <AllReview />
        <Footer />
      </Router>
    );
  }
  

  
});


