import React from 'react';
import Navbar from './components/Navigation/index'
import pagedetails from './components/json-data/navitems'
import Home from './components/pages/Home/index'
import Footer from './components/footer/index'
import './App.css'
function App() {
  return (
    <div>
     <Navbar navItems={pagedetails} />
     <div>
        <Home />
     </div>
     <Footer />
    </div>
  );
}

export default App;
