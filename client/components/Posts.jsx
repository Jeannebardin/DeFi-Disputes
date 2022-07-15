import React from 'react'
import PostSummary from './PostSummary'
import DropDown from './DropDownMenu/DropDown'

function Posts(props) {
  return (
    <div className="posts">
      <h1 className="content-subhead">Posts</h1>
      <DropDown/>
      {props.posts?.map((post) => {
        return <PostSummary key={post.id} post={post} />
      })}
    </div>
  )
}

export default Posts
