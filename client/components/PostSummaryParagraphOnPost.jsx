import React from 'react'
import { Link } from 'react-router-dom'
import VoteButton from './VoteButton'

function PostSummaryParagraphOnPost(props) {
  const { title, paragraphs, dateCreated, id, voteCount, categories } = props.post
  
  return (
    <div className="post">
      
        <header className="post-header">
          <div className="wrapper">
            <VoteButton className="wrapper-child-1" voteCount={voteCount} />
              <Link to={`/posts/${id}`}>
            <h2 className="post-title wrapper-child-2">{title}</h2>
              </Link>
          </div>

            <p className="content-subhead">
            Date: {new Date(dateCreated).toDateString()}
            {categories.map((category) => (
              <span className='postcategory' key={category.id}>
              {category.category_name}
              </span>
        ))}
            </p>


        </header>
      
      <p>{paragraphs}</p>


      {props.children}
    </div>
  )
}

export default PostSummaryParagraphOnPost
