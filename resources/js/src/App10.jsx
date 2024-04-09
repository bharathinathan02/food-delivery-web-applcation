import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import FarmerHeader from './pages/FarmerHeader';
import AddProduct from './pages/AddProduct';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const addproduct = document.getElementById('addproduct');
  if (addproduct) {
    const addproductRoot = createRoot(addproduct);
    addproductRoot.render(
      <Router>
        <FarmerHeader />
        <AddProduct />
        <Footer />
      </Router>
    );
  }
  

  
});


