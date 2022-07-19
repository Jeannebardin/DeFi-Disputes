import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const community = 'An open source community project'
  // const subscription = '{ subscribe button and capture email field goes here for joining mailing list }'

  return (
    <div className="footer">
      <div>{community}</div>
     
            
      {/* <div>{subscription}</div> */}
    </div>
  )
}


