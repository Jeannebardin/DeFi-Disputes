const config = require('./knexfile').development
const conn = require('knex')(config)

function getAllPosts(db = conn) {
  return db('posts')
    .select()
}

function getPostById(id, db = conn) {
  return db('posts')
    .select()
    .where('id', id)
    .first()
}

function addPost(post, db = conn) {
  return db('posts')
    .insert(post)
}

function updatePost(id, newDetails, db = conn) {
  return db('posts')
    .update(newDetails)
    .where('id', id)
}

function deletePost(id, db = conn) {
  return db('posts')
    .delete()
    .where('id', id)
}

module.exports = {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
}
