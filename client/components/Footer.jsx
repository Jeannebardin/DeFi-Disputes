import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const community = '"REKT for REG"  An open source community project'
  const subscription = '{ subscribe button and capture email field goes here for joining mailing list }'

  return (
    <div className="footer">
      <div>{community}</div>
      <Link to="/posts/new" className="pure-button">
              Subscribe
            {/* need to connect to some kind of mailing subscription? wdyt? */}
            </Link>
            
      <div>{subscription}</div>
    </div>
  )
}

export default Footer
