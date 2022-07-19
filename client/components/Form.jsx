import React from 'react'
import { useState } from 'react'
// import { emptyString } from 'react-select/dist/declarations/src/utils'


export default function Form() {
// TO DO
<div>contact = {(contact, null, '')}</div>

const [contact, setContact] = useState('')
// handle on change
const onChange = (evt) => {
setInputText(e.target.value)
setContact(contact)

}
// handle submit 


  return (
    <div id="layout" className="pure-g">
       <form className="pure-form pure-form-aligned" onSubmit={submitHandler}>
        <h2 className="post-title">Submit a LINK</h2>

      <fieldset>
        <div className="pure-control-group">
        <label htmlFor="paragraphs">Name or twitter handle</label>
        <textarea
            name="contact"
            type='text'
            value={contact}
            onChange={onChange}
          >
          </textarea>
        </div>

        {/* <div className="pure-control-group">
          <label htmlFor="paragraphs">Full link: http...</label>
          <textarea
            name="article"
            value={}
            type='text'
            onChange={}
          ></textarea>
        </div>

        <div className="pure-control-group">
          <label htmlFor="paragraphs">Drop your ethereum address (just in case) </label>
          <textarea
            name="address"
            value={}
            type='text'
            onChange={}
          ></textarea>
        </div>


        <div className="pure-control-group">
          <label htmlFor="paragraphs">Jurisdiction</label>
          <textarea
            name="article"
            value={}
            type='text'
            onChange={}
          ></textarea>
        </div>

        <div className="pure-control-group">
          <label htmlFor="paragraphs">Article title/summary?</label>
          <textarea
            name="article"
            value={}
            type='text'
            onChange={}
          ></textarea>
        </div> */}
{/* 
        <div className="pure-controls">
          <button onClick={} className="pure-button" type="submit" />
        </div> */}
      </fieldset>

  

    </form>
    </div>
  )
}


