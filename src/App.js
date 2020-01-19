import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
