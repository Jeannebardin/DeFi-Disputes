

import React from 'react'

function Contact() {
 
  const contentMoar = 'We dont answer emails or provide customer service, feedback, creative writing tutoring or censorship.'

  return (
    <div className="contactAbout">
    
      <p> SUBMIT LINKS/ARTICLES and
      share news regarding:
      </p>
      <ul>
        <li>Crypto regulation</li>
        
        <li>Regulatory enforcement </li>
        
        <li>Litigation</li>
        
        <li>DeFi Disputes</li>
      </ul>
      <div>{contentMoar}</div>

<br>
</br>
      <div className="pure-controls">
          <input className="pure-button" type="submit" />
        </div>
    </div>

    
  )
}

//button for submit link to form goes here.

export default Contact