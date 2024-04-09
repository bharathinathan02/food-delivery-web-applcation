import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import CustomerHeader from './pages/CustomerHeader';
import MyProductReview from './pages/MyProductReview';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const myproductreview = document.getElementById('myproductreview');
  if (myproductreview) {
    const myproductreviewRoot = createRoot(myproductreview);
    myproductreviewRoot.render(
      <Router>
        <CustomerHeader />
        <MyProductReview />
        <Footer />
      </Router>
    );
  }
  

  
});


