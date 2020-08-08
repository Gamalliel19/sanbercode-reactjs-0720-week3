import React from 'react';
import './App.css';
import DaftarBuah from './tugas11/DaftarBuah'
import Timer from './tugas12/Timer'
import Lists from './tugas13/lists'
import Tugas14 from './tugas14/tugas14'
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./tugas15/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
