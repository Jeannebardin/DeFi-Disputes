/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => {
  return knex.schema.createTable('godaddyPosts_categories', (table) => {
    table.increments().primary()
    table.integer('godaddyPosts_id')
    table.integer('category_id')
});

 }
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = (knex) => {
  return knex.schema.dropTable('godaddyPosts_categories')
}