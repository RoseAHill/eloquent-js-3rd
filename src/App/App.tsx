import React from 'react';
import { useState } from 'react';
import './App.css'
import Background from './components/Background/Background';

const App = () => {
  const [leftSelected, setLeftSelected] = useState(true)

  return (
    <div className="App">
      <Background triLeft={leftSelected} />
      Eloquent JS
    </div>
  );
}

export default App;
