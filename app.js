// Express app dependencies.

const express = require("express");
const bodyParser  = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// Express Router Initialize
const router = express.Router();

// Knex and Objection dependencies.
// knex file for database setup. Information regarding databases are stored in this file.
const knexConfig = require("./knexfile");           
const Knex = require("knex");
const { Model } = require("objection");

// Initialize knex.
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
Model.knex(knex);

// Express middlewares { body-parser, cors, morgan... }
const app = express()
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use(router)
  .use(cors({
    credentials: true,
    origin: (origin, callback) => callback(null, true),
  }))
app.use(express.static(path.join(__dirname, 'public')))

// Import API Routes.
const userRoutes = require("./src/routes/index");
// Add routes as middleware.
app.use("/api",userRoutes);



// app.use('/', (req, res) => {
//   res.statusCode = 404; //send the appropriate status code
//   res.json({
//     status: false,
//     message: 'Sorry, API does not exist!',
//     data: {},
//     code: 404
//   });
// });
// Port for Server
const port = process.env.PORT || 8000;

// Express Server 
const server = app.listen(port, () => {
    console.log('Server listening at port %s', port);
  });
  