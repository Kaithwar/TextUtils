import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#282c30d6';
      document.body.style.color = 'white';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
      <Router>
      <Navbar mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}>  
          </Route>
          <Route exact path="/" element={<Textform heading="Enter the text to Analyze"/>}>    
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
