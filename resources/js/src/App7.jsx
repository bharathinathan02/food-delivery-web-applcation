import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
import AdminHeader from './pages/AdminHeader';
import AdminHome from './pages/AdminHome';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const adminhome = document.getElementById('adminhome');
  if (adminhome) {
    const adminhomeRoot = createRoot(adminhome);
    adminhomeRoot.render(
      <Router>
        <AdminHeader />
        <AdminHome />
        <Footer />
      </Router>
    );
  }
  

  
});


