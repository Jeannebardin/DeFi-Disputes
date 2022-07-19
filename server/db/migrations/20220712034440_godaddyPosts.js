/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 exports.up = (knex) => {
  return knex.schema.createTable('godaddyPosts', (table) => {
    table.increments().primary()
    table.string('title')
    table.string('snippet')
    table.date('date_created')
    table.integer('vote_count').defaultsTo(7)
    table.string('paragraphs')
    table.string('user_name')
    table.string('eth_addy')
    // Paragraphs in output.json is "full_text"
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = (knex) => {
  return knex.schema.dropTable('godaddyPosts')
}