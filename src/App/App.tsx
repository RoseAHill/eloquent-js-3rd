import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Corners from './components/Corners/Corners'
import Nav from './components/Nav/Nav'
import './App.css'

const App = () => {

  const navPages = [
    { name: "Home", url: "/", exact: true },
    { name: "About", url: "/about", exact: true },
    { name: "Ch. 2", url: "/chapter2", exact: false },
    { name: "Ch. 3", url: "/chapter3", exact: false },
  ]

  return (
    <div className="App">
      <Corners />
      <Nav navLinks={navPages} />
    </div>
  );
}

export default App;
