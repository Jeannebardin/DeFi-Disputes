const config = require('./knexfile').development
const conn = require('knex')(config)

function getAllPosts(db = conn) {
  return db('godaddyPosts')
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

//the 3 functions for godaddyData are addPost, getCatIdByName and addToJoinTable
//the addpost is already above.. so not sure if need to rename or include it as well?

function addgodaddyPost(post, db = conn) {
  return db('godaddyPosts')
  .insert(post)
}

function getCatIdByName(name, db = conn){
  return db('categories')
  .select()
    .where('category_name', name)
    .first()
}

function addTogodaddyPosts_categories(postId, c_id, db = conn){
  return db('godaddyPosts_categories')
  .insert({category_id: c_id,godaddyPosts_id: postId})
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

function endConnection(db = conn) {
  return db.destroy()
}

function deletegodaddyPostsTable(db = conn){
return db('godaddyPosts')
.delete()
}

function deleteJoinsTable(db = conn){
  return db('godaddyPosts_categories')
  .delete()
  }

function deleteEverythingBeware(db = conn){
   return deleteJoinsTable()
   .then (()=> deletegodaddyPostsTable())
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
  deleteComment,
  addgodaddyPost,
  getCatIdByName,
  addTogodaddyPosts_categories,
  endConnection,
  deletegodaddyPostsTable,
  deleteJoinsTable,
  deleteEverythingBeware
}
