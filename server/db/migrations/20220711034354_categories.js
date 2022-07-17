/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 exports.up = (knex) => {
  return knex.schema.createTable('categories', (table) => {
    table.increments().primary()
    table.string('category_name')
    table.string('type')
  })
}


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = (knex) => {
  return knex.schema.dropTable('categories')
};
