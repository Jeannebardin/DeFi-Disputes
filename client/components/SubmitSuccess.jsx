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
