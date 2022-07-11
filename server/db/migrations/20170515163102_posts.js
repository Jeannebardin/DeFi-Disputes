exports.up = (knex) => {
  return knex.schema.createTable('Posts', (table) => {
    table.increments().primary()
    table.string('title')
    table.date('date_created')
    table.integer('comment_count').defaultsTo(0)
    table.string('paragraphs')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Posts')
}

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */

//  exports.up = (knex) => {
//   return knex.schema.createTable('Posts', (table) => {
//     table.increments().primary()
//     table.string('title')
//     table.string('content')
//     table.date('date_created')
//     table.integer('vote_count').defaultsTo(0)
//     table.string('paragraphs')
//     // Paragraphs in output.json is "full_text"
//     table.string('categories')
//   })
// }

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */

// exports.down = (knex) => {
//   return knex.schema.dropTable('Posts')
// }


