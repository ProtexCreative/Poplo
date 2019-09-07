import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
