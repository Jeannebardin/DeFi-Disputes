import React from 'react'
import PostSummary from './PostSummary'
import DropDown from './DropDownMenu'


function Posts(props) {
  return (
    <>
      <div className="posts">
        <h1 className="content-subhead">Filter by topic or jurisdiction</h1>
        <DropDown/>
        {props.posts?.map((post) => {
          return <PostSummary key={post.id} post={post} />
        })}
      </div>
    </>
  )
 
  
}

export default Posts
