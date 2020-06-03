
// migration file for posts table
// Used to create posts table in database

// These is used to create table in database
// These function runs on knex migarate:latest 
exports.up = function(knex) {
    return knex.schema.createTable("posts",function(table){
        table.increments("id");
        table.string("title");
        table.text("content");
        table.integer("created_by").unsigned().references("id").inTable("user").onDelete("CASCADE");
    })
  };
  
  // These is used to remove table in database
  // These function runs on knex migarate:rollback
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("posts");
  };
  