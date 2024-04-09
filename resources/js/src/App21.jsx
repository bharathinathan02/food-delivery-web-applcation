import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import FarmerHeader from './pages/FarmerHeader';
import ForumAnswer from './pages/ForumAnswer';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const forumans = document.getElementById('forumans');
  if (forumans) {
    const forumansRoot = createRoot(forumans);
    forumansRoot.render(
      <Router>
        <FarmerHeader />
        <ForumAnswer />
        <Footer />
      </Router>
    );
  }
  

  
});


