const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllPosts()
    .then(posts => {
    //  console.log(posts)
      const allThePosts = posts.map(post => {
   
        post.dateCreated = post.date_created
        post.voteCount = post.vote_count
        post.userName = post.user_name
        post.ethAddy = post.eth_addy
        delete post.date_created
        delete post.vote_count
        delete post.user_name
        delete post.eth_addy
        return db.getCategoriesbyPostID(post.id).then((categories)=>{
          post.categories = categories
          return(post)
        })
      })
      return Promise.all(allThePosts).then((posts)=>{
  res.json(posts)

})
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.post('/', (req, res) => {
  const { contact, article, address } = req.body

  db.addPost(contact, article, address)
    .then(idArr => {
      const id = idArr[0]
     res.json('submitted!', id)

    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.post('/addGoDaddy', (req, res) => {
  const { user_name, title, eth_addy, jurisdiction, snippet, date_created } = req.body
  const userSubmission = {

title: title,
snippet: snippet,
date_created: date_created,
paragraphs: '',
user_name: user_name,
eth_addy: eth_addy
  }
console.log(userSubmission)
  db.addgodaddyPost(userSubmission)
    .then(idArr => {
      const id = idArr[0]
    //  res.json(id)
    return db.addTogodaddyPosts_categories(id, jurisdiction)
    })
    .then(idArr => {
      const id = idArr[0]
     res.json(1)
    })
    .catch(err => res.status(500).json({ message: err.message }))
  })



router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { title, paragraphs } = req.body

  const newDetails = {
    title,
    paragraphs: JSON.stringify(paragraphs),
  }

  db.updatePost(id, newDetails)
    .then(() => {
      db.getPostById(id)
        .then(post => {
          post.paragraphs = JSON.parse(post.paragraphs)
          post.dateCreated = post.date_created
          post.commentCount = post.comment_count
          delete post.date_created
          delete post.comment_count

          res.json(post)
        })
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.deletePost(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.get('/:postId/comments', (req, res) => {
  const { postId } = req.params
  db.getCommentByPostId(postId)
    .then(comments => {
      comments.forEach(comment => {
        comment.postId = comment.post_id
        comment.datePosted = comment.date_posted
        delete comment.post_id
        delete comment.date_posted
      })
      res.json(comments)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.post('/:postId/comments', (req, res) => {
  const { postId } = req.params
  const { comment } = req.body

  const newComment = {
    post_id: postId,
    comment,
    date_posted: Date.now()
  }

  db.addComment(newComment)
    .then(idArr => {
      const id = idArr[0]
      db.getComment(id)
        .then((comment) => {
          comment.postId = comment.post_id
          comment.datePosted = comment.date_posted
          delete comment.post_id
          delete comment.date_posted

          res.json(comment)
        })
      })
    .catch(err => res.status(500).json({ message: err.message }))
})

 
module.exports = router
