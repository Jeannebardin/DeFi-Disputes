const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllPosts()
    .then(posts => {
     console.log(posts)
      posts.forEach(post => {
        // post.paragraphs = JSON.parse(post.paragraphs)
        // post.categories = JSON.parse(post.categories)
        // post.content = JSON.parse(post.content)
        post.dateCreated = post.date_created
        post.voteCount = post.vote_count
        delete post.date_created
        delete post.vote_count
      })

      res.json(posts)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.post('/', (req, res) => {
  const { title, paragraphs } = req.body
  const newPost = {
    title,
    paragraphs: JSON.stringify(paragraphs),
    date_created: Date.now()
  }

  db.addPost(newPost)
    .then(idArr => {
      const id = idArr[0]
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
