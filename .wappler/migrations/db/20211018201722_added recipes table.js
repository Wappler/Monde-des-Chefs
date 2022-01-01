
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', function (table) {
      table.increments('recipeID');
      table.integer('categoryID').unsigned();
      table.foreign('categoryID').references('categoryID').inTable('categories').onDelete('CASCADE');
      table.integer('userID').unsigned();
      table.foreign('userID').references('userID').inTable('users').onDelete('CASCADE');
      table.string('title');
      table.string('description');
      table.string('ingredients');
      table.string('step');
      table.string('other');
      table.integer('status').defaultTo(0);
      table.timestamp('created').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('recipes')
};
