const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { vote } = req.body
  db.updateVote(id, vote)
    .then(() => {
      db.getvote(id)
        .then(vote => {
          vote.postId = vote.post_id
          vote.datePosted = vote.date_posted
          delete vote.post_id
          delete vote.date_posted
          res.json(vote)
        })
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.deletevote(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

module.exports = router
