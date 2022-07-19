import React from 'react'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <Link to='/'>
      <h1 className="brand-title">DeFi Disputes</h1>
      
      {/* <img src="/Images/DeFi_Disputes_logo_sml.png" alt="/Images/Alternative_Image.png"></img> */}
    </Link>
      
{/* need to create a link from the image back to the home page? localhost 3000? */}
    
      <nav className="nav">
        <ul className="nav-list">
      
          <li className="nav-item">
            <Link to="/Submit" className="pure-button">
              Submit
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Header
