// React Import
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// MUI Imports


// Asset Imports
import Routing from './utils/Routing';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />      
      <Routing />
    </Router>   
  );
}

export default App;
