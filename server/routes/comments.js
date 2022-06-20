const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { comment } = req.body
  db.updateComment(id, comment)
    .then(() => {
      db.getComment(id)
        .then(comment => {
          comment.postId = comment.post_id
          comment.datePosted = comment.date_posted
          delete comment.post_id
          delete comment.date_posted
          res.json(comment)
        })
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.deleteComment(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

module.exports = router
