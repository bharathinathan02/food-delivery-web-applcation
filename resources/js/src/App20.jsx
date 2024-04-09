import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import FarmerHeader from './pages/FarmerHeader';
import Forum from './pages/Forum';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const forum = document.getElementById('forum');
  if (forum) {
    const forumRoot = createRoot(forum);
    forumRoot.render(
      <Router>
        <FarmerHeader />
        <Forum />
        <Footer />
      </Router>
    );
  }
  

  
});


