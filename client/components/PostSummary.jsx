import React from 'react'
import { Link } from 'react-router-dom'
import VoteButton from './VoteButton'



function PostSummary(props) {
  const { title, paragraphs, dateCreated, id, voteCount } = props.post
  return (
    <div className="post">
      <Link to={`/posts/${id}`}>
        <header className="post-header">
        {/* moved vote button from here */}
          <h2 className="post-title">{title}
          <VoteButton voteCount={voteCount}/></h2>
          <p className="post-meta">
            Date Created: {new Date(dateCreated).toDateString()}
          </p>
        </header>
      </Link>

     <p>{paragraphs}</p>
     
      {props.children}
    </div>
  )
}

export default PostSummary
