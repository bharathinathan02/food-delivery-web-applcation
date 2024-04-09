import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import Index from './pages/Index';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  if (root) {
    const rootRoot = createRoot(root);
    rootRoot.render(
      <Router>
        <Index />
        <Footer />
      </Router>
    );
  }
  

  
});


