import React from 'react'
import { Outlet } from 'react-router-dom'

import PostForm from './PostForm'
import About from './About'
import Contact from './Contact'

const FormAboutContactLayout = (props) => {
  return (
    <div id="layout" className="pure-g">
      {/* <div className="sidebar pure-u-1 pure-u-md-1-4">
      </div> */}
      <div className="content pure-u-1 pure-u-md-3-4">
        <Outlet />
        {props.errorMessage && <h1>{props.errorMessage}</h1>}
      </div>
      <div className="content pure-u-1 pure-u-md-3-4">
      <PostForm/>
      <About />
      <Contact />
      </div>
    </div>
  )
}

export default FormAboutContactLayout
