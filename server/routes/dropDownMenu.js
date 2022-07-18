const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
return db.getAllCategories()
.then((categories) => {
  res.json(categories)
})

})

module.exports = router


