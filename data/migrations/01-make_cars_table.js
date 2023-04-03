exports.up = function (knex) {
  return knex.schema.createTable('cars', table => {
    table.increments()
    table.string('vin', 17).notNullable().unique()
    table.string('make').notNullable()
    table.string('model').notNullable()
    table.integer('mileage').unsigned().notNullable()
    table.string('title')
    table.string('transmission')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
