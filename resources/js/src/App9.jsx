import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import FarmerHeader from './pages/FarmerHeader';
import AddCategory from './pages/AddCategory';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const addcategory = document.getElementById('addcategory');
  if (addcategory) {
    const addcategoryRoot = createRoot(addcategory);
    addcategoryRoot.render(
      <Router>
        <FarmerHeader />
        <AddCategory />
        <Footer />
      </Router>
    );
  }
  

  
});


