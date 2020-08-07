import React from 'react';
import './App.css';
import DaftarBuah from './tugas11/DaftarBuah'
import Timer from './tugas12/Timer'
import Lists from './tugas13/lists'
import Tugas14 from './tugas14/tugas14'

function App() {
  return (
    <div className="App">
      <h1>Tabel Harga Buah</h1>
      <Tugas14 />
      <Timer/>
      <DaftarBuah/>
      <Lists/>
    </div>
  );
}

export default App;
