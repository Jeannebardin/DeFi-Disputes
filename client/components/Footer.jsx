import React from 'react'

function Footer() {
  const copyright = 'An open source community project'
  const author = '{ like REKT, but not sexy }'

  return (
    <div className="footer">
      <div>&copy; {copyright}</div>
      <div>{author}</div>
    </div>
  )
}

export default Footer
