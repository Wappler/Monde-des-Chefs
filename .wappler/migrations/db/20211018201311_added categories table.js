
exports.up = function(knex) {
  return knex.schema
    .createTable('categories', function (table) {
      table.increments('categoryID');
      table.string('name');
      table.string('description');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('categories')
};
