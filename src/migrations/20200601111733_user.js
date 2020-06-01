
// migration file for user table
// Used to create user table in database

// These is used to create table in database
// These function runs on knex migarate:latest 
exports.up = function(knex) {
  return knex.schema.createTable("user",function(table){
      table.increments("id");
      table.string("fullName");
      table.date("dob");
  })
};

// These is used to remove table in database
// These function runs on knex migarate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user");
};
