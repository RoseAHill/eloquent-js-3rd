import React from 'react'
import './Corners.css'

const Corners = () => {
  
  

  return (
    <div className="corners">
      <div className="title-section corner">
        <h1 className="title caps">Elegant Solutions</h1>
        <h2 className="sub-title">to <a className="caps" href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer">Eloquent Javascript</a></h2>
      </div>
      <div className="author flex-col corner">
        <h3>coded by</h3>
        <a className="important-links" href="https://github.com/RoseAHill" target="_blank" rel="noopener noreferrer">[Rosie A-Hill]</a>
      </div>
    </div>
  )
}

export default Corners;