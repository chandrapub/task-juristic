import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import ShiftList from './Components/StoriesList';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import StoriesList from './Components/StoriesList';

function App() {
  
  return (
    <div className="App">
      <Router>        
          <Navbar />
          <Route exact path="/" component ={Home}/> 
          <Route path="/about" component={About} /> 
          <Route path="/contact" component={Contact}/>        
          <Route path="/storiesList" component={StoriesList}/>
          <Footer />       
      </Router>
    </div>
  );
}

export default App;
