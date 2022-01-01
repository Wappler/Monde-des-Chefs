
exports.up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('userID');
      table.string('firstname');
      table.string('lastname');
      table.string('email');
      table.string('password');
      table.integer('group').defaultTo(1);
      table.integer('status').defaultTo(0);
      table.timestamp('created').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
};
