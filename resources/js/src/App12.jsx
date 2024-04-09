import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component
/* import CustomerHeader from './pages/CustomerHeader';
 */import CustomerHome from './pages/CustomerHome';
import Footer from './pages/Footer';

document.addEventListener('DOMContentLoaded', function() {
  const customerhome = document.getElementById('customerhome');
  if (customerhome) {
    const customerhomeRoot = createRoot(customerhome);
    customerhomeRoot.render(
      <Router>
{/*         <CustomerHeader />
 */}        <CustomerHome />
        <Footer />
      </Router>
    );
  }
  

  
});


