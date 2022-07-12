import React from 'react'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <h1 className="brand-title">DeFi Disputes</h1>
      {/* <img src="/Images/DeFi_Disputes_logo.png"> */}


      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="pure-button">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/posts/new" className="pure-button">
              Submit
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/posts/new" className="pure-button">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
