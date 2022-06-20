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

function getCommentByPostId(postId, db = conn) {
  return db('comments')
    .select()
    .where('post_id', postId)
}

function getComment(id, db = conn) {
  return db('comments')
    .select()
    .where('id', id)
    .first()
}

function addComment(newComment, db = conn) {
  return db('comments')
    .insert(newComment)
}

function updateComment(id, updatedComment, db = conn) {
  return db('comments')
    .update({ comment: updatedComment })
    .where('id', id)
}

function deleteComment(id, db = conn) {
  return db('comments')
  .delete()
  .where('id', id)
}

module.exports = {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
  getCommentByPostId,
  getComment,
  addComment,
  updateComment,
  deleteComment
}
