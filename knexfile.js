// Update with your config settings.

module.exports = {

    // For development on your local machine.
    development: {
      client: 'pg',
      useNullAsDefault: true,
      migrations: {
        directory: './src/migrations'     // Directory to migration files of the project.
      },
      seeds: {
        directory: './src/seeds'          // Directory to seeds files of the project.
      },
      connection: {
        host: "localhost",
        user: "postgres",
        password: "postgres",
        database: "objection-boilerplate"           // Create Database with same name on your local machine in postgres or change the name these with your database name.
      }
    },

    // For production of your project.
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL + `?ssl=true`,       // Change these with your own database connection URL.
      migrations: {
        directory: './src/migrations'
      },
      useNullAsDefault: true
    }
  };
  