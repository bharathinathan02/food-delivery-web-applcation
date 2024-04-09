import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import FarmerHeader from './pages/FarmerHeader';
import EditProduct from './pages/EditProduct';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const editproduct = document.getElementById('editproduct');
  if (editproduct) {
    const editproductRoot = createRoot(editproduct);
    editproductRoot.render(
      <Router>
        <FarmerHeader />
        <EditProduct />
        <Footer />
      </Router>
    );
  }
  

  
});


