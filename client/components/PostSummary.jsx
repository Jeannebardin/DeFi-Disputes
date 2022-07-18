import React from 'react'
import { Link } from 'react-router-dom'
import VoteButton from './VoteButton'



function PostSummary(props) {
  const { title, paragraphs, dateCreated, id, voteCount } = props.post
  return (
    <div className="post">
      <Link to={`/posts/${id}`}>
        <header className="post-header">
        <VoteButton voteCount={voteCount}/>
          <h2 className="post-title">
            {title}
          </h2>
          <p className="content-subhead">
            Date: {new Date(dateCreated).toDateString()}
          </p>
        </header>
      </Link>

     <p>{paragraphs}</p>
     
      {props.children}
    </div>
  )
}

export default PostSummary
