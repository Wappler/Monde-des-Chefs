
exports.up = function(knex) {
  return knex.schema
    .createTable('comments', function (table) {
      table.increments('commentID');
      table.integer('recipeID').unsigned();
      table.foreign('recipeID').references('recipeID').inTable('recipes').onDelete('CASCADE');
      table.integer('userID').unsigned();
      table.foreign('userID').references('userID').inTable('users').onDelete('CASCADE');
      table.string('message');
      table.timestamp('created').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('comments')
};
