import React from 'react'
import { Link } from 'react-router-dom'

function SubmitSuccess() {
  const confirmation = 'An open source community project'
 
  return (
    <div className="success">
      <div>&copy; {confirmation}</div>
      <Link to="/posts/new" className="pure-button">
              Subscribe
            {/* need to connect to some kind of mailing subscription? wdyt? */}
      </Link>
    
    </div>
  )
}

export default SubmitSuccess


// <p> "Thanks for submitting! It should load immediately but may be moderated by the community while we build the machine learning seed data to allow us to hand this task over to the algorithm"<p>