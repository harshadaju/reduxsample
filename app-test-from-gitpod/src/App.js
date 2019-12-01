import React from 'react';
import Navbar from './components/Navigation/index'
import pagedetails from './components/json-data/navitems'
import {BrowserRouter as Router} from 'react-router-dom'
import MyRouter from './components/router/index'
import Footer from './components/footer/index'
import './App.css'
function App() {
  return (
    <Router>
     <Navbar navItems={pagedetails} />
     <MyRouter />
     <Footer />
    </Router>
  );
}

export default App;
