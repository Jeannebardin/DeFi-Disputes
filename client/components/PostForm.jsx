import React, { 
  useState,
  //  useEffect 
  } from 'react'
import { 
  // useParams,
   useNavigate, useOutletContext } from 'react-router-dom'
import { addGodaddyPost} from '../api'
import DropDownMenuForm from './DropDownMenuForm'

function PostForm(props) {
  const navigate = useNavigate()
 
  const [submitPost, submitNewPost] = useState({ user_name: '', title: '', eth_addy: '', jurisdiction: 1, snippet: '', date_created: Date(Date.now())}) 
  const [errorMessage, setErrorMessage] = useState('')



  const handleSelect = React.useCallback((value) => {
    console.log(value)
    submitNewPost({ ...submitPost, jurisdiction: value })
    console.log(submitPost)
  }, [])

  function onSubmit(e) {
    e.preventDefault()
    if (!completePostData(submitPost)) {return null}
    else {
      return addGodaddyPost(submitPost).then((submitPost) => {
      console.log(submitPost)
        navigate(`/`)
        return null
      })
    }
  }

  function completePostData(submitPost) {

    if (submitPost.user_name && submitPost.title && submitPost.eth_addy && submitPost.snippet) {
      return true
    } else {
      setErrorMessage('Please complete all five fields and make us happy!')
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
