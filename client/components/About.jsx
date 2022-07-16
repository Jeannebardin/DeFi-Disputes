
// import { lowerCase } from 'lodash'
import React from 'react'

function About() {
  const aboutHeading = <h2 className="post-title">What is DeFi Disputes?</h2>
const aboutContent = 
  <p>
  The easiest way to keep on top of the many and varied scams, fights, legislative proposals and regulatory action in Crypto and DeFi.
  
  </p>
  const aboutMoar = 
  <p>

  Defi Disputes is a free, advertising free and 100% community run website. 
  
  </p>

const aboutLastPara1 = 
<p>

It may in future accept small grants/donations to cover costs.
</p>

const aboutLastPara2 = 
<p>
The goal is to encourage learning and collaboration (rather than competition) in law.
</p>

  return (
    <div className="contactAbout">
      <div> {aboutHeading}</div>
      <div> {aboutContent}</div>
      <div>{aboutMoar}</div>
      <div>{aboutLastPara1}</div>
      <div>{aboutLastPara2}</div>
    </div>
  )
}

export default About