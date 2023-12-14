import React from 'react';
import './App.css';
import ParentComponent from './ParentComponent'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;