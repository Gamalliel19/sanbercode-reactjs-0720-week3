import React from 'react';
import './App.css';
import DaftarBuah from './tugas11/DaftarBuah'
import Timer from './tugas12/Timer'


function App() {
  return (
    <div className="App">
      <h1>Tabel Harga Buah</h1>
      <DaftarBuah />
      <Timer start={10} />
    </div>
  );
}

export default App;
