import React, { 
  useState,
  //  useEffect 
  } from 'react'
import { 
  // useParams,
   useNavigate, useOutletContext } from 'react-router-dom'
import { addPost, 
  // updatePost 
} from '../api'
import DropDownMenuForm from './DropDownMenuForm'

function PostForm(props) {
  const navigate = useNavigate()
  // // const { id } = useParams()
  // const { 
  //   loading, 
  //   fetchPosts } = useOutletContext()
  const [submitPost, submitNewPost] = useState({ user_name: '', title: '', eth_addy: '', jurisdiction: 1, snippet: '' })
  const [errorMessage, setErrorMessage] = useState('')

  // useEffect(() => {
  //   if (props.variant === 'edit' && !loading) {
  //     submitNewPost({ })
  //   }
  // }, [])

  const handleSelect = React.useCallback((value) => {
    console.log(value)
    submitNewPost({ ...submitPost, jurisdiction: value })
    console.log(submitPost)
  }, [])

  function onSubmit(e) {
    e.preventDefault()
    if (!completePostData(submitPost)) return null
    // if (props.variant === 'edit') {
    //   return updatePost({ ...submitPost, id }).then(() => {
    //     fetchPosts()
    //     navigate(`/posts/${submitPost.id}`)
    //     return null
    //   })
    // }
    if (props.variant === 'new') {
      return addPost(submitPost).then((submitPost) => {
        // fetchPosts()
        // make new route in App to take me to successful submission
        navigate(`/posts/${submitPost.id}`)
        return null
      })
    }
  }

  function completePostData(submitPost) {
    if (submitPost.contact && submitPost.article && submitPost.address) {
      return true
    } else {
      setErrorMessage('Please complete all three fields and make us happy!')
      // <h2 className="post-title">Edit Post</h2>
      return false
    }
  }

  function handleChange(e) {
    submitNewPost({ ...submitPost, [e.target.name]: e.target.value })
    console.log(submitPost)
  }

  if (props.loading) return <p>Loading...</p>

  return (
    <>
    <form className="pure-form pure-form-aligned" onSubmit={onSubmit}>
      {props.variant === 'edit' ? (
        <h2 className="post-title">Edit Post</h2>
      ) : (
        <h2 className="post-title">Submit a LINK</h2>
      )}


{/* Need to add <input type='text'/> for these within labels */}

      <fieldset>
        <div className="pure-control-group">
        <label htmlFor="paragraphs">Name or twitter handle</label>
        <textarea
            name="user_name"
            value={submitPost.user_name}
            type='text'
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="pure-control-group">
          <label htmlFor="paragraphs">Full link: http...</label>
          <textarea
            name="title"
            value={submitPost.title}
            type='text'
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="pure-control-group">
          <label htmlFor="paragraphs">Drop your ethereum address (just in case) </label>
          <textarea
            name="eth_addy"
            value={submitPost.eth_addy}
            type='text'
            onChange={handleChange}
          ></textarea>
        </div>


{/* For drop down menu the Global must go first */}
        <div className="pure-control-group">
          <label htmlFor="paragraphs">Juristiction?</label>
        
          <DropDownMenuForm onSelect={handleSelect} />
          {/* <textarea
            name="article"
            value={submitPost.article}
            type='text'
            onChange={handleChange}
          ></textarea> */}
        </div>

        <div className="pure-control-group">
          <label htmlFor="paragraphs">Article title/summary?</label>
          <textarea
            name="snippet"
            value={submitPost.snippet}
            type='text'
            onChange={handleChange}
          ></textarea>
        </div>

       
        {/* add Title, Juristiction drop down, Topic drop down
        or rather if a word is contained in the title or link auto categorise it. */}

    

        <div className="pure-controls">
          <input className="pure-button" type="submit" />
        </div>
      </fieldset>

      <p>{errorMessage && errorMessage}</p>

    </form>
   
    </>
  )
}

export default PostForm
